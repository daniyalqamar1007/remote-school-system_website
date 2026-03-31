import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Check, CreditCard } from "lucide-react";

const FreeTrialSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    schoolName: "",
    district: "",
    fullName: "",
    email: "",
    phone: "",
    students: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const features = [
    t("freeTrial.feature1"),
    t("freeTrial.feature2"),
    t("freeTrial.feature3"),
    t("freeTrial.feature4"),
    t("freeTrial.feature5"),
    t("freeTrial.feature6"),
    t("freeTrial.feature7"),
    t("freeTrial.feature8"),
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-xs font-semibold">
            <CreditCard className="w-4 h-4" />
            {t("freeTrial.noCreditCard")}
          </div>
        </div>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-semibold text-dark-1 mb-4">
            {t("freeTrial.title")}
          </h2>
          <p className="text-xl text-dark-2 max-w-2xl mx-auto">
            {t("freeTrial.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Features */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-dark-1 mb-6">
              {t("freeTrial.whatsIncluded")}
            </h3>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5  flex items-center justify-center mt-0.5">
                    <Check className="w-5 h-5 text-[#00A63E]" />
                  </div>
                  <span className="text-sm text-dark-2">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side - Form */}
          <div className="bg-[#4760CB] rounded-2xl p-8 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-6">
              {t("freeTrial.startTrialForm")}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  {t("freeTrial.schoolDistrictName")}
                </label>
                <input
                  type="text"
                  name="schoolName"
                  placeholder={t("freeTrial.placeholderSchool")}
                  value={formData.schoolName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-60 focus:outline-none focus:border-opacity-50 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  {t("freeTrial.fullName")}
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder={t("freeTrial.placeholderFullName")}
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-60 focus:outline-none focus:border-opacity-50 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  {t("freeTrial.emailAddress")}
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder={t("freeTrial.placeholderEmail")}
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-60 focus:outline-none focus:border-opacity-50 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  {t("freeTrial.phoneNumber")}
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder={t("freeTrial.placeholderPhone")}
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-60 focus:outline-none focus:border-opacity-50 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  {t("freeTrial.numberOfStudents")}
                </label>
                <input
                  type="number"
                  name="students"
                  placeholder={t("freeTrial.placeholderStudents")}
                  value={formData.students}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-60 focus:outline-none focus:border-opacity-50 transition-all"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-blue-600 py-4 rounded-lg font-bold text-base hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                {t("freeTrial.startFreeTrialBtn")}
              </button>
              <p className="text-xs text-white text-opacity-80 text-center mt-4">
                {t("freeTrial.agreeTerms")}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeTrialSection;
