import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="navbar">
        <div className="navleft">
        <div className="logo">
          <img
            src="https://preview.colorlib.com/theme/cozastore/images/icons/logo-01.png.webp"
            alt=""
          />
        </div>
        <div className="navmenu">
            <ul>
                <li>Home</li>
                <li>Shop</li>
                <li>Features</li>
                <li>Blog</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        </div>
        <div className="navicons">
        <i class="fa-solid fa-magnifying-glass"></i>
        <Link to={"/basket"}><i class="fa-solid fa-cart-shopping"></i></Link>
        <i class="fa-regular fa-heart"></i>
        </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
