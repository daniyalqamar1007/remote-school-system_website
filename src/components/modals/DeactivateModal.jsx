import PropTypes from "prop-types";
import { Button, Modal, message } from "antd";
import { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { image } from "../../assets/image";

const Deactivate = ({
  open,
  handleOk,
  handleCancel,
  itemName = "item",
  actionType = "deactivate",
}) => {
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    setLoading(true);
    try {
      await handleOk();
    } catch (error) {
      console.error(`${actionType} failed:`, error);
      message.error(`${actionType} failed. Please try again.`);
    } finally {
      setLoading(false);
    }
  };

  // Capitalize first letter for display
  const actionDisplay =
    actionType.charAt(0).toUpperCase() + actionType.slice(1);

  return (
    <Modal
      open={open}
      onCancel={handleCancel}
      centered
      footer={null}
      closeIcon={
        <CloseOutlined style={{ color: "#E36F30", fontSize: "20px" }} />
      }
      width={600}
      styles={{
        mask: {
          backdropFilter: "blur(6px)",
        },
        content: {
          backgroundColor: "#19263A",
          borderRadius: "16px",
          padding: "2rem",
        },
      }}
    >
      <div className="flex items-start gap-6 font-sans">
        {/* Left Side: Icon */}
        <div className="relative flex-shrink-0 mt-1">
          <div className="absolute inset-0 bg-red-500 rounded-full blur-xl opacity-30"></div>
          <div className="relative flex items-center justify-center w-16 h-16">
            <img src={image.deleteIcon} alt="Action Icon" className="w-full" />
          </div>
        </div>

        {/* Right Side: Content and Buttons */}
        <div className="flex-grow">
          <h2 className="text-2xl font-bold text-white">
            {actionDisplay} School
          </h2>
          <p className="mt-1 text-gray-300">
            Are you sure you want to {actionType} this {itemName}?
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex justify-end gap-4">
            <Button
              key="cancel"
              onClick={handleCancel}
              className="bg-content-bg text-sidebar-bg font-semibold border-none px-7 h-11 text-base rounded-lg hover:!bg-[#fbe5c8] shadow"
              disabled={loading}
            >
              Cancel
            </Button>
            <Button
              key="ok"
              type="primary"
              onClick={handleConfirm}
              loading={loading}
              className="bg-brand-orange text-white font-semibold border-none px-7 h-11 text-base rounded-lg hover:!bg-brand-orange shadow"
            >
              {actionDisplay}
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

Deactivate.propTypes = {
  open: PropTypes.bool.isRequired,
  handleOk: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  itemName: PropTypes.string,
  actionType: PropTypes.oneOf(["deactivate", "activate"]),
};

export default Deactivate;
