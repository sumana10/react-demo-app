import React from "react";

const Hero = ({ title, illustation }) => {
  return (
    
    <section className="hero">
      <div className="hero-text">
        <h1>{title}</h1>
        <p style={{ padding: "0 60px" }}>
          Huddle is a community-building platform designed to help individuals
          and organizations connect with their audiences and foster meaningful
          discussions. The platform allows users to create their own communities
          and engage with others through various channels, such as discussion
          boards, live chat, and virtual events.
        </p>
      </div>
      {/* {title !== "Blog" && 
      <img
        src={illustation}
        alt="Illustration Mockups"
        style={{ paddingBottom: "40px" }}
      /> */}
    </section>
  
  );
};

export default Hero;
