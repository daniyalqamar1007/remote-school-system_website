import axiosInstance from "../axios/instance";
// import { useQuery } from "@tanstack/react-query";

// -------------------------- Get Profile --------------------------
export const getProfile = async () => {
  const response = await axiosInstance.get(`/auth/profile`);
  return response.data;
};

// ------------------------ Update Profile ------------------------
export const updateProfile = async (profileData) => {
  const response = await axiosInstance.patch(`/auth/edit-profile`, profileData);
  return response.data;
};

// ------------------------ Delete Profile ------------------------
export const deleteProfile = async ({ password }) => {
  if (!password) throw new Error("Password is required");

  const response = await axiosInstance.delete(`/auth/delete-account`, {
    data: { password },
  });
  return response.data;
};
