import React from "react";
import { Link } from "react-router-dom";
import { modules } from "./data/data";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#f4f7f6] text-slate-800 font-sans selection:bg-blue-200">
      {/* Background Pastel Meshes & Network Lines */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-pink-200/40 blur-[120px] rounded-full mix-blend-multiply"></div>
        <div className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] bg-blue-200/40 blur-[120px] rounded-full mix-blend-multiply"></div>
        <div className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] bg-purple-200/40 blur-[120px] rounded-full mix-blend-multiply"></div>
      </div>

      {/* Top Navigation Bar */}
      <nav className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pt-6 flex justify-end items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-slate-500/20 flex items-center justify-center backdrop-blur-md border border-white/40 shadow-sm cursor-pointer hover:bg-slate-500/30 transition">
          <span className="text-sm font-semibold text-slate-700">JD</span>
        </div>
        <div className="w-10 h-10 rounded-full bg-white/60 flex items-center justify-center backdrop-blur-md border border-white shadow-sm cursor-pointer hover:bg-white transition relative">
          <div className="absolute top-2 right-2 w-2 h-2 bg-red-400 rounded-full"></div>
          <svg
            className="w-5 h-5 text-slate-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </div>
      </nav>

      {/* Header Section */}
      <header className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pt-12 pb-16 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-700 tracking-tight">
            Project Modules Workspace
          </h1>
          <p className="text-slate-500 mt-4 text-lg font-medium max-w-2xl">
            A curated collection of innovative UI explorations and functional
            components
          </p>
        </div>
        {/* Logo Placeholder */}
        <div className="mt-8 md:mt-0 flex items-center gap-1 opacity-80">
          <span className="text-5xl font-black text-slate-600 tracking-tighter">
            P
          </span>
          <span className="text-5xl font-black text-slate-700 tracking-tighter">
            M
          </span>
          <span className="text-5xl font-black text-slate-800 tracking-tighter">
            W
          </span>
        </div>
      </header>

      {/* Main Cards Grid */}
      <main className="relative z-10 max-w-350 mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">
        {modules.map((mod) => (
          <Link
            key={mod.id}
            to={mod.path}
            className="group block bg-white/40 backdrop-blur-2xl border border-white/60 rounded-[32px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1"
          >
            {/* Top Graphic Area */}
            <div
              className={`relative h-64 w-full bg-gradient-to-br ${mod.gradient} overflow-hidden`}
            >
              <mod.Graphic />
              {/* Icon Badge */}
              <div
                className={`absolute top-6 left-6 w-12 h-12 rounded-xl ${mod.iconBg} flex items-center justify-center shadow-lg shadow-black/10 backdrop-blur-sm z-20`}
              >
                <div className="w-5 h-5 bg-white/90 rounded-md"></div>
              </div>
            </div>

            {/* Bottom Content Area */}
            <div className="p-8 bg-gradient-to-b from-white/60 to-white/90 h-full">
              <h2 className="text-xl font-bold tracking-widest text-slate-800 mb-3 uppercase">
                {mod.name}
              </h2>
              <p className="text-slate-600 leading-relaxed font-medium mb-8">
                {mod.desc}
              </p>

              <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 shadow-sm transition-colors group-hover:bg-slate-50 group-hover:border-slate-300">
                {mod.buttonText}
              </button>
            </div>
          </Link>
        ))}
      </main>

      {/* Footer Navigation */}
      <footer className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pb-10 flex justify-end gap-6 text-sm font-semibold text-slate-500">
        <a href="#" className="hover:text-slate-800 transition-colors">
          Home
        </a>
        <a href="#" className="hover:text-slate-800 transition-colors">
          Settings
        </a>
        <a href="#" className="hover:text-slate-800 transition-colors">
          Credits
        </a>
        <a href="#" className="hover:text-slate-800 transition-colors">
          Learn More
        </a>
      </footer>
    </div>
  );
};

export default HomePage;
