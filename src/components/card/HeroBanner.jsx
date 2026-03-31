import { image } from "../../assets/image";
import { Typography } from "antd";

const HeroBanner = () => {
  return (
    <div className="bg-town-gradient rounded-3xl p-5 text-white relative overflow-hidden h-[240px] flex items-center">
      <div className="relative z-10 max-w-[50%]">
        <Typography className="text-24 font-bold leading-tight text-white mb-6">
          Explore Trusted Patterdale Pedigrees
        </Typography>
        <button className="bg-white/30 hover:bg-white/40 transition-colors text-white px-6 py-2.5 rounded-lg font-medium text-14">
          Learn more
        </button>
      </div>
      <div className="absolute right-[-40px] top-[59%] translate-y-[-50%]">
        {/* Outer layer */}
        <div className="w-[280px] h-[280px] rounded-full bg-accent flex items-center justify-center">
          {/* Inner layer */}
          <div className="w-[200px] h-[200px] rounded-full bg-beta backdrop-blur-sm flex items-center justify-center">
            <img src={image.dog} alt="Dog" className="w-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
