import logo from "../Images/logo_online.png";
import ShoppingCartIcon from "./ShoppingCartIcon";
import { NavLink } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";
import React, { useEffect, useState } from "react";
import SideNav from "./SideNav";
import sprite from "../Images/sprite3.svg";

const NavBar = () => {
  const [showCart, setCart] = useState(false);
  const [showSideNav, setSideNav] = useState(false);

  useEffect(() => {}, []);
  return (
    <div className="header">
      <div className="nav">
        <div className="container">
          <div className="menu_container">
            <svg
              onClick={() => {
                setCart(false);
                setSideNav(true);
                console.log(showSideNav);
              }}
              className="icon"
            >
              <use xlinkHref={sprite + "#square"}></use>
            </svg>
            <img className="brand_logo" src={logo} alt="" />
          </div>

          <div className="navbar_menu">
            <ul className="list nav-list">
              <li className="list__item">
                <NavLink to="/home">Home</NavLink>
              </li>
              <li className="list__item">
                <NavLink to="/product/:skin_care">Skin Care</NavLink>
              </li>
              <li className="list__item">
                <NavLink to="/product/:hair_care">Hair care</NavLink>
              </li>
              <li className="list__item">
                <a href="tel:0719138538">0719138538</a>
              </li>
            </ul>
          </div>
          <ShoppingCartIcon
            mouseEnter={() => {
              setSideNav(false);
              setCart(true);
            }}
            onClick={() => {
              setSideNav(false);
              setCart(true);
            }}
          />
        </div>
      </div>
      <ShoppingCart showCart={showCart} hideCart={() => setCart(false)} />
      <SideNav
  
        showSideNav={showSideNav}
        hideSideNav={() => setSideNav(false)}
      />
    </div>
  );
};

export default NavBar;
