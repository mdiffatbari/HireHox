// import React from "react";
import rImage from "../../assets/auth-image.jpg"
import {
  FaGoogle,
  FaGithub,
  FaArrowRight,
} from "react-icons/fa";

const Register = () => {
  return (
    <div className="flex items-center justify-center pt-20">
      <div className="w-full bg-gray-100 overflow-hidden grid lg:grid-cols-2">
        {/* Left Side */}
        <div className="relative hidden  lg:block">
          <img
            src={rImage}
            alt="Team"
            className="w-full  object-cover rounded-r-4xl"
          />

          {/* Overlay */}
          <div className="absolute inset-0 from-black/80 via-black/20 to-black/20"></div>

          <div className="absolute bottom-10 left-10 text-white max-w-md">
            <h2 className="text-4xl font-bold leading-tight mb-5">
              Connect Talent
              <br />
              With Opportunity.
            </h2>

            <p className="text-white/80 text-lg">
              Whether you're hiring or job hunting, HireHox makes finding the perfect match faster and easier.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center px-6 py-14 sm:px-10">
          <div className="w-full max-w-md">
            <div className="text-center mb-10">
              <h1 className="text-4xl font-bold text-slate-900">
                Create Account
              </h1>

              <p className="text-slate-500 mt-3">
                Join us and start your journey today.
              </p>
            </div>

            <form className="space-y-5">
              {/* Name */}
              <div>
                <label className="text-sm text-slate-600 mb-2 block">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#155dfc] focus:ring-4 focus:ring-blue-100 transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm text-slate-600 mb-2 block">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#155dfc] focus:ring-4 focus:ring-blue-100 transition"
                />
              </div>

              {/* Password */}
              <div>
                <label className="text-sm text-slate-600 mb-2 block">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#155dfc] focus:ring-4 focus:ring-blue-100 transition"
                />
              </div>

              {/* Register Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#155dfc] py-3 font-semibold text-white hover:bg-blue-700 transition"
              >
                Create Account
                <FaArrowRight size={14} />
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-7">
              <div className="flex-1 h-px bg-slate-200"></div>
              <span className="text-sm text-slate-400">OR</span>
              <div className="flex-1 h-px bg-slate-200"></div>
            </div>

            {/* Social Buttons */}
            <div className="space-y-4">
              <button className="w-full flex items-center justify-center gap-3 border border-slate-300 rounded-xl py-3 hover:bg-slate-50 transition font-medium">
                <FaGoogle className="text-red-500" />
                Continue with Google
              </button>

              <button className="w-full flex items-center justify-center gap-3 border border-slate-300 rounded-xl py-3 hover:bg-slate-50 transition font-medium">
                <FaGithub />
                Continue with GitHub
              </button>
            </div>

            {/* Login */}
            <p className="text-center text-slate-500 mt-8">
              Already have an account?
              <a
                href="/login"
                className="ml-2 font-semibold text-[#155dfc] hover:underline"
              >
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;