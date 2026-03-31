import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaTwitter, FaInstagram, FaFacebookF, FaGithub } from "react-icons/fa";
import { image } from "../../assets/image";

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
    <footer className="bg-gray-900 text-white pt-28 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid setup: 1 column on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* 1. Brand Section */}
          <div className="flex flex-col">
            <div className="mb-4">
              <img src={image.whiteLogo} alt="logo" className="w-48" />
            </div>
            <p className="text-sm text-gray-400 mb-6 max-w-xs leading-relaxed">
              {t("footer.tagline")}
            </p>

            {/* Social Icons with Facebook */}
            <div className="flex gap-3">
              <SocialLink to="/" icon={<FaTwitter size={16} />} />
              <SocialLink to="/" icon={<FaFacebookF size={16} />} />
              <SocialLink to="/" icon={<FaInstagram size={16} />} />
              <SocialLink to="/" icon={<FaGithub size={16} />} />
            </div>
          </div>

          {/* 2. Footer Sections (Company & Help) */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold mb-4">{t(section.titleKey)}</h3>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.to}
                      className="text-sm text-gray-400 hover:text-purple-accent-1 transition"
                    >
                      {t(link.labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* 3. Newsletter Section - Now in the 4th column next to Help */}
          <div className="flex flex-col">
            <h3 className="font-bold mb-4">{t("footer.subscribeNewsletter")}</h3>
            <div className="flex w-full">
              <input
                type="email"
                placeholder={t("footer.placeholderEmail")}
                className="flex-1 px-4 py-3 bg-white 
               border border-gray-700 border-r-0
               rounded-l-lg rounded-r-none
               text-sm text-black placeholder-gray-500
               focus:outline-none focus:border-purple-accent-1"
              />

              <button
                className="bg-purple-accent-1 hover:bg-purple-accent-2
               px-7 py-3
               border border-gray-700 border-l-0
               rounded-r-lg rounded-l-none
               font-semibold text-sm text-white
               flex items-center justify-center
               transition"
              >
                {t("footer.join")}
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/30 pt-8 text-center">
          <p className="text-sm text-white">
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
    className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-accent-1 hover:text-white transition text-white"
  >
    {icon}
  </Link>
);

export default Footer;
