import axios from "axios";

const EMPLOYEE_API_URL =
  "https://employee-system-backend-production.up.railway.app/api/employees";

// const EMPLOYEE_API_URL = "http://localhost:8080/api/employees";

class EmployeeService {
  getEmp() {
    return axios.get(EMPLOYEE_API_URL);
  }
  addEmp(emp) {
    return axios.post(EMPLOYEE_API_URL, emp);
  }
  getEmpById(id) {
    return axios.get(EMPLOYEE_API_URL + "/" + id);
  }
  updateEmp(id, emp) {
    return axios.put(EMPLOYEE_API_URL + "/" + id, emp);
  }
  delEmp(id) {
    return axios.delete(EMPLOYEE_API_URL + "/" + id);
  }
}
export default new EmployeeService();
