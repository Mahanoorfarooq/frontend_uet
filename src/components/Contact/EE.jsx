import React from "react";
import Navbar from "../Navbar/Navbar";

const EE = () => {
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
          Department of Electrical Engineering
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
              <td>Dr. Haroon Farooq</td>
              <td style={{ whiteSpace: "pre-line" }}>
                Campus In-charge
                <br />
                <br />
                Member of Alumni Committee
                <br />
                <br />
                Member of Industrailization Committee
                <br />
                <br />
                Member of Department Scholarship Committee
              </td>
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <th>2</th>
              <td>Dr. Naveed Akhtar</td>
              <td style={{ whiteSpace: "pre-line" }}>
                RT Boys Hostel
                <br />
                <br />
                Member of QEC
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Mr. Muhammad Rehan Arif</td>
              <td style={{ whiteSpace: "pre-line" }}>
                Hostel Wardan
                <br />
                <br />
                Member of QEC
                <br />
                <br />
                Member of Mosque Committee
              </td>
            </tr>
            {/* row 4 */}

            <tr className="hover">
              <th>4</th>
              <td>Engr. Moazzam Shahzad</td>
              <td style={{ whiteSpace: "pre-line" }}>
                In-charge of Internship committee
              </td>
            </tr>

            {/* row 5 */}

            <tr>
              <th>5</th>
              <td>Engr. Waqas Ali</td>
              <td style={{ whiteSpace: "pre-line" }}>
                Member of Health and Saftey Committee
                <br />
                <br />
                FYP's Coordinator
                <br />
                <br />
                LMS Coordinator
              </td>
            </tr>

            {/* row 6 */}

            <tr className="hover">
              <th>6</th>
              <td>Engr. Irzam Shahid</td>
              <td style={{ whiteSpace: "pre-line" }}>
                LMS Coordinator
                <br />
                <br />
                Member of DQEC
                <br />
                <br />
                Lab In-charge
              </td>
            </tr>

            {/* row 7 */}

            <tr>
              <th>7</th>
              <td>Engr. Saira Arif</td>
              <td style={{ whiteSpace: "pre-line" }}>Daycare Member</td>
            </tr>

            {/* row 8 */}

            <tr className="hover">
              <th>8</th>
              <td>Engr. Hira Jamal </td>
              <td style={{ whiteSpace: "pre-line" }}>Survey Coordinator</td>
            </tr>

            <tr>
              <th>7</th>
              <td>Ms. Saman Cheema</td>
              <td style={{ whiteSpace: "pre-line" }}>DSC Member</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EE;
