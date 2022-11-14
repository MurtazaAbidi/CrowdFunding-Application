import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "../../Components/Sidebar/SideBar";
import Dashboard from "../../Pages/abc/Dashboard";
import MyProducts from "../../Pages/abc/MyProducts";
import Profile from "../../Pages/abc/Profile";
import Guides from "../../Pages/abc/Guides";
import CreateCampaign from "../../Pages/CreateCampaign";

const HomePage = () => {
  return (
    <BrowserRouter>
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/myproducts" element={<MyProducts />} />
          <Route path="/createcampaign" element={<CreateCampaign />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="*" element={<h1> not found</h1>} />
        </Routes>
      </SideBar>
    </BrowserRouter>
  );
};

export default HomePage;
