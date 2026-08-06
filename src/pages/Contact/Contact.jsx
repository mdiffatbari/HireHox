import { motion } from "framer-motion";
import {
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaPaperPlane,
} from "react-icons/fa";

import contactJpg from "../../assets/contact.jpg"

const Contact = () => {
    return (
        <section className="py-16 md:pb-36 pt-20 bg-slate-50 min-h-screen">
            <motion.div
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative overflow-hidden h-[300px] md:h-[420px] mb-24"
            >
                {/* Background Image */}

                <img
                    src={contactJpg}
                    alt="Contact HireHox"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-[#155dfc]/90"></div>

                {/* Content */}

                <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-6xl font-bold text-white"
                    >
                        Contact Us
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 }}
                        className="mt-6 max-w-2xl text-lg md:text-xl leading-8 text-blue-100"
                    >
                        We'd love to hear from you. Whether you have a question,
                        feedback, or need support, our team is always ready to help.
                    </motion.p>

                </div>
            </motion.div>
            <div className="w-10/12 max-w-7xl mx-auto">

                <div className="grid lg:grid-cols-5 gap-12 mt-16">

                    {/* Left */}

                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-2 space-y-6"
                    >

                        <div className="bg-white rounded-3xl p-6 border">
                            <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-xl">
                                <FaEnvelope />
                            </div>

                            <h3 className="mt-5 text-xl font-semibold">
                                Email Us
                            </h3>

                            <p className="mt-2 text-slate-500">
                                support@hirehox.com
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl p-6 border">
                            <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-xl">
                                <FaPhoneAlt />
                            </div>

                            <h3 className="mt-5 text-xl font-semibold">
                                Call Us
                            </h3>

                            <p className="mt-2 text-slate-500">
                                +880 1234-567890
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl p-6 border">
                            <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-xl">
                                <FaMapMarkerAlt />
                            </div>

                            <h3 className="mt-5 text-xl font-semibold">
                                Office
                            </h3>

                            <p className="mt-2 text-slate-500">
                                Dhaka, Bangladesh
                            </p>
                        </div>

                    </motion.div>

                    {/* Right */}

                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-3"
                    >
                        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border">

                            <h2 className="text-3xl font-bold text-slate-900">
                                Send a Message
                            </h2>

                            <p className="mt-3 text-slate-500">
                                Fill out the form below and we'll reply as soon as possible.
                            </p>

                            <form className="mt-8 space-y-6">

                                <div className="grid md:grid-cols-2 gap-6">

                                    <div>
                                        <label className="font-medium text-slate-700">
                                            Full Name
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="mt-2 w-full rounded-xl border border-slate-200 px-5 py-4 outline-none focus:border-blue-600"
                                        />
                                    </div>

                                    <div>
                                        <label className="font-medium text-slate-700">
                                            Email Address
                                        </label>

                                        <input
                                            type="email"
                                            placeholder="john@email.com"
                                            className="mt-2 w-full rounded-xl border border-slate-200 px-5 py-4 outline-none focus:border-blue-600"
                                        />
                                    </div>

                                </div>

                                <div>
                                    <label className="font-medium text-slate-700">
                                        Subject
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="How can we help?"
                                        className="mt-2 w-full rounded-xl border border-slate-200 px-5 py-4 outline-none focus:border-blue-600"
                                    />
                                </div>

                                <div>
                                    <label className="font-medium text-slate-700">
                                        Message
                                    </label>

                                    <textarea
                                        rows="6"
                                        placeholder="Write your message..."
                                        className="mt-2 w-full rounded-xl border border-slate-200 px-5 py-4 outline-none resize-none focus:border-blue-600"
                                    ></textarea>
                                </div>

                                <motion.button
                                    whileHover={{
                                        scale: 1.03,
                                        y: -2,
                                    }}
                                    whileTap={{
                                        scale: 0.98,
                                    }}
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3"
                                >
                                    Send Message
                                    <FaPaperPlane />
                                </motion.button>

                            </form>

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;