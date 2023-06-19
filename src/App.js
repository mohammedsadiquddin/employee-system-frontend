import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import GetEmp from "./components/GetEmp";
import AddEmp from "./components/AddEmp";
import UpdateEmp from "./components/UpdateEmp";
import DelEmp from "./components/DelEmp";
import ViewEmp from "./components/ViewEmp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<GetEmp />}></Route>
          <Route path="/addEmp" element={<AddEmp />}></Route>
          <Route path="/updateEmp/:id" element={<UpdateEmp />}></Route>
          <Route path="/delEmp/:id" element={<DelEmp />}></Route>
          <Route path="/viewEmp/:id" element={<ViewEmp />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
