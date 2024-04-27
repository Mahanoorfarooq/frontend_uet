import React from "react";
import Navbar from "../Navbar/Navbar";

const ME = () => {
  return (
    <div>
      <Navbar />
      <div className="overflow-x-auto">
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2vw",
            marginBottom: "3vw",
            fontWeight: "bold",
          }}
        >
          Department of Mechnical Engineering
        </h1>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Duties</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Mr. Mushtaq Ahmad</td>
              <td style={{ whiteSpace: "pre-line" }}>
                Saftey Management of Campus
              </td>
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <th>2</th>
              <td>Mr. Muhammad Kashif Jamil</td>
              <td style={{ whiteSpace: "pre-line" }}>
                CPD(PEB) Coordinator
                <br />
                <br />
                Internship Coordintor
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Mr. Hafiz Muhammad Suleman</td>
              <td style={{ whiteSpace: "pre-line" }}>
                Manage Scholarship
                <br />
                <br />
                QEC / DQBC
              </td>
            </tr>
            {/* row 4 */}

            <tr className="hover">
              <th>4</th>
              <td>Mr. Aziz Afzal Shah</td>
              <td style={{ whiteSpace: "pre-line" }}>
                Desgin Fabrication and Innovation
                <br />
                <br />
                Department Manitance
                <br />
                <br />
                Lab Attendant
                <br />
                <br />
                FYP Management
              </td>
            </tr>

            {/* row 5 */}

            <tr>
              <th>5</th>
              <td>Mr. Muhammad Ijaz</td>
              <td style={{ whiteSpace: "pre-line" }}>
                Controller of Examination
                <br />
                <br />
                FYP's Budget
                <br />
                <br />
                Manage FYP's
              </td>
            </tr>

            {/* row 6 */}

            <tr className="hover">
              <th>6</th>
              <td>Dr. Salman Abbasi</td>
              <td style={{ whiteSpace: "pre-line" }}>
                Cahirman
                <br />
                <br />
                Library In-charge
                <br />
                <br />
                Converne of purchase committee of campus
              </td>
            </tr>

            {/* row 7 */}

            <tr>
              <th>7</th>
              <td>Engr. Humble bin Khalid</td>
              <td style={{ whiteSpace: "pre-line" }}>
                Manage Scholarships
                <br />
                <br />
                OBE
                <br />
                <br />
                Quality Enhancement of department cell
                <br />
                <br />
                Member of Mosque committee
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ME;
