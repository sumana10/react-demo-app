import React from 'react'
import mockup from "../assets/images/illustration-mockups.svg";
import Button from "./Button";

const HeroHome = () => {
  return (
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
  )
}

export default HeroHome