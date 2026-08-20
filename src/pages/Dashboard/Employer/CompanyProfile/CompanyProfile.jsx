import {
  MapPin,
  Globe,
  Users,
  CalendarDays,
  BriefcaseBusiness,
  Building2,
  Mail,
  ExternalLink,
  Bookmark,
  Share2,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

const CompanyProfile = () => {
  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      type: "Full Time",
      location: "Remote",
      salary: "$45k - $60k",
      posted: "2 days ago",
    },
    {
      id: 2,
      title: "MERN Stack Developer",
      type: "Full Time",
      location: "Dhaka, Bangladesh",
      salary: "$40k - $55k",
      posted: "5 days ago",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      type: "Part Time",
      location: "Remote",
      salary: "$30k - $45k",
      posted: "1 week ago",
    },
  ];

  const benefits = [
    "Flexible Working Hours",
    "Remote Work",
    "Health Insurance",
    "Paid Time Off",
    "Professional Development",
    "Team Events",
  ];

  return (
    <div className="min-h-screen bg-slate-50">

      {/* ================= COVER ================= */}
      <div className="h-48 bg-gradient-to-r from-[#155dfc] to-blue-500 sm:h-56" />

      <div className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">

        {/* ================= COMPANY HEADER ================= */}
        <div className="relative -mt-14 rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:-mt-16 sm:p-7">

          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-end">

              {/* Logo */}
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl border-4 border-white bg-blue-50 text-2xl font-bold text-[#155dfc] shadow-sm sm:h-28 sm:w-28">
                TN
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">

                  <h1 className="text-2xl font-bold text-slate-800 sm:text-3xl">
                    TechNova Solutions
                  </h1>

                  <CheckCircle2
                    size={20}
                    className="text-[#155dfc]"
                  />

                </div>

                <p className="mt-1 text-sm text-slate-500">
                  Technology & Software Development
                </p>

                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-500">

                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} />
                    Dhaka, Bangladesh
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Users size={14} />
                    50–200 Employees
                  </span>

                  <span className="flex items-center gap-1.5">
                    <CalendarDays size={14} />
                    Founded 2018
                  </span>

                </div>
              </div>

            </div>

            {/* Actions */}
            <div className="flex gap-2">

              <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:border-blue-200 hover:text-[#155dfc]">
                <Bookmark size={17} />
                <span className="hidden sm:inline">
                  Save
                </span>
              </button>

              <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:border-blue-200 hover:text-[#155dfc]">
                <Share2 size={17} />
                <span className="hidden sm:inline">
                  Share
                </span>
              </button>

              <button className="flex items-center gap-2 rounded-lg bg-[#155dfc] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
                <BriefcaseBusiness size={17} />
                View Jobs
              </button>

            </div>

          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">

          {/* ================= LEFT ================= */}
          <div className="space-y-6 lg:col-span-2">

            {/* About */}
            <section className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">

              <h2 className="text-lg font-bold text-slate-800">
                About TechNova Solutions
              </h2>

              <div className="mt-4 space-y-3 text-sm leading-7 text-slate-500">

                <p>
                  TechNova Solutions is a growing technology company focused
                  on building modern digital products and software solutions
                  for businesses around the world.
                </p>

                <p>
                  Our team brings together developers, designers, product
                  specialists, and creative thinkers who work together to
                  solve real-world problems through technology.
                </p>

                <p>
                  We believe in continuous learning, collaboration, and
                  creating an environment where talented people can grow
                  their careers.
                </p>

              </div>

              <button className="mt-4 flex items-center gap-1 text-sm font-medium text-[#155dfc] hover:underline">
                Read More
                <ArrowUpRight size={15} />
              </button>

            </section>

            {/* Open Positions */}
            <section className="rounded-xl border border-slate-200 bg-white">

              <div className="flex items-center justify-between border-b border-slate-200 p-5 sm:p-6">

                <div>
                  <h2 className="text-lg font-bold text-slate-800">
                    Open Positions
                  </h2>

                  <p className="mt-1 text-xs text-slate-500">
                    {jobs.length} jobs currently available
                  </p>
                </div>

                <button className="text-sm font-medium text-[#155dfc] hover:underline">
                  View All
                </button>

              </div>

              <div className="divide-y divide-slate-100">

                {jobs.map((job) => (
                  <div
                    key={job.id}
                    className="p-5 transition hover:bg-slate-50 sm:p-6"
                  >

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                      <div>

                        <h3 className="text-base font-semibold text-slate-800">
                          {job.title}
                        </h3>

                        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-500">

                          <span className="flex items-center gap-1">
                            <BriefcaseBusiness size={13} />
                            {job.type}
                          </span>

                          <span className="flex items-center gap-1">
                            <MapPin size={13} />
                            {job.location}
                          </span>

                          <span>
                            {job.salary}
                          </span>

                        </div>

                        <p className="mt-3 text-xs text-slate-400">
                          Posted {job.posted}
                        </p>

                      </div>

                      <button className="flex w-fit items-center gap-2 rounded-lg bg-[#155dfc] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-blue-700">
                        View Job
                        <ArrowUpRight size={14} />
                      </button>

                    </div>

                  </div>
                ))}

              </div>
            </section>

            {/* Benefits */}
            <section className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">

              <h2 className="text-lg font-bold text-slate-800">
                Employee Benefits
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                What you can expect when joining our team.
              </p>

              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">

                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 rounded-lg bg-slate-50 p-3"
                  >
                    <CheckCircle2
                      size={17}
                      className="shrink-0 text-green-500"
                    />

                    <span className="text-sm text-slate-600">
                      {benefit}
                    </span>
                  </div>
                ))}

              </div>

            </section>

          </div>

          {/* ================= RIGHT SIDEBAR ================= */}
          <div className="space-y-6">

            {/* Company Details */}
            <section className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">

              <h2 className="text-lg font-bold text-slate-800">
                Company Details
              </h2>

              <div className="mt-5 space-y-5">

                <div className="flex gap-3">

                  <div className="rounded-lg bg-blue-50 p-2.5 text-[#155dfc]">
                    <Building2 size={18} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">
                      Industry
                    </p>

                    <p className="mt-1 text-sm font-medium text-slate-700">
                      Software & Technology
                    </p>
                  </div>

                </div>

                <div className="flex gap-3">

                  <div className="rounded-lg bg-blue-50 p-2.5 text-[#155dfc]">
                    <Users size={18} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">
                      Company Size
                    </p>

                    <p className="mt-1 text-sm font-medium text-slate-700">
                      50–200 Employees
                    </p>
                  </div>

                </div>

                <div className="flex gap-3">

                  <div className="rounded-lg bg-blue-50 p-2.5 text-[#155dfc]">
                    <MapPin size={18} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">
                      Headquarters
                    </p>

                    <p className="mt-1 text-sm font-medium text-slate-700">
                      Dhaka, Bangladesh
                    </p>
                  </div>

                </div>

                <div className="flex gap-3">

                  <div className="rounded-lg bg-blue-50 p-2.5 text-[#155dfc]">
                    <CalendarDays size={18} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">
                      Founded
                    </p>

                    <p className="mt-1 text-sm font-medium text-slate-700">
                      2018
                    </p>
                  </div>

                </div>

              </div>

            </section>

            {/* Contact */}
            <section className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">

              <h2 className="text-lg font-bold text-slate-800">
                Contact & Links
              </h2>

              <div className="mt-5 space-y-3">

                <a
                  href="#"
                  className="flex items-center gap-3 rounded-lg border border-slate-200 p-3 text-sm text-slate-600 transition hover:border-blue-200 hover:text-[#155dfc]"
                >
                  <Globe size={17} />
                  www.technova.com
                  <ExternalLink
                    size={14}
                    className="ml-auto"
                  />
                </a>

                <a
                  href="#"
                  className="flex items-center gap-3 rounded-lg border border-slate-200 p-3 text-sm text-slate-600 transition hover:border-blue-200 hover:text-[#155dfc]"
                >
                  <Mail size={17} />
                  contact@technova.com
                  <ExternalLink
                    size={14}
                    className="ml-auto"
                  />
                </a>

              </div>

            </section>

            {/* Job CTA */}
            <div className="rounded-xl bg-[#155dfc] p-5 text-white sm:p-6">

              <h3 className="text-lg font-bold">
                Interested in working here?
              </h3>

              <p className="mt-2 text-sm leading-6 text-blue-100">
                Explore current openings and find a position that matches
                your skills.
              </p>

              <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-[#155dfc] transition hover:bg-blue-50">
                <BriefcaseBusiness size={17} />
                Explore Open Jobs
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default CompanyProfile;