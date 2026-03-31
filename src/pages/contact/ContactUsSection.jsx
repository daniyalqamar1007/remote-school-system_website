import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Mail, MapPin, Send, Phone, Clock } from "lucide-react";

const ContactCard = ({ title, items }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
      <h3 className="font-bold text-dark-1 text-base mb-4">{title}</h3>
      <div className="space-y-3">
        {items.map((item, index) => {
          // Har item ka apna specific icon yahan se pick hoga
          const ItemIcon = item.icon || Mail;
          return (
            <div key={index} className="flex items-start gap-3">
              <ItemIcon className="w-5 h-5 text-blue-accent-1 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                {item.label && (
                  <div className="font-medium text-dark-2 mb-0.5">
                    {item.label}
                  </div>
                )}
                <div className="text-dark-1 whitespace-pre-line">
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
        { label: t("contact.email"), value: "sales@studentrevelation.com", icon: Mail },
        { label: t("contact.phone"), value: "--", icon: Phone },
        { label: t("contact.hours"), value: t("contact.hoursSales"), icon: Clock },
      ],
    },
    support: {
      title: t("contact.customerSupport"),
      items: [
        { label: t("contact.email"), value: "support@studentrevelation.com", icon: Mail },
        { label: t("contact.phone"), value: "1-800-SRS-HELP", icon: Phone },
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
    <section className="bg-neutral-4 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-1 mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-sm sm:text-base text-dark-2 max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Side Cards */}
          <div className="lg:col-span-1 space-y-4">
            <ContactCard {...contactInfo.sales} />
            <ContactCard {...contactInfo.support} />
            <ContactCard {...contactInfo.office} />

            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">
                {t("contact.trustedBySchools")}
              </h3>
              <p className="text-sm text-white text-opacity-90 mb-2">
                {t("contact.reviewedLiked")}
              </p>
              <p className="text-xs text-white text-opacity-75 cursor-pointer hover:underline">
                {t("contact.watchOnline")}
              </p>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-dark-1 mb-6">
                {t("contact.sendMessage")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-dark-2 mb-2">
                    {t("contact.fullName")}
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder={t("contact.placeholderName")}
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-2 rounded-lg focus:outline-none focus:border-blue-accent-1 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-2 mb-2">
                    {t("contact.emailAddress")}
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder={t("contact.placeholderEmail")}
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-2 rounded-lg focus:outline-none focus:border-blue-accent-1 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-dark-2 mb-2">
                    School/District Name *
                  </label>
                  <input
                    type="text"
                    name="schoolName"
                    placeholder="Lincoln High School"
                    value={formData.schoolName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-2 rounded-lg focus:outline-none focus:border-blue-accent-1 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-2 mb-2">
                    {t("contact.phoneNumber")}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder={t("contact.placeholderPhone")}
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-2 rounded-lg focus:outline-none focus:border-blue-accent-1 transition-colors"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-dark-2 mb-2">
                  {t("contact.inquiryType")}
                </label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-2 rounded-lg focus:outline-none focus:border-blue-accent-1 transition-colors bg-white"
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
                <label className="block text-sm font-medium text-dark-2 mb-2">
                  {t("contact.message")}
                </label>
                <textarea
                  name="message"
                  placeholder={t("contact.placeholderMessage")}
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-neutral-2 rounded-lg focus:outline-none focus:border-blue-accent-1 transition-colors resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark-2 mb-2">
                  {t("contact.numberOfStudents")}
                </label>
                <input
                  type="text"
                  name="schoolName"
                  placeholder=""
                  value={formData.schoolName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-2 rounded-lg focus:outline-none focus:border-blue-accent-1 transition-colors"
                />
              </div>
              <div className="mb-6">
                <label className="flex items-start gap-2 cursor-pointer">
                  {/* <input
                    type="checkbox"
                    name="agreePolicy"
                    checked={formData.agreePolicy}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 text-blue-accent-1 border-neutral-2 rounded focus:ring-blue-accent-1"
                  /> */}
                  <span className="text-xs text-dark-2 mt-6">
                    {t("contact.agreePolicy")}
                  </span>
                </label>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-blue-accent-1 hover:bg-blue-accent-2 text-white py-4 rounded-lg font-semibold text-base flex items-center justify-center gap-2 transition-all duration-300 shadow-md"
              >
                <Send className="w-5 h-5" /> {t("contact.sendMessageBtn")}
              </button>
            </div>
          </div>
        </div>

        {/* Section jo pehle missing tha - Other Ways to Connect */}
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-md">
          <h3 className="text-2xl font-bold text-dark-1 text-center mb-8">
            {t("contact.otherWays")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 text-center border border-gray-50 hover:border-blue-100 transition-colors">
              <h4 className="font-bold text-dark-1 mb-2">{t("contact.scheduleDemo")}</h4>
              <p className="text-sm text-dark-2 mb-4">
                {t("contact.scheduleDemoDesc")}
              </p>
              <button className="text-blue-accent-1 font-semibold text-sm hover:underline">
                {t("contact.viewCalendar")}
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 text-center border border-gray-50 hover:border-blue-100 transition-colors">
              <h4 className="font-bold text-dark-1 mb-2">{t("contact.helpCenter")}</h4>
              <p className="text-sm text-dark-2 mb-4">
                {t("contact.helpCenterDesc")}
              </p>
              <button className="text-blue-accent-1 font-semibold text-sm hover:underline">
                {t("contact.visitHelpCenter")}
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 text-center border border-gray-50 hover:border-blue-100 transition-colors">
              <h4 className="font-bold text-dark-1 mb-2">{t("contact.liveChat")}</h4>
              <p className="text-sm text-dark-2 mb-4">
                {t("contact.liveChatDesc")}
              </p>
              <button className="text-blue-accent-1 font-semibold text-sm hover:underline">
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
