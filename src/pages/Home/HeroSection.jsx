import React from 'react';
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <div>

            <section
                className="
        relative
        py-32
        bg-[radial-gradient(circle_at_10%_20%,rgba(59,130,246,0.12)_0%,rgba(59,130,246,0)_45%),linear-gradient(135deg,#f0f9ff_0%,#f0fff4_45%,#ffffff_100%)]
      "
            >
                <div className="w-11/12 mx-auto">

                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                                #1 AI-Powered Job Platform
                            </span>

                            <h1 className="mt-6 text-5xl lg:text-7xl font-bold leading-tight text-slate-900">
                                Find Your Next
                                <span className="text-blue-600"> Career Move </span>
                                With Confidence
                            </h1>

                            <p className="mt-6 max-w-xl text-lg text-slate-600">
                                Discover thousands of opportunities from leading companies and
                                connect with employers looking for talent like you.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">
                                    Find Jobs
                                </button>

                                <button className="rounded-xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition hover:border-slate-400">
                                    Explore Companies
                                </button>
                            </div>

                            <div className="mt-10 flex gap-8">
                                <div>
                                    <h3 className="text-3xl font-bold">10K+</h3>
                                    <p className="text-slate-500">Open Jobs</p>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-bold">5K+</h3>
                                    <p className="text-slate-500">Companies</p>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-bold">50K+</h3>
                                    <p className="text-slate-500">Candidates</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Image */}
                        <div className="relative">
                            <img
                                src="/hero-image.png"
                                alt="Career opportunities"
                                className="w-full rounded-3xl"
                            />

                            <div className="absolute -left-4 bottom-10 rounded-2xl bg-white p-4 shadow-xl">
                                <h4 className="text-xl font-bold">250+</h4>
                                <p className="text-sm text-slate-500">New Jobs Today</p>
                            </div>

                            <div className="absolute -right-4 top-10 rounded-2xl bg-white p-4 shadow-xl">
                                <h4 className="text-xl font-bold">95%</h4>
                                <p className="text-sm text-slate-500">Hiring Success</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;