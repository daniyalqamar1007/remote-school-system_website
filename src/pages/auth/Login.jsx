import { Form, Input, Button, Checkbox } from "antd";
import { image } from "../../assets/image";
import { FiMail, FiLock } from "react-icons/fi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Login values:", values);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 bg-cover bg-center bg-purple-accent-1"
      style={{
        backgroundImage: `url(${image.bg})`,
      }}
    >
      {/* ================= CARD ================= */}
      <div
        className="w-full max-w-[500px] bg-white rounded-2xl shadow-2xl px-6 py-6"
      >
        {/* ================= LOGO ================= */}
        <div className="mb-6 flex justify-center items-center">
          <img src={image.logo} alt="logo" className="w-44" />
        </div>

        {/* ================= TITLE ================= */}
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-1 sm:text-2xl">
          Parent Login
        </h1>
        <p className="text-center text-gray-500 mb-8 sm:text-sm">
          Enter your credentials to access your portal
        </p>

        {/* ================= FORM ================= */}
        <Form
          form={form}
          layout="vertical"
          requiredMark={false}
          onFinish={onFinish}
        >
          {/* Email */}
          <Form.Item
            label={
              <span className="text-gray-700 font-medium">Email Address</span>
            }
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input
              size="large"
              placeholder="you@school.edu"
              prefix={<FiMail className="text-gray-400 text-lg" />}
            />
          </Form.Item>

          {/* Password */}
          <Form.Item
            label={<span className="text-gray-700 font-medium">Password</span>}
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              size="large"
              placeholder="••••••••"
              prefix={<FiLock className="text-gray-400 text-lg" />}
              iconRender={(visible) =>
                visible ? (
                  <AiOutlineEye className="text-gray-500 text-lg" />
                ) : (
                  <AiOutlineEyeInvisible className="text-gray-500 text-lg" />
                )
              }
            />
          </Form.Item>

          {/* Remember / Forgot */}
          <div className="flex justify-between items-center mb-6  sm:items-start sm:gap-3">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox className="text-gray-600">Remember me</Checkbox>
            </Form.Item>

            <Link
              to="/"
              className="text-blue-600 font-medium hover:text-blue-700"
            >
              Forgot password?
            </Link>
          </div>

          {/* MFA */}
          <div className="flex flex-col bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex gap-2">
              <img src={image.auth} className="w-4" />
              <div className="text-blue-700 font-semibold text-sm">
                Multi-Factor Authentication
              </div>
            </div>
            <div className="text-blue-600 text-sm ml-6">
              You'll receive a verification code after login
            </div>
          </div>

          {/* Button */}
          <Form.Item>
            <Button
              htmlType="submit"
              size="large"
              className="w-full h-12 rounded-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white"
            >
              Sign In
            </Button>
          </Form.Item>
        </Form>

        {/* ================= FOOTER ================= */}
        <div className="text-center mt-6">
          <div className="text-gray-500 text-sm mb-2 cursor-pointer">
            ← Change Role
          </div>
          <div className="text-sm">
            <span className="text-gray-500">Need help? </span>
            <a
              href="#"
              className="text-blue-600 font-medium hover:text-blue-700"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
