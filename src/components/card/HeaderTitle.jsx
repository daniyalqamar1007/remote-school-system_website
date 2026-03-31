import { Button, Typography } from "antd";
import { FaArrowLeft } from "react-icons/fa6";

const HeaderTitle = ({title}) => {
  return (
 <div className="flex items-center gap-2 mb-6">
        <div onClick={() => window.history.back()} className=" border-none bg-transparent p-2 rounded-full text-primary hover:bg-primary/30 hover:text-primary flex items-center gap-2 cursor-pointer">
          <FaArrowLeft className="text-xl"/>
        </div>
        <Typography className="text-24 font-semi font-sans">{title}</Typography>
      </div>
  );
};

export default HeaderTitle;
