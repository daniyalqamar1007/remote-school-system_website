import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const FAQItem = ({ question, answer, isOpen, onClick, index }) => {
  return (
    <div
      className={`group border-2 rounded-2xl overflow-hidden transition-all duration-300 ${
        isOpen 
          ? "bg-gradient-to-br from-teal-600/30 to-cyan-600/20 border-teal-400/80" 
          : "bg-white/5 border-white/20 hover:border-white/40 hover:bg-white/10"
      }`}
    >
      <button
        onClick={onClick}
        className="w-full px-4 sm:px-6 py-3 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
      >
        <div className="flex items-start gap-3 flex-1">
          <div className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center font-bold text-sm mt-0.5 transition-all ${
            isOpen 
              ? "bg-gradient-to-br from-teal-400 to-cyan-400 text-slate-900" 
              : "bg-white/20 text-white group-hover:bg-teal-500/30 group-hover:text-teal-300"
          }`}>
            {index + 1}
          </div>
          <span
            className={`font-bold text-sm sm:text-base leading-relaxed transition-colors drop-shadow-md ${
              isOpen 
                ? "text-white" 
                : "text-white/90 group-hover:text-white"
            }`}
          >
            {question}
          </span>
        </div>
        <div className="flex-shrink-0 ml-3">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-teal-300 drop-shadow-md" />
          ) : (
            <ChevronDown className="w-5 h-5 text-white/60 group-hover:text-teal-300 transition-colors drop-shadow-md" />
          )}
        </div>
      </button>
      {isOpen && (
        <div className="px-4 sm:px-6 pb-4 pt-2 border-t-2 border-teal-400/40 bg-gradient-to-b from-transparent to-white/5">
          <p className="text-xs sm:text-sm text-white/85 leading-relaxed pl-8 drop-shadow-md font-semibold">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(0);
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
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#0a1128] to-[#1a1f3a] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-teal-500/10 rounded-full blur-2xl -z-10" style={{ animation: "pulse 4s ease-in-out infinite" }} />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-2xl -z-10" style={{ animation: "pulse 4s ease-in-out infinite 1s" }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-teal-500/20 border-2 border-teal-400/60 rounded-full px-4 py-2 mb-6 group hover:bg-teal-500/30 hover:border-teal-300/80 transition-all duration-300 cursor-pointer transform hover:scale-105">
            <HelpCircle className="w-4 h-4 text-teal-300 group-hover:text-teal-200 transition-colors" />
            <span className="text-xs font-bold text-teal-200 group-hover:text-teal-100 transition-colors">Got Questions?</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 drop-shadow-lg leading-tight">
            Frequently Asked <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">Questions</span>
          </h2>
          
          <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed drop-shadow-md font-semibold">
            {t("faqHome.subtitle")}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={t(faq.questionKey)}
              answer={t(faq.answerKey)}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
              index={index}
            />
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-14">
          <p className="text-white/80 mb-6 text-lg font-semibold">Still have questions?</p>
          <button className="inline-flex items-center gap-3 px-10 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 hover:from-teal-400 hover:via-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 text-lg shadow-2xl hover:shadow-teal-500/50 drop-shadow-lg">
            <HelpCircle className="w-5 h-5" />
            Contact our support team
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
