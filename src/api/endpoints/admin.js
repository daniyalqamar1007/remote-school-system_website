import axiosInstance from "../axios/instance";

// -------------------------- Add Organization Admin --------------------------
export const addOrganizationAdmin = (data) =>
  axiosInstance.post("/organization-admins/create", data);

// -------------------------- Get Organization Admins --------------------------
// export const getOrganizationAdmins = () =>
//   axiosInstance.get("/organization-admins/get-all");

export const getOrganizationAdmins = async ({ page, limit, search }) => {
  const params = new URLSearchParams({
    page: page || 1,
    limit: limit || 10,
    search: search || "",
  });
  const response = await axiosInstance.get(
    `/organization-admins/get-all?${params.toString()}`
  );
  return response.data;
};

// -------------------------- stats  --------------------------
export const getStats = async () => {
  const response = await axiosInstance.get(`/dashboard/stats`);
  return response.data;
};

export const getAllAssignedSchools = async () => {
  const response = await axiosInstance.get(
    `/organizations/without-admin/dropdown`
  );
  return response.data;
};

// -------------------------- Get School Admin By Id --------------------------
export const getSchoolAdminById = async (id) => {
  const response = await axiosInstance.get(
    `/organization-admins/get-by-id/${id}`
  );
  return response.data.data;
};

// -------------------------- Update School --------------------------
export const updateSchoolAdmin = ({ id, data }) => {
  return axiosInstance.put(`/organization-admins/update/${id}`, data);
};

// -------------------------- Delete organization admin --------------------------
export const deleteSchoolAdmin = (id) =>
  axiosInstance.delete(`/organization-admins/delete/${id}`);
