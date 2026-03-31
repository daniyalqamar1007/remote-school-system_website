import { useTranslation } from "react-i18next";
import { useMemo, useState } from "react";
import { Check } from "lucide-react";
import { Typography } from "antd";
import PredictionChart from "./PredictionChart";

const defaultChartData = [
  { label: "Jan", value: 88 },
  { label: "Feb", value: 91 },
  { label: "Mar", value: 89 },
  { label: "Apr", value: 93 },
  { label: "May", value: 94 },
  { label: "Jun", value: 96 },
];

const AnalyticsSection = () => {
  const { t } = useTranslation();
  const [chartData] = useState(defaultChartData);
  const features = [
    { icon: Check, textKey: "analytics.dropoutRisk", descKey: "analytics.dropoutRiskDesc" },
    { icon: Check, textKey: "analytics.attendanceTrends", descKey: "analytics.attendanceTrendsDesc" },
    { icon: Check, textKey: "analytics.performancePrediction", descKey: "analytics.performancePredictionDesc" },
  ];
  const stats = useMemo(() => {
    const values = chartData.map((d) => Number(d.value) || 0);
    const attendance = values.length ? Math.round(values.reduce((a, b) => a + b, 0) / values.length) : 94;
    const lastVal = values[values.length - 1];
    return [
      { value: `${attendance}%`, labelKey: "analytics.attendance" },
      { value: (2.8 + (lastVal || 94) / 100).toFixed(1), labelKey: "analytics.avgGpa" },
      { value: String(Math.max(0, 15 - Math.floor((lastVal || 94) / 6))), labelKey: "analytics.atRisk" },
    ];
  }, [chartData]);

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <Typography className="md:text-4xl text-3xl font-semibold text-dark-5 mb-3">
              {t("analytics.title")}
            </Typography>
            <p className="text-base text-dark-2 mb-8">
              {t("analytics.subtitle")}
            </p>
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-accent-1 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-1 mb-1">{t(feature.textKey)}</h4>
                    <p className="text-sm text-dark-2">{t(feature.descKey)}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-neutral-2">
              {stats.map((stat, index) => (
                <div key={index} className="text-left bg-blue-accent-4 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-blue-accent-1 mb-1">{stat.value}</div>
                  <div className="text-xs text-dark-2 uppercase tracking-wide">{t(stat.labelKey)}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <PredictionChart data={chartData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
