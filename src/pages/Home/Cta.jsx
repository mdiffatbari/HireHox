import { motion } from "framer-motion";
import { FaArrowRight, FaBriefcase } from "react-icons/fa";

const Cta = () => {
  return (
    <section className="py-24">
      <div className="w-10/12 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-8 py-16 md:px-16 md:py-20"
        >
          {/* Background Decorations */}

          <div className="absolute -top-28 -right-28 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

          <div className="absolute -bottom-24 -left-24 h-60 w-60 rounded-full bg-white/10 blur-3xl"></div>

          {/* Content */}

          <div className="relative z-10 flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-sm font-medium text-white backdrop-blur">
              <FaBriefcase />
              Your Dream Career Starts Here
            </span>

            <h2 className="mt-8 max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
              Ready to Find Your
              <span className="text-blue-100"> Perfect Job?</span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              Join thousands of professionals discovering exciting career
              opportunities and connect with companies looking for top talent.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                transition={{ duration: 0.2 }}
                className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 shadow-lg"
              >
                Find Jobs
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur hover:bg-white/20"
              >
                Post a Job
                <FaArrowRight />
              </motion.button>
            </div>

            {/* Bottom Stats */}

            <div className="mt-14 grid grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-3xl font-bold text-white">18K+</h3>
                <p className="mt-1 text-blue-100">Open Jobs</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">7K+</h3>
                <p className="mt-1 text-blue-100">Companies</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">50K+</h3>
                <p className="mt-1 text-blue-100">Candidates</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;