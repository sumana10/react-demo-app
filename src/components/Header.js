import React from "react";
import mockup from "../assets/images/illustration-mockups.svg";
import { NavLink, Link } from "react-router-dom";
import Button from "./Button";
import Logo from "./Logo";
import hamburger from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close.svg";

// const Header = () => {
//   return (
//     <header>
//       <div className="container">
//         <nav>
//           <Logo/>
//           <ul>
//             <li>
//               <NavLink to="/">Home</NavLink>
//             </li>
//             <li>
//               <NavLink to="/about">About</NavLink>
//             </li>

//             <li>
//               <NavLink to="/blog">Blog</NavLink>
//             </li>
//             <li>
//               <NavLink to="/contact">Contact</NavLink>
//             </li>
//             <li>
//                <NavLink to="/wedo">What We Do</NavLink>
//             </li>
//           </ul>
//           {/* <button class="btn btn-secondary">Try It Free</button> */}
//         </nav>
//         <div className="flex">
//           <div>
//             <h1>Build The Community Your Fans Will Love</h1>
//             <p>
//               Huddle re-imagines the way we build communities. You have a voice,
//               but so does your audience. Create connections with your users as
//               you engage in genuine discussion.
//             </p>
//             <Button title="Get Started For Free"/>
//           </div>
//           <div>
//             <img className="header-img" src={mockup} alt="" />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

const Header = () => {
  return (
    <>
      <nav>
        <div className="container">
          <div className="flex">
            <Logo />
            <button class="hamburger" id="hamburger">
              <img
                src={hamburger}
                alt="icon-hamburger"
                class="open"
              />
              <img src={close} alt="icon-close" class="close" />
            </button>
            <ul id="menu">
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
          </div>
        </div>
        {/* <button class="btn btn-secondary">Try It Free</button> */}
      </nav>
      <header>
        <div className="container">
          <div className="flex">
            <div>
              <h1>Build The Community Your Fans Will Love</h1>
              <p>
                Huddle re-imagines the way we build communities. You have a
                voice, but so does your audience. Create connections with your
                users as you engage in genuine discussion.
              </p>
              <Button title="Get Started For Free" />
            </div>
            <div>
              <img className="header-img" src={mockup} alt="" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
