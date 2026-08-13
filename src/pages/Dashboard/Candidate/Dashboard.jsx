import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaBookmark,
  FaFileAlt,
  FaUserCheck,
  FaArrowRight,
  FaClock,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";

const stats = [
  {
    title: "Applied Jobs",
    value: "24",
    icon: <FaFileAlt />,
    description: "+4 this month",
  },
  {
    title: "Saved Jobs",
    value: "12",
    icon: <FaBookmark />,
    description: "3 new matches",
  },
  {
    title: "Interviews",
    value: "5",
    icon: <FaUserCheck />,
    description: "2 upcoming",
  },
  {
    title: "Applications",
    value: "68%",
    icon: <FaBriefcase />,
    description: "Profile strength",
  },
];

const recentApplications = [
  {
    company: "Google",
    position: "Frontend Developer",
    location: "Remote",
    status: "Interview",
    date: "Aug 10, 2026",
  },
  {
    company: "Airbnb",
    position: "React Developer",
    location: "New York, USA",
    status: "Under Review",
    date: "Aug 08, 2026",
  },
  {
    company: "Microsoft",
    position: "Software Engineer",
    location: "Remote",
    status: "Applied",
    date: "Aug 05, 2026",
  },
];

const recommendedJobs = [
  {
    company: "Dropbox",
    position: "Frontend Engineer",
    location: "Remote",
    type: "Full Time",
    salary: "$75K - $105K",
  },
  {
    company: "HubSpot",
    position: "React Developer",
    location: "Boston, USA",
    type: "Full Time",
    salary: "$80K - $110K",
  },
  {
    company: "Walmart",
    position: "UI Developer",
    location: "Remote",
    type: "Full Time",
    salary: "$70K - $95K",
  },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="mb-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-blue-600">
            Candidate Dashboard
          </p>

          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
            Welcome back, Iffat 👋
          </h1>

          <p className="mt-2 text-slate-500">
            Here's what's happening with your job search today.
          </p>
        </motion.div>
      </div>

      {/* =====================================================
          PROFILE COMPLETION
      ====================================================== */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-8 overflow-hidden rounded-3xl bg-blue-600 p-6 md:p-8 text-white"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

          <div>
            <p className="text-blue-100 text-sm font-medium">
              Complete your profile
            </p>

            <h2 className="mt-2 text-2xl md:text-3xl font-bold">
              You're 68% ready to get hired
            </h2>

            <p className="mt-2 max-w-xl text-blue-100">
              Add your skills, experience and resume to improve your chances
              of getting noticed by employers.
            </p>
          </div>

          <div className="shrink-0">

            <div className="relative w-24 h-24 rounded-full border-8 border-blue-400 flex items-center justify-center">

              <div className="absolute inset-0 rounded-full border-8 border-white border-l-transparent border-b-transparent -rotate-45"></div>

              <span className="text-xl font-bold">
                68%
              </span>

            </div>

          </div>

          <button className="shrink-0 flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-50">
            Complete Profile
            <FaArrowRight />
          </button>

        </div>
      </motion.div>

      {/* =====================================================
          STATS
      ====================================================== */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            className="rounded-2xl bg-white border border-slate-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >

            <div className="flex items-center justify-between">

              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-lg">
                {stat.icon}
              </div>

              <span className="text-3xl font-bold text-slate-900">
                {stat.value}
              </span>

            </div>

            <h3 className="mt-5 font-semibold text-slate-800">
              {stat.title}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              {stat.description}
            </p>

          </motion.div>
        ))}

      </div>

      {/* =====================================================
          MAIN GRID
      ====================================================== */}

      <div className="grid xl:grid-cols-5 gap-8">

        {/* =================================================
            RECENT APPLICATIONS
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="xl:col-span-3 bg-white rounded-3xl border border-slate-200 overflow-hidden"
        >

          <div className="flex items-center justify-between p-6 border-b border-slate-100">

            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Recent Applications
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Track your latest job applications
              </p>
            </div>

            <button className="hidden sm:flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700">
              View All
              <FaArrowRight />
            </button>

          </div>

          <div className="divide-y divide-slate-100">

            {recentApplications.map((application) => (
              <div
                key={application.position}
                className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-5 transition hover:bg-slate-50"
              >

                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                    {application.company.charAt(0)}
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {application.position}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {application.company}
                    </p>

                    <div className="mt-2 flex flex-wrap gap-3 text-xs text-slate-400">

                      <span className="flex items-center gap-1">
                        <FaMapMarkerAlt />
                        {application.location}
                      </span>

                      <span className="flex items-center gap-1">
                        <FaClock />
                        {application.date}
                      </span>

                    </div>
                  </div>

                </div>

                <div>

                  <span
                    className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ${
                      application.status === "Interview"
                        ? "bg-green-100 text-green-700"
                        : application.status === "Under Review"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {application.status === "Interview" && (
                      <FaCheckCircle />
                    )}

                    {application.status}
                  </span>

                </div>

              </div>
            ))}

          </div>

          <div className="p-5 border-t border-slate-100 sm:hidden">
            <button className="flex items-center gap-2 text-sm font-semibold text-blue-600">
              View All Applications
              <FaArrowRight />
            </button>
          </div>

        </motion.div>

        {/* =================================================
            PROFILE CARD
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="xl:col-span-2 rounded-3xl bg-white border border-slate-200 p-6"
        >

          <div className="flex items-center justify-between">

            <h2 className="text-xl font-bold text-slate-900">
              My Profile
            </h2>

            <button className="text-sm font-semibold text-blue-600">
              Edit
            </button>

          </div>

          <div className="flex items-center gap-5 mt-7">

            <div className="w-20 h-20 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl font-bold">
              IB
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Iffat Bari
              </h3>

              <p className="mt-1 text-slate-500">
                Frontend / MERN Developer
              </p>

              <p className="mt-1 text-sm text-slate-400">
                Bangladesh
              </p>
            </div>

          </div>

          <div className="mt-8">

            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium text-slate-700">
                Profile Completion
              </span>

              <span className="font-semibold text-blue-600">
                68%
              </span>
            </div>

            <div className="h-2 rounded-full bg-slate-100 overflow-hidden">

              <div
                className="h-full bg-blue-600 rounded-full"
                style={{ width: "68%" }}
              ></div>

            </div>

          </div>

          <div className="mt-7 space-y-3">

            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">
                Resume
              </span>

              <span className="text-sm font-medium text-green-600 flex items-center gap-1">
                <FaCheckCircle />
                Added
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">
                Skills
              </span>

              <span className="text-sm font-medium text-green-600 flex items-center gap-1">
                <FaCheckCircle />
                Added
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">
                Experience
              </span>

              <span className="text-sm font-medium text-yellow-600">
                Add More
              </span>
            </div>

          </div>

          <button className="mt-8 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
            Edit Profile
          </button>

        </motion.div>

      </div>

      {/* =====================================================
          RECOMMENDED JOBS
      ====================================================== */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-8 bg-white rounded-3xl border border-slate-200 overflow-hidden"
      >

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-6 border-b border-slate-100">

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Recommended For You
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Jobs matching your profile and skills
            </p>
          </div>

          <button className="flex items-center gap-2 text-sm font-semibold text-blue-600">
            Explore Jobs
            <FaArrowRight />
          </button>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 p-6">

          {recommendedJobs.map((job, index) => (
            <motion.div
              key={job.position}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-slate-200 p-5 transition-shadow duration-300 hover:shadow-md"
            >

              <div className="flex items-start justify-between gap-4">

                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  {job.company.charAt(0)}
                </div>

                <button className="w-9 h-9 rounded-lg bg-slate-50 text-slate-400 flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 transition">
                  <FaBookmark />
                </button>

              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                {job.position}
              </h3>

              <p className="mt-1 text-sm font-medium text-slate-600">
                {job.company}
              </p>

              <div className="mt-4 space-y-2 text-sm text-slate-500">

                <p className="flex items-center gap-2">
                  <FaMapMarkerAlt />
                  {job.location}
                </p>

                <p className="flex items-center gap-2">
                  <FaBriefcase />
                  {job.type}
                </p>

              </div>

              <div className="mt-5 flex items-center justify-between">

                <span className="text-sm font-semibold text-blue-600">
                  {job.salary}
                </span>

                <button className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition">
                  View Job
                </button>

              </div>

            </motion.div>
          ))}

        </div>

      </motion.div>

    </div>
  );
};

export default Dashboard;