import { motion } from "framer-motion";
import {
  FaBookmark,
  FaExternalLinkAlt,
  FaTrash,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const savedJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechNova",
    location: "Remote",
    type: "Full Time",
    salary: "$1,500 - $2,500",
    savedDate: "Saved 2 days ago",
  },
  {
    id: 2,
    title: "React Developer",
    company: "Creative Labs",
    location: "Dhaka, Bangladesh",
    type: "Full Time",
    salary: "$1,200 - $2,000",
    savedDate: "Saved 5 days ago",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "SoftTech",
    location: "Remote",
    type: "Full Time",
    salary: "$2,000 - $3,500",
    savedDate: "Saved 1 week ago",
  },
];

const SavedJob = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-6xl">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Saved Jobs
          </h1>

          <p className="mt-2 text-sm sm:text-base text-slate-500">
            Keep track of jobs you're interested in and apply when you're ready.
          </p>
        </motion.div>

        {/* Jobs */}

        <div className="mt-8 space-y-5">

          {savedJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="
                relative
                rounded-2xl
                border border-slate-200
                bg-white
                p-5 sm:p-6
                shadow-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-md
              "
            >

              {/* Saved Badge - top right, always */}

              <div className="
                absolute
                right-5
                top-5
                sm:right-6
                sm:top-6
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-blue-50
                px-3
                py-2
                text-xs
                font-semibold
                text-blue-600
              ">
                <FaBookmark />
                <span className="hidden sm:inline">Saved</span>
              </div>

              {/* Main Content */}

              <div className="pr-16 sm:pr-24">

                {/* Company Logo */}

                <div className="flex items-start gap-4">

                  <div className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-100
                    text-lg
                    font-bold
                    text-blue-600
                  ">
                    {job.company.charAt(0)}
                  </div>

                  <div className="min-w-0">

                    <h2 className="
                      text-lg
                      sm:text-xl
                      font-semibold
                      text-slate-900
                    ">
                      {job.title}
                    </h2>

                    <p className="mt-1 text-sm font-medium text-blue-600">
                      {job.company}
                    </p>

                  </div>

                </div>

                {/* Job Info */}

                <div className="
                  mt-5
                  flex
                  flex-wrap
                  gap-x-5
                  gap-y-2
                  text-sm
                  text-slate-500
                ">

                  <span className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-slate-400" />
                    {job.location}
                  </span>

                  <span className="flex items-center gap-2">
                    <FaClock className="text-slate-400" />
                    {job.type}
                  </span>

                  <span className="font-medium text-slate-700">
                    {job.salary}
                  </span>

                </div>

                <p className="mt-4 text-xs text-slate-400">
                  {job.savedDate}
                </p>

              </div>

              {/* Bottom Action Row - View Job + Delete grouped together */}

              <div className="
                mt-6
                flex
                items-center
                gap-3
                border-t
                border-slate-100
                pt-5
              ">

                {/* View Job */}

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="
                    flex
                    flex-1
                    sm:flex-none
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-blue-600
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    shadow-sm
                    transition
                    hover:bg-blue-700
                  "
                >
                  View Job
                  <FaExternalLinkAlt className="text-xs" />
                </motion.button>

                {/* Delete */}

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  title="Remove from saved jobs"
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-slate-100
                    text-slate-400
                    transition
                    hover:bg-red-50
                    hover:text-red-500
                  "
                >
                  <FaTrash />
                </motion.button>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default SavedJob;