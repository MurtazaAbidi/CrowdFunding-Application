import React from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaHome } from "react-icons/fa";
import { MdCampaign } from "react-icons/md";
import { BsCartCheck } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BiLogOut } from "react-icons/bi";
import SidebarMenu from "./SidebarMenu";
import "./sidebarstyle.css";
import axios from "axios";
const routes = [
  {
    path: "/",
    name: "Home",
    icon: <FaHome />,
  },
  {
    path: "/myproducts",
    name: "My Products",
    icon: <BsCartCheck />,
  },
  {
    path: "/createcampaign",
    name: "Create Campaign",
    icon: <MdCampaign />,
  },
  {
    path: "/profile",
    name: "Profile",
    icon: <CgProfile />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
          style={{ position: "fixed" }}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  ELEVATE
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>

          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
          <div
            style={{ textAlign: "center", marginTop: "3rem", padding: "1rem" }}
          >
            {isOpen ? (
              <button
                className="sidebar-logout-btn"
                onClick={() => {
                  axios.get(
                    `${process.env.REACT_APP_API_URL}/api/campaigner/logout`,
                      {
                        headers: {
                          "Content-Type": "application/json",
                          Accept: "application/json",
                        },
                        withCredentials: true,
                      }
                    )
                    .then(function (response) {
                      console.log(response);
                      if (response.status === 200) {
                        console.log(response);
                        window.location.reload(false);
                      }
                    })
                    .catch(function (error) {
                      console.log(error.response.data.msg);
                      alert(error.response.data.msg);
                    });
                }}
              >
                <span style={{ paddingRight: "1rem" }}>
                  <BiLogOut />
                </span>
                Logout
              </button>
            ) : null}
          </div>
        </motion.div>
        <main
          style={{
            width: "100%",
            paddingTop: "2rem",
            paddingBottom: "0.5rem",
            // minHeight: "33rem",
          }}
        >
          {children}
        </main>
      </div>
    </>
  );
};

export default SideBar;
