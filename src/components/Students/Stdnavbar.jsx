import React, { useState } from "react";
import Login from "../Admin/Login";
import Logo from "../../assets/UET Logo.png";
import { Link } from "react-router-dom";
import Status from "../CheckStatus/Status";


const Stdnavbar = () => {
  const [showModalStatus, setShowModalStatus] = useState(false);

  const openModalStatus = () => {
    setShowModalStatus(true);
  };

  const closeModalStatus = () => {
    setShowModalStatus(false);
  };

  return (
    <>
      <div className="navbar bg-base-100 relative z-10">
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

          <ul className="menu menu-horizontal px-1">
            {" "}
            <Link to="/complaint">
              <button className="btn btn-sm">Register Complaint</button>
            </Link>
          </ul>

          <ul className="menu menu-horizontal px-1">
            {" "}
            <button className="btn btn-sm" onClick={openModalStatus}>
              Status
            </button>
          </ul>
        </div>
        <input
          type="checkbox"
          value="light"
          className="toggle theme-controller"
          style={{ marginLeft: "30vw" }}
        />
      </div>

     

      <dialog open={showModalStatus} id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Check Complaint Status</h3>
          <button className="close" onClick={closeModalStatus}>
            &times;
          </button>
          <div className="modal-content">
            <Status />
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Stdnavbar;
