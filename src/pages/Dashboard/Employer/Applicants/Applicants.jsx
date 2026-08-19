import {
  Search,
  SlidersHorizontal,
  MoreVertical,
  Eye,
  Download,
  Mail,
  CheckCircle2,
  XCircle,
  Clock3,
  Users,
  BriefcaseBusiness,
  ChevronDown,
} from "lucide-react";

const Applicants = () => {
  const applicants = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      job: "Frontend Developer",
      experience: "3 Years",
      applied: "2 hours ago",
      status: "Under Review",
      avatar: "SJ",
    },
    {
      id: 2,
      name: "Michael Smith",
      email: "michael.smith@example.com",
      job: "MERN Stack Developer",
      experience: "4 Years",
      applied: "5 hours ago",
      status: "Shortlisted",
      avatar: "MS",
    },
    {
      id: 3,
      name: "Emily Davis",
      email: "emily.davis@example.com",
      job: "UI/UX Designer",
      experience: "2 Years",
      applied: "1 day ago",
      status: "Under Review",
      avatar: "ED",
    },
    {
      id: 4,
      name: "David Wilson",
      email: "david.wilson@example.com",
      job: "Backend Developer",
      experience: "5 Years",
      applied: "2 days ago",
      status: "Rejected",
      avatar: "DW",
    },
    {
      id: 5,
      name: "Jessica Brown",
      email: "jessica.brown@example.com",
      job: "Frontend Developer",
      experience: "3 Years",
      applied: "3 days ago",
      status: "Shortlisted",
      avatar: "JB",
    },
  ];

  const statusStyles = {
    "Under Review":
      "bg-amber-50 text-amber-600 border border-amber-100",
    Shortlisted:
      "bg-green-50 text-green-600 border border-green-100",
    Rejected:
      "bg-red-50 text-red-500 border border-red-100",
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-800 sm:text-3xl">
              Applicants
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Manage and review candidates who applied to your jobs.
            </p>
          </div>

          <button className="flex w-fit items-center gap-2 rounded-lg bg-[#155dfc] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700">
            <Download size={17} />
            Export Applicants
          </button>
        </div>

        {/* Stats */}
        <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">

          <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Total Applicants</p>
                <h3 className="mt-1 text-2xl font-bold text-slate-800">
                  248
                </h3>
              </div>

              <div className="rounded-lg bg-blue-50 p-3 text-[#155dfc]">
                <Users size={21} />
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Under Review</p>
                <h3 className="mt-1 text-2xl font-bold text-slate-800">
                  86
                </h3>
              </div>

              <div className="rounded-lg bg-amber-50 p-3 text-amber-500">
                <Clock3 size={21} />
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Shortlisted</p>
                <h3 className="mt-1 text-2xl font-bold text-slate-800">
                  42
                </h3>
              </div>

              <div className="rounded-lg bg-green-50 p-3 text-green-600">
                <CheckCircle2 size={21} />
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Active Jobs</p>
                <h3 className="mt-1 text-2xl font-bold text-slate-800">
                  12
                </h3>
              </div>

              <div className="rounded-lg bg-purple-50 p-3 text-purple-600">
                <BriefcaseBusiness size={21} />
              </div>
            </div>
          </div>

        </div>

        {/* Applicants Card */}
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">

          {/* Toolbar */}
          <div className="border-b border-slate-200 p-4">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">

              {/* Search */}
              <div className="relative w-full lg:max-w-md">
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  placeholder="Search applicants..."
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-[#155dfc] focus:bg-white"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-col gap-2 sm:flex-row">

                <button className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50">
                  <BriefcaseBusiness size={16} />
                  All Jobs
                  <ChevronDown size={15} />
                </button>

                <button className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50">
                  <SlidersHorizontal size={16} />
                  Filter
                </button>

              </div>
            </div>
          </div>

          {/* Desktop Table */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[900px]">

              <thead className="bg-slate-50">
                <tr className="border-b border-slate-200 text-left">
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Applicant
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Applied For
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Experience
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Applied
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Status
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">

                {applicants.map((applicant) => (
                  <tr
                    key={applicant.id}
                    className="transition hover:bg-slate-50"
                  >

                    {/* Applicant */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-[#155dfc]">
                          {applicant.avatar}
                        </div>

                        <div>
                          <p className="font-semibold text-slate-800">
                            {applicant.name}
                          </p>
                          <p className="text-xs text-slate-500">
                            {applicant.email}
                          </p>
                        </div>

                      </div>
                    </td>

                    {/* Job */}
                    <td className="px-6 py-4">
                      <p className="text-sm font-medium text-slate-700">
                        {applicant.job}
                      </p>
                    </td>

                    {/* Experience */}
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {applicant.experience}
                    </td>

                    {/* Applied */}
                    <td className="px-6 py-4 text-sm text-slate-500">
                      {applicant.applied}
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                          statusStyles[applicant.status]
                        }`}
                      >
                        {applicant.status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">

                        <button
                          title="View Applicant"
                          className="rounded-lg p-2 text-slate-500 hover:bg-blue-50 hover:text-[#155dfc]"
                        >
                          <Eye size={17} />
                        </button>

                        <button
                          title="Send Email"
                          className="rounded-lg p-2 text-slate-500 hover:bg-green-50 hover:text-green-600"
                        >
                          <Mail size={17} />
                        </button>

                        <button
                          title="More"
                          className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
                        >
                          <MoreVertical size={17} />
                        </button>

                      </div>
                    </td>

                  </tr>
                ))}

              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="divide-y divide-slate-100 md:hidden">

            {applicants.map((applicant) => (
              <div
                key={applicant.id}
                className="p-4 transition hover:bg-slate-50"
              >

                <div className="flex items-start justify-between gap-3">

                  <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-[#155dfc]">
                      {applicant.avatar}
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-800">
                        {applicant.name}
                      </h3>

                      <p className="text-xs text-slate-500">
                        {applicant.email}
                      </p>
                    </div>

                  </div>

                  <button className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100">
                    <MoreVertical size={18} />
                  </button>

                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">

                  <div>
                    <p className="text-xs text-slate-400">
                      Applied For
                    </p>
                    <p className="mt-1 font-medium text-slate-700">
                      {applicant.job}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">
                      Experience
                    </p>
                    <p className="mt-1 font-medium text-slate-700">
                      {applicant.experience}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">
                      Applied
                    </p>
                    <p className="mt-1 text-slate-600">
                      {applicant.applied}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">
                      Status
                    </p>

                    <span
                      className={`mt-1 inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                        statusStyles[applicant.status]
                      }`}
                    >
                      {applicant.status}
                    </span>
                  </div>

                </div>

                <div className="mt-4 flex gap-2 border-t border-slate-100 pt-3">

                  <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">
                    <Eye size={16} />
                    View
                  </button>

                  <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#155dfc] py-2 text-sm font-medium text-white hover:bg-blue-700">
                    <Mail size={16} />
                    Contact
                  </button>

                </div>

              </div>
            ))}

          </div>

          {/* Pagination */}
          <div className="flex flex-col gap-3 border-t border-slate-200 p-4 sm:flex-row sm:items-center sm:justify-between">

            <p className="text-sm text-slate-500">
              Showing <span className="font-medium text-slate-700">1–5</span>{" "}
              of <span className="font-medium text-slate-700">248</span>{" "}
              applicants
            </p>

            <div className="flex items-center gap-2">

              <button className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-500 hover:bg-slate-50">
                Previous
              </button>

              <button className="rounded-lg bg-[#155dfc] px-3 py-2 text-sm font-medium text-white">
                1
              </button>

              <button className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50">
                2
              </button>

              <button className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50">
                3
              </button>

              <button className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-500 hover:bg-slate-50">
                Next
              </button>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Applicants;