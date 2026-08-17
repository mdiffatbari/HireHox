
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaBuilding,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";

const applications = [
  {
    id: 1,
    jobTitle: "Frontend Developer",
    company: "TechNova",
    location: "Remote",
    type: "Full Time",
    appliedDate: "Aug 12, 2026",
    status: "Under Review",
    statusColor: "yellow",
  },
  {
    id: 2,
    jobTitle: "React Developer",
    company: "Creative Labs",
    location: "Dhaka, Bangladesh",
    type: "Full Time",
    appliedDate: "Aug 9, 2026",
    status: "Shortlisted",
    statusColor: "blue",
  },
  {
    id: 3,
    jobTitle: "Full Stack Developer",
    company: "SoftTech",
    location: "Remote",
    type: "Full Time",
    appliedDate: "Aug 5, 2026",
    status: "Interview",
    statusColor: "purple",
  },
  {
    id: 4,
    jobTitle: "Junior Web Developer",
    company: "Digital Works",
    location: "Chittagong, Bangladesh",
    type: "Part Time",
    appliedDate: "Jul 28, 2026",
    status: "Rejected",
    statusColor: "red",
  },
];

const statusStyles = {
  yellow: "bg-yellow-50 text-yellow-600 border-yellow-100",
  blue: "bg-blue-50 text-blue-600 border-blue-100",
  purple: "bg-purple-50 text-purple-600 border-purple-100",
  red: "bg-red-50 text-red-500 border-red-100",
};

const MyApplications = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-6xl">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
            My Applications
          </h1>

          <p className="mt-2 text-sm sm:text-base text-slate-500">
            Track the jobs you've applied for and monitor your application
            progress.
          </p>
        </motion.div>

        {/* ================= SUMMARY ================= */}

        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">

          <SummaryCard
            title="Total Applications"
            value="12"
            icon={<FaBriefcase />}
            iconBg="bg-blue-100"
            iconColor="text-blue-600"
            delay={0}
          />

          <SummaryCard
            title="Under Review"
            value="5"
            icon={<FaCalendarAlt />}
            iconBg="bg-yellow-100"
            iconColor="text-yellow-600"
            delay={0.1}
          />

          <SummaryCard
            title="Shortlisted"
            value="3"
            icon={<FaBuilding />}
            iconBg="bg-purple-100"
            iconColor="text-purple-600"
            delay={0.2}
          />

          <SummaryCard
            title="Interviews"
            value="2"
            icon={<FaCalendarAlt />}
            iconBg="bg-green-100"
            iconColor="text-green-600"
            delay={0.3}
          />

        </div>

        {/* ================= APPLICATION LIST ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="mt-8"
        >

          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-900">
              Recent Applications
            </h2>

            <span className="text-sm text-slate-400">
              {applications.length} applications
            </span>
          </div>

          <div className="space-y-4">

            {applications.map((application, index) => (
              <motion.div
                key={application.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: 0.25 + index * 0.08,
                }}
                className="
                  rounded-2xl
                  border border-slate-200
                  bg-white
                  p-5 sm:p-6
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-md
                "
              >

                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                  {/* ================= JOB INFO ================= */}

                  <div className="flex min-w-0 items-start gap-4">

                    {/* Company Logo */}

                    <div className="
                      flex
                      h-14
                      w-14
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-blue-100
                      text-xl
                      font-bold
                      text-blue-600
                    ">
                      {application.company.charAt(0)}
                    </div>

                    <div className="min-w-0">

                      <h3 className="
                        text-lg
                        font-semibold
                        text-slate-900
                        sm:text-xl
                      ">
                        {application.jobTitle}
                      </h3>

                      <p className="
                        mt-1
                        text-sm
                        font-medium
                        text-blue-600
                      ">
                        {application.company}
                      </p>

                      {/* Job Details */}

                      <div className="
                        mt-3
                        flex
                        flex-wrap
                        gap-x-5
                        gap-y-2
                        text-sm
                        text-slate-500
                      ">

                        <span className="flex items-center gap-2">
                          <FaMapMarkerAlt className="text-slate-400" />
                          {application.location}
                        </span>

                        <span className="flex items-center gap-2">
                          <FaBriefcase className="text-slate-400" />
                          {application.type}
                        </span>

                      </div>

                    </div>

                  </div>

                  {/* ================= RIGHT SIDE ================= */}

                  <div className="
                    flex
                    flex-col
                    gap-3
                    lg:min-w-48
                    lg:items-end
                  ">

                    {/* Status */}

                    <span
                      className={`
                        inline-flex
                        w-fit
                        items-center
                        rounded-full
                        border
                        px-3
                        py-1.5
                        text-xs
                        font-semibold
                        ${statusStyles[application.statusColor]}
                      `}
                    >
                      {application.status}
                    </span>

                    {/* Applied Date */}

                    <p className="
                      flex
                      items-center
                      gap-2
                      text-xs
                      text-slate-400
                    ">
                      <FaCalendarAlt />
                      Applied {application.appliedDate}
                    </p>

                    {/* View Job */}

                    <motion.button
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      className="
                        flex
                        w-full
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
                        transition
                        hover:bg-blue-700
                        sm:w-fit
                      "
                    >
                      View Job
                      <FaExternalLinkAlt className="text-xs" />
                    </motion.button>

                  </div>

                </div>

              </motion.div>
            ))}

          </div>

        </motion.div>

      </div>
    </div>
  );
};


/* ================= SUMMARY CARD ================= */

const SummaryCard = ({
  title,
  value,
  icon,
  iconBg,
  iconColor,
  delay,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
      }}
      className="
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-4
        shadow-sm
        sm:p-5
      "
    >

      <div
        className={`
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-xl
          ${iconBg}
          ${iconColor}
          sm:h-11
          sm:w-11
        `}
      >
        {icon}
      </div>

      <p className="
        mt-4
        text-xs
        text-slate-400
        sm:text-sm
      ">
        {title}
      </p>

      <h3 className="
        mt-1
        text-2xl
        font-bold
        text-slate-900
        sm:text-3xl
      ">
        {value}
      </h3>

    </motion.div>
  );
};

export default MyApplications;