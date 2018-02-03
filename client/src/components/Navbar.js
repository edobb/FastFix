import React from "react";
import { Link } from "react-router-dom";


const Navbar = props =>

<nav className="navbar navbar-default">
<div className="container-fluid">
  <div className="navbar-header">
    <Link className="navbar-brand" to="/">
      FastFix
    </Link>
  </div>
  <ul className="nav navbar-nav">
    <li
      className={
        window.location.pathname === "/"
          ? "active"
          : ""
      }
    >
      <Link to="/" handlePageChange={props.handlepagechange}>Home</Link>
    </li>
    <li
      className={
       window.location.pathname === "/user"
          ? "active"
          : ""
      }
    >
      <Link to="/user" handlePageChange={props.handleagechange}>User</Link>
    </li>
    <li
      className={
       window.location.pathname === "/contractor"
          ? "active"
          : ""
      }
    >
      <Link to="/contractor" handlePageChange={props.handleagechange}>Contractor</Link>
    </li>
    
  </ul>
</div>
</nav>;
export default Navbar;