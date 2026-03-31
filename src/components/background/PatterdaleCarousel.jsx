import React, { useState } from "react";
import { Button, Carousel, Typography } from "antd";
import { carouselData } from "../../data/mockData";

const PatterdaleCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = React.useRef(null);

  const handleTabClick = (index) => {
    setActiveSlide(index);
    carouselRef.current?.goTo(index);
  };

  return (
    <div className="w-full max-w-lg py-8">
      {/* Tabs */}
      <div className="flex gap-4 justify-center">
        {carouselData.map((item, index) => (
          <button
            key={item.id}
            onClick={() => handleTabClick(index)}
            className={`h-4 w-32 rounded-full transition-all duration-300 ${
              activeSlide === index
                ? "bg-town-gradient"
                : "bg-gray-200"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      {/* Carousel */}
      <Carousel
        ref={carouselRef}
        dots={false}
        // autoplay
        afterChange={(current) => setActiveSlide(current)}
        className="my-8"
      >
        {carouselData.map((slide) => (
          <div key={slide.id}>
            <div className="flex flex-col items-center justify-around">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-80 object-contain"
              />
              {/* Text Content */}
              <div className="text-center pt-10">
                <Typography className="text-32 leading-none font-semibold text-gray-900 mb-3">
                  {slide.title}
                </Typography>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      {/* Get Started Button */}
      <Button className="w-full rounded-full bg-town-gradient border-none text-white font-semibold py-6 hover:opacity-90">
        Get Started
      </Button>
    </div>
  );
};

export default PatterdaleCarousel;
