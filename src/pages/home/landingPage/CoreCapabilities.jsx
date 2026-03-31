import React from "react";
import { useTranslation } from "react-i18next";
import { Shield } from "lucide-react";
import { LuUsers } from "react-icons/lu";
import { BsClipboardCheck } from "react-icons/bs";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { GoBook } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Typography } from "antd";

const CapabilityCard = ({ icon: Icon, title, description, iconBgColor, learnMore }) => {
  return (
    <div className="bg-white border border-neutral-2 rounded-xl p-6 hover:bg-town-gradient hover:shadow-lg transition-all duration-300 group">
      <div
        className={`${iconBgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-lg font-medium text-dark-1 mb-2 group-hover:text-white transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm text-dark-4 group-hover:text-white mb-4 leading-relaxed w-5/6">
        {description}
      </p>
      <button
        className="flex items-center gap-1 text-sm font-medium text-purple-accent-4 
                   transition-colors duration-300 
                   group-hover:text-white 
                   focus:outline-none"
      >
        <span className="leading-none">{learnMore}</span>
        <MdKeyboardArrowRight className="text-lg mt-1" />
      </button>
    </div>
  );
};

const ICON_MAP = {
  LuUsers,
  IoMdHeartEmpty,
  BsClipboardCheck,
  HiArrowTrendingUp,
  Shield,
  GoBook,
};

const CoreCapabilities = () => {
  const { t } = useTranslation();
  const capabilities = [];

  return (
    <section className="bg-neutral-4 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Typography className="md:text-5xl text-4xl font-semibold text-dark-5 mb-3">
            {t("coreCapabilities.title")}
          </Typography>
          <Typography className="text-2xl text-dark-4">
            {t("coreCapabilities.subtitle")}
          </Typography>
        </div>
        {capabilities.length > 0 && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {capabilities.map((capability, index) => {
                const Icon = ICON_MAP[capability.icon] || LuUsers;
                return (
                  <CapabilityCard
                    key={index}
                    icon={Icon}
                    title={capability.titleKey ? t(capability.titleKey) : capability.title}
                    description={capability.descKey ? t(capability.descKey) : capability.description}
                    iconBgColor={capability.iconBgColor || "bg-blue-gradient"}
                    learnMore={t("coreCapabilities.learnMore")}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CoreCapabilities;
