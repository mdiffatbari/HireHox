import { motion } from "framer-motion";
import { FaArrowRight, FaCalendarAlt, FaUser } from "react-icons/fa";
import backgroundJpg from "../../assets/background.jpg";

const blogs = [
  {
    id: 1,
    title: "10 Tips to Ace Your Next Job Interview",
    category: "Career Tips",
    author: "HireHox Team",
    date: "Aug 5, 2026",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800",
  },
  {
    id: 2,
    title: "How AI is Transforming Modern Recruitment",
    category: "Technology",
    author: "HireHox Team",
    date: "Aug 2, 2026",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",
  },
  {
    id: 3,
    title: "How to Build a Resume That Gets Noticed",
    category: "Resume",
    author: "HireHox Team",
    date: "Jul 30, 2026",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
  },
  {
    id: 4,
    title: "Top 7 Skills Employers Want in 2026",
    category: "Skills",
    author: "HireHox Team",
    date: "Jul 28, 2026",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
  },
  {
    id: 5,
    title: "Remote Work vs Office Work: Which is Better?",
    category: "Workplace",
    author: "HireHox Team",
    date: "Jul 25, 2026",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800",
  },
  {
    id: 6,
    title: "LinkedIn Profile Tips for Job Seekers",
    category: "LinkedIn",
    author: "HireHox Team",
    date: "Jul 20, 2026",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800",
  },
];

const Blogs = () => {
  return (
    <section className="pb-24 mt-20 bg-slate-50">

      {/* Banner */}

      <div className="relative h-[260px] md:h-[420px] overflow-hidden">
        <img
          src={backgroundJpg}
          alt="Blogs"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white"
          >
            Our Blogs
          </motion.h1>
        </div>
      </div>

      <div className="w-10/12 max-w-7xl mx-auto">

        {/* Search */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-xl mx-auto -mt-8 md:-mt-10 relative z-20"
        >
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full bg-white rounded-full border border-slate-200 px-8 py-5 shadow-lg outline-none focus:border-blue-600"
          />
        </motion.div>

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-20"
        >
          <h2 className="text-4xl font-bold text-slate-900">
            Latest Articles
          </h2>

          <p className="mt-5 text-lg text-slate-500 max-w-2xl mx-auto">
            Explore career advice, recruitment trends, interview tips,
            resume guides, and industry insights from HireHox.
          </p>
        </motion.div>

        {/* Blog Grid */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.7,
              }}
              whileHover={{
                y: -10,
              }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200"
            >
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-60 w-full object-cover transition duration-500 hover:scale-110"
                />
              </div>

              <div className="p-7">

                <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
                  {blog.category}
                </span>

                <h3 className="mt-5 text-2xl font-bold text-slate-900 leading-snug">
                  {blog.title}
                </h3>

                <div className="flex items-center gap-5 mt-5 text-slate-500 text-sm">
                  <div className="flex items-center gap-2">
                    <FaUser />
                    {blog.author}
                  </div>

                  <div className="flex items-center gap-2">
                    <FaCalendarAlt />
                    {blog.date}
                  </div>
                </div>

                <button className="mt-8 flex items-center gap-3 font-semibold text-blue-600 hover:text-blue-700">
                  Read More
                  <FaArrowRight />
                </button>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;