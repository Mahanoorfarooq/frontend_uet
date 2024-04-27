import React, { useState } from "react";
import "daisyui/dist/full.css";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Complaints from "./components/RegisterComp/Complaints";
import CS from "./components/Contact/CS";
import ME from "./components/Contact/ME";
import EE from "./components/Contact/EE";
import Humanties from "./components/Contact/Humanties";
import TeachDashboard from "./components/Teachers/TeachDashboard";
import UserContext from "./components/UserContext/UserContext";

import StdDashboard from "./components/Students/StdDashboard";

function App() {
  const [name, setName] = useState("");
  const [email, setEmails] = useState("");
  const [reg_no, setReg_no] = useState("")
  const [complaints, setComplaints] = useState([]);
  const [responses, setResponses] = useState([]);
  const [assignedTasks, setAssignedTasks] = useState([]);

  return (
    <>
      <div>
        <UserContext.Provider
          value={{
            name,
            setName,
            email,
            setEmails,
            assignedTasks,
            setAssignedTasks,
            reg_no,
            setReg_no,
            complaints,
            setComplaints,
            responses, 
            setResponses,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/complaint" element={<Complaints />} />
            <Route path="/cs" element={<CS />} />
            <Route path="/me" element={<ME />} />
            <Route path="/ee" element={<EE />} />
            <Route path="/hum" element={<Humanties />} />
            <Route path="/teachdashboard" element={<TeachDashboard />} />
            <Route path="/stddashboard" element={<StdDashboard />} />
          </Routes>
        </UserContext.Provider>
      </div>
    </>
  );
}

export default App;
