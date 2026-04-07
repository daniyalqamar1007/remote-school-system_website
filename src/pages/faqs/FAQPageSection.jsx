import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Search, ChevronRight, ChevronDown } from "lucide-react";

const FAQCategory = ({ title, questions }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base sm:text-lg font-bold text-white">{title}</h3>
        <span className="text-xs font-semibold text-cyan-200 bg-cyan-500/10 border border-cyan-300/30 rounded-full px-2 py-1">
          {questions.length}
        </span>
      </div>
      <div className="space-y-3">
        {questions.map((question, index) => (
          <div
            key={index}
            className="bg-slate-900/45 border border-white/10 rounded-xl overflow-hidden hover:border-cyan-300/35 transition-colors duration-300"
          >
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full px-4 sm:px-5 py-3.5 sm:py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
            >
              <span className="text-sm sm:text-base font-medium text-slate-100 pr-3">
                {question.q}
              </span>
              {openIndex === index ? (
                <ChevronDown className="w-5 h-5 text-cyan-300 flex-shrink-0 ml-2" />
              ) : (
                <ChevronRight className="w-5 h-5 text-slate-300 flex-shrink-0 ml-2" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-4 sm:px-5 pb-4 pt-0">
                <p className="text-sm text-slate-300 leading-relaxed">
                  {question.a}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const FAQPageSection = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");

  const faqData = [
    {
      categoryKey: "faqPage.userRolesAccess",
      questions: [
        { qKey: "faqPage.roles.q1", aKey: "faqPage.roles.a1" },
        { qKey: "faqPage.roles.q2", aKey: "faqPage.roles.a2" },
        { qKey: "faqPage.roles.q3", aKey: "faqPage.roles.a3" },
      ],
    },
    {
      categoryKey: "faqPage.parentStudentFeatures",
      questions: [
        { qKey: "faqPage.parent.q1", aKey: "faqPage.parent.a1" },
        { qKey: "faqPage.parent.q2", aKey: "faqPage.parent.a2" },
        { qKey: "faqPage.parent.q3", aKey: "faqPage.parent.a3" },
      ],
    },
    {
      categoryKey: "faqPage.reportsAnalytics",
      questions: [
        { qKey: "faqPage.reports.q1", aKey: "faqPage.reports.a1" },
        { qKey: "faqPage.reports.q2", aKey: "faqPage.reports.a2" },
        { qKey: "faqPage.reports.q3", aKey: "faqPage.reports.a3" },
      ],
    },
    {
      categoryKey: "faqPage.securityCompliance",
      questions: [
        { qKey: "faqPage.security.q1", aKey: "faqPage.security.a1" },
        { qKey: "faqPage.security.q2", aKey: "faqPage.security.a2" },
        { qKey: "faqPage.security.q3", aKey: "faqPage.security.a3" },
      ],
    },
    {
      categoryKey: "faqPage.trialBilling",
      questions: [
        { qKey: "faqPage.trial.q1", aKey: "faqPage.trial.a1" },
        { qKey: "faqPage.trial.q2", aKey: "faqPage.trial.a2" },
        { qKey: "faqPage.trial.q3", aKey: "faqPage.trial.a3" },
      ],
    },
    {
      categoryKey: "faqPage.integrationsApi",
      questions: [
        { qKey: "faqPage.integrations.q1", aKey: "faqPage.integrations.a1" },
        { qKey: "faqPage.integrations.q2", aKey: "faqPage.integrations.a2" },
        { qKey: "faqPage.integrations.q3", aKey: "faqPage.integrations.a3" },
      ],
    },
  ];

  const filteredFAQData = faqData
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (item) =>
          t(item.qKey).toLowerCase().includes(searchQuery.toLowerCase()) ||
          t(item.aKey).toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.questions.length > 0);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#08112b] via-[#101b3d] to-[#0a1128] py-12 sm:py-16 lg:py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-teal-500/10 blur-2xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 mb-10 sm:mb-12">
          <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
              {t("faqPage.title")}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed mb-6">
              {t("faqPage.subtitle")}
            </p>

            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-200" />
              <input
                type="text"
                placeholder={t("faqPage.searchPlaceholder")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 border border-white/15 bg-slate-900/50 text-white placeholder-slate-400 rounded-xl focus:outline-none focus:border-cyan-300 transition-colors text-sm"
              />
            </div>
          </div>

          <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/12 to-teal-500/10 p-5 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {filteredFAQData.map((category, index) => (
                <span
                  key={index}
                  className="text-xs sm:text-sm px-3 py-1.5 rounded-full border border-cyan-300/30 bg-cyan-500/10 text-cyan-100"
                >
                  {t(category.categoryKey)}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div>
          {filteredFAQData.length > 0 ? (
            <div className="grid lg:grid-cols-2 gap-5 lg:gap-6">
              {filteredFAQData.map((category, index) => (
                <FAQCategory
                  key={index}
                  title={t(category.categoryKey)}
                  questions={category.questions.map((item) => ({
                    q: t(item.qKey),
                    a: t(item.aKey),
                  }))}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 rounded-2xl border border-white/10 bg-white/5">
              <p className="text-slate-300">
                {t("faqPage.noResults")}
              </p>
            </div>
          )}
        </div>

        <div className="mt-12 sm:mt-14 text-center rounded-2xl border border-cyan-300/20 bg-gradient-to-r from-teal-500/15 via-cyan-500/10 to-blue-500/15 p-8 sm:p-10">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            {t("faqPage.stillHaveQuestions")}
          </h3>
          <p className="text-sm sm:text-base text-slate-200 mb-6">
            {t("faqPage.supportHere")}
          </p>
          <button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white px-8 py-3 rounded-xl font-semibold text-sm sm:text-base transition-colors shadow-md shadow-cyan-500/20">
            {t("faqPage.contactSupport")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQPageSection;
