import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaTwitter, FaInstagram, FaFacebookF, FaGithub } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();
  const footerSections = [
    {
      titleKey: "footer.company",
      links: [
        { labelKey: "footer.aboutUs", to: "/about-us" },
        { labelKey: "footer.careers", to: "/career" },
      ],
    },
    {
      titleKey: "footer.help",
      links: [
        { labelKey: "footer.faqs", to: "/faqs" },
        { labelKey: "footer.customerSupport", to: "/support" },
        { labelKey: "footer.termsConditions", to: "/terms" },
        { labelKey: "footer.privacyPolicy", to: "/privacy" },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#08112b] via-[#0a1636] to-[#050a1d] text-white pt-16 sm:pt-20 lg:pt-24 pb-10">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-0 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:34px_34px] opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-8 lg:gap-10 mb-12">
          <div className="xl:col-span-4">
            <div className="inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-3 py-2 backdrop-blur-sm shadow-lg">
              <img src="/srs.png" alt="Remote School System" className="h-10 w-10 rounded-lg object-contain" />
              <div className="leading-none">
                <div className="text-lg font-extrabold tracking-tight text-white">Remote School</div>
                <div className="text-sm font-bold bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">System</div>
              </div>
            </div>

            <p className="mt-5 text-sm sm:text-base text-slate-300 max-w-sm leading-relaxed">
              {t("footer.tagline")}
            </p>

            <div className="mt-6 flex gap-3">
              <SocialLink to="/" icon={<FaTwitter size={16} />} />
              <SocialLink to="/" icon={<FaFacebookF size={16} />} />
              <SocialLink to="/" icon={<FaInstagram size={16} />} />
              <SocialLink to="/" icon={<FaGithub size={16} />} />
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index} className="xl:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm hover:bg-white/10 hover:border-cyan-300/30 transition-all duration-300 hover:-translate-y-1">
              <h3 className="font-bold text-white mb-4">{t(section.titleKey)}</h3>
              <ul className="space-y-3">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.to}
                      className="text-sm text-slate-300 hover:text-cyan-300 transition-colors duration-200"
                    >
                      {t(link.labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="xl:col-span-4 rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-sm hover:bg-white/10 hover:border-teal-300/30 transition-all duration-300 hover:-translate-y-1">
            <h3 className="font-bold text-white mb-4 text-lg">{t("footer.subscribeNewsletter")}</h3>
            <div className="flex flex-col sm:flex-row w-full gap-3 sm:gap-0">
              <input
                type="email"
                placeholder={t("footer.placeholderEmail")}
                className="flex-1 px-4 py-3 bg-slate-900/70 border border-white/15 sm:border-r-0 rounded-lg sm:rounded-r-none text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-300/60"
              />

              <button
                className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 px-7 py-3 border border-cyan-300/20 rounded-lg sm:rounded-l-none font-semibold text-sm text-white flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30"
              >
                {t("footer.join")}
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/15 pt-8 text-center">
          <p className="text-sm text-slate-200">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

// Sub-component for Social Links
const SocialLink = ({ to, icon }) => (
  <Link
    to={to}
    className="w-10 h-10 rounded-xl border border-white/15 bg-white/5 flex items-center justify-center text-slate-100 hover:text-white hover:border-cyan-300/40 hover:bg-gradient-to-br hover:from-teal-500/40 hover:to-cyan-500/40 transition-all duration-300 hover:-translate-y-0.5"
  >
    {icon}
  </Link>
);

export default Footer;
