import React, {useState} from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "./Logo";
import hamburger from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close.svg";
// import HeroHome from "./HeroHome";

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

  const [showNav, setShowNav] = useState(false);
  const [nav, setnav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setnav(true);
    } else {
      setnav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);


  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <nav className={nav ? "inner-page" : ""}>
        <div className="container">
          <div className="flex">
            <Logo />
            <button class="hamburger" id="hamburger" onClick={toggleNav}>
              <img
                src={hamburger}
                alt="icon-hamburger"
                class="open"
              />
              <img src={close} alt="icon-close" class="close" />
            </button>
            <ul id="menu" className={showNav ? 'show' : ''}>
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
      {/* <HeroHome/> */}
    </>
  );
};
export default Header;
