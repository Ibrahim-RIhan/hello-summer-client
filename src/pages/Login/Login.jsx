import { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import {BsFillEyeFill, BsFillEyeSlashFill} from "react-icons/bs"
import image from "../../assets/images/HelloSummerLogo.png";

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState("");

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <section className="bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                    <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                            Login to Hello Summer!
                        </h2>
                        <p className="mt-2 text-base text-gray-600">
                            Already have an account?{" "}
                            <Link
                                to="/register"
                                className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700"
                            >
                                Please register!
                            </Link>
                        </p>

                        <form className="mt-8">
                            <div className="space-y-5">
                                <div>
                                    <label className="text-base font-medium text-gray-900">
                                        Email address
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Enter email to get started"
                                            className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-base font-medium text-gray-900">
                                        Password
                                    </label>
                                    <div className="mt-2.5 relative">
                                        <input
                                            type={passwordVisible ? "text" : "password"}
                                            name="password"
                                            placeholder="Enter your password"
                                            value={password}
                                            onChange={handlePasswordChange}
                                            className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                        />
                                        <span
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                                            onClick={togglePasswordVisibility}
                                        >
                                            {passwordVisible ?
                                                <BsFillEyeSlashFill></BsFillEyeSlashFill>
                                         : <BsFillEyeFill></BsFillEyeFill>
                                            }
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <input
                                        type="submit"
                                        value="Login"
                                        className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                                    />
                                </div>
                            </div>
                        </form>

                        <div className="mt-3 space-y-3">
                            <button
                                type="button"
                                className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                            >
                                <FcGoogle></FcGoogle> Sign up with Google
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center px-4 py-10 sm:py-16 lg:py-24 sm:px-6 lg:px-8">
                    <div>
                        <img className="w-full mx-auto" src={image} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
