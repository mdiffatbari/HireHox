import { motion } from "framer-motion";
import {
    FaBrain,
    FaShieldAlt,
    FaBolt,
    FaArrowRight,
} from "react-icons/fa";
import chooseImg from "../../assets/choose3.jpg";

const features = [
    {
        icon: <FaBrain />,
        title: "AI-Powered Job Matching",
        description:
            "Our intelligent recommendation system helps connect candidates with the most relevant opportunities.",
    },
    {
        icon: <FaShieldAlt />,
        title: "Verified Employers",
        description:
            "Every company is carefully verified to ensure a safe and trustworthy hiring experience.",
    },
    {
        icon: <FaBolt />,
        title: "Fast & Easy Applications",
        description:
            "Apply to your dream job in just a few clicks with a smooth and modern application process.",
    },
];

// Reusable smooth easing curve
const smoothEase = [0.22, 1, 0.36, 1];

const Choose = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="w-10/12 mx-auto grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Content */}

                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1, ease: smoothEase }}
                >
                    <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-medium">
                        Why Choose HireHox
                    </span>

                    <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                        Smarter Hiring Starts With
                        <span className="text-blue-600"> HireHox</span>
                    </h2>

                    <p className="mt-6 text-lg text-slate-500 leading-8">
                        Whether you're searching for your next career opportunity or
                        looking for the perfect candidate, HireHox provides a faster,
                        smarter, and more reliable hiring experience.
                    </p>

                    <div className="mt-10 space-y-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 40 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{
                                    delay: index * 0.15,
                                    duration: 0.7,
                                    ease: smoothEase,
                                }}
                                whileHover={{
                                    x: 8,
                                    transition: { duration: 0.3, ease: "easeOut" },
                                }}
                                className="flex gap-5 p-5 rounded-2xl hover:bg-blue-50 transition-colors duration-300"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-2xl shrink-0">
                                    {feature.icon}
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-slate-800">
                                        {feature.title}
                                    </h3>

                                    <p className="mt-2 text-slate-500 leading-7">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="mt-10 btn bg-blue-600 hover:bg-blue-700 text-white border-0 rounded-xl py-3 px-6 flex items-center justify-center gap-2"
                    >
                        Find Jobs <FaArrowRight />
                    </motion.button>
                </motion.div>

                {/* Right Image */}

                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1, ease: smoothEase }}
                    className="relative"
                >
                    <img
                        src={chooseImg}
                        alt="Why Choose HireHox"
                        className="rounded-3xl shadow-2xl w-full object-cover"
                    />

                    {/* Floating Card */}

                    <motion.div
                        animate={{
                            y: [0, -12, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute -bottom-8 -left-8 md:-left-20 bg-white rounded-2xl shadow-xl px-6 py-5"
                    >
                        <h3 className="text-4xl font-bold text-blue-600">18K+</h3>
                        <p className="text-slate-500 mt-1">Jobs Available</p>
                    </motion.div>

                    <motion.div
                        animate={{
                            y: [0, 12, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute top-8 -right-8 md:-right-20 bg-blue-600 text-white rounded-2xl shadow-xl px-6 py-5"
                    >
                        <h3 className="text-3xl font-bold">7K+</h3>
                        <p className="text-blue-100 mt-1">Companies</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Choose;