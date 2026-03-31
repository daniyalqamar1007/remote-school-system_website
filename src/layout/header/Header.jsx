import React, { useState, useRef, useEffect } from "react";
import { Menu, X, Globe, ChevronRight, ChevronDown } from "lucide-react";
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
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2">
              <img src={image.logo} alt="logo" className="w-44" />
            </Link>

            <div className="flex gap-16">
              <div className="hidden md:flex items-center gap-8">
                {navItems.map((item) => (
                  <NavLink
                    key={item.labelKey}
                    to={item.to}
                    className={({ isActive }) =>
                      `text-sm font-medium transition-colors duration-200 ${
                        isActive
                          ? "text-purple-accent-1"
                          : "text-dark-2 hover:text-purple-accent-1"
                      }`
                    }
                  >
                    {t(item.labelKey)}
                  </NavLink>
                ))}
              </div>

              <div className="hidden md:flex items-center gap-4">
                <div className="relative" ref={langRefDesktop}>
                  <button
                    onClick={() => setLangOpen(!langOpen)}
                    className="flex items-center gap-1 text-dark-2 hover:text-purple-accent-1 transition-colors px-2 py-1.5 rounded-lg border border-transparent hover:border-neutral-2"
                  >
                    <Globe className="w-4 h-4" />
                    <span className="text-sm font-medium">{t(currentLang.labelKey)}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {langOpen && (
                    <div className="absolute right-0 top-full mt-1 py-1 bg-white rounded-lg shadow-lg border border-neutral-2 min-w-[140px] z-50">
                      {LANGUAGES.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            i18n.changeLanguage(lang.code);
                            setLangOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors ${
                            i18n.language === lang.code
                              ? "text-purple-accent-1 bg-purple-accent-3/10"
                              : "text-dark-2 hover:bg-neutral-3"
                          }`}
                        >
                          {t(lang.labelKey)}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <a
                  href="https://app.studentrevelationsystem.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-dark-2 hover:text-purple-accent-1 border border-dark-6 rounded-lg text-sm font-medium px-4 py-2"
                >
                  {t("nav.login")}
                </a>

                <Link
                  disabled={true}
                  to="#"
                  className="bg-perli-gradient hover:bg-purple-accent-2 hover:text-white text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors shadow-md hover:shadow-lg"
                >
                  {t("nav.requestDemo")}
                </Link>
              </div>

              <button
                className="md:hidden p-2 text-dark-2 hover:text-purple-accent-1"
                onClick={() => setIsSidebarOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 md:hidden ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-neutral-2">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-purple-accent-1 font-bold text-sm">
                {t("nav.studentRevelation")}
              </span>
            </Link>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="p-2 hover:bg-neutral-3 rounded-lg"
            >
              <X className="w-5 h-5 text-dark-2" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.labelKey}
                  to={item.to}
                  onClick={() => setIsSidebarOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3 rounded-lg transition-all group ${
                      isActive
                        ? "text-purple-accent-1 bg-purple-accent-3/10"
                        : "text-dark-2 hover:text-purple-accent-1 hover:bg-purple-accent-3/10"
                    }`
                  }
                >
                  <span className="text-base font-medium">{t(item.labelKey)}</span>
                  <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="p-6 border-t border-neutral-2 bg-neutral-3/30">
            <div className="flex flex-col gap-3">
              <div className="relative" ref={langRefMobile}>
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 border border-neutral-2 rounded-lg text-dark-2 hover:text-purple-accent-1 hover:bg-white"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium">{t(currentLang.labelKey)}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {langOpen && (
                  <div className="absolute left-0 right-0 top-full mt-1 py-1 bg-white rounded-lg shadow-lg border border-neutral-2 z-50">
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          i18n.changeLanguage(lang.code);
                          setLangOpen(false);
                        }}
                        className={`w-full text-center px-4 py-2 text-sm font-medium ${
                          i18n.language === lang.code
                            ? "text-purple-accent-1 bg-purple-accent-3/10"
                            : "text-dark-2 hover:bg-neutral-3"
                        }`}
                      >
                        {t(lang.labelKey)}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <Link
                to="/login"
                className="text-center px-4 py-3 border border-neutral-2 rounded-lg text-dark-2 hover:text-purple-accent-1 hover:bg-white"
              >
                {t("nav.login")}
              </Link>
              <Link
                to="/request-demo"
                className="bg-purple-accent-1 hover:bg-purple-accent-2 text-white px-6 py-3 rounded-lg text-sm font-medium text-center shadow-md hover:shadow-lg"
              >
                {t("nav.requestDemo")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
