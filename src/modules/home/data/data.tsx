export const modules = [
  {
    id: "type-ahead",
    name: "TYPE-AHEAD",
    path: "/type-ahead",
    desc: "Implement efficient autocomplete and search experiences",
    buttonText: "Launch Module →",
    gradient: "from-blue-200 via-cyan-100 to-blue-50",
    iconBg: "bg-blue-400",
    Graphic: () => (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-48 h-12 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-white/50 flex items-center px-4 z-10 transform -rotate-6">
          <svg
            className="w-5 h-5 text-blue-400 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <span className="text-slate-400 font-medium">Search|</span>
        </div>
        <div className="absolute top-10 left-12 text-xs font-semibold text-blue-500/60 transform -rotate-12">
          London
        </div>
        <div className="absolute top-8 right-16 text-xs font-semibold text-cyan-600/50 transform rotate-12">
          Cities
        </div>
        <div className="absolute bottom-12 left-16 text-xs font-semibold text-blue-600/50">
          Shoes
        </div>
      </div>
    ),
  },
  {
    id: "recursive",
    name: "RECURSIVE COMPONENT",
    path: "/recursive",
    desc: "Visualize and interact with deep data hierarchies",
    buttonText: "Explore Tree →",
    gradient: "from-purple-200 via-fuchsia-100 to-emerald-100",
    iconBg: "bg-purple-500",
    Graphic: () => (
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
        <div className="relative w-full h-32 flex justify-center">
          <div className="w-1 h-full bg-linear-to-t from-purple-400 to-transparent"></div>
          <div className="absolute top-10 w-24 h-16 border-t-[3px] border-l-[3px] border-r-[3px] border-purple-300/50 rounded-t-3xl"></div>
          <div className="absolute top-4 w-48 h-20 border-t-[3px] border-l-[3px] border-r-[3px] border-emerald-300/40 rounded-t-[40px]"></div>
          {/* Nodes */}
          <div className="absolute top-8 left-[35%] w-2 h-2 rounded-full bg-white shadow-sm shadow-purple-500"></div>
          <div className="absolute top-8 right-[35%] w-2 h-2 rounded-full bg-white shadow-sm shadow-purple-500"></div>
          <div className="absolute top-2 left-[20%] w-2 h-2 rounded-full bg-white shadow-sm shadow-emerald-500"></div>
          <div className="absolute top-2 right-[20%] w-2 h-2 rounded-full bg-white shadow-sm shadow-emerald-500"></div>
        </div>
      </div>
    ),
  },
  {
    id: "virtualization",
    name: "Virtualization",
    path: "/virtualization",
    desc: "Virtualization for Efficient Data Rendering",
    buttonText: "Explore Virtualization →",
    gradient: "from-orange-200 via-rose-100 to-red-50",
    iconBg: "bg-orange-400",
    Graphic: () => (
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Abstract Form Graphic */}
        <div className="relative w-40 h-48 bg-white/70 backdrop-blur-md rounded-xl shadow-lg border border-white/50 p-4 transform rotate-6">
          <div className="w-1/2 h-3 bg-orange-200 rounded-full mb-4"></div>
          <div className="w-full h-6 bg-white rounded-md mb-2 shadow-sm border border-slate-100"></div>
          <div className="w-full h-6 bg-white rounded-md mb-2 shadow-sm border border-slate-100"></div>
          <div className="w-3/4 h-6 bg-white rounded-md mb-4 shadow-sm border border-slate-100"></div>
          <div className="w-full h-8 bg-linear-to-r from-orange-400 to-rose-400 rounded-md mt-auto"></div>
        </div>
      </div>
    ),
  },
  {
    id: "pagination",
    name: "Pagination",
    path: "/pagination",
    desc: "Pagination for Horizontal data list",
    buttonText: "Explore Pagination →",
    gradient: "from-orange-200 via-rose-100 to-red-50",
    iconBg: "bg-orange-400",
    Graphic: () => (
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Abstract Form Graphic */}
        <div className="relative w-40 h-48 bg-white/70 backdrop-blur-md rounded-xl shadow-lg border border-white/50 p-4 transform rotate-6">
          <div className="w-1/2 h-3 bg-orange-200 rounded-full mb-4"></div>
          <div className="w-full h-6 bg-white rounded-md mb-2 shadow-sm border border-slate-100"></div>
          <div className="w-full h-6 bg-white rounded-md mb-2 shadow-sm border border-slate-100"></div>
          <div className="w-3/4 h-6 bg-white rounded-md mb-4 shadow-sm border border-slate-100"></div>
          <div className="w-full h-8 bg-linear-to-r from-orange-400 to-rose-400 rounded-md mt-auto"></div>
        </div>
      </div>
    ),
  },
  {
    id: "otp",
    name: "otp",
    path: "/otp",
    desc: "OTP Input box...",
    buttonText: "Explore Otp Component →",
    gradient: "from-orange-200 via-rose-100 to-red-50",
    iconBg: "bg-orange-400",
    Graphic: () => (
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Abstract Form Graphic */}
        <div className="relative w-40 h-48 bg-white/70 backdrop-blur-md rounded-xl shadow-lg border border-white/50 p-4 transform rotate-6">
          <div className="w-1/2 h-3 bg-orange-200 rounded-full mb-4"></div>
          <div className="w-full h-6 bg-white rounded-md mb-2 shadow-sm border border-slate-100"></div>
          <div className="w-full h-6 bg-white rounded-md mb-2 shadow-sm border border-slate-100"></div>
          <div className="w-3/4 h-6 bg-white rounded-md mb-4 shadow-sm border border-slate-100"></div>
          <div className="w-full h-8 bg-linear-to-r from-orange-400 to-rose-400 rounded-md mt-auto"></div>
        </div>
      </div>
    ),
  },
  {
    id: "dynamic-form",
    name: "DYNAMIC FORM",
    path: "/dynamic-form",
    desc: "Build flexible forms based on varying data structures",
    buttonText: "Create Form →",
    gradient: "from-orange-200 via-rose-100 to-red-50",
    iconBg: "bg-orange-400",
    Graphic: () => (
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Abstract Form Graphic */}
        <div className="relative w-40 h-48 bg-white/70 backdrop-blur-md rounded-xl shadow-lg border border-white/50 p-4 transform rotate-6">
          <div className="w-1/2 h-3 bg-orange-200 rounded-full mb-4"></div>
          <div className="w-full h-6 bg-white rounded-md mb-2 shadow-sm border border-slate-100"></div>
          <div className="w-full h-6 bg-white rounded-md mb-2 shadow-sm border border-slate-100"></div>
          <div className="w-3/4 h-6 bg-white rounded-md mb-4 shadow-sm border border-slate-100"></div>
          <div className="w-full h-8 bg-linear-to-r from-orange-400 to-rose-400 rounded-md mt-auto"></div>
        </div>
      </div>
    ),
  },
  {
    id: "accordian",
    name: "ACCORDIAN",
    path: "/accordian",
    desc: "Accordian are mostly used in FAQs.",
    buttonText: "See Accordian →",
    gradient: "from-orange-200 via-rose-100 to-red-50",
    iconBg: "bg-orange-400",
    Graphic: () => (
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Abstract Form Graphic */}
        <div className="relative w-40 h-48 bg-white/70 backdrop-blur-md rounded-xl shadow-lg border border-white/50 p-4 transform rotate-6">
          <div className="w-1/2 h-3 bg-orange-200 rounded-full mb-4"></div>
          <div className="w-full h-6 bg-white rounded-md mb-2 shadow-sm border border-slate-100"></div>
          <div className="w-full h-6 bg-white rounded-md mb-2 shadow-sm border border-slate-100"></div>
          <div className="w-3/4 h-6 bg-white rounded-md mb-4 shadow-sm border border-slate-100"></div>
          <div className="w-full h-8 bg-linear-to-r from-orange-400 to-rose-400 rounded-md mt-auto"></div>
        </div>
      </div>
    ),
  },
  {
    id: "kanban-board",
    name: "KANBAN BOARD",
    path: "/kanban-board",
    desc: "Classical Kanban Board",
    buttonText: "See Kanban Board →",
    gradient: "from-orange-200 via-rose-100 to-red-50",
    iconBg: "bg-orange-400",
    Graphic: () => (
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Abstract Form Graphic */}
        <div className="relative w-40 h-48 bg-white/70 backdrop-blur-md rounded-xl shadow-lg border border-white/50 p-4 transform rotate-6">
          <div className="w-1/2 h-3 bg-orange-200 rounded-full mb-4"></div>
          <div className="w-full h-6 bg-white rounded-md mb-2 shadow-sm border border-slate-100"></div>
          <div className="w-full h-6 bg-white rounded-md mb-2 shadow-sm border border-slate-100"></div>
          <div className="w-3/4 h-6 bg-white rounded-md mb-4 shadow-sm border border-slate-100"></div>
          <div className="w-full h-8 bg-linear-to-r from-orange-400 to-rose-400 rounded-md mt-auto"></div>
        </div>
      </div>
    ),
  },
];
