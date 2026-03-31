import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const StatItem = ({ end, suffix, label, duration = 2000 }) => {
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

      // Easing function for smooth animation
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

  // Format number with commas
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div ref={ref} className="text-center px-4">
      <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark-1 mb-2">
        {formatNumber(count)}
        {suffix}
      </h3>
      <p className="text-sm sm:text-base lg:text-lg text-dark-2 font-medium">
        {label}
      </p>
    </div>
  );
};

const StatsSection = () => {
  const { t } = useTranslation();
  const stats = [
    { end: 5, suffix: "M+", labelKey: "stats.studentsServed" },
    { end: 12000, suffix: "+", labelKey: "stats.schools" },
    { end: 45, suffix: "+", labelKey: "stats.countries" },
    { end: 99.9, suffix: "%", labelKey: "stats.uptime", isDecimal: true },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <StatItem
                end={stat.end}
                suffix={stat.suffix}
                label={t(stat.labelKey)}
                duration={2000}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
