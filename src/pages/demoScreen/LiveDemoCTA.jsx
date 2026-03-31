import React from "react";
import { useTranslation } from "react-i18next";

const LiveDemoCTA = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700 rounded-3xl p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            {t("demo.liveDemoTitle")}
          </h2>
          <p className="text-base sm:text-lg text-white text-opacity-90 mb-8 max-w-xl mx-auto">
            {t("demo.liveDemoSubtitle")}
          </p>
          <button className="bg-white text-purple-700 px-8 py-4 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center gap-2">
            {t("demo.scheduleLiveDemo")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default LiveDemoCTA;
