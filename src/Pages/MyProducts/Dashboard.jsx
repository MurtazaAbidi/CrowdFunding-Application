import React, { useState } from "react";
import Categories from "../../Components/MyProducts/Categories";
import Menu from "../../Components/MyProducts/Menu";
import items from "../../Components/MyProducts/dashboardData.js";
import "./style.css";
import Modal from "../../Components/CampaignDetails";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const Dashboard = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [dataForModal, setDataForModal] = useState({})
  const categories = allCategories;

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <>
      {modalOpen && <Modal setOpenModal={setModalOpen} dataForModal={dataForModal}/>}
      <div className="myProduct-body">
        <main>
          <section className="section">
            <div className="title">
              {/* <img src={logo} alt="logo" className="logo" /> */}
              <h2 style={{ fontSize: "3rem" }}>Dashboard</h2>
              <div className="underline"></div>
            </div>
            <Categories
              categories={categories}
              activeCategory={activeCategory}
              filterItems={filterItems}
            />
            <Menu items={menuItems} setModalOpen={setModalOpen} setDataForModal={setDataForModal}/>
          </section>
        </main>
      </div>
    </>
  );
};

export default Dashboard;