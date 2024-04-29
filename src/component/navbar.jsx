import React from "react";
import "./style/navbar.css";
const Navbar = () => {
  return (
    <>
      <div id="nav_container">
        <div id="nav_items">
          <div className="nav_logo">
            <img src="/Nexaflux_favicon.png" alt="" />
          </div>
          <div className="nav_texts">
            <h1>Nexaflux</h1>
            <h2>Innovate your investment</h2>
          </div>
          <div className="nav_texts2">
            <h3>Home.</h3>
            <h3>Dashboard.</h3>
            <h3>About Us</h3>
          </div>
          <div className="nav_spport">
            <h4>/support@nexaflux.com</h4>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
