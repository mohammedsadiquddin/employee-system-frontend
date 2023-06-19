// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import EmployeeService from "../service/EmployeeService";

// const ViewEmp = () => {
//   const { id } = useParams();

//   const [emp, setEmp] = useState({
//     firstName: "",
//     lastName: "",
//     emailId: "",
//   });

//   const getEmp = () => {
//     EmployeeService.getEmpById(id)
//       .then((res) => {
//         console.log(res);
//         setEmp(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   useEffect(() => {
//     getEmp();
//   }, []);

//   return (
//     <div>
//       <div
//         className="container"
//         style={{
//           paddingTop: "40px",
//           backgroundColor: "lavender",
//           height: "300px",
//         }}
//       >
//         <h2>FirstName: {emp.firstName}</h2>
//         <h2>LastName: {emp.lastName}</h2>
//         <h2>Email: {emp.emailId}</h2>
//       </div>
//     </div>
//   );
// };

// export default ViewEmp;

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";

const ViewEmp = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [emp, setEmp] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const getEmp = () => {
    EmployeeService.getEmpById(id)
      .then((res) => {
        // console.log(res);
        setEmp(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getEmp();
  }, []);

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div>
      <div
        className="container"
        style={{
          paddingTop: "40px",
          backgroundColor: "lavender",
          height: "300px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{ display: "flex", fontSize: "25px", alignItems: "center" }}
          >
            <span style={{ width: "120px", textAlign: "right" }}>
              FirstName:
            </span>
            <span>{emp.firstName}</span>
          </div>
          <div
            style={{ display: "flex", fontSize: "25px", alignItems: "center" }}
          >
            <span style={{ width: "120px", textAlign: "right" }}>
              LastName:
            </span>
            <span>{emp.lastName}</span>
          </div>
          <div
            style={{ display: "flex", fontSize: "25px", alignItems: "center" }}
          >
            <span style={{ width: "120px", textAlign: "right" }}>Email:</span>
            <span>{emp.emailId}</span>
          </div>

          <button
            type="button"
            className="btn btn-primary"
            onClick={handleBack}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewEmp;
