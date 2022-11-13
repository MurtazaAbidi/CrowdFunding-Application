import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "../../Components/Sidebar/SideBar";
import Analytics from "../../Pages/abc/Analytics";
import Dashboard from "../../Pages/abc/Dashboard";
import FileManager from "../../Pages/abc/FileManager";
import Messages from "../../Pages/abc/Messages";
import Order from "../../Pages/abc/Order";
import Saved from "../../Pages/abc/Saved";
import Setting from "../../Pages/abc/Setting";
import Users from "../../Pages/abc/Users";

const HomePage = () => {
  return (
    <BrowserRouter>
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/users" element={<Users />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/file-manager" element={<FileManager />} />
          <Route path="/order" element={<Order />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </BrowserRouter>
  );
};

export default HomePage;
