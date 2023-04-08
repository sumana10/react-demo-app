import React from "react";
import mockup from "../assets/images/illustration-mockups.svg";
import { NavLink, Link } from "react-router-dom";
import Button from "./Button";
import Logo from "./Logo";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <Logo/>
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
          {/* <button class="btn btn-secondary">Try It Free</button> */}
        </nav>
        <div className="flex">
          <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <Button title="Get Started For Free"/>
          </div>
          <div>
            <img className="header-img" src={mockup} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

