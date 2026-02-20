import React from "react";
import './Navigation.scss';
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <div className="nav">
        <div className="nav__links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/poems">Poems</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      </div>
    </nav>
  );
}