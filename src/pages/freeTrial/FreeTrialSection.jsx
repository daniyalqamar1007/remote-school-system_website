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
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0a1128] via-[#101b3d] to-[#0a1128] py-12 sm:py-16 lg:py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 -left-16 h-72 w-72 rounded-full bg-teal-500/10 blur-2xl" />
        <div className="absolute bottom-0 -right-16 h-72 w-72 rounded-full bg-cyan-500/10 blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-500/10 px-4 py-2 text-xs sm:text-sm font-semibold text-cyan-200 mb-4">
            <CreditCard className="w-4 h-4" />
            {t("freeTrial.noCreditCard")}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            {t("freeTrial.title")}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-200 max-w-3xl mx-auto leading-relaxed">
            {t("freeTrial.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Side - Form */}
          <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-gradient-to-br from-[#3049b6] to-[#1f3188] p-6 sm:p-8 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
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
                  className="w-full px-4 py-3 rounded-lg bg-white/15 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-cyan-300 transition-colors"
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
                  className="w-full px-4 py-3 rounded-lg bg-white/15 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-cyan-300 transition-colors"
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
                  className="w-full px-4 py-3 rounded-lg bg-white/15 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-cyan-300 transition-colors"
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
                  className="w-full px-4 py-3 rounded-lg bg-white/15 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-cyan-300 transition-colors"
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
                  className="w-full px-4 py-3 rounded-lg bg-white/15 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-cyan-300 transition-colors"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-blue-700 py-3.5 rounded-lg font-bold text-sm sm:text-base hover:bg-slate-100 transition-colors shadow-md"
              >
                {t("freeTrial.startFreeTrialBtn")}
              </button>
              <p className="text-xs text-white/80 text-center mt-4 leading-relaxed">
                {t("freeTrial.agreeTerms")}
              </p>
            </form>
          </div>

          {/* Right Side - Features */}
          <div className="lg:col-span-7 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-5">
                {t("freeTrial.whatsIncluded")}
              </h3>
              <ul className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {features.map((feature, index) => (
                  <li key={index} className="group flex items-start gap-3 rounded-xl border border-white/10 bg-slate-900/35 p-3 hover:border-cyan-300/30 transition-colors">
                    <div className="mt-0.5 flex-shrink-0">
                      <Check className="w-5 h-5 text-emerald-400" />
                    </div>
                    <span className="text-sm text-slate-200 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid sm:grid-cols-3 gap-3">
              <div className="rounded-xl border border-teal-300/25 bg-teal-500/10 p-4 text-center">
                <div className="text-2xl font-black text-white">30</div>
                <div className="text-xs sm:text-sm text-teal-100">Days Trial</div>
              </div>
              <div className="rounded-xl border border-cyan-300/25 bg-cyan-500/10 p-4 text-center">
                <div className="text-2xl font-black text-white">100+</div>
                <div className="text-xs sm:text-sm text-cyan-100">Student Records</div>
              </div>
              <div className="rounded-xl border border-blue-300/25 bg-blue-500/10 p-4 text-center">
                <div className="text-2xl font-black text-white">0</div>
                <div className="text-xs sm:text-sm text-blue-100">Credit Card</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeTrialSection;
