import React, { useState, useRef, useEffect } from "react";
import { Menu, X, Globe, ChevronDown, Sparkles } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { image } from "../../assets/image";

const LANGUAGES = [
  { code: "en", labelKey: "language.en" },
  { code: "es", labelKey: "language.es" },
];

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRefDesktop = useRef(null);
  const langRefMobile = useRef(null);

  const navItems = [
    { labelKey: "nav.home", to: "/" },
    { labelKey: "nav.aboutUs", to: "/about-us" },
    { labelKey: "nav.career", to: "/career" },
    { labelKey: "nav.demo", to: "/demo" },
    { labelKey: "nav.freeTrial", to: "/free-trial" },
    { labelKey: "nav.faq", to: "/faqs" },
    { labelKey: "nav.contact", to: "/contact" },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      const inDesktop = langRefDesktop.current && langRefDesktop.current.contains(e.target);
      const inMobile = langRefMobile.current && langRefMobile.current.contains(e.target);
      if (!inDesktop && !inMobile) setLangOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLang = LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0];

  return (
    <>
      <header className="bg-gradient-to-b from-[#0a1128]/95 to-[#1a1f3a]/95 backdrop-blur-md border-b border-white/10 sticky top-0 z-40 shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group min-w-0">
              <span className="w-10 h-10 rounded-xl overflow-hidden ring-1 ring-white/20 bg-white/5 shadow-md flex-shrink-0">
                <img
                  src={image.whiteLogo}
                  alt="Remote School System"
                  className="h-10 w-auto max-w-none object-left transition-transform duration-300 group-hover:scale-105"
                />
              </span>
              <span className="leading-none hidden sm:block">
                <span className="block text-white font-extrabold text-xl tracking-tight">Remote School</span>
                <span className="block text-cyan-300 font-bold text-base">System</span>
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
                {/* Language Selector */}
                <div className="relative" ref={langRefDesktop}>
                  <button
                    onClick={() => setLangOpen(!langOpen)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white transition-all duration-300 hover:border-teal-400/30"
                  >
                    <Globe className="w-4 h-4 text-teal-400" />
                    <span className="text-sm font-medium">{t(currentLang.labelKey)}</span>
                    <ChevronDown className="w-3 h-3" />
                  </button>
                  
                  {langOpen && (
                    <div className="absolute right-0 top-full mt-2 py-2 bg-gradient-to-b from-[#1a1f3a] to-[#0a1128] border border-white/20 rounded-xl shadow-xl backdrop-blur-md min-w-[140px] z-50">
                      {LANGUAGES.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            i18n.changeLanguage(lang.code);
                            setLangOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-sm font-medium transition-all ${
                            i18n.language === lang.code
                              ? "bg-gradient-to-r from-teal-500/20 to-cyan-500/20 text-cyan-300 border-l-2 border-cyan-400"
                              : "text-white/70 hover:text-white hover:bg-white/10"
                          }`}
                        >
                          {t(lang.labelKey)}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Login Button */}
                <a
                  href="https://app.studentrevelationsystem.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg border border-white/20 text-white/80 hover:text-white hover:bg-white/10 hover:border-white/40 text-sm font-semibold transition-all duration-300"
                >
                  {t("nav.login")}
                </a>

                {/* Request Demo Button */}
                <button className="group relative px-6 py-2 rounded-lg font-semibold text-sm text-white bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 hover:from-teal-400 hover:via-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-teal-500/50 hover:shadow-xl flex items-center gap-2 overflow-hidden">
                  <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                  <span className="relative">{t("nav.requestDemo")}</span>
                  <Sparkles className="w-4 h-4 relative group-hover:scale-125 transition-transform" />
                </button>
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
          {/* Language Selector Mobile */}
          <div className="relative" ref={langRefMobile}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 border border-white/20 bg-white/5 hover:bg-white/10 rounded-lg text-white transition-all"
            >
              <Globe className="w-4 h-4 text-teal-400" />
              <span className="text-sm font-medium">{t(currentLang.labelKey)}</span>
              <ChevronDown className="w-3 h-3" />
            </button>
            
            {langOpen && (
              <div className="absolute left-0 right-0 top-full mt-2 py-2 bg-gradient-to-b from-[#1a1f3a] to-[#0a1128] border border-white/20 rounded-xl shadow-xl backdrop-blur-md z-50">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      i18n.changeLanguage(lang.code);
                      setLangOpen(false);
                    }}
                    className={`w-full text-center px-4 py-2 text-sm font-medium transition-all ${
                      i18n.language === lang.code
                        ? "bg-gradient-to-r from-teal-500/20 to-cyan-500/20 text-cyan-300"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {t(lang.labelKey)}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Login Button Mobile */}
          <a
            href="https://app.studentrevelationsystem.com/"
            target="_blank"
            rel="noreferrer"
            className="block w-full text-center px-4 py-3 border border-white/20 rounded-lg text-white hover:bg-white/10 hover:border-white/40 font-semibold transition-all"
          >
            {t("nav.login")}
          </a>

          {/* Request Demo Button Mobile */}
          <button className="group relative w-full px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 hover:from-teal-400 hover:via-cyan-400 hover:to-blue-400 transition-all shadow-lg hover:shadow-teal-500/50 flex items-center justify-center gap-2 overflow-hidden">
            <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
            <span className="relative">{t("nav.requestDemo")}</span>
            <Sparkles className="w-4 h-4 relative group-hover:scale-125 transition-transform" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
