import PropTypes from "prop-types";
import { Modal } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const DynamicModal = ({ open, handleCancel, title, description, children }) => {
  return (
    <Modal
      open={open}
      onCancel={handleCancel}
      centered
      footer={null}
      closeIcon={
        <CloseOutlined style={{ color: "#D4AF37", fontSize: "20px" }} />
      }
      width={520}
      styles={{
        mask: { backdropFilter: "blur(6px)" },
        content: {
          backgroundColor: "white",
          borderRadius: "16px",
          padding: "2rem",
        },
        body: { padding: 0 },
      }}
    >
      {/* Header */}
      {(title || description) && (
        <div className="mb-6">
          {title && (
            <h2 className="text-xl font-semibold text-heading mb-1">{title}</h2>
          )}
          {description && (
            <p className="text-sm text-paragraph">{description}</p>
          )}
        </div>
      )}

      {/* Dynamic Content */}
      {children}
    </Modal>
  );
};

DynamicModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleCancel: PropTypes.func.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default DynamicModal;
