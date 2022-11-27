import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "../../Components/Sidebar/SideBar";
import Profile from "../../Pages/Profile";
import CreateCampaign from "../../Pages/CreateCampaign";
import MyProducts from "../../Pages/MyProducts";
import Dashboard from "../../Pages/MyProducts/Dashboard";

const HomePage = () => {
  return (
    <BrowserRouter>
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/myproducts" element={<MyProducts />} />
          <Route path="/createcampaign" element={<CreateCampaign />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<h1> not found</h1>} />
        </Routes>
      </SideBar>
    </BrowserRouter>
  );
};

export default HomePage;
