import { useState, useRef, useEffect } from "react";
import { Close, Menu } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { useAuthContext } from '../context/AuthContext';
import { BackgroundGradientAnimation } from "./background-gradient-animation";

const Header = () => {
    const [menu, setMenu] = useState(false);
    const menuRef = useRef(null);
    const location = useLocation();

    const { authUser, logout } = useAuthContext();

    const getmLinkClass = (path) => {
        const isActive = location.pathname === path || location.pathname.startsWith(path + "/");
        return `${isActive ? "text-[#4375FB]" : "text-[#bababa]"
            }`;
    };

    const handleSignOut = () => {
        logout();
        setMenu(false);
    };

    const handleClickOutside = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
            setMenu(false);
        }
    };
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menu]);

    return (
        <div className="w-full text-white items-center flex flex-col bg-[#121212]">

            <nav data-aos="fade" className="flex justify-between items-center lg:mt-10 md:mt-10 mt-5 pb-3 lg:border-b md:border-b border-b-[#4A494A] w-11/12 z-10 ">
                <div>
                    <img className="w-28 -ml-2" src="https://i.imgur.com/XrtBLYm.png" alt="Logo" />
                </div>

                <div className="space-x-14 hidden lg:flex md:flex items-center">
                    <Link className={`${getmLinkClass("/opportunities")}`} onClick={() => setMenu(false)} to="/opportunities">
                        Opportunities
                    </Link>

                    <Link
                        className={`${getmLinkClass("/works")}`}
                        onClick={() => setMenu(false)}
                        to="/works"
                    >
                        How it Works
                    </Link>

                    <Link
                        className={`${getmLinkClass("/about")}`}
                        onClick={() => setMenu(false)}
                        to="/about"
                    >
                        About Us
                    </Link>

                    {
                        authUser ? <>
                            <Link
                                className={`${getmLinkClass("/profile")}`}
                                onClick={() => setMenu(false)}
                                to="/profile"
                            >
                                Profile
                            </Link>
                            <Link onClick={logout} className="bg-gradient-to-b from-[#fff] to-[#BCBCBC] px-6 py-[6px] shadow-md text-black">
                                Sign out
                            </Link>
                        </> : <Link to="/login" className="bg-gradient-to-b from-[#fff] to-[#BCBCBC] px-6 py-[6px] shadow-md text-black">
                            Sign in
                        </Link>
                    }


                </div>
                <span className="text-white lg:hidden md:hidden" onClick={() => setMenu(true)}>
                    {menu ? <Close sx={{ fontSize: 30 }} /> : <Menu sx={{ fontSize: 30 }} />}
                </span>


            </nav>

            <div className="w-full flex justify-center">
                <BackgroundGradientAnimation />
                <div className="lg:mt-[17%] md:mt-[17%] mt-[45%]  text-center">
                    <p data-aos="fade" data-aos-delay="200" className="playfair-display text-[55px] lg:text-[60px] md:text-[60px]">Overcome Investment Barriers,</p>
                    <p data-aos="fade" data-aos-delay="300" className="lg:ml-[11rem] md:ml-[11rem] text-[55px] lg:text-[60px] md:text-[60px] playfair-display">Build <span className="playfair-display italic">Sustainable</span> Wealth</p>
                    <p data-aos="fade" data-aos-delay="400" className="text-lg lg:mt-2 md:mt-2 mt-10 p-3">Dive into alternative markets with us and set your<br />capital on the path of <span className="underline">
                        unparalleled growth.</span></p>
                </div>
            </div>

            <div
                ref={menuRef}
                className={`fixed text-white text-lg left-0 top-0 w-[70vw] lg:w-[22vw] z-10 h-full bg-[#121212] duration-200 transform shadow ${menu ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex items-center cursor-pointer border-b p-4 space-x-4 mt-1 pb-5">
                    <span className="text-lg text-[#bababa]">Rooba.Finance</span>
                </div>
                <div className="flex flex-col p-4 pt-6 space-y-4">
                    <Link className={`${getmLinkClass("/opportunities")}`} onClick={() => setMenu(false)} to="/opportunities">
                        Opportunities
                    </Link>

                    <Link
                        className={`${getmLinkClass("/works")}`}
                        onClick={() => setMenu(false)}
                        to="/works"
                    >
                        How it Works
                    </Link>

                    <Link
                        className={`${getmLinkClass("/about")}`}
                        onClick={() => setMenu(false)}
                        to="/about"
                    >
                        About Us
                    </Link>
                    {
                        authUser ? <>
                            <Link
                                className={`${getmLinkClass("/profile")}`}
                                onClick={() => setMenu(false)}
                                to="/profile"
                            >
                                Profile
                            </Link>

                            <Link className="text-[#bababa]" onClick={handleSignOut}>
                                Sign out
                            </Link>


                        </> : <Link
                            className="text-[#bababa]"
                            to="/login"
                        >
                            Sign in
                        </Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Header;