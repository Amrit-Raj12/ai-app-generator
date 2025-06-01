'use client'

import { useTheme } from "@/components/contexts/ThemeContext";
import InputBox from "@/components/InputBox";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Login = () => {

    const { theme } = useTheme()
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        setIsDark(theme === 'dark')
    }, [theme])



    return (
        <section className={`${isDark ? 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900'
            : 'bg-gradient-to-br from-blue-50 via-white to-indigo-50'} py-1 lg:py-[120px]`}>
            <div className="container mx-auto mt-[10px] md:mt-0">
                <div className="flex flex-wrap">
                    <div className="w-full px-4">
                        <div className={` ${isDark ? "bg-slate-800 border border-slate-700/50" : "bg-white bg-slate-100 border-slate-200/50 text-gray-800"}  shadow-2xl relative mx-auto max-w-[525px] overflow-hidden rounded-tl-4xl rounded-br-4xl px-10 py-16 text-center sm:px-12 md:px-[60px]`}>
                            <div className="mb-10 text-left md:mb-5">
                                <Link
                                    href="/#"
                                    className="inline-block max-w-[160px]"
                                >
                                    <div className='flex w-[50%] md:w-[20%]'>
                                        <Link href="/" className={`text-2xl font-bold cursor-pointer transition-colors ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
                                            Logo
                                        </Link>
                                    </div>
                                </Link>
                            </div>
                            <p className="text-left mb-10 md:mb-5 text-sm">
                                New to (app name)? <Link href="/signup" className={`${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} underline`} > create an account </Link>
                            </p>
                            <form>
                                <InputBox type="email" name="email" placeholder="Email" isDark={isDark} />
                                <InputBox
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    isDark={isDark}
                                />

                                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            className="form-checkbox h-4 w-4 text-indigo-600"
                                        />
                                        <span>Remember me</span>
                                    </label>
                                    <Link
                                        href="/#"
                                        className="mb-2 inline-block text-base hover:text-primary hover:underline hover:text-white"
                                    >
                                        Forget Password?
                                    </Link>
                                </div>
                                <div className="mb-10">
                                    <input
                                        type="submit"
                                        value="Sign In"
                                        className={`${isDark ? '' : ''} text-white w-full cursor-pointer rounded-md border-slate-400/50 px-5 py-3 text-base font-medium transition bg-[#1C388D]`}
                                    />
                                </div>
                            </form>
                            <p className="text-center text-base">or</p>
                            <p className="mb-6 text-base">
                                Connect With
                            </p>
                            <ul className="-mx-2 mb-12 flex justify-between">

                                <li className="w-full px-2">
                                    <Link
                                        href="https://github.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-11 items-center justify-center rounded-md bg-black hover:bg-opacity-90"
                                    >
                                        <svg
                                            width="22"
                                            height="22"
                                            viewBox="0 0 24 24"
                                            fill="white"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M12 0C5.372 0 0 5.372 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.256c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.082-.729.082-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.654 1.653.243 2.874.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.625-5.475 5.921.43.371.823 1.103.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.796 24 17.299 24 12c0-6.628-5.372-12-12-12z"
                                            />
                                        </svg>
                                    </Link>
                                </li>

                                <li className="w-full px-2">
                                    <Link
                                        href="/#"
                                        className="flex h-11 items-center justify-center rounded-md bg-[#D64937] hover:bg-opacity-90"
                                    >
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 18 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M17.8477 8.17132H9.29628V10.643H15.4342C15.1065 14.0743 12.2461 15.5574 9.47506 15.5574C5.95916 15.5574 2.8306 12.8821 2.8306 9.01461C2.8306 5.29251 5.81018 2.47185 9.47506 2.47185C12.2759 2.47185 13.9742 4.24567 13.9742 4.24567L15.7024 2.47185C15.7024 2.47185 13.3783 0.000145544 9.35587 0.000145544C4.05223 -0.0289334 0 4.30383 0 8.98553C0 13.5218 3.81386 18 9.44526 18C14.4212 18 17.9967 14.7141 17.9967 9.79974C18.0264 8.78198 17.8477 8.17132 17.8477 8.17132Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </Link>
                                </li>
                            </ul>


                            <p className={`${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
                                <Link href="/terms" className="pr-0.5">Terms & conditions | </Link>
                                <Link
                                    href="/privacy"
                                >
                                    Privacy Policy
                                </Link>
                            </p>

                            <div>
                                <span className="absolute right-1 top-1">
                                    <svg
                                        width="40"
                                        height="40"
                                        viewBox="0 0 40 40"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle
                                            cx="1.39737"
                                            cy="38.6026"
                                            r="1.39737"
                                            transform="rotate(-90 1.39737 38.6026)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="1.39737"
                                            cy="1.99122"
                                            r="1.39737"
                                            transform="rotate(-90 1.39737 1.99122)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="13.6943"
                                            cy="38.6026"
                                            r="1.39737"
                                            transform="rotate(-90 13.6943 38.6026)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="13.6943"
                                            cy="1.99122"
                                            r="1.39737"
                                            transform="rotate(-90 13.6943 1.99122)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="25.9911"
                                            cy="38.6026"
                                            r="1.39737"
                                            transform="rotate(-90 25.9911 38.6026)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="25.9911"
                                            cy="1.99122"
                                            r="1.39737"
                                            transform="rotate(-90 25.9911 1.99122)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="38.288"
                                            cy="38.6026"
                                            r="1.39737"
                                            transform="rotate(-90 38.288 38.6026)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="38.288"
                                            cy="1.99122"
                                            r="1.39737"
                                            transform="rotate(-90 38.288 1.99122)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="1.39737"
                                            cy="26.3057"
                                            r="1.39737"
                                            transform="rotate(-90 1.39737 26.3057)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="13.6943"
                                            cy="26.3057"
                                            r="1.39737"
                                            transform="rotate(-90 13.6943 26.3057)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="25.9911"
                                            cy="26.3057"
                                            r="1.39737"
                                            transform="rotate(-90 25.9911 26.3057)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="38.288"
                                            cy="26.3057"
                                            r="1.39737"
                                            transform="rotate(-90 38.288 26.3057)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="1.39737"
                                            cy="14.0086"
                                            r="1.39737"
                                            transform="rotate(-90 1.39737 14.0086)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="13.6943"
                                            cy="14.0086"
                                            r="1.39737"
                                            transform="rotate(-90 13.6943 14.0086)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="25.9911"
                                            cy="14.0086"
                                            r="1.39737"
                                            transform="rotate(-90 25.9911 14.0086)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="38.288"
                                            cy="14.0086"
                                            r="1.39737"
                                            transform="rotate(-90 38.288 14.0086)"
                                            fill="#3056D3"
                                        />
                                    </svg>
                                </span>
                                <span className="absolute bottom-1 left-1">
                                    <svg
                                        width="29"
                                        height="40"
                                        viewBox="0 0 29 40"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle
                                            cx="2.288"
                                            cy="25.9912"
                                            r="1.39737"
                                            transform="rotate(-90 2.288 25.9912)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="14.5849"
                                            cy="25.9911"
                                            r="1.39737"
                                            transform="rotate(-90 14.5849 25.9911)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="26.7216"
                                            cy="25.9911"
                                            r="1.39737"
                                            transform="rotate(-90 26.7216 25.9911)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="2.288"
                                            cy="13.6944"
                                            r="1.39737"
                                            transform="rotate(-90 2.288 13.6944)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="14.5849"
                                            cy="13.6943"
                                            r="1.39737"
                                            transform="rotate(-90 14.5849 13.6943)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="26.7216"
                                            cy="13.6943"
                                            r="1.39737"
                                            transform="rotate(-90 26.7216 13.6943)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="2.288"
                                            cy="38.0087"
                                            r="1.39737"
                                            transform="rotate(-90 2.288 38.0087)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="2.288"
                                            cy="1.39739"
                                            r="1.39737"
                                            transform="rotate(-90 2.288 1.39739)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="14.5849"
                                            cy="38.0089"
                                            r="1.39737"
                                            transform="rotate(-90 14.5849 38.0089)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="26.7216"
                                            cy="38.0089"
                                            r="1.39737"
                                            transform="rotate(-90 26.7216 38.0089)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="14.5849"
                                            cy="1.39761"
                                            r="1.39737"
                                            transform="rotate(-90 14.5849 1.39761)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="26.7216"
                                            cy="1.39761"
                                            r="1.39737"
                                            transform="rotate(-90 26.7216 1.39761)"
                                            fill="#3056D3"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Login;
