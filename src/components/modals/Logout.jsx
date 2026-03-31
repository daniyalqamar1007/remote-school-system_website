import PropTypes from "prop-types";
import { Button, Modal, Typography, message } from "antd";
import { useState } from "react";
import { BiLogOutCircle } from "react-icons/bi";

const Logout = ({ open, handleOk, handleCancel }) => {
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      localStorage.clear();
      window.location.href = "/login";
      message.success("Logged out successfully.");
      handleOk();
    } catch {
      message.error("Logout failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      open={open}
      onCancel={handleCancel}
      centered
      footer={null}
      closeIcon={false}
      width={520}
      styles={{
        mask: {
          backdropFilter: "blur(6px)",
        },
        content: {
          backgroundColor: "white",
          borderRadius: "16px",
          padding: "2rem",
        },
        body: {
          padding: "0",
        },
      }}
    >
       <div className="flex flex-col justify-center items-center text-center p-4">
          <BiLogOutCircle className="text-6xl text-primary mb-4" />
          <Typography className="text-3xl font-sans font-bold text-text-white">Logout</Typography>
          <Typography className="mt-1 text-black text-lg font-sans font-medium">
            Are you sure you want to logout?
          </Typography>

          {/* Action Buttons */}
          <div className="mt-8 flex justify-end gap-4">
            <Button
              key="cancel"
              onClick={handleCancel}
              className="bg-transparent text-black font-semibold border px-7 h-11 text-base rounded-lg hover:!bg-azureBlue/20 hover:!text-azureBlue"
            >
              Cancel
            </Button>
            <Button
              key="ok"
              type="primary"
              onClick={handleConfirm}
              loading={loading}
              className="bg-town-gradient text-white font-semibold border-none px-7 h-11 text-base rounded-lg hover:!bg-azureBlue/90 shadow"
            >
              Yes,Logout
            </Button>
          </div>
        </div>
      
    </Modal>
  );
};

Logout.propTypes = {
  open: PropTypes.bool.isRequired,
  handleOk: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

export default Logout;
