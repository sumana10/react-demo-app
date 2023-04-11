import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
const Logo = ({inner}) => {
    return (
      <div className="image-wrapper">

      <Link to="/">
        <img src={logo} alt="Logo" style={{width:`${inner}%`}}/>
      </Link>
      </div>
    );
  }

  export default Logo