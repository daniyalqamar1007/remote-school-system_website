import { useTranslation } from "react-i18next";
import { image } from "../../../assets/image";

const MobileAppsSection = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-purple-400 rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="p-6">
              <img src={image.mobile} alt="" />
            </div>
            <div className="p-8 lg:p-12 text-white">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                  {t("mobileApps.title")}
                  <br />
                  {t("mobileApps.titleLine2")}
                </h2>
                <p className="text-base sm:text-lg mb-8 leading-relaxed opacity-90 max-w-md">
                  {t("mobileApps.subtitle")}
                </p>
              </div>
              <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg border-2 border-white/40">
                {t("mobileApps.comingSoon")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppsSection;
