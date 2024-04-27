import React, { useState } from "react";

const Status = () => {
  const [reg_no, setRegNoInput] = useState("");
  const [responseData, setResponseData] = useState(null);

  const handleInputChange = (event) => {
    setRegNoInput(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `http://uetbackend-4beea4e39ced.herokuapp.com/uetcomp/response/${reg_no}`
      );
      const responseData = await response.json();
      setResponseData(responseData);
    } catch (error) {
      console.error("Error fetching response:", error);
      setResponseData(null);
    }
  };

  return (
    <>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Enter Reg No."
          className="input input-bordered w-full max-w-xs"
          value={reg_no}
          onChange={handleInputChange}
          style={{ marginTop: "2vw" }}
        />
        <button
          className="btn btn-active btn-primary ml-3"
          onClick={handleSearch}
          style={{ marginLeft: "3vw" }}
        >
          Search
        </button>
      </div>

      {responseData && (
        <div className="mt-4" style={{ marginTop: "4vw" }}>
          <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
              <h3 className="card-title">Complaint Message</h3>
              <p>{responseData.complaint.compmsg}</p>
              <h3 className="card-title">Complaint Response</h3>
              <p>{responseData.response.response}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Status;
