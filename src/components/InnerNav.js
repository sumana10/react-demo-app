import React,{useState} from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import hamburger from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close.svg";
// const InnerNav = () => {
//   return (
//     <header className="inner-page">
//       <div className="container">
//         <nav className="inner-nav">
//           {/* <img src={logo} alt="Huddle Logo" /> */}
//           <Logo inner="80"/>
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
//               <NavLink to="/wedo">What We Do</NavLink>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// const InnerNav = () => {
//   return (
//     <nav>
//         <div className="container">
//           <div className="flex">
//             <Logo />
//             <button class="hamburger" id="hamburger">
//               <img
//                 src={hamburger}
//                 alt="icon-hamburger"
//                 class="open"
//               />
//               <img src={close} alt="icon-close" class="close" />
//             </button>
//             <ul id="menu">
//               <li>
//                 <NavLink to="/">Home</NavLink>
//               </li>
//               <li>
//                 <NavLink to="/about">About</NavLink>
//               </li>

//               <li>
//                 <NavLink to="/blog">Blog</NavLink>
//               </li>
//               <li>
//                 <NavLink to="/contact">Contact</NavLink>
//               </li>
//               <li>
//                 <NavLink to="/wedo">What We Do</NavLink>
//               </li>
//             </ul>
//           </div>
//         </div>
//         {/* <button class="btn btn-secondary">Try It Free</button> */}
//       </nav>
//   );
// };
// export default InnerNav;


// const InnerNav = () => {
//   const [showMenu, setShowMenu] = useState(false);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <nav>
//       <div className="container">
//         <div className="flex">
//           <Logo />
//           <button className="hamburger" id="hamburger" onClick={toggleMenu}>
//             <img
//               src={hamburger}
//               alt="icon-hamburger"
//               className={showMenu ? "hide" : "open"}
//             />
//             <img
//               src={close}
//               alt="icon-close"
//               className={showMenu ? "open" : "hide"}
//             />
//           </button>
//           <ul className={showMenu ? "show" : "hide"} id="menu">
//             <li>
//               <NavLink to="/" onClick={toggleMenu}>
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/about" onClick={toggleMenu}>
//                 About
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/blog" onClick={toggleMenu}>
//                 Blog
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/contact" onClick={toggleMenu}>
//                 Contact
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/wedo" onClick={toggleMenu}>
//                 What We Do
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default InnerNav;
const InnerNav = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <nav>
      <div className="container">
        <div className="flex">
          <Logo />
          <button className={`hamburger ${menuActive ? 'active' : ''}`} onClick={() => setMenuActive(!menuActive)}>
            <img src={hamburger} alt="icon-hamburger" className="open" />
            <img src={close} alt="icon-close" className="close" />
          </button>
          <ul className={`menu ${menuActive ? 'active' : ''}`}>
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
  );
};

export default InnerNav;
