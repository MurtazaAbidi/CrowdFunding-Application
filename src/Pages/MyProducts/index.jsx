import React, { useEffect, useState } from "react";
import Categories from "../../Components/MyProducts/Categories";
import Menu from "../../Components/MyProducts/Menu";
import items from "../../Components/MyProducts/data";
import "./style.css";
import Modal from "../../Components/CampaignDetails";
import axios from "axios";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const MyProducts = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [dataForModal, setDataForModal] = useState({})
  const categories = allCategories;

  useEffect(() => {
    axios.get(
        // body: JSON.stringify({
        `${process.env.REACT_APP_API_URL}/api/showcampaigns`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true,
        }
      )
      .then(function (response) {
        console.log(response.data);
        setMenuItems(response.data)
      })
      .catch(function (error) {
        console.log(error.response.data.msg);
        alert(error.response.data.msg);
      });
  }, [])

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
      {modalOpen && <Modal setOpenModal={setModalOpen} dataForModal={dataForModal} />}
      <div className="myProduct-body">
        <main>
          <section className="section">
            <div className="title">
              {/* <img src={logo} alt="logo" className="logo" /> */}
              <h2 style={{ fontSize: "3rem" }}>My Products</h2>
              <div className="underline"></div>
            </div>
            <Categories
              categories={categories}
              activeCategory={activeCategory}
              filterItems={filterItems}
            />
            <Menu items={menuItems} setModalOpen={setModalOpen} setDataForModal={setDataForModal} />
          </section>
        </main>
      </div>
    </>
  );
};

export default MyProducts;
