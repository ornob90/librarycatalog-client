import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./provider/AuthProvider";
import { Toaster } from "react-hot-toast";
import AdminProvider from "./provider/AdminProvider";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AdminProvider>
          <RouterProvider router={router} />
          <Toaster position="top-right" />
        </AdminProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
