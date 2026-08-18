import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaBuilding,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaClock,
  FaCalendarAlt,
  FaFileAlt,
  FaPlus,
} from "react-icons/fa";

const PostJobs = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-6xl">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">
              <FaPlus />
            </div>

            <div>
              <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Post a Job
              </h1>

              <p className="mt-1 text-sm text-slate-500 sm:text-base">
                Create a new job posting and find the right candidate.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ================= FORM ================= */}

        <motion.form
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="mt-8"
        >
          <div className="grid gap-6 lg:grid-cols-3">

            {/* ================= MAIN FORM ================= */}

            <div className="space-y-6 lg:col-span-2">

              {/* Job Information */}

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">

                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-slate-900">
                    Job Information
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Provide the basic information about the position.
                  </p>
                </div>

                <div className="space-y-5">

                  {/* Job Title */}

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Job Title
                    </label>

                    <div className="relative">
                      <FaBriefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                      <input
                        type="text"
                        placeholder="e.g. Senior Frontend Developer"
                        className="
                          w-full
                          rounded-xl
                          border
                          border-slate-200
                          bg-white
                          py-3.5
                          pl-11
                          pr-4
                          text-sm
                          text-slate-700
                          outline-none
                          transition
                          focus:border-blue-500
                          focus:ring-4
                          focus:ring-blue-100
                        "
                      />
                    </div>
                  </div>

                  {/* Company */}

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Company Name
                    </label>

                    <div className="relative">
                      <FaBuilding className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                      <input
                        type="text"
                        placeholder="Your company name"
                        className="
                          w-full
                          rounded-xl
                          border
                          border-slate-200
                          py-3.5
                          pl-11
                          pr-4
                          text-sm
                          outline-none
                          transition
                          focus:border-blue-500
                          focus:ring-4
                          focus:ring-blue-100
                        "
                      />
                    </div>
                  </div>

                  {/* Category + Job Type */}

                  <div className="grid gap-5 sm:grid-cols-2">

                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">
                        Job Category
                      </label>

                      <select
                        className="
                          w-full
                          rounded-xl
                          border
                          border-slate-200
                          bg-white
                          px-4
                          py-3.5
                          text-sm
                          text-slate-600
                          outline-none
                          transition
                          focus:border-blue-500
                          focus:ring-4
                          focus:ring-blue-100
                        "
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select category
                        </option>
                        <option>Web Development</option>
                        <option>Software Development</option>
                        <option>UI/UX Design</option>
                        <option>Marketing</option>
                        <option>Graphic Design</option>
                        <option>Data Science</option>
                        <option>Customer Support</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">
                        Job Type
                      </label>

                      <select
                        className="
                          w-full
                          rounded-xl
                          border
                          border-slate-200
                          bg-white
                          px-4
                          py-3.5
                          text-sm
                          text-slate-600
                          outline-none
                          transition
                          focus:border-blue-500
                          focus:ring-4
                          focus:ring-blue-100
                        "
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select job type
                        </option>
                        <option>Full Time</option>
                        <option>Part Time</option>
                        <option>Contract</option>
                        <option>Internship</option>
                        <option>Freelance</option>
                      </select>
                    </div>

                  </div>

                  {/* Location + Workplace */}

                  <div className="grid gap-5 sm:grid-cols-2">

                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">
                        Location
                      </label>

                      <div className="relative">
                        <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                        <input
                          type="text"
                          placeholder="e.g. Dhaka, Bangladesh"
                          className="
                            w-full
                            rounded-xl
                            border
                            border-slate-200
                            py-3.5
                            pl-11
                            pr-4
                            text-sm
                            outline-none
                            transition
                            focus:border-blue-500
                            focus:ring-4
                            focus:ring-blue-100
                          "
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">
                        Workplace
                      </label>

                      <select
                        defaultValue=""
                        className="
                          w-full
                          rounded-xl
                          border
                          border-slate-200
                          bg-white
                          px-4
                          py-3.5
                          text-sm
                          text-slate-600
                          outline-none
                          transition
                          focus:border-blue-500
                          focus:ring-4
                          focus:ring-blue-100
                        "
                      >
                        <option value="" disabled>
                          Select workplace
                        </option>
                        <option>On-site</option>
                        <option>Remote</option>
                        <option>Hybrid</option>
                      </select>
                    </div>

                  </div>

                </div>
              </div>

              {/* ================= DESCRIPTION ================= */}

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">

                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-slate-900">
                    Job Description
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Describe the role, responsibilities and requirements.
                  </p>
                </div>

                <div className="space-y-5">

                  {/* Description */}

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Description
                    </label>

                    <textarea
                      rows="7"
                      placeholder="Describe the job responsibilities, expectations and day-to-day tasks..."
                      className="
                        w-full
                        resize-none
                        rounded-xl
                        border
                        border-slate-200
                        px-4
                        py-3.5
                        text-sm
                        outline-none
                        transition
                        focus:border-blue-500
                        focus:ring-4
                        focus:ring-blue-100
                      "
                    />
                  </div>

                  {/* Requirements */}

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Requirements
                    </label>

                    <textarea
                      rows="6"
                      placeholder="List the skills, qualifications and experience required..."
                      className="
                        w-full
                        resize-none
                        rounded-xl
                        border
                        border-slate-200
                        px-4
                        py-3.5
                        text-sm
                        outline-none
                        transition
                        focus:border-blue-500
                        focus:ring-4
                        focus:ring-blue-100
                      "
                    />
                  </div>

                </div>
              </div>

            </div>

            {/* ================= SIDEBAR ================= */}

            <div className="space-y-6">

              {/* Salary */}

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

                <h2 className="text-lg font-semibold text-slate-900">
                  Salary & Benefits
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Add compensation details.
                </p>

                <div className="mt-5 space-y-5">

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Salary Range
                    </label>

                    <div className="relative">
                      <FaMoneyBillWave className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                      <input
                        type="text"
                        placeholder="e.g. $50,000 - $70,000"
                        className="
                          w-full
                          rounded-xl
                          border
                          border-slate-200
                          py-3.5
                          pl-11
                          pr-4
                          text-sm
                          outline-none
                          transition
                          focus:border-blue-500
                          focus:ring-4
                          focus:ring-blue-100
                        "
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Experience Level
                    </label>

                    <select
                      defaultValue=""
                      className="
                        w-full
                        rounded-xl
                        border
                        border-slate-200
                        bg-white
                        px-4
                        py-3.5
                        text-sm
                        text-slate-600
                        outline-none
                        focus:border-blue-500
                        focus:ring-4
                        focus:ring-blue-100
                      "
                    >
                      <option value="" disabled>
                        Select experience
                      </option>
                      <option>Entry Level</option>
                      <option>Junior</option>
                      <option>Mid Level</option>
                      <option>Senior</option>
                      <option>Expert</option>
                    </select>
                  </div>

                </div>

              </div>

              {/* Application Deadline */}

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

                <h2 className="text-lg font-semibold text-slate-900">
                  Application Details
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Set a deadline for applications.
                </p>

                <div className="mt-5">

                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Application Deadline
                  </label>

                  <div className="relative">
                    <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                    <input
                      type="date"
                      className="
                        w-full
                        rounded-xl
                        border
                        border-slate-200
                        bg-white
                        py-3.5
                        pl-11
                        pr-4
                        text-sm
                        text-slate-600
                        outline-none
                        focus:border-blue-500
                        focus:ring-4
                        focus:ring-blue-100
                      "
                    />
                  </div>

                </div>

              </div>

              {/* Job Preview Info */}

              <div className="rounded-2xl bg-blue-600 p-6 text-white shadow-lg shadow-blue-100">

                <div className="flex items-center gap-3">
                  <FaFileAlt className="text-xl" />

                  <h2 className="font-semibold">
                    Before Publishing
                  </h2>
                </div>

                <p className="mt-4 text-sm leading-6 text-blue-100">
                  Make sure your job description, requirements and contact
                  information are accurate before publishing the job.
                </p>

              </div>

            </div>

          </div>

          {/* ================= BUTTONS ================= */}

          <div className="
            mt-6
            flex
            flex-col-reverse
            gap-3
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-4
            shadow-sm
            sm:flex-row
            sm:justify-end
            sm:p-5
          ">

            <button
              type="button"
              className="
                w-full
                rounded-xl
                border
                border-slate-200
                px-7
                py-3.5
                text-sm
                font-semibold
                text-slate-600
                transition
                hover:bg-slate-50
                sm:w-auto
              "
            >
              Save as Draft
            </button>

            <motion.button
              type="submit"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-blue-600
                px-7
                py-3.5
                text-sm
                font-semibold
                text-white
                shadow-lg
                shadow-blue-100
                transition
                hover:bg-blue-700
                sm:w-auto
              "
            >
              <FaPlus />
              Publish Job
            </motion.button>

          </div>

        </motion.form>
      </div>
    </div>
  );
};

export default PostJobs;