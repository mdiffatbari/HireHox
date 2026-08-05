import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import newsLetterImg from "../../assets/newsletter.png";

const NewsLatter = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="w-11/12 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative overflow-hidden rounded-[30px] md:rounded-[40px]"
        >
          {/* Image */}

          <img
            src={newsLetterImg}
            alt="Newsletter"
            className="w-full h-[650px] sm:h-[720px] lg:h-auto object-cover object-top"
          />

          {/* Smooth White Gradient */}

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom,rgba(255,255,255,0) 0%, rgba(255,255,255,0) 35%, rgba(255,255,255,.8) 48%, rgba(255,255,255,1) 58%, rgba(255,255,255,1) 70%, rgba(255,255,255,1) 84%, #fff 100%)",
            }}
          ></div>

          {/* Content */}

          <div className="absolute inset-x-0 bottom-8 md:bottom-14 flex flex-col items-center px-5 md:px-10">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2,
                duration: 0.7,
              }}
              className="text-center max-w-3xl"
            >
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                Subscribe to Our Newsletter
              </h2>

              <p className="mt-4 text-sm sm:text-base md:text-lg leading-7 md:leading-8 text-slate-600">
                Stay updated with the latest job opportunities, interview
                tips, career advice and hiring news delivered directly to
                your inbox.
              </p>
            </motion.div>

            {/* Form */}

            <motion.form
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.35,
                duration: 0.7,
              }}
              className="w-full max-w-3xl mt-8"
            >
              <div className="bg-white rounded-3xl md:rounded-full shadow-2xl border border-slate-200 p-2">

                <div className="flex flex-col md:flex-row gap-2">

                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 rounded-2xl md:rounded-full px-6 py-4 outline-none text-slate-700 placeholder:text-slate-400"
                  />

                  <motion.button
                    whileHover={{
                      scale: 1.03,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-2xl md:rounded-full px-8 py-4 font-semibold flex items-center justify-center gap-2"
                  >
                    Subscribe Now
                    <FaArrowRight />
                  </motion.button>

                </div>

              </div>
            </motion.form>

            {/* Footer */}

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5,
              }}
              className="mt-5 text-center text-xs sm:text-sm text-slate-500"
            >
              We respect your privacy. Unsubscribe anytime.
            </motion.p>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsLatter;