import React, { useContext, useEffect, useState } from "react";
import AdminNavbar from "../Navbar/AdminNavbar";
import UserContext from "../UserContext/UserContext";

const TeachDashboard = () => {
  const { name, email, assignedTasks } = useContext(UserContext);
  const [assignedComplaints, setAssignedComplaints] = useState([]);
  const [complaints, setComplaints] = useState([]);
  const [responseText, setResponseText] = useState("");
  const [selectedComplaint, setSelectedComplaint] = useState(null);

  const openModal = (complaint) => {
    setSelectedComplaint(complaint);
    setResponseText("");
    document.getElementById("my_modal_1").showModal();
  };

  const closeModal = () => {
    setSelectedComplaint(null);
    document.getElementById("my_modal_1").close();
  };

  useEffect(() => {
    if (Array.isArray(assignedTasks)) {
      const parsedComplaints = assignedTasks.map((complaint) => {
        try {
          if (typeof complaint === "object") {
            return complaint;
          } else {
            return JSON.parse(complaint);
          }
        } catch (error) {
          console.error("Error parsing complaint:", error);
          return null;
        }
      });
      setAssignedComplaints(
        parsedComplaints.filter((complaint) => complaint !== null)
      );
    }
  }, [assignedTasks]);

  const handleStatusUpdate = async (complaintId) => {
    try {
      console.log("Updating status for complaintId:", complaintId);

      const response = await fetch(
        `http://uetbackend-4beea4e39ced.herokuapp.com/uetcomp/updateStatus/${complaintId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        console.log("Status updated successfully");
        const updatedComplaints = assignedComplaints.map((c) => {
          if (c.complaint._id === complaintId) {

            return { ...c, status: "Clear" };
          }
          return c;
        });
        setAssignedComplaints(updatedComplaints);
      } else {
        console.error("Failed to update status:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };




  const respondToComplaint = async () => {
    try {
      if (!selectedComplaint) {
        console.error("No complaint selected");
        return;
      }

      const { _id, reg_no } = selectedComplaint;
      console.log("Complaint ID:", _id);

      await fetch(`http://uetbackend-4beea4e39ced.herokuapp.com/uetcomp/respond/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          response: responseText,
          reg_no: reg_no,
        }),
      });

      const updatedComplaints = complaints.map((complaint) => {
        if (complaint.userId === userId) {
          return { ...complaint, status: "Clear", responseText: responseText };
        }
        return complaint;
      });
      setComplaints(updatedComplaints);
      setResponseText("");

      closeModal();
    } catch (error) {
      console.error("Error responding to complaint:", error);
    }
  };

  return (
    <>
      <div>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Respond to Complaint</h3>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md mb-2"
              rows="4"
              placeholder="Enter response..."
              value={responseText}
              onChange={(e) => setResponseText(e.target.value)}
              style={{ paddingRight: "22vw", marginTop: "2vw" }}
            ></textarea>
            <div className="modal-action">
              <button
                className="btn btn-primary mr-2"
                onClick={respondToComplaint}
              >
                Submit
              </button>
              <button className="btn btn-secondary" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </dialog>

        <AdminNavbar />

        <div className="avatar placeholder">
          <div className="bg-neutral text-neutral-content rounded-full w-8">
            <span className="text-xs">{name}</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Registration Number</th>
                <th>Department</th>
                <th>Nature</th>
                <th>Complaint Message</th>
                <th>Response</th>
                <th>Response Msg</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {assignedComplaints.map((complaint, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-base-200" : ""}
                >
                  <th>{index + 1}</th>
                  <td>{complaint.reg_no}</td>
                  <td>{complaint.department}</td>
                  <td>{complaint.nature}</td>
                  <td>{complaint.compmsg}</td>
                  <td>
                    {!complaint.responded && (
                      <button
                        className="btn btn-sm"
                        onClick={() => openModal(complaint)}
                      >
                        Respond
                      </button>
                    )}
                  </td>
                  <td>{complaint.responseText}</td>
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
                    {complaint.status !== "Clear" && (
                      <button
                        className="btn btn-sm btn-primary"
                        onClick={() => handleStatusUpdate(complaint._id)}
                      >
                        Mark as Clear
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TeachDashboard;
