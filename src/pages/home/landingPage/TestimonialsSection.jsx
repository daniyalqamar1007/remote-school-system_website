import { useTranslation } from "react-i18next";
import { ChevronRight } from "lucide-react";
import { image } from "../../../assets/image";
import { Typography } from "antd";

const TestimonialsSection = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
        <div className="relative">
          <img src={image.star} alt="" className="w-20 h-20" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <Typography className="md:text-5xl text-4xl font-semibold text-dark-5 mb-3">
              {t("testimonials.title")}
              <br />
              {t("testimonials.titleLine2")}
            </Typography>
            <p className="text-sm sm:text-base text-dark-2 mb-6 leading-relaxed max-w-md">
              {t("testimonials.subtitle")}
            </p>
            <button className="bg-dark-gradient hover:from-pink-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold text-sm flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
              {t("testimonials.viewMore")}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-4">
            <img src={image.testi} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
