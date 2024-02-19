import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { Visibility, VisibilityOff, West } from '@mui/icons-material';


function Login() {
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [disable, setDisable] = useState(true);

    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});



    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
        validateField(name, value);
    };

    const validateField = (fieldName, value) => {
        let error = "";

        switch (fieldName) {
            case "email":
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!value || !emailRegex.test(value)) {
                    error = "Invalid email address";
                }
                break;
            case "password":
                if (value.length < 8) {
                    error = "Password must be at least 8 characters long";
                }
                break;
            default:
                break;
        }

        setErrors({ ...errors, [fieldName]: error });
    };


    const validateForm = () => {
        const isValidEmail = form.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
        const isValidPassword = form.password && form.password.length >= 8;

        const isFormValid = isValidEmail && isValidPassword;

        setDisable(!isFormValid);

        return isFormValid;
    };

    useEffect(() => {
        validateForm();
    }, [form]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post('http://localhost:4000/user', form, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (res.data.errors) {
                setErrors(res.data.errors);
                return;
            }

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex h-screen flex-grow justify-center items-center bg-[#121212]">
            <Link data-aos="fade" to="/" className='fixed top-0 left-0 p-5 text-white text-sm'> <West /> <span className='ml-2'>Back to home</span></Link>
            <img className='absolute md:h-full lg:h-full' src="https://i.imgur.com/AmB1j1r.png" alt="Background Image" />
            <form data-aos="fade"
                className="flex flex-col pt-10 pb-10 p-5 bg-black z-10 space-y-5 rounded-md  bg-opacity-50 shadow hover:shadow-md duration-200 ease-in-out lg:w-[22vw]"
                onSubmit={handleSubmit}
            >
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className='outline-none p-1 border rounded-md pl-2'
                    placeholder="Email"
                    required
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}

                <div className='flex justify-between space-x-2 pr-2 border items-center rounded-md'>
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        className='outline-none p-1 pl-2 w-full rounded-md rounded-r-none'
                        value={form.password}
                        onChange={handleChange}
                        placeholder="Password"
                        required
                    />
                    <div
                        className='text-white cursor-pointer'
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                    </div>
                </div>
                {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}

                <div className="flex justify-between items-center pt-1 gap-3">
                    <Link className='text-white hover:underline pl-2' to="/signup">Don't have an account?</Link>
                    <button
                        type="submit"
                        className={`p-1 rounded-md text-white transition-all w-fit ${!disable ? "bg-indigo-600 cursor-pointer" : "bg-gray-600 cursor-not-allowed"}`}
                        disabled={disable}
                    >
                        {loading ? (
                            <p className="flex items-center">
                                <svg aria-hidden="true" className="w-5 h-5 animate-spin dark:text-indigo-500 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                <span className='pr-2 pl-2'>Login</span>
                            </p>
                        ) : (
                            <span className='pr-2 pl-2'>Login</span>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;
