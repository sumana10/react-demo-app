import React, { useContext, useState } from 'react'
import UserContext from '../utils/UserContext'


const Button = ({title}) => {
  
  const {user} = useContext(UserContext);
  const [buttonTitle, setButtonTitle] = useState("");

  
  const handleClick = () =>{
    setButtonTitle(user.email);
  }

  return (
    <button className="btn btn-primary" onClick={handleClick}>{buttonTitle ? buttonTitle : title}</button>
  )
}

export default Button