import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Chatbot from "../Chatbot/Chatbot";
import { FaRocketchat } from "react-icons/fa";
import Stdnavbar from "../Students/Stdnavbar";

const Complaints = () => {
  const [showModal, setShowModal] = useState(false);
  const [reg_no, setRegno] = useState("");
  const [department, setDepartment] = useState("");
  const [nature, setNature] = useState("");
  const [compmsg, setCompmsg] = useState("");
  const [userId, setUserId] = useState(null);
  const [error, setError] = useState(null);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleComplaint = async (e) => {
    try {
      const response = await axios.post(
        "https://uetbackend-4beea4e39ced.herokuapp.com/uetcomp/complaint",
        {
            reg_no,
            department,
            nature,
            compmsg,
        }
    
      );

      if (response.status === 201) {
        const data = response.data;
        setUserId(data.userId);
        setError(null);
        console.log("Complaint registered successfully! User ID:", data.userId);
      } else {
        console.log("Failed to register complaint:", response.data);
      }
    } catch (error) {
      console.error("Error registering complaint:", error);
      setError("Failed to register complaint. Please try again.");
    }
  };

  return (
    <>
      <Stdnavbar/>
      {userId && (
        <div role="alert" className="alert alert-success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>Complaint Register Successfully!</h1>
          </div>
        </div>
      )}

      {error && (
        <div role="alert" className="alert alert-danger">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5z"
            />
          </svg>
          <div
            style={{
              textAlign: "center",
              marginTop: "20px",
              color: "red",
            }}
          >
            <p>{error}</p>
          </div>
        </div>
      )}
      <div style={{ display: "grid", placeItems: "center", marginTop: "5vw" }}>
        <input
          type="text"
          placeholder="Enter Registration #"
          className="input input-bordered input-success w-full max-w-xs"
          style={{ paddingRight: "9vw" }}
          onChange={(e) => {
            setRegno(e.target.value);
          }}
        />
        <br />
        <br />

        <select
          className="select select-accent w-full max-w-xs"
          value={department}
          onChange={(e) => {
            setDepartment(e.target.value);
          }}
        >
          <option value="" disabled selected>
            Select your department
          </option>
          <option value="Computer Science">Computer Science</option>
          <option value="Eletrical Engineering">Eletrical Engineering</option>
          <option value="Mechnical Engineering">Mechnical Engineering</option>
          <option value="Industrail and Manufacturing Engineering">
            Industrail and Manufacturing Engineering
          </option>
        </select>
        <br />
        <br />

        <select
          className="select select-accent w-full max-w-xs"
          style={{ paddingRight: "8vw" }}
          value={nature}
          onChange={(e) => {
            setNature(e.target.value);
          }}
        >
          <option value="" disabled selected>
            Choice your complaint Nature
          </option>
          <option value="Hostel Issue">Hostel Issue</option>
          <option value="Admin Issue">Admin Issue</option>
          <option value="Departmental Issue">Departmental Issue</option>
          <option value="Fee Issue">Fee Issue</option>
          <option value="Transport Issue">Transport Issue</option>
        </select>
        <br />
        <br />

        <textarea
          className="textarea textarea-accent"
          placeholder="Enter your complaint"
          style={{ paddingRight: "11vw" }}
          onChange={(e) => {
            setCompmsg(e.target.value);
          }}
        ></textarea>
        <br />
        <br />
        <button
          className="btn btn-accent btn-outline"
          onClick={handleComplaint}
        >
          Submit
        </button>
      </div>

      <button
        className="btn btn-accent"
        onClick={openModal}
        style={{ marginTop: "-4vw", marginLeft: "2vw" }}
      >
        <FaRocketchat style={{width:'1.8vw', hieght:'1.8vw'}} />
      </button>

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
};

export default Complaints;
