import React from "react";
import { useTranslation } from "react-i18next";

const CTASection = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-bluish-gradient py-16 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4">
          {t("cta.title")}
        </h2>
        <p className="text-base sm:text-lg text-white text-opacity-90 mb-8">
          {t("cta.subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button disabled={true} className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full sm:w-auto">
            {t("cta.requestDemo")}
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-white hover:text-blue-600 transition-all duration-300 w-full sm:w-auto">
            {t("cta.startFreeTrial")}
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-white hover:text-blue-600 transition-all duration-300 w-full sm:w-auto">
            {t("cta.contactSales")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
