import React, { useState } from "react";
import './navbar.css'
import Login from "../Admin/Login";
import Logo from '../../assets/UET Logo.png'
import {Link} from 'react-router-dom'
import Status from "../CheckStatus/Status";
import TeachSignup from "../Teachers/TeachSignup";
import TeachLogin from "../Teachers/TeachLogin";
import Stdsignup from "../Students/Stdsignup";
import Stdlogin from "../Students/Stdlogin";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [showTeachModal, setShowTeachModal] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showModalStatus, setShowModalStatus] = useState(false);
  const [showStdModal, setShowStdModal] = useState(false);
  const [showStdloginModal, setShowStdloginModal] = useState(false);


  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openTeachModal = () => {
    setShowTeachModal(true);
  };

  const closeTeachModal = () => {
    setShowTeachModal(false);
  };

  const openLoginModal = () => {
    setShowLogin(true);
  };

  const closeLoginModal = () => {
    setShowLogin(false);
  };

   const closeModalStatus = () => {
     setShowModalStatus(false);
   };

    const openStdModal = () => {
      setShowStdModal(true);
    };

    const closeStdModal = () => {
      setShowStdModal(false);
    };

     const openStdloginModal = () => {
       setShowStdloginModal(true);
     };

     const closeStdloginModal = () => {
       setShowStdloginModal(false);
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

          <details className="dropdown">
            <summary className="btn btn-sm">Contacts</summary>
            <ul className="p-4 shadow menu dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <Link to="/cs">Computer Science</Link>
              </li>

              <li>
                <Link to="/me">Mechnical Engineering</Link>
              </li>

              <li>
                <Link to="/ee">ELectrical Engineering</Link>
              </li>

              <li>
                <Link to="/hum">Humanties</Link>
              </li>
            </ul>
          </details>

          <ul className="menu menu-horizontal px-1">
            {" "}
            <button className="btn btn-sm" onClick={openModal}>
              Admin Login
            </button>
          </ul>

          <details className="dropdown">
            <summary className="btn btn-sm">Students</summary>
            <ul className="p-4 shadow menu dropdown-content bg-base-100 rounded-box w-52">
              <button onClick={openStdloginModal}>
                <li>Login</li>
              </button>
              <br />
              <button onClick={openStdModal}>
                <li>SignUp</li>
              </button>
            </ul>
          </details>


          <details className="dropdown">
            <summary className="btn btn-sm">Teachers</summary>
            <ul className="p-4 shadow menu dropdown-content bg-base-100 rounded-box w-52">
              <button onClick={openLoginModal}>
                <li>Login</li>
              </button>
              <br />
              <button onClick={openTeachModal}>
                <li>SignUp</li>
              </button>
            </ul>
          </details>
        </div>

        <input
          type="checkbox"
          value="light"
          className="toggle theme-controller"
          style={{ marginLeft: "30vw" }}
        />
      </div>

      <dialog open={showModal} id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Login</h3>
          <button className="close" onClick={closeModal}>
            &times;
          </button>
          <div className="modal-content">
            <Login />
          </div>
        </div>
      </dialog>

      <dialog open={showStdloginModal} id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Student Login</h3>
          <button className="close" onClick={closeStdloginModal}>
            &times;
          </button>
          <div className="modal-content">
            <Stdlogin />
          </div>
        </div>
      </dialog>

      <dialog open={showStdModal} id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Student SignUp</h3>
          <button className="close" onClick={closeStdModal}>
            &times;
          </button>
          <div className="modal-content">
            <Stdsignup />
          </div>
        </div>
      </dialog>

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

      <dialog open={showTeachModal} id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Teacher SignUp</h3>
          <button className="close" onClick={closeTeachModal}>
            &times;
          </button>
          <div className="modal-content">
            <TeachSignup />
          </div>
        </div>
      </dialog>

      <dialog open={showLogin} id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Teacher Login</h3>
          <button className="close" onClick={closeLoginModal}>
            &times;
          </button>
          <div className="modal-content">
            <TeachLogin />
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Navbar;
