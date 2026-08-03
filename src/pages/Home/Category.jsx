import { motion } from "framer-motion";
import {
  FaCode,
  FaPaintBrush,
  FaBullhorn,
  FaChartLine,
  FaDatabase,
  FaPenNib,
  FaArrowRight,
  FaLaptopCode,
} from "react-icons/fa";

const categories = [
  {
    title: "Web Development",
    jobs: "1,240 Open Jobs",
    icon: <FaCode />,
  },
  {
    title: "UI/UX Design",
    jobs: "845 Open Jobs",
    icon: <FaPaintBrush />,
  },
  {
    title: "Digital Marketing",
    jobs: "950 Open Jobs",
    icon: <FaBullhorn />,
  },
  {
    title: "Business",
    jobs: "615 Open Jobs",
    icon: <FaChartLine />,
  },
  {
    title: "Software Engineering",
    jobs: "1,580 Open Jobs",
    icon: <FaLaptopCode />,
  },
  {
    title: "Data Science",
    jobs: "520 Open Jobs",
    icon: <FaDatabase />,
  },
  {
    title: "Content Writing",
    jobs: "390 Open Jobs",
    icon: <FaPenNib />,
  },
];


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};


const cardVariants = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 16,
      mass: 0.9,
    },
  },
};

const Category = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="w-10/12 mx-auto">
       

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14"
        >
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Browse by Category
            </h2>

            <p className="mt-4 max-w-2xl text-slate-500 text-lg">
              Discover opportunities across the most in-demand industries and
              find the career that matches your skills.
            </p>
          </div>

          <button className="btn bg-blue-600 hover:bg-blue-700 text-white cursor-pointer rounded-xl px-4 py-2 border-0">
            Browse All
          </button>
        </motion.div>

       

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.15,
            margin: "0px 0px -120px 0px",
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.03,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                },
              }}
              className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-blue-500 transition-shadow cursor-pointer"
            >
              <div className="w-20 h-20 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 text-4xl mb-7">
                {category.icon}
              </div>

              <h3 className="text-2xl font-semibold text-slate-800">
                {category.title}
              </h3>

              <p className="mt-3 text-slate-500">
                {category.jobs}
              </p>
            </motion.div>
          ))}

          

          <motion.div
            variants={cardVariants}
            whileHover={{
              scale: 1.03,
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
            className="rounded-3xl bg-blue-600 text-white p-8 flex flex-col justify-center"
          >
            <h2 className="text-5xl font-bold">18K+</h2>

            <p className="mt-4 text-blue-100">
              Jobs are waiting for talented professionals.
            </p>

            <button className="mt-8 bg-white text-blue-600 rounded-xl px-5 py-3 font-semibold flex items-center gap-2 w-fit hover:bg-slate-100 transition">
              Explore
              <FaArrowRight />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Category;
