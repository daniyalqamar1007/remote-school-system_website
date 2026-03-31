import axiosInstance from "../axios/instance";

// -------------------------- login --------------------------
export const login = (data) => axiosInstance.post("/auth/login", data);

// -------------------------- signup --------------------------
export const signup = (data) => axiosInstance.post("/auth/register", data);

// -------------------------- forgot password --------------------------
export const forgotPassword = async (data) => {
  const payload = { ...data };
  const response = await axiosInstance.post("/auth/forgot-password", payload);
  return response.data;
};

// -------------------------- resend otp --------------------------
export const resendOtp = async (data) => {
  const payload = { ...data };
  const response = await axiosInstance.post("/auth/resend-otp", payload);
  return response.data;
};

// -------------------------- verify otp --------------------------
export const verifyOtp = async (data) => {
  const payload = { ...data };
  const response = await axiosInstance.post("/auth/verify-otp", payload);
  return response.data;
};

// -------------------------- reset password --------------------------
export const resetPassword = async (data) => {
  const payload = { ...data };
  const response = await axiosInstance.post("/auth/reset-password", payload);
  return response.data;
};
