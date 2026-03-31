import PropTypes from "prop-types";
import { Button, Modal, Typography } from "antd";
import { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { image } from "../../assets/image";

const PasswordUpdate = ({ open, handleCancel }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    setLoading(true);
    // simulate delay if needed
    setTimeout(() => {
      setLoading(false);
      navigate("/login");
    }, 500);
  };

  return (
    <Modal
      open={open}
      onCancel={handleCancel}
      centered
      footer={null}
      closeIcon={
        <CloseOutlined style={{ color: "#7A1F12", fontSize: "20px" }} />
      }
      width={550}
      style={{
        mask: {
          backdropFilter: "blur(6px)",
        },
      }}
      bodyStyle={{
        padding: 0,
      }}
      className="p-6"
    >
      <div className="flex items-start gap-6 font-sans">
        <div className="flex-grow">
          <img
            src={image.success}
            alt="Success"
            className="w-24 flex justify-start"
          />
          <Typography className="text-32 font-bold font-sans text-black">
            Password Updated
          </Typography>
          <Typography className="mt-1 text-black text-24 font-medium w-[80%]">
            Your password has been updated successfully.
          </Typography>

          {/* Action Buttons */}
          <div className="mt-8 mb-4 flex justify-center gap-4">
            <Button
              type="primary"
              onClick={handleConfirm}
              loading={loading}
              className="bg-town-gradient w-full text-white font-semibold border-none px-7 h-12 text-base rounded-full shadow"
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

PasswordUpdate.propTypes = {
  open: PropTypes.bool.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

export default PasswordUpdate;
