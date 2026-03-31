import axiosInstance from "../axios/instance";

// -------------------------- Add Pedigree --------------------------
export const addPedigree = (data) => axiosInstance.post("/dogs", data);

// -------------------------- Get All Pedigree --------------------------
export const getAllPedigree = async ({ page, limit }) => {
  const params = new URLSearchParams({
    page: page || 1,
    limit: limit || 10,
  });
  const response = await axiosInstance.get(`/dogs?${params.toString()}`);
  return response.data;
};

// -------------------------- Get Pedigree By Id --------------------------
export const getPedigreeById = async (id) => {
  const response = await axiosInstance.get(`/dogs/${id}`);
  return response.data;
};

// -------------------------- Update Pedigree --------------------------
export const updatePedigree = ({ id, data }) =>
  axiosInstance.patch(`/dogs/${id}`, data);

// -------------------------- Delete Pedigree --------------------------
export const deletePedigree = async ({ id }) => {
  if (!id) throw new Error("Id is required");
  return axiosInstance.delete("/dogs/{dogId}", {
    data: { id },
  });
};
