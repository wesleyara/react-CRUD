import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./main/App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cadastro from "./main/pages/Cadastro";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root"),
);
