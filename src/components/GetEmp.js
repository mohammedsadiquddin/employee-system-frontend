import React, { useEffect, useState } from "react";
import EmployeeService from "../service/EmployeeService";
import { useNavigate } from "react-router-dom";

const GetEmp = () => {
  const [employees, setEmployees] = useState([]);

  const navigate = useNavigate();

  const getEmployees = () => {
    EmployeeService.getEmp()
      .then((res) => {
        // console.log(res);
        setEmployees(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getEmployees();
  }, []);

  const handleEdit = (id) => {
    // console.log(id);
    navigate("/updateEmp/" + id);
  };

  const handleDelete = (id) => {
    // console.log(id);
    var r = window.confirm("Are you sure you want to delete");
    if (r === true) {
      EmployeeService.delEmp(id)
        .then((res) => {
          // console.log(res);
          getEmployees();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      // console.log("You have selected Cancelled!");
    }
  };

  const handleView = (id) => {
    navigate("viewEmp/" + id);
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Sno</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={employee.id}>
              <th scope="row">{index + 1}</th>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.emailId}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary bottomspace"
                  onClick={() => handleEdit(employee.id)}
                >
                  Edit
                </button>{" "}
                <button
                  type="button"
                  className="btn btn-danger bottomspace"
                  onClick={() => handleDelete(employee.id)}
                >
                  Delete
                </button>{" "}
                <button
                  type="button"
                  className="btn btn-secondary bottomspace"
                  onClick={() => handleView(employee.id)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetEmp;
