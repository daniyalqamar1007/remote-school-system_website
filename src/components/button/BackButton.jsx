import { Button } from "antd";
import { IoArrowBackOutline } from "react-icons/io5";
import PropTypes from "prop-types";

const BackButton = ({
  onClick,
  className = "",
}) => {
  return (
    <div className={`${className} flex items-center justify-start`}>
      <Button
        type="text"
        onClick={onClick || (() => window.history.back())}
        className="flex items-center justify-center rounded-full !w-14 !h-14 bg-town-gradient hover:!bg-town-gradient  text-white hover:!text-white
          border-0 transition-all duration-200"
        icon={<IoArrowBackOutline className="text-2xl" />}
      />
    </div>
  );
};

BackButton.propTypes = {
  onClick: PropTypes.func,
};

export default BackButton;
