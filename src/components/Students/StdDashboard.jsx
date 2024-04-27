import React, { useContext } from "react";
import Stdnavbar from "./Stdnavbar";
import UserContext from "../UserContext/UserContext";

const StdDashboard = () => {
  const { complaints, responses } = useContext(UserContext);
  console.log("Complaints:", complaints);
  console.log("Responses:", responses);

  if (!complaints || !responses) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Stdnavbar />
      <div className="overflow-x-auto">
        <h2 style={{marginLeft:'3vw'}}>My Complaints</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Department</th>
              <th>Nature</th>
              <th>Message</th>
              <th>Status</th>
              <th>Response</th> 
            </tr>
          </thead>
          <tbody>
            {complaints.map((complaint, index) => (
              <tr key={index}>
                <td>{complaint.department}</td>
                <td>{complaint.nature}</td>
                <td>{complaint.compmsg}</td>
                <td>{complaint.status}</td>
                <td>
                  {responses[index] ? responses[index].response : "No response"}
                </td>{" "}
           
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StdDashboard;
