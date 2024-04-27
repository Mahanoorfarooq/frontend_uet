import React, { useState, useContext, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserContext from '../UserContext/UserContext'

const TeachLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setName, setEmails, setAssignedTasks } = useContext(UserContext);
  const navigate = useNavigate();
 

  const handleSubmit = async () => {
    try {
     
       const response = await axios.post(
         "http://https://uetbackend-4beea4e39ced.herokuapp.com/teacher/login",
         {
           email,
           password,

         }
       );

      if (response.data.message === "Success") {
       
        setName(response.data.name);
        setEmails(response.data.email);
        if (Array.isArray(response.data.complaints)) {
          setAssignedTasks(response.data.complaints);
        } else {
          setAssignedTasks([]);
        }
        alert("Login Successfully!");
        console.log(response.data.complaints)
        navigate("/teachdashboard");
      } else {
        alert("Wrong Email or Password!");
      }

      
    } catch (error) {
      console.log(error)
      
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

export default TeachLogin;
