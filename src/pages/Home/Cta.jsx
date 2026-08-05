import { motion } from "framer-motion";
import { FaArrowRight, FaBriefcase } from "react-icons/fa";
import ctaImg from "../../assets/cta.jpg";

const Cta = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="w-10/12  mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative overflow-hidden rounded-[32px] md:rounded-[40px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${ctaImg})`,
          }}
        >
          {/* Gradient Overlay */}

          <div
            className="absolute inset-0"
            style={{
              background:
                "rgba(21, 93, 252, 0.78)",
            }}
          ></div>

          {/* Decorative Blur */}

          <div className="absolute -top-32 -right-32 h-80 rounded-full bg-white/10 blur-3xl"></div>

          <div className="absolute -bottom-32 -left-32 h-72  rounded-full bg-white/10 blur-3xl"></div>

          {/* Content */}

          <div className="relative z-10 px-6 py-16 sm:px-10 md:px-16 md:py-20 lg:px-20 text-center flex flex-col items-center">

            {/* Badge */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-5 py-2 text-sm font-medium text-white"
            >
              <FaBriefcase />
              Your Dream Career Starts Here
            </motion.div>

            {/* Heading */}

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="mt-8 max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white"
            >
              Ready to Find Your
              <span className="text-white"> Perfect Job?</span>
            </motion.h2>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 }}
              className="mt-6 max-w-2xl text-base md:text-lg leading-8 text-blue-100"
            >
              Join thousands of professionals discovering exciting career
              opportunities and connect with employers looking for top talent.
            </motion.p>

            {/* Buttons */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -4,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 shadow-xl"
              >
                Find Jobs
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -4,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md hover:bg-white/20"
              >
                Post a Job
                <FaArrowRight />
              </motion.button>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;