import PropTypes from "prop-types";
import { Button, Modal, Typography, Input, Form, message } from "antd";
import { useState, useEffect } from "react";
import { Trash2 } from "lucide-react";
import { useDeleteProfile } from "../../hook/useProfile";

const DeleteAccount = ({ open, handleOk, handleCancel }) => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const { deleteProfile } = useDeleteProfile();

  // Reset form whenever modal closes
  useEffect(() => {
    if (!open) {
      form.resetFields();
    }
  }, [open, form]);

  const handleConfirm = async () => {
    try {
      const values = await form.validateFields(); // get password
      setLoading(true);

      deleteProfile(
        { password: values.password },
        {
          onSuccess: () => {
            message.success("Your account has been deleted successfully.");
            localStorage.clear();
            handleOk(); // close modal
            window.location.href = "/login"; // redirect
          },
          onError: (error) => {
            message.error(
              error.response?.data?.message || "Failed to delete account"
            );
          },
        }
      );
    } catch (error) {
      console.log("Validation error:", error);
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
      bodyStyle={{ padding: 0 }}
    >
      <div className="flex flex-col items-center text-center p-6">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-100 mb-4">
          <Trash2 className="text-red-600 w-8 h-8" />
        </div>

        <Typography className="text-2xl font-bold text-black">
          Delete Account
        </Typography>

        <Typography className="mt-2 text-gray-600 text-base mb-4">
          Are you sure you want to delete your account? <br />
          This action cannot be undone.
        </Typography>

        {/* Password Form */}
        <Form form={form} layout="vertical" className="w-full">
          <Form.Item
            name="password"
            label="Enter your password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password placeholder="Password" className="h-11" />
          </Form.Item>
        </Form>

        {/* Action Buttons */}
        <div className="mt-4 flex gap-4 w-full justify-center">
          <Button
            onClick={handleCancel}
            className="px-7 h-11 text-base rounded-lg font-semibold"
          >
            Cancel
          </Button>

          <Button
            danger
            type="primary"
            loading={loading}
            onClick={handleConfirm}
            className="px-7 h-11 text-base rounded-lg font-semibold"
          >
            Yes, Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
};

DeleteAccount.propTypes = {
  open: PropTypes.bool.isRequired,
  handleOk: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

export default DeleteAccount;
