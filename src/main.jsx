import React from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./i18n";
import "./index.css";
import App from "./App.jsx";
import { ConfigProvider, App as AntdApp } from "antd";
import "antd/dist/reset.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const muiTheme = createTheme({
  palette: { primary: { main: "#4760CB" } },
});

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={muiTheme}>
        <ConfigProvider>
          <AntdApp>
            <App />
          </AntdApp>
        </ConfigProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
