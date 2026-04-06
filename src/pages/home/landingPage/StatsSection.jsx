import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { TrendingUp, Users, Globe, Shield } from "lucide-react";

const StatItem = ({ end, suffix, label, duration = 2000, icon: Icon, bgGradient }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div ref={ref} className="group relative">
      {/* Animated background gradient */}
      <div className={`absolute -inset-1 ${bgGradient} opacity-30 group-hover:opacity-60 transition-opacity duration-300 rounded-2xl blur-xl`} />
      
      {/* Card content */}
      <div className={`relative ${bgGradient} rounded-2xl p-5 sm:p-6 hover:scale-105 transition-all duration-300 transform group-hover:-translate-y-1`}>
        <div className="space-y-4">
          {Icon && (
            <Icon className="w-10 h-10 text-white drop-shadow-lg" />
          )}
          <div>
            <div className="text-4xl sm:text-5xl font-black text-white drop-shadow-lg">
              {formatNumber(count)}
              <span className="text-3xl ml-1">{suffix}</span>
            </div>
            <p className="text-white/95 font-bold text-sm sm:text-base mt-3 drop-shadow-md">
              {label}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatsSection = () => {
  const { t } = useTranslation();
  const stats = [
    { 
      end: 5, 
      suffix: "M+", 
      labelKey: "stats.studentsServed", 
      icon: Users,
      bgGradient: "bg-gradient-to-br from-teal-500 to-cyan-600"
    },
    { 
      end: 12000, 
      suffix: "+", 
      labelKey: "stats.schools",
      icon: Globe,
      bgGradient: "bg-gradient-to-br from-cyan-500 to-blue-600"
    },
    { 
      end: 45, 
      suffix: "+", 
      labelKey: "stats.countries",
      icon: TrendingUp,
      bgGradient: "bg-gradient-to-br from-blue-500 to-indigo-600"
    },
    { 
      end: 99.9, 
      suffix: "%", 
      labelKey: "stats.uptime",
      icon: Shield,
      bgGradient: "bg-gradient-to-br from-indigo-500 to-purple-600"
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#0a1128] to-[#1a1f3a] overflow-hidden">
      {/* Decorative animated elements */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-teal-500/15 rounded-full blur-2xl -z-10" style={{ animation: "pulse 4s ease-in-out infinite" }} />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-cyan-500/15 rounded-full blur-2xl -z-10" style={{ animation: "pulse 4s ease-in-out infinite 1s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header - Super Visible */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 drop-shadow-lg">
            Trusted by <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">Global Educators</span>
          </h2>
          <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto drop-shadow-md font-semibold">
            Join thousands of schools revolutionizing education management worldwide
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <StatItem
                end={stat.end}
                suffix={stat.suffix}
                label={t(stat.labelKey)}
                duration={2000}
                icon={stat.icon}
                bgGradient={stat.bgGradient}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
