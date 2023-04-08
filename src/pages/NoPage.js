import React from "react";
import { Link } from "react-router-dom";

const NoPage = () => {
  const styleX = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    color: "hsl(322, 100%, 66%)",
    flexDirection: "column",
  };
  return (
    <div style={styleX}>
      <h1>404 Page Not Found</h1>
      <Link to="/" className="btn btn-primary">Go To Huddle</Link>
    </div>
  );
};

export default NoPage;
