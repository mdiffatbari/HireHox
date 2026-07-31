import lImage from "../../assets/login-image.jpg";
import { motion } from "framer-motion";
import { Link, useNavigate} from "react-router";
import {
    FaGoogle,
    FaGithub,
    FaArrowRight,
} from "react-icons/fa";
import { AuthContext } from "@/contexts/AuthContext";
import { use } from "react";

const LogIn = () => {

    const navigate =  useNavigate();

    const {createUserWithGoogle, logInUser} = use(AuthContext);

    const handleLogInWithGoogle = () => {
        createUserWithGoogle()
        .then(result => {
            console.log(result);
            navigate("/")
        })
        .catch(error => {
            console.log(error)
        })
    }

    const createUserWithPassword = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        logInUser(email, password)
        .then(result => {
            console.log(result);
            navigate("/")
        })
        .catch(error => {
            console.log(error)
        })
        
    }

    return (
        <div className="flex items-center justify-center pt-20">
            <div className="w-full bg-gray-100 overflow-hidden grid lg:grid-cols-2">
                {/* Left Side */}
                <motion.div className="relative hidden lg:block"

                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}

                >

                    <img
                        src={lImage}
                        alt="Authentication"
                        className="w-full object-cover rounded-r-4xl"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-r-4xl"></div>

                    <div className="absolute bottom-10 left-10 text-white max-w-md">
                        <h2 className="text-4xl font-bold leading-tight mb-5">
                            Welcome Back to
                            <br />
                            HireHox.
                        </h2>

                        <p className="text-white/90 text-lg">
                            Log in to manage your applications, connect with recruiters,
                            and discover your next career opportunity.
                        </p>
                    </div>
                </motion.div>

                {/* Right Side */}
                <motion.div className="flex items-center justify-center px-6 py-14 sm:px-10"
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <div className="w-full max-w-md">
                        <div className="text-center mb-10">
                            <h1 className="text-4xl font-bold text-slate-900">
                                Welcome Back
                            </h1>

                            <p className="text-slate-500 mt-3">
                                Log in to continue your journey.
                            </p>
                        </div>

                        <form onSubmit={createUserWithPassword} className="space-y-5">
                            {/* Email */}
                            <div>
                                <label className="text-sm text-slate-600 mb-2 block">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#155dfc] focus:ring-4 focus:ring-blue-100 transition"
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="text-sm text-slate-600">
                                        Password
                                    </label>

                                    <Link
                                        to="/forgot-password"
                                        className="text-sm text-[#155dfc] hover:underline"
                                    >
                                        Forgot password?
                                    </Link>
                                </div>

                                <input
                                    type="password"
                                    name="password"
                                    placeholder="••••••••"
                                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#155dfc] focus:ring-4 focus:ring-blue-100 transition"
                                />
                            </div>

                            {/* Login Button */}
                            <button
                                type="submit"
                                className="w-full flex items-center justify-center cursor-pointer gap-2 rounded-xl bg-[#155dfc] py-3 font-semibold text-white hover:bg-blue-700 transition"
                            >
                                Log In
                                <FaArrowRight size={14} />
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="flex items-center gap-4 my-7">
                            <div className="flex-1 h-px bg-slate-200"></div>
                            <span className="text-sm text-slate-400">OR</span>
                            <div className="flex-1 h-px bg-slate-200"></div>
                        </div>

                        {/* Social Login */}
                        <div className="space-y-4">
                            <button onClick={handleLogInWithGoogle} className="w-full flex items-center justify-center cursor-pointer gap-3 border border-slate-300 rounded-xl py-3 hover:bg-slate-50 transition font-medium">
                                <FaGoogle className="text-red-500" />
                                Continue with Google
                            </button>

                            <button className="w-full flex items-center justify-center cursor-pointer gap-3 border border-slate-300 rounded-xl py-3 hover:bg-slate-50 transition font-medium">
                                <FaGithub />
                                Continue with GitHub
                            </button>
                        </div>

                        {/* Register */}
                        <p className="text-center text-slate-500 mt-8">
                            Don't have an account?
                            <Link
                                to="/register"
                                className="ml-2 font-semibold text-[#155dfc] hover:underline"
                            >
                                Register
                            </Link>
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default LogIn;