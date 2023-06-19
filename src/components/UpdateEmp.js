import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";

const UpdateEmp = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [emp, setEmp] = useState({
    id: id,
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

  const handleSubmit = (e) => {
    if (emp.firstName === "" || emp.lastName === "" || emp.emailId === "") {
      alert("please fill all the details");
    } else {
      e.preventDefault();
      // console.log(emp);
      // console.log(id);
      EmployeeService.updateEmp(id, emp)
        .then((res) => {
          // console.log(res);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleChange = (e) => {
    setEmp({ ...emp, [e.target.name]: e.target.value });
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
            value={emp.firstName}
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
            value={emp.lastName}
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
            value={emp.emailId}
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
          Update
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

export default UpdateEmp;
