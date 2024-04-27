import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    alert("Login Successfully")
    navigate("/dashboard");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "grid" }}>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Enter Admin Id"
              value={username}
              onChange={handleUsernameChange}
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
              onChange={handlePasswordChange}
            />
          </label>
          <br />
          <br />

          <button type="submit" className="btn btn-primary text-white">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
