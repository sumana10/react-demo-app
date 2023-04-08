import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import Logo from "./Logo";

const InnerNav = () => {
  return (
    <header className="inner-page">
      <div className="container">
        <nav className="inner-nav">
          {/* <img src={logo} alt="Huddle Logo" /> */}
          <Logo inner="80"/>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/wedo">What We Do</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default InnerNav;
