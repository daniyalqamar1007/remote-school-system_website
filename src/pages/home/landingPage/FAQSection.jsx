import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Typography } from "antd";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div
      className={`border border-black/5 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${
        isOpen ? "bg-yellow-accent-1" : "bg-white"
      }`}
    >
      <button
        onClick={onClick}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-opacity-80 transition-colors"
      >
        <span
          className={`font-semibold text-sm sm:text-base ${
            isOpen ? "text-dark-1" : "text-dark-2"
          }`}
        >
          {question}
        </span>
        <div className="flex-shrink-0 ml-4">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-dark-2" />
          ) : (
            <ChevronDown className="w-5 h-5 text-dark-2" />
          )}
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-4 pt-0">
          <p className="text-sm text-dark-2 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    { questionKey: "faqHome.q1", answerKey: "faqHome.a1" },
    { questionKey: "faqHome.q2", answerKey: "faqHome.a2" },
    { questionKey: "faqHome.q3", answerKey: "faqHome.a3" },
    { questionKey: "faqHome.q4", answerKey: "faqHome.a4" },
    { questionKey: "faqHome.q5", answerKey: "faqHome.a5" },
    { questionKey: "faqHome.q6", answerKey: "faqHome.a6" },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Typography className="md:text-5xl text-4xl font-semibold text-dark-5 mb-3">
            {t("faqHome.title")}
          </Typography>
          <p className="text-sm sm:text-base text-dark-2 max-w-2xl mx-auto leading-relaxed">
            {t("faqHome.subtitle")}
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={t(faq.questionKey)}
              answer={t(faq.answerKey)}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
