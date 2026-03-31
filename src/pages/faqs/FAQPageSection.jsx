import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Search, ChevronRight, ChevronDown } from "lucide-react";

const FAQCategory = ({ title, questions }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-bold text-dark-1 mb-4">{title}</h3>
      <div className="space-y-2">
        {questions.map((question, index) => (
          <div
            key={index}
            className="bg-white border border-neutral-2 rounded-lg overflow-hidden hover:border-blue-accent-1 transition-all duration-300"
          >
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
            >
              <span className="text-sm font-medium text-dark-2">
                {question.q}
              </span>
              {openIndex === index ? (
                <ChevronDown className="w-5 h-5 text-dark-2 flex-shrink-0 ml-4" />
              ) : (
                <ChevronRight className="w-5 h-5 text-dark-2 flex-shrink-0 ml-4" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-5 pb-4 pt-0">
                <p className="text-sm text-dark-2 leading-relaxed">
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
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-dark-1 mb-4">
            {t("faqPage.title")}
          </h2>
          <p className="text-xl text-dark-2 mb-8">
            {t("faqPage.subtitle")}
          </p>
          <div className="max-w-7xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark-2" />
            <input
              type="text"
              placeholder={t("faqPage.searchPlaceholder")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-neutral-2 rounded-lg focus:outline-none focus:border-blue-accent-1 transition-colors text-sm"
            />
          </div>
        </div>

        {/* FAQ Categories */}
        <div>
          {filteredFAQData.length > 0 ? (
            filteredFAQData.map((category, index) => (
              <FAQCategory
                key={index}
                title={t(category.categoryKey)}
                questions={category.questions.map((item) => ({
                  q: t(item.qKey),
                  a: t(item.aKey),
                }))}
              />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-dark-2">
                {t("faqPage.noResults")}
              </p>
            </div>
          )}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-16 text-center bg-white rounded-2xl p-8 shadow-md">
          <h3 className="text-2xl font-bold text-dark-1 mb-3">
            {t("faqPage.stillHaveQuestions")}
          </h3>
          <p className="text-sm text-dark-2 mb-6">
            {t("faqPage.supportHere")}
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-3 rounded-lg font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            {t("faqPage.contactSupport")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQPageSection;
