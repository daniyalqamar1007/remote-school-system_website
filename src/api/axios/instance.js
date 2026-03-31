import axios from "axios";

// === CREATE AXIOS INSTANCE ===
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// === REQUEST INTERCEPTOR ===
axiosInstance.interceptors.request.use(
  (config) => {
    // console.log("REQUEST INTERCEPTOR: Checking for token...");
    const token = localStorage.getItem("token");
    if (token) {
      // console.log("REQUEST INTERCEPTOR: Token found, adding to header.");
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      // console.log("REQUEST INTERCEPTOR: No token found.");
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// === RESPONSE INTERCEPTOR ===
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      const currentPath = window.location.pathname;

      // ❌ wrong credentials (show message, DON'T logout)
      if (currentPath === "/login" || currentPath === "/auth/login") {
        // Message already handled by component, just reject
        return Promise.reject(error);
      } else {
        // ✅ Session expired - show message and logout
        console.error("Session expired! Logging out...");

        // Clear auth storage
        localStorage.removeItem("email");
        localStorage.removeItem("token");
        localStorage.removeItem("role");

        // Redirect to login
        window.location.replace("/login");
      }
    }

    return Promise.reject(error);
  }
);
export default axiosInstance;
