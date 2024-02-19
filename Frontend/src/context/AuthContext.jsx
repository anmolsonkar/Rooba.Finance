import React, { createContext, useContext, useEffect, useReducer } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
};

const authReducer = (state, action) => {
    switch (action.type) {
        case "SET_AUTH":
            return {
                ...state,
                authUser: action.payload.authUser,
                user_id: action.payload.user_id
            };
        default:
            return state;
    }
};

export const AuthContextProvider = ({ children }) => {
    const [cookies, removeCookie] = useCookies(["jwt"]);

    const logout = () => {
        removeCookie("jwt", { path: '/' });
        navigate("/login");
    };

    const [state, dispatch] = useReducer(authReducer, {
        authUser: null,
        user_id: null
    });

    const { authUser, user_id } = state;

    const navigate = useNavigate();

    useEffect(() => {
        const verifyUser = async () => {
            try {
                if (cookies.jwt) {
                    const { data } = await axios.post(
                        "https://rooba.onrender.com",
                        {},
                        { withCredentials: true }
                    );
                    if (data.status) {
                        dispatch({
                            type: "SET_AUTH",
                            payload: {
                                authUser: cookies.jwt,
                                user_id: data.user_id
                            }
                        });
                    } else {
                        removeCookie("jwt");
                    }
                } else {
                    dispatch({
                        type: "SET_AUTH",
                        payload: {
                            authUser: null,
                            user_id: null
                        }
                    });
                }
            } catch (error) {
                console.error("Error verifying user:", error);
                removeCookie("jwt");
            }
        };

        verifyUser();
    }, [cookies.jwt, removeCookie, navigate]);

    return (
        <AuthContext.Provider value={{ authUser, user_id, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
