import React from 'react'
import Navbar from '../Navbar/Navbar';

const CS = () => {
  return (
    <div>
      <Navbar />
      <div className="overflow-x-auto">
        <h1 style={{
          display:'flex', 
          justifyContent:'center', 
          alignItems:'center', 
          marginTop:'2vw', 
          marginBottom:'3vw',
          fontWeight:'bold'
          }}>Department of Computer Science</h1>
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
              <td>Mr. Shahzad Aslam</td>
              <td style={{ whiteSpace: "pre-line" }}>
                Cordinator of NCEAC Committee
                <br />
                <br />
                Member of Alumni Committee
                <br />
                <br />
                Member of Scholarship Committee
                <br />
                <br />
                Lab Coordinator
              </td>
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <th>2</th>
              <td>Ms. Anma Wajid</td>
              <td style={{ whiteSpace: "pre-line" }}>
                Cordinator of NCEAC Committee
                <br />
                <br />
                Course Folder Management
                <br />
                <br />
                Member of Scholarship Committee
                <br />
                <br />
                Session Incharge of 21-CS
                <br />
                <br />
                Memebr of Health and saftey Committe
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Mr. Syed Mehdi</td>
              <td style={{ whiteSpace: "pre-line" }}>
                System Lab Incharge
                <br />
                <br />
                Member of Course Review Committee
                <br />
                <br />
                Session Incharge of 23-CS
                <br />
                <br />
                Memebr of Industrailization and Career Counseling Committee
              </td>
            </tr>
            {/* row 4 */}

            <tr className="hover">
              <th>4</th>
              <td>Ms. Uroosa Bilal</td>
              <td style={{ whiteSpace: "pre-line" }}>
                Member of Quality Enhancement Cell Team
                <br />
                <br />
                Session Incharge of 22-CS
              </td>
            </tr>

            {/* row 5 */}

            <tr>
              <th>5</th>
              <td>Dr. tayabah Kiran</td>
              <td style={{ whiteSpace: "pre-line" }}>RT Girls Hostel</td>
            </tr>

            {/* row 6 */}

            <tr className="hover">
              <th>6</th>
              <td>Mr. Noman Shoaib Quershi</td>
              <td style={{ whiteSpace: "pre-line" }}>
                Time Table Manager
                <br />
                <br />
                Date Sheet Management
                <br />
                <br />
                Member of Health and Information Committee
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CS
