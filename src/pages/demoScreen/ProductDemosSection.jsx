import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Play, Users, Video, BarChart3, Shield, Layout } from "lucide-react";

const ICON_MAP = { Users, Video, BarChart3, Shield, Layout };

const DemoCard = ({ image, icon: Icon, title, description, duration, watchDemoText, videoUrl, onWatchDemo }) => {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-cyan-300/35 transition-colors duration-300">
      <div className="relative h-48 overflow-hidden bg-slate-900">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        <div className="absolute top-3 right-3 bg-slate-900/80 border border-white/20 text-white text-xs px-2 py-1 rounded-lg flex items-center gap-1">
          {duration}
        </div>
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex items-start gap-3 mb-3">
          <div className="flex-shrink-0 w-10 h-10 bg-cyan-500/15 border border-cyan-300/30 rounded-lg flex items-center justify-center">
            <Icon className="w-5 h-5 text-cyan-200" />
          </div>
          <h3 className="font-bold text-white text-base pt-1">{title}</h3>
        </div>
        <p className="text-sm text-slate-300 mb-4 leading-relaxed">
          {description}
        </p>
        <button
          type="button"
          onClick={() => onWatchDemo(videoUrl)}
          className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-colors duration-300"
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
    <section className="relative overflow-hidden bg-gradient-to-b from-[#08112b] via-[#101b3d] to-[#0a1128] py-12 sm:py-16 lg:py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 -left-12 h-72 w-72 rounded-full bg-teal-500/10 blur-2xl" />
        <div className="absolute bottom-0 -right-12 h-72 w-72 rounded-full bg-cyan-500/10 blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 mb-10 sm:mb-12 items-stretch">
          <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 lg:p-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
              {t("demo.title")}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed max-w-2xl">
              {t("demo.subtitle")}
            </p>
          </div>
          <div className="lg:col-span-5 rounded-2xl border border-cyan-300/20 bg-gradient-to-br from-teal-500/15 to-cyan-500/10 p-5 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Highlights</h3>
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-xl border border-white/15 bg-slate-900/40 p-3 text-center">
                <div className="text-2xl font-black text-white">{demos.length || 0}</div>
                <div className="text-xs text-slate-300">Demos</div>
              </div>
              <div className="rounded-xl border border-white/15 bg-slate-900/40 p-3 text-center">
                <div className="text-2xl font-black text-white">HD</div>
                <div className="text-xs text-slate-300">Quality</div>
              </div>
              <div className="rounded-xl border border-white/15 bg-slate-900/40 p-3 text-center">
                <div className="text-2xl font-black text-white">Live</div>
                <div className="text-xs text-slate-300">Preview</div>
              </div>
            </div>
          </div>
        </div>
        {loading ? (
          <div className="flex justify-center py-16">
            <div className="h-10 w-10 rounded-full border-2 border-cyan-300 border-t-transparent animate-spin" />
          </div>
        ) : demos.length === 0 ? (
          <p className="text-center text-slate-300 py-12">{t("demo.subtitle")}</p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
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
                  className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden border border-white/20 shadow-xl"
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
