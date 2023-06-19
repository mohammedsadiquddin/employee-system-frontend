import React, { useState } from "react";
import EmployeeService from "../service/EmployeeService";
import { useNavigate } from "react-router-dom";

const AddEmp = () => {
  const [emp, setEmp] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmp({ ...emp, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    if (emp.firstName === "" || emp.lastName === "" || emp.emailId === "") {
      alert("please fill all the details");
    } else {
      e.preventDefault();
      // console.log(emp);
      EmployeeService.addEmp(emp)
        .then((res) => {
          // console.log(res);
          setEmp({
            firstName: "",
            lastName: "",
            emailId: "",
          });
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            onChange={handleChange}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            onChange={handleChange}
            className="form-control"
            id="exampleInputPassword1"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="emailId"
            onChange={handleChange}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <button
          type="submit"
          className="btn btn-danger"
          style={{ marginLeft: "30px" }}
          onClick={handleBack}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddEmp;
