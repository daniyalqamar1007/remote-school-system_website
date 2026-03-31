import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const SocialAuth = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      {/* Divider */}
      <div className="flex items-center my-6">
        <div className="flex-grow border-t border-gray-300" />
        <span className="mx-3 text-sm text-primary font-sans">
          or continue with
        </span>
        <div className="flex-grow border-t border-gray-300" />
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        {/* Google */}
        <button
          disabled
          className="flex items-center justify-center gap-2 w-full border border-gray-300 rounded-lg py-3 hover:bg-gray-50 transition"
        >
          <FcGoogle size={20} />
        </button>

        {/* Apple */}
        <button
          disabled
          className="flex items-center justify-center gap-2 w-full border border-gray-300 rounded-lg py-3 hover:bg-gray-50 transition"
        >
          <FaApple size={20} />
        </button>
      </div>
    </div>
  );
};

export default SocialAuth;
