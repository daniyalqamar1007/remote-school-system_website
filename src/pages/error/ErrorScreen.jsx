import { AlertTriangle, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ErrorScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center font-sans ">
      <div className="bg-bg-white p-8 md:p-12 rounded-xl shadow-card max-w-lg w-full text-center">
        {/* Illustration */}
        <div className="mb-8 flex justify-center">
          <AlertTriangle size={100} className="text-primary-pink" />
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-dark-gray mb-4">
          Oops! Something Went Wrong
        </h1>

        {/* Description */}
        <p className="text-base text-light-gray mb-8 px-4 md:px-0">
          The page you are looking for doesn't exist or an unexpected error
          occurred.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col items-center space-y-4">
          <button onClick={() => navigate("/")} className="flex items-center gap-2 bg-primary-pink hover:bg-primary-orange text-bg-white font-semibold py-3 px-8 rounded-md transition duration-300 shadow-button">
            <Home size={20} />
            Go Back Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorScreen;
