import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"; // Import your CSS file for navbar styling

const Navbar = () => {


  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/" className="logo">
          Task Manager
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
       
        <li className="dropdown">
          <button className="dropbtn">Manager</button>
          <div className="dropdown-content">
            <Link to="/manager/login">Login</Link>
            <Link to="/manager/logout">Logout</Link>
          </div>
        </li>
        <li className="dropdown">
          <button className="dropbtn">Admin</button>
          <div className="dropdown-content">
            <Link to="/admin/login">Login</Link>
            <Link to="/admin/logout">Logout</Link>
          </div>
        </li>
        <li className="dropdown">
          <button className="dropbtn">
            <i className="fa-regular fa-user"></i>
          </button>
          <div className="dropdown-content">
            <Link to="/user/login">Login</Link>
            <Link to="/logout">Logout</Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
