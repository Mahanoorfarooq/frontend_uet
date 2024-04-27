import React, { useState } from "react";
import Login from "../Admin/Login";
import Logo from "../../assets/UET Logo.png";
import { Link } from "react-router-dom";
import Status from "../CheckStatus/Status";

const Navbar = () => {

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <img src={Logo} alt="" style={{ width: "3vw" }} />
          <a className="btn btn-ghost text-xl">
            UET E-Complaint Management System
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <Link to="/">
              <button className="btn btn-sm">Home</button>
            </Link>
          </ul>

          <input
            type="checkbox"
            value="light"
            className="toggle theme-controller"
            style={{ marginLeft: "60vw" }}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
