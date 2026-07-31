// import React from 'react';
import { motion } from "framer-motion";
import heroBg from "../../assets/hero.json"
import heroBg2 from "../../assets/hero2.json"
import Lottie from "lottie-react";

const HeroSection = () => {
    console.log(heroBg);
    return (
        <div>

            <section
                className="relative py-32 md:py-14 bg-[radial-gradient(circle_at_10%_20%,rgba(59,130,246,0.12)_0%,rgba(59,130,246,0)_45%),linear-gradient(135deg,#f0f9ff_0%,#f0fff4_45%,#ffffff_100%)]
      "
            >
                <div className="w-11/12 mx-auto">

                    <div className="grid lg:grid-cols-2 gap-3 items-center">

                        {/* =======================Left Texts================================= */}
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <span className="inline-flex items-center rounded-full bg-blue-100 px-2 py-2 text-sm font-medium text-blue-700">
                                AI-Powered Job Platform
                            </span>

                            <h1 className="mt-6 text-5xl lg:text-8xl font-bold leading-tight text-slate-900">
                                Find Your Next
                                
                                <span className="text-blue-600"> Career Move </span>
                                
                                With HireHox
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

                        {/* =======================Right Image================================== */}


                        <div className="">
                            <Lottie.default animationData={heroBg2} />
                        </div>


                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;