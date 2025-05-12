import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/heaerFile/header";
import Footer from "../components/footer/footer";

export const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
