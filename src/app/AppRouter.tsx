import { BrowserRouter, Route, Routes } from "react-router-dom";

import { MainLayout } from "@/components/layout/MainLayout";
import { HomePage } from "@/features/home/pages/HomePage";
import { LoginPage } from "@/features/auth/pages/LoginPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
