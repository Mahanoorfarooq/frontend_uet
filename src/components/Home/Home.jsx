import React, {useState} from 'react'
import Navbar from '../Navbar/Navbar'
import Logo from '../../assets/UET Logo.png'
import HeroImg from '../../assets/heroimg2.jpg'
import { Link } from 'react-router-dom';
import Chatbot from "../Chatbot/Chatbot";
import { FaRocketchat } from "react-icons/fa";



const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <Navbar />
      <div
        className="hero min-h-screen bg-base-200"
        style={{ marginTop: "10vw" }}
      >
        <div className="hero-content flex-col lg:flex-row">
          <img src={HeroImg} className="max-w-sm rounded-lg shadow-2xl" style={{width:'20vw'}} />
          <div style={{ marginLeft: "3vw" }}>
            <h1 className="text-8xl font-bold" style={{fontWeight:'bold'}}>
              UET E-Complaint Management System
            </h1>
            <p className="py-6" style={{ marginTop: "3vw" }}>
              UET's E-Complaint Management System ensures swift resolution of
              grievances with transparent communication. Users can easily submit
              complaints, track their status, and receive timely updates. Our
              platform fosters accountability and empowers the community to
              voice concerns effectively.
            </p>
            <Link to="/complaint">
              <button className="btn btn-primary" style={{ marginTop: "3vw" }}>
                Get Started
              </button>
            </Link>
            <button
              className="btn btn-accent"
              onClick={openModal}
              style={{ marginTop: "-4vw", marginLeft: "2vw" }}
            >
              <FaRocketchat style={{ width: "1.8vw", hieght: "1.8vw" }} />
            </button>
          </div>
        </div>
      </div>

      <dialog open={showModal} id="my_modal_2" className="modal">
        <div className="modal-box">
          <button className="close" onClick={closeModal}>
            &times;
          </button>
          <Chatbot />
        </div>
      </dialog>

    </>
  );
}

export default Home