import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="bxIcon"><i className='bx bx-face'></i></div>
      <div>
        <ul>
          <Link to="/">
            <li>Listagem</li>
          </Link>
          <Link to="/cadastro">
            <li>Cadastro</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
