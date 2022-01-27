import React from "react";

import { NavLink } from "react-router-dom";

const NavbarDesktop = () => {
  return (
    <nav className="navbar">
      <ul className="container">
        <li className="nav__btn">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav__btn">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="nav__btn">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarDesktop;