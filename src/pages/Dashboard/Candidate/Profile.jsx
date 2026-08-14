import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaEdit,
  FaDownload,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaLinkedin,
  FaGithub,
  FaGlobe,
} from "react-icons/fa";

const Profile = () => {
  return (
    <section className="max-w-7xl mx-auto">

      {/* =========================
          Page Heading
      ========================= */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
          My Profile
        </h1>

        <p className="mt-2 text-slate-500">
          Manage your personal information, skills and career details.
        </p>
      </motion.div>

      {/* =========================
          Profile Header
      ========================= */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-3xl border border-slate-200 overflow-hidden"
      >

        {/* Cover */}

        <div className="h-32 md:h-44 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 relative">

          {/* Decorative circles */}

          <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-white/10" />

          <div className="absolute -bottom-20 left-20 w-52 h-52 rounded-full bg-white/10" />

        </div>

        {/* Profile Information */}

        <div className="px-5 md:px-8 pb-8">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">

            <div className="flex flex-col sm:flex-row sm:items-end gap-4">

              {/* Avatar */}

              <div className="-mt-16 md:-mt-20 relative">

                <div className="w-28 h-28 md:w-36 md:h-36 rounded-3xl bg-white p-2 shadow-lg">

                  <div className="w-full h-full rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-4xl md:text-5xl font-bold">
                    IB
                  </div>

                </div>

              </div>

              {/* Name */}

              <div className="pb-1">

                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                  Iffat Bari
                </h2>

                <p className="mt-1 text-slate-500">
                  Full-Stack MERN Developer
                </p>

                <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-400">

                  <span className="flex items-center gap-1.5">
                    <FaMapMarkerAlt />
                    Dhaka, Bangladesh
                  </span>

                  <span className="hidden sm:block">•</span>

                  <span>
                    Available for work
                  </span>

                </div>

              </div>

            </div>

            {/* Edit Button */}

            <button
              className="
                flex items-center justify-center gap-2
                rounded-xl
                bg-blue-600
                hover:bg-blue-700
                text-white
                px-6 py-3
                font-semibold
                transition
                duration-200
              "
            >
              <FaEdit />
              Edit Profile
            </button>

          </div>

        </div>

      </motion.div>

      {/* =========================
          Main Content
      ========================= */}

      <div className="grid lg:grid-cols-3 gap-6 mt-6">

        {/* =========================
            Left Column
        ========================= */}

        <div className="lg:col-span-2 space-y-6">

          {/* About */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8"
          >

            <div className="flex items-center justify-between">

              <h2 className="text-xl font-bold text-slate-900">
                About Me
              </h2>

              <button className="text-slate-400 hover:text-blue-600 transition">
                <FaEdit />
              </button>

            </div>

            <p className="mt-4 text-slate-500 leading-7">
              I'm a passionate full-stack developer focused on building
              modern, scalable and user-friendly web applications. I enjoy
              solving complex problems, learning new technologies and creating
              meaningful digital experiences.
            </p>

          </motion.div>

          {/* Experience */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8"
          >

            <div className="flex items-center justify-between">

              <h2 className="text-xl font-bold text-slate-900">
                Experience
              </h2>

              <button className="text-slate-400 hover:text-blue-600 transition">
                <FaEdit />
              </button>

            </div>

            <div className="mt-6 space-y-7">

              <div className="flex gap-4">

                <div className="w-12 h-12 shrink-0 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                  <FaBriefcase />
                </div>

                <div>

                  <h3 className="font-semibold text-lg text-slate-800">
                    Frontend Developer
                  </h3>

                  <p className="text-blue-600 mt-1">
                    Tech Company
                  </p>

                  <p className="text-sm text-slate-400 mt-1">
                    Jan 2025 — Present
                  </p>

                  <p className="mt-3 text-slate-500 leading-6">
                    Developing responsive web applications using React,
                    Tailwind CSS and modern frontend technologies.
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

          {/* Education */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8"
          >

            <div className="flex items-center justify-between">

              <h2 className="text-xl font-bold text-slate-900">
                Education
              </h2>

              <button className="text-slate-400 hover:text-blue-600 transition">
                <FaEdit />
              </button>

            </div>

            <div className="mt-6 flex gap-4">

              <div className="w-12 h-12 shrink-0 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                <FaGraduationCap />
              </div>

              <div>

                <h3 className="font-semibold text-lg text-slate-800">
                  Bachelor of Science in Computer Science
                </h3>

                <p className="text-blue-600 mt-1">
                  University Name
                </p>

                <p className="text-sm text-slate-400 mt-1">
                  2022 — 2026
                </p>

              </div>

            </div>

          </motion.div>

        </div>

        {/* =========================
            Right Column
        ========================= */}

        <div className="space-y-6">

          {/* Profile Completion */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="bg-white rounded-2xl border border-slate-200 p-6"
          >

            <div className="flex justify-between items-center">

              <h2 className="font-bold text-slate-900">
                Profile Completion
              </h2>

              <span className="font-bold text-blue-600">
                80%
              </span>

            </div>

            <div className="mt-4 h-2 bg-slate-100 rounded-full overflow-hidden">

              <div className="h-full w-[80%] bg-blue-600 rounded-full" />

            </div>

            <p className="mt-3 text-sm text-slate-400">
              Complete your profile to attract more employers.
            </p>

          </motion.div>

          {/* Contact Information */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="bg-white rounded-2xl border border-slate-200 p-6"
          >

            <h2 className="font-bold text-slate-900">
              Contact Information
            </h2>

            <div className="mt-5 space-y-4">

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <FaEnvelope />
                </div>

                <div className="min-w-0">

                  <p className="text-xs text-slate-400">
                    Email
                  </p>

                  <p className="text-sm font-medium text-slate-700 truncate">
                    iffat@example.com
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <FaPhone />
                </div>

                <div>

                  <p className="text-xs text-slate-400">
                    Phone
                  </p>

                  <p className="text-sm font-medium text-slate-700">
                    +880 1234-567890
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <FaMapMarkerAlt />
                </div>

                <div>

                  <p className="text-xs text-slate-400">
                    Location
                  </p>

                  <p className="text-sm font-medium text-slate-700">
                    Dhaka, Bangladesh
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

          {/* Skills */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="bg-white rounded-2xl border border-slate-200 p-6"
          >

            <div className="flex items-center gap-2">

              <FaCode className="text-blue-600" />

              <h2 className="font-bold text-slate-900">
                Skills
              </h2>

            </div>

            <div className="mt-5 flex flex-wrap gap-2">

              {[
                "React",
                "JavaScript",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Tailwind CSS",
                "Firebase",
                "Git",
              ].map((skill) => (
                <span
                  key={skill}
                  className="
                    px-3 py-1.5
                    rounded-lg
                    bg-blue-50
                    text-blue-600
                    text-sm
                    font-medium
                  "
                >
                  {skill}
                </span>
              ))}

            </div>

          </motion.div>

          {/* Social Links */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="bg-white rounded-2xl border border-slate-200 p-6"
          >

            <h2 className="font-bold text-slate-900">
              Social Profiles
            </h2>

            <div className="mt-5 space-y-3">

              <a
                href="#"
                className="flex items-center gap-3 text-slate-500 hover:text-blue-600 transition"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 text-slate-500 hover:text-blue-600 transition"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 text-slate-500 hover:text-blue-600 transition"
              >
                <FaGlobe />
                <span>Portfolio Website</span>
              </a>

            </div>

          </motion.div>

          {/* Resume */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-blue-600 rounded-2xl p-6 text-white"
          >

            <h2 className="font-bold text-lg">
              Your Resume
            </h2>

            <p className="mt-2 text-sm text-blue-100">
              Keep your resume updated to increase your chances of getting
              hired.
            </p>

            <button
              className="
                mt-5
                w-full
                flex items-center justify-center gap-2
                rounded-xl
                bg-white
                text-blue-600
                py-3
                font-semibold
                hover:bg-blue-50
                transition
              "
            >
              <FaDownload />
              Download Resume
            </button>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default Profile;