import { motion } from "framer-motion";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaBriefcase,
  FaClock,
  FaArrowRight,
  FaFilter,
} from "react-icons/fa";

import bannerJpg from "../../assets/background.jpg";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    location: "Remote",
    type: "Full Time",
    salary: "$70K - $95K",
    category: "Development",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "Airbnb",
    location: "New York, USA",
    type: "Full Time",
    salary: "$65K - $90K",
    category: "Design",
  },
  {
    id: 3,
    title: "Backend Developer",
    company: "Dropbox",
    location: "Remote",
    type: "Full Time",
    salary: "$80K - $110K",
    category: "Development",
  },
  {
    id: 4,
    title: "Product Manager",
    company: "HubSpot",
    location: "Boston, USA",
    type: "Full Time",
    salary: "$85K - $120K",
    category: "Management",
  },
  {
    id: 5,
    title: "Graphic Designer",
    company: "FedEx",
    location: "Memphis, USA",
    type: "Part Time",
    salary: "$45K - $65K",
    category: "Design",
  },
  {
    id: 6,
    title: "Software Engineer",
    company: "Walmart",
    location: "Remote",
    type: "Full Time",
    salary: "$75K - $105K",
    category: "Development",
  },
];

const FindJobs = () => {
  return (
    <section className="pb-24 mt-20 bg-slate-50">
      {/* =====================================================
          BANNER
      ====================================================== */}

      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden h-[300px] md:h-[420px] mb-16 md:mb-24"
      >
        {/* Background Image */}

        <img
          src={bannerJpg}
          alt="Find Jobs"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Content */}

        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white"
          >
            Find Jobs
          </motion.h1>
        </div>
      </motion.div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="w-11/12 max-w-7xl mx-auto">

        {/* Search Area */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl border border-slate-200 p-5 md:p-6 shadow-sm"
        >
          <div className="grid lg:grid-cols-12 gap-4">

            {/* Job Search */}

            <div className="lg:col-span-5 relative">
              <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />

              <input
                type="text"
                placeholder="Search job title or keyword"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-4 pl-12 pr-5 outline-none focus:border-blue-500 focus:bg-white transition"
              />
            </div>

            {/* Location */}

            <div className="lg:col-span-4 relative">
              <FaMapMarkerAlt className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />

              <input
                type="text"
                placeholder="Location"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-4 pl-12 pr-5 outline-none focus:border-blue-500 focus:bg-white transition"
              />
            </div>

            {/* Search Button */}

            <button className="lg:col-span-3 flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700">
              <FaSearch />
              Search Jobs
            </button>
          </div>
        </motion.div>

        {/* =====================================================
            JOB SECTION
        ====================================================== */}

        <div className="mt-14 grid lg:grid-cols-4 gap-10">

          {/* =================================================
              FILTER SIDEBAR
          ================================================== */}

          <motion.aside
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sticky top-24">

              <div className="flex items-center gap-3 mb-7">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                  <FaFilter />
                </div>

                <h2 className="text-xl font-bold text-slate-900">
                  Filters
                </h2>
              </div>

              {/* Job Type */}

              <div>
                <h3 className="font-semibold text-slate-800 mb-4">
                  Job Type
                </h3>

                <div className="space-y-3">
                  {["Full Time", "Part Time", "Remote", "Internship"].map(
                    (type) => (
                      <label
                        key={type}
                        className="flex items-center gap-3 text-slate-600 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          className="checkbox checkbox-primary checkbox-sm"
                        />

                        {type}
                      </label>
                    )
                  )}
                </div>
              </div>

              <div className="my-7 border-t border-slate-200"></div>

              {/* Category */}

              <div>
                <h3 className="font-semibold text-slate-800 mb-4">
                  Category
                </h3>

                <div className="space-y-3">
                  {[
                    "Development",
                    "Design",
                    "Marketing",
                    "Management",
                  ].map((category) => (
                    <label
                      key={category}
                      className="flex items-center gap-3 text-slate-600 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="checkbox checkbox-primary checkbox-sm"
                      />

                      {category}
                    </label>
                  ))}
                </div>
              </div>

              <div className="my-7 border-t border-slate-200"></div>

              {/* Experience */}

              <div>
                <h3 className="font-semibold text-slate-800 mb-4">
                  Experience Level
                </h3>

                <select className="select select-bordered w-full bg-white">
                  <option>Any Experience</option>
                  <option>Entry Level</option>
                  <option>Mid Level</option>
                  <option>Senior Level</option>
                </select>
              </div>

            </div>
          </motion.aside>

          {/* =================================================
              JOB LIST
          ================================================== */}

          <div className="lg:col-span-3">

            {/* Header */}

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                  Latest Jobs
                </h2>

                <p className="mt-1 text-slate-500">
                  Showing {jobs.length} available opportunities
                </p>
              </div>

              <select className="select select-bordered bg-white">
                <option>Newest First</option>
                <option>Oldest First</option>
                <option>Salary: High to Low</option>
                <option>Salary: Low to High</option>
              </select>

            </div>

            {/* Cards */}

            <div className="space-y-5">
              {jobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-3xl border border-slate-200 p-6 md:p-7 transition-shadow duration-300 hover:shadow-lg"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

                    {/* Job Info */}

                    <div className="flex gap-5">

                      {/* Company Logo */}

                      <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl font-bold shrink-0">
                        {job.company.charAt(0)}
                      </div>

                      <div>
                        <span className="text-sm font-medium text-blue-600">
                          {job.category}
                        </span>

                        <h3 className="mt-1 text-xl md:text-2xl font-bold text-slate-900">
                          {job.title}
                        </h3>

                        <p className="mt-1 font-medium text-slate-600">
                          {job.company}
                        </p>

                        <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-500">

                          <span className="flex items-center gap-2">
                            <FaMapMarkerAlt />
                            {job.location}
                          </span>

                          <span className="flex items-center gap-2">
                            <FaBriefcase />
                            {job.type}
                          </span>

                          <span className="flex items-center gap-2">
                            <FaClock />
                            {job.salary}
                          </span>

                        </div>
                      </div>

                    </div>

                    {/* Button */}

                    <button className="shrink-0 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
                      View Job
                      <FaArrowRight />
                    </button>

                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}

            <div className="flex justify-center mt-12">
              <div className="join">

                <button className="join-item btn">
                  «
                </button>

                <button className="join-item btn btn-active bg-blue-600 text-white border-blue-600">
                  1
                </button>

                <button className="join-item btn">
                  2
                </button>

                <button className="join-item btn">
                  3
                </button>

                <button className="join-item btn">
                  »
                </button>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FindJobs;