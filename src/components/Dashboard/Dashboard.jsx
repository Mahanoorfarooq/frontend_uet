import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/AdminNavbar";

const Dashboard = () => {
  const [complaints, setComplaints] = useState([]);
  const [responseText, setResponseText] = useState("");
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [assignMessage, setAssignMessage] = useState("");

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      const response = await fetch(
        "http://uetbackend-4beea4e39ced.herokuapp.com/uetcomp/getcomplaints"
      );
      const data = await response.json();
      console.log("Response data:", data);
      if (data && Array.isArray(data)) {
        const parsedComplaints = data.map((complaint) => {
          return {
            ...complaint,
            complaint: {},
          };
        });
        setComplaints(parsedComplaints);
      } else {
        console.error("No complaints data found in response:", data);
      }
    } catch (error) {
      console.error("Error fetching complaints:", error);
    }
  };

  const openAssignModal = (complaint) => {
    if (complaint) {
      setSelectedComplaint(complaint);
      setSelectedTeacher("");
      setAssignMessage("");
      document.getElementById("my_modal_2").showModal();
    } else {
      console.error("No complaint selected");
    }
  };

  const closeAssignModal = () => {
    document.getElementById("my_modal_2").close();
  };

const assignTask = async () => {
  try {
    if (!selectedComplaint || !selectedComplaint.userId) {
      console.error("No complaint selected or userId is missing");
      console.log("selectedComplaint:", selectedComplaint);
      return;
    }

    if (!selectedTeacher) {
      console.error("No teacher selected");
      return;
    }

    const { userId, ...complaintData } = selectedComplaint;

    const response = await fetch(
      `http://uetbackend-4beea4e39ced.herokuapp.com/task/assign/${userId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          teachName: selectedTeacher,
          message: assignMessage,
          complaint: { ...complaintData, userId: userId },
        }),
      }
    );

    if (response.ok) {
      console.log("Task assigned successfully");
      closeAssignModal();
    } else {
      console.error("Failed to assign task:", response.statusText);
    }
  } catch (error) {
    console.error("Error assigning task:", error);
  }
};




  return (
    <div>
      <Navbar />

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Assign Task to Teacher</h3>
          <select
            className="select select-bordered select-sm w-full max-w-xs"
            style={{ marginTop: "3vw" }}
            value={selectedTeacher}
            onChange={(e) => setSelectedTeacher(e.target.value)}
          >
            <option disabled selected>
              Select Teacher
            </option>
            <option>Mr. Shahzad Aslam</option>
            <option>Ms. Anma Wajid</option>
            <option>Mr. Syed Mehdi</option>
            <option>Ms. Uroosa Bilal</option>
            <option>Dr. tayabah Kiran</option>
            <option>Mr. Noman Shoaib Quershi</option>
            <option>Mr. Mushtaq Ahmad</option>
            <option>Mr. Muhammad Kashif Jamil</option>
            <option>Mr. Hafiz Muhammad Suleman</option>
            <option>Mr. Aziz Afzal Shah</option>
            <option>Mr. Muhammad Ijaz</option>
            <option>Dr. Salman Abbasi</option>
            <option>Engr. Humble bin Khalid</option>
            <option>Dr. Haroon Farooq</option>
            <option>Dr. Naveed Akhtar</option>
            <option>Mr. Muhammad Rehan Arif</option>
            <option>Engr. Moazzam Shahzad</option>
            <option>Engr. Waqas Ali</option>
            <option>Engr. Irzam Shahid</option>
            <option>Engr. Saira Arif</option>
            <option>Engr. Hira Jamal</option>
            <option>Ms. Saman Cheema</option>
            <option>Dr. Naveed Akhtar</option>
          </select>
          <br />

          <textarea
            className="w-full p-2 border border-gray-300 rounded-md mb-2"
            style={{ marginTop: "3vw" }}
            rows="4"
            placeholder="Enter Message..."
            value={assignMessage}
            onChange={(e) => setAssignMessage(e.target.value)}
          ></textarea>
          <div className="modal-action">
            <button className="btn btn-primary mr-2" onClick={assignTask}>
              Assign
            </button>

            <button className="btn btn-secondary" onClick={closeAssignModal}>
              Close
            </button>
          </div>
        </div>
      </dialog>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Registration Number</th>
              <th>Department</th>
              <th>Nature</th>
              <th>Complaint Message</th>
              <th>Status</th>
              <th>Assign</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((complaint, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{complaint.reg_no}</td>
                <td>{complaint.department}</td>
                <td>{complaint.nature}</td>
                <td>{complaint.compmsg}</td>
                <td>
                  {complaint.status === "Clear" ? (
                    <div
                      className="badge badge-clear gap-2"
                      style={{ backgroundColor: "green", color: "white" }}
                    >
                      Clear
                    </div>
                  ) : (
                    <div className="badge badge-warning gap-2">Pending</div>
                  )}
                </td>
                <td>
                  <button
                    className="btn btn-sm"
                    onClick={() => openAssignModal(complaint)}
                  >
                    Assign
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
