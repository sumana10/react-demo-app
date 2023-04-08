import React from "react";

const Feature = ({ title, featureicon, desc }) => {
  return (
    <div className="feature" style={{ textAlign: "center", padding: "30px 0" }}>
      <img src={featureicon} alt="Icon Communities" />
      <h2>{title}</h2>
      {desc === "example@huddle.com" ? (
        <>
          <p>{desc}</p>
          <p>+1-543-123-4567</p>
        </>
      ) : (
        <p>{desc}</p>
      )}
    </div>
  );
};

export default Feature;
