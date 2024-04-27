import React, {useState} from 'react'
import axios from 'axios';

const TeachSignup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () =>{
        const response = axios
          .post("http://uetbackend-4beea4e39ced.herokuapp.com/teacher/signup", {
            name,
            email,
            password,
          })
          .then((response) => {
            alert("Registered Successfully!");
          });

    }
    
  return (
    <>
      <div>
          <div style={{ display: "grid" }}>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
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

            <button type="submit" className="btn btn-primary text-white" onClick={handleSubmit}>
              SignUp
            </button>
          </div>
      </div>
    </>
  );
}

export default TeachSignup
