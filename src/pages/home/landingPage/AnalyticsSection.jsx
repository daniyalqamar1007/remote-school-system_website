import { useTranslation } from "react-i18next";
import { useMemo, useState } from "react";
import { TrendingUp, BarChart3, AlertCircle } from "lucide-react";
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
    { icon: TrendingUp, textKey: "analytics.dropoutRisk", descKey: "analytics.dropoutRiskDesc" },
    { icon: BarChart3, textKey: "analytics.attendanceTrends", descKey: "analytics.attendanceTrendsDesc" },
    { icon: AlertCircle, textKey: "analytics.performancePrediction", descKey: "analytics.performancePredictionDesc" },
  ];

  const stats = useMemo(() => {
    const values = chartData.map((d) => Number(d.value) || 0);
    const attendance = values.length ? Math.round(values.reduce((a, b) => a + b, 0) / values.length) : 94;
    const lastVal = values[values.length - 1];
    return [
      { value: `${attendance}%`, labelKey: "analytics.attendance", color: "from-teal-500 to-cyan-600" },
      { value: (2.8 + (lastVal || 94) / 100).toFixed(1), labelKey: "analytics.avgGpa", color: "from-cyan-500 to-blue-600" },
      { value: String(Math.max(0, 15 - Math.floor((lastVal || 94) / 6))), labelKey: "analytics.atRisk", color: "from-amber-500 to-orange-600" },
    ];
  }, [chartData]);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#0a1128] to-[#1a1f3a] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-2xl -z-10\" style={{ animation: "pulse 4s ease-in-out infinite" }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-2xl -z-10" style={{ animation: "pulse 4s ease-in-out infinite 1s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-3 bg-teal-500/20 border-2 border-teal-400/60 rounded-full px-5 py-3 mb-8 group hover:bg-teal-500/30 hover:border-teal-300/80 transition-all duration-300 cursor-pointer transform hover:scale-105">
              <TrendingUp className="w-5 h-5 text-teal-300 group-hover:text-teal-200 transition-colors" />
              <span className="text-sm font-semibold text-teal-200 group-hover:text-teal-100 transition-colors">Advanced Analytics</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 drop-shadow-lg leading-tight">
              {t("analytics.title")}
            </h2>

            <p className="text-white/90 text-sm sm:text-base mb-8 leading-relaxed drop-shadow-md font-semibold">
              {t("analytics.subtitle")}
            </p>

            {/* Features list */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="group relative flex items-start gap-3 p-3 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300 transform hover:translate-x-1 cursor-pointer">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="w-5 h-5 text-white drop-shadow-lg" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm mb-0.5 drop-shadow-md">{t(feature.textKey)}</h4>
                      <p className="text-white/80 font-semibold text-xs">{t(feature.descKey)}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map((stat, index) => (
                <div key={index} className="group relative">
                  <div className={`absolute -inset-1 bg-gradient-to-br ${stat.color} opacity-30 group-hover:opacity-60 transition-opacity rounded-lg blur-lg`} />
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 border border-white/20 group-hover:border-white/40 rounded-lg p-5 text-center hover:scale-110 transition-all duration-300 transform group-hover:-translate-y-1 cursor-pointer">
                    <div className={`text-4xl font-black text-white drop-shadow-lg mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-xs font-bold text-white/80 uppercase tracking-wider drop-shadow-md">{t(stat.labelKey)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Chart */}
          <div className="order-1 lg:order-2 relative group">
            <div className="absolute -inset-2 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl blur-2xl" />
            <div className="relative bg-white/10 backdrop-blur-xl border-2 border-white/30 rounded-3xl p-8 hover:border-white/50 hover:bg-white/15 transition-all duration-300 transform group-hover:-translate-y-2 hover:shadow-2xl">
              <PredictionChart data={chartData} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
