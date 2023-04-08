import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
const Logo = ({inner}) => {
    return (
      <Link to="/">
        <img src={logo} alt="Logo" style={{width:`${inner}%`}}/>
      </Link>
    );
  }

  export default Logo