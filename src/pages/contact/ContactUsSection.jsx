import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Mail, MapPin, Send, Phone, Clock } from "lucide-react";

const ContactCard = ({ title, items }) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 hover:border-cyan-300/30 transition-colors duration-300">
      <h3 className="font-bold text-white text-base sm:text-lg mb-4">{title}</h3>
      <div className="space-y-3">
        {items.map((item, index) => {
          // Har item ka apna specific icon yahan se pick hoga
          const ItemIcon = item.icon || Mail;
          return (
            <div key={index} className="flex items-start gap-3">
              <ItemIcon className="w-5 h-5 text-cyan-300 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                {item.label && (
                  <div className="font-medium text-slate-300 mb-0.5">
                    {item.label}
                  </div>
                )}
                <div className="text-white whitespace-pre-line">
                  {item.value}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ContactUsSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    schoolName: "",
    phone: "",
    inquiryType: "",
    message: "",
    students: "",
    agreePolicy: false,
  });

  const contactInfo = {
    sales: {
      title: t("contact.salesInquiries"),
      items: [
        { label: t("contact.email"), value: "sales@remoteschoolsystem.com", icon: Mail },
        { label: t("contact.phone"), value: "--", icon: Phone },
        { label: t("contact.hours"), value: t("contact.hoursSales"), icon: Clock },
      ],
    },
    support: {
      title: t("contact.customerSupport"),
      items: [
        { label: t("contact.email"), value: "support@remoteschoolsystem.com", icon: Mail },
        { label: t("contact.phone"), value: "1-800-RSS-HELP", icon: Phone },
        { label: t("contact.hours"), value: t("contact.hoursSupport"), icon: Clock },
      ],
    },
    office: {
      title: t("contact.mainOffice"),
      items: [
        { label: "", value: t("contact.officeAddress"), icon: MapPin },
      ],
    },
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  const inquiryTypes = [
    t("contact.generalInquiry"),
    t("contact.productDemo"),
    t("contact.technicalSupport"),
    t("contact.billingQuestion"),
    t("contact.partnership"),
    t("contact.other"),
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#08112b] via-[#101b3d] to-[#0a1128] py-12 sm:py-16 lg:py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 -left-16 h-72 w-72 rounded-full bg-teal-500/10 blur-2xl" />
        <div className="absolute bottom-0 -right-16 h-72 w-72 rounded-full bg-cyan-500/10 blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            {t("contact.title")}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 mb-10 sm:mb-12">
          <div className="lg:col-span-8 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
              {t("contact.sendMessage")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-slate-200 mb-2">
                  {t("contact.fullName")}
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder={t("contact.placeholderName")}
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-white/15 bg-slate-900/45 text-white placeholder-slate-400 rounded-xl focus:outline-none focus:border-cyan-300 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-200 mb-2">
                  {t("contact.emailAddress")}
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder={t("contact.placeholderEmail")}
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-white/15 bg-slate-900/45 text-white placeholder-slate-400 rounded-xl focus:outline-none focus:border-cyan-300 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-slate-200 mb-2">
                  School/District Name *
                </label>
                <input
                  type="text"
                  name="schoolName"
                  placeholder="Lincoln High School"
                  value={formData.schoolName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-white/15 bg-slate-900/45 text-white placeholder-slate-400 rounded-xl focus:outline-none focus:border-cyan-300 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-200 mb-2">
                  {t("contact.phoneNumber")}
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder={t("contact.placeholderPhone")}
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-white/15 bg-slate-900/45 text-white placeholder-slate-400 rounded-xl focus:outline-none focus:border-cyan-300 transition-colors"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-200 mb-2">
                {t("contact.inquiryType")}
              </label>
              <select
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-white/15 bg-slate-900/45 text-white rounded-xl focus:outline-none focus:border-cyan-300 transition-colors"
              >
                <option value="">{t("contact.selectInquiryType")}</option>
                {inquiryTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-200 mb-2">
                {t("contact.message")}
              </label>
              <textarea
                name="message"
                placeholder={t("contact.placeholderMessage")}
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 border border-white/15 bg-slate-900/45 text-white placeholder-slate-400 rounded-xl focus:outline-none focus:border-cyan-300 transition-colors resize-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-200 mb-2">
                {t("contact.numberOfStudents")}
              </label>
              <input
                type="text"
                name="schoolName"
                placeholder=""
                value={formData.schoolName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-white/15 bg-slate-900/45 text-white placeholder-slate-400 rounded-xl focus:outline-none focus:border-cyan-300 transition-colors"
              />
            </div>
            <div className="mb-6">
              <label className="flex items-start gap-2 cursor-pointer">
                <span className="text-xs text-slate-300 mt-5 leading-relaxed">
                  {t("contact.agreePolicy")}
                </span>
              </label>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white py-3.5 rounded-xl font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-colors shadow-md shadow-cyan-500/20"
            >
              <Send className="w-5 h-5" /> {t("contact.sendMessageBtn")}
            </button>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <ContactCard {...contactInfo.sales} />
            <ContactCard {...contactInfo.support} />
            <ContactCard {...contactInfo.office} />

            <div className="rounded-2xl border border-cyan-300/25 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 p-5 sm:p-6 text-white">
              <h3 className="font-bold text-lg mb-2">
                {t("contact.trustedBySchools")}
              </h3>
              <p className="text-sm text-white/90 mb-2 leading-relaxed">
                {t("contact.reviewedLiked")}
              </p>
              <p className="text-xs text-cyan-100 cursor-pointer hover:underline">
                {t("contact.watchOnline")}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
            {t("contact.otherWays")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            <div className="rounded-xl p-5 text-center border border-white/10 bg-slate-900/40 hover:border-cyan-300/30 transition-colors">
              <h4 className="font-bold text-white mb-2">{t("contact.scheduleDemo")}</h4>
              <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                {t("contact.scheduleDemoDesc")}
              </p>
              <button className="text-cyan-300 font-semibold text-sm hover:underline">
                {t("contact.viewCalendar")}
              </button>
            </div>

            <div className="rounded-xl p-5 text-center border border-white/10 bg-slate-900/40 hover:border-cyan-300/30 transition-colors">
              <h4 className="font-bold text-white mb-2">{t("contact.helpCenter")}</h4>
              <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                {t("contact.helpCenterDesc")}
              </p>
              <button className="text-cyan-300 font-semibold text-sm hover:underline">
                {t("contact.visitHelpCenter")}
              </button>
            </div>

            <div className="rounded-xl p-5 text-center border border-white/10 bg-slate-900/40 hover:border-cyan-300/30 transition-colors">
              <h4 className="font-bold text-white mb-2">{t("contact.liveChat")}</h4>
              <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                {t("contact.liveChatDesc")}
              </p>
              <button className="text-cyan-300 font-semibold text-sm hover:underline">
                {t("contact.startChat")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
