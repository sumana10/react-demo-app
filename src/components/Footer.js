import logofooter from "../assets/images/logowhite.svg";
import { Link } from "react-router-dom";
import SmallBox from "./SmallBox";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
const Footer = () => {

  const {user} = useContext(UserContext);
  console.log(user);
  return (
    <>
  
  <SmallBox/>
    <footer>
      <div className="container">
        <img src={logofooter} alt="logo" />
        <div className="flex align-start">
          <ul>
            <li>
            Huddle communities can be great places to network with like-minded individuals.
            </li>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>
          <ul>
            <li><Link to="/about" style={{  textDecoration: "none",  color: "inherit"}}>About Us</Link></li>
            <li><Link to="/wedo" style={{  textDecoration: "none",  color: "inherit"}}>What We Do</Link></li>
            <li><Link to="/faq" style={{  textDecoration: "none",  color: "inherit"}}>FAQ</Link></li>
          </ul>
          <ul>
            <li>Career</li>
            <li><Link to="/blog" style={{  textDecoration: "none",  color: "inherit"}}>Blog</Link></li>
            <li><Link to="/contact" style={{  textDecoration: "none",  color: "inherit"}}>Contact Us</Link></li>
          </ul>
          <ul className="social-media">
            <li>
              <Link className="circle">
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link className="circle">
                <i className="fab fa-facebook-f"></i>
              </Link>
            </li>
            <li>
              <Link className="circle">
                <i className="fab fa-instagram"></i>
              </Link>
            </li>
          </ul>
          
        </div>
        <p> This App Made By © {user.name}</p>
      </div>
    </footer>
    </>
  );
};

export default Footer;
