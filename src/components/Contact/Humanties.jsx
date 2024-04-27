import React from "react";
import Navbar from "../Navbar/Navbar";

const Humanties = () => {
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
          Department of Humanties
        </h1>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Duties</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Dr. Adnan Aslam</td>
              <td style={{ whiteSpace: "pre-line" }}>Cahirman</td>
              <td>+92 3325442627</td>
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <th>2</th>
              <td>Mr. Liaquat Ali Tahir</td>
              <td style={{ whiteSpace: "pre-line" }}>Controller Examination</td>
              <td>+92 3004635062</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Mr. Majid Hussain</td>
              <td style={{ whiteSpace: "pre-line" }}>RT of Hostel A</td>
              <td>+92 3015056306</td>
            </tr>
            {/* row 4 */}

            <tr className="hover">
              <th>4</th>
              <td>Mr. Ahmad Ali</td>
              <td style={{ whiteSpace: "pre-line" }}>No Duty Assigned</td>
              <td>+92 3107422532</td>
            </tr>

            {/* row 5 */}

            <tr>
              <th>5</th>
              <td>Ms. Waqas Ali</td>
              <td style={{ whiteSpace: "pre-line" }}>No Duty Assigned</td>
              <td>+92 3338495933</td>
            </tr>

            {/* row 6 */}

            <tr className="hover">
              <th>6</th>
              <td>Mr. Atta Ur Rehman akhdoom</td>
              <td style={{ whiteSpace: "pre-line" }}>
                Horticulture & Sanitation
              </td>
              <td>+92 3335293606</td>
            </tr>

            {/* row 7 */}

            <tr>
              <th>7</th>
              <td>Mr. Mazhar Hussain Shah</td>
              <td style={{ whiteSpace: "pre-line" }}>No Duty Assigned</td>
              <td>+92 3046675212</td>
            </tr>

            {/* row 8 */}

            <tr className="hover">
              <th>8</th>
              <td>Dr. Muhammad Abdullah </td>
              <td style={{ whiteSpace: "pre-line" }}>No Duty Assigned</td>
              <td>+92 3004886068</td>
            </tr>

            <tr>
              <th>7</th>
              <td>Mr. Wali Ullah</td>
              <td style={{ whiteSpace: "pre-line" }}>No Duty Assigned</td>
              <td>+92 3126450050</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Humanties;
