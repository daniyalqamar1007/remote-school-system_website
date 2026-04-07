import React, { useState } from "react";
import { Menu, X, Globe, Sparkles } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { labelKey: "nav.home", to: "/" },
    { labelKey: "nav.aboutUs", to: "/about-us" },
    { labelKey: "nav.demo", to: "/demo" },
    { labelKey: "nav.contact", to: "/contact" },
  ];

  return (
    <>
      <header className="bg-gradient-to-b from-[#0a1128]/95 to-[#1a1f3a]/95 backdrop-blur-md border-b border-white/10 sticky top-0 z-40 shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group min-w-0">
              <span className="w-11 h-11 rounded-2xl p-1 bg-gradient-to-br from-teal-400/25 via-cyan-400/15 to-blue-500/20 ring-1 ring-teal-300/40 shadow-[0_0_18px_rgba(45,212,191,0.25)] backdrop-blur-sm flex-shrink-0">
                <span className="block w-full h-full rounded-xl bg-slate-900/60 overflow-hidden">
                  <img
                    src="/srs.png"
                    alt="Remote School System"
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </span>
              </span>
              <span className="leading-none hidden sm:block">
                <span className="block text-white font-extrabold text-xl tracking-tight">Remote School</span>
                <span className="block font-bold text-base bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">System</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-2 py-1">
                {navItems.map((item, index) => (
                  <NavLink
                    key={item.labelKey}
                    to={item.to}
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/50"
                          : "text-white/70 hover:text-white hover:bg-white/10"
                      }`
                    }
                  >
                    {t(item.labelKey)}
                  </NavLink>
                ))}
              </div>

              {/* Right Actions */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/20 bg-white/5 text-white">
                  <Globe className="w-4 h-4 text-teal-400" />
                  <span className="text-sm font-medium">{t("language.en")}</span>
                </div>

                {/* Login Button */}
                <a
                  href="http://localhost:3000"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg border border-white/20 text-white/80 hover:text-white hover:bg-white/10 hover:border-white/40 text-sm font-semibold transition-all duration-300"
                >
                  {t("nav.login")}
                </a>

              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-all"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-[#1a1f3a] to-[#0a1128] border-l border-white/10 shadow-2xl z-50 transform transition-transform duration-300 lg:hidden overflow-y-auto ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 sticky top-0 bg-gradient-to-b from-[#1a1f3a] to-[#0a1128]">
          <span className="text-cyan-400 font-bold text-sm flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            Remote School System
          </span>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="p-2 hover:bg-white/10 rounded-lg transition-all"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex-1 p-6">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.labelKey}
                to={item.to}
                onClick={() => setIsSidebarOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg transition-all text-base font-semibold ${
                    isActive
                      ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`
                }
              >
                {t(item.labelKey)}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Mobile Actions */}
        <div className="p-6 border-t border-white/10 bg-gradient-to-t from-[#0a1128] to-transparent space-y-3">
          <div className="flex items-center justify-center gap-2 w-full px-4 py-3 border border-white/20 bg-white/5 rounded-lg text-white">
            <Globe className="w-4 h-4 text-teal-400" />
            <span className="text-sm font-medium">{t("language.en")}</span>
          </div>

          {/* Login Button Mobile */}
          <a
            href="http://localhost:3000"
            target="_blank"
            rel="noreferrer"
            className="block w-full text-center px-4 py-3 border border-white/20 rounded-lg text-white hover:bg-white/10 hover:border-white/40 font-semibold transition-all"
          >
            {t("nav.login")}
          </a>

        </div>
      </div>
    </>
  );
};

export default Header;
