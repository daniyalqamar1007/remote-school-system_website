import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Play, Users, Video, BarChart3, Shield, Layout } from "lucide-react";

const ICON_MAP = { Users, Video, BarChart3, Shield, Layout };

const DemoCard = ({ image, icon: Icon, title, description, duration, watchDemoText, videoUrl, onWatchDemo }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
      <div className="relative h-48 overflow-hidden bg-gray-200">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
          {duration}
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start gap-3 mb-3">
          <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <Icon className="w-5 h-5 text-blue-accent-1" />
          </div>
          <h3 className="font-bold text-dark-1 text-base pt-1">{title}</h3>
        </div>
        <p className="text-sm text-dark-2 mb-4 leading-relaxed">
          {description}
        </p>
        <button
          type="button"
          onClick={() => onWatchDemo(videoUrl)}
          className="w-full bg-blue-accent-1 hover:bg-blue-accent-2 text-white py-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300"
        >
          <Play className="w-4 h-4" />
          {watchDemoText}
        </button>
      </div>
    </div>
  );
};

const ProductDemosSection = () => {
  const { t } = useTranslation();
  const [demos, setDemos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [playingVideoUrl, setPlayingVideoUrl] = useState(null);

  useEffect(() => {
    const base = import.meta.env.VITE_API_BASE_URL;
    const url = base
      ? `${String(base).replace(/\/$/, "")}/global/demo-videos`
      : import.meta.env.DEV
        ? "/api/global/demo-videos"
        : null;
    if (!url) {
      setLoading(false);
      return;
    }
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        if (json.success && Array.isArray(json.data)) {
          setDemos(json.data);
        }
      })
      .catch(() => setDemos([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-1 mb-4">
            {t("demo.title")}
          </h2>
          <p className="text-xl text-dark-2 max-w-2xl mx-auto">
            {t("demo.subtitle")}
          </p>
        </div>
        {loading ? (
          <div className="flex justify-center py-16">
            <div className="h-10 w-10 rounded-full border-2 border-blue-accent-1 border-t-transparent animate-spin" />
          </div>
        ) : demos.length === 0 ? (
          <p className="text-center text-dark-2 py-12">{t("demo.subtitle")}</p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {demos.map((demo) => {
                const IconComponent = ICON_MAP[demo.icon] || Users;
                return (
                  <DemoCard
                    key={demo._id}
                    image={demo.imageUrl}
                    icon={IconComponent}
                    title={t(demo.titleKey)}
                    description={t(demo.descKey)}
                    duration={demo.duration || "0:00"}
                    watchDemoText={t("demo.watchDemo")}
                    videoUrl={demo.videoUrl}
                    onWatchDemo={setPlayingVideoUrl}
                  />
                );
              })}
            </div>
            {playingVideoUrl && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
                onClick={() => setPlayingVideoUrl(null)}
                role="dialog"
                aria-modal="true"
                aria-label="Video modal"
              >
                <div
                  className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden shadow-xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    type="button"
                    className="absolute top-2 right-2 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80"
                    onClick={() => setPlayingVideoUrl(null)}
                    aria-label="Close"
                  >
                    ×
                  </button>
                  <video
                    src={playingVideoUrl}
                    controls
                    autoPlay
                    className="w-full max-h-[80vh]"
                    onEnded={() => setPlayingVideoUrl(null)}
                  />
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default ProductDemosSection;
