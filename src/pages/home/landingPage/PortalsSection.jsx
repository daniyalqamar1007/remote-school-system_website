import React from "react";
import { useTranslation } from "react-i18next";
import { Users, BookOpen, GraduationCap, Heart, Shield, DollarSign, School, Crown } from "lucide-react";
import { Typography } from "antd";

const PortalCard = ({ icon: Icon, title, bgColor }) => {
  return (
    <div
      className={`${bgColor} rounded-xl p-6 flex flex-col items-center justify-center text-white cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 min-h-[120px]`}
    >
      <div className="bg-black/5 p-3 rounded-lg mb-4">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-sm font-semibold text-center">{title}</h3>
    </div>
  );
};

const PortalsSection = () => {
  const { t } = useTranslation();
  const portalsRow1 = [
    { icon: Users, titleKey: "portals.parentPortal", bgColor: "bg-blue-gradient" },
    { icon: BookOpen, titleKey: "portals.studentPortal", bgColor: "bg-red-gradient" },
    { icon: GraduationCap, titleKey: "portals.teacherPortal", bgColor: "bg-sky-gradient" },
    { icon: Heart, titleKey: "portals.nursePortal", bgColor: "bg-org-gradient" },
    { icon: Shield, titleKey: "portals.athletePortal", bgColor: "bg-lightRed-gradient" },
    { icon: DollarSign, titleKey: "portals.clubsHonorRoll", bgColor: "bg-yellow-gradient" },
    { icon: School, titleKey: "portals.adminPortal", bgColor: "bg-green-gradient" },
    { icon: Crown, titleKey: "portals.superAdmin", bgColor: "bg-purple-gradient" },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <Typography className="md:text-5xl text-4xl font-semibold text-dark-5 mb-3">
            {t("portals.title")}
          </Typography>
          <Typography className="text-2xl text-dark-4">
            {t("portals.subtitle")}
          </Typography>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {portalsRow1.map((portal, index) => (
              <PortalCard
                key={index}
                icon={portal.icon}
                title={t(portal.titleKey)}
                bgColor={portal.bgColor}
              />
            ))}
          </div>
          <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 rounded-xl p-6 flex flex-col items-center justify-center text-white cursor-pointer hover:shadow-lg transition-all duration-300 min-h-[100px]">
            <h3 className="text-lg font-bold mb-1">{t("portals.sisCore")}</h3>
            <p className="text-sm text-white text-opacity-90">
              {t("portals.sisCoreDesc")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortalsSection;
