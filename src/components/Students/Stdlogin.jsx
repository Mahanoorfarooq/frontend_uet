import React, { useState, useContext, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserContext from "../UserContext/UserContext";

const Stdlogin = () => {
  const [reg_no, setReg_no] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   const {reg_no} = useContext(UserContext)
  const {setComplaints, setResponses} = useContext(UserContext)

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://uetbackend-4beea4e39ced.herokuapp.com/student/login", {
        reg_no,
        email,
        password,
      });

      if (response.data.message === "Success") {
        setComplaints(response.data.complaints)
        setResponses(response.data.responses);
        console.log("Response Data:", response.data);
        console.log(response.data.complaints)
        console.log(response.data.responses);
        alert("Login Successfully!");
        navigate("/stddashboard");
      } else {
        alert("Wrong Email or Password!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <div style={{ display: "grid" }}>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Enter Registration No"
              value={reg_no}
              onChange={(e) => {
                setReg_no(e.target.value);
              }}
            />
          </label>
          <br />
          <br />

          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <br />
          <br />
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="password"
              className="grow"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
          <br />
          <br />

          <button
            type="submit"
            className="btn btn-primary text-white"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Stdlogin;
