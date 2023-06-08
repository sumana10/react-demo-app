import { useState } from "react";

const WeDo = () => {
  const [showDescription, setShowDescription] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");


  const handleClick = (item) =>{
    setSelectedItem(item);
    setShowDescription(true);
  }

  const styleX = {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: "40px",
    fontSize: "24px",
    textAlign: "center",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.15)",
    borderRadius: "5px",
    color: "hsl(192, 100%, 9%)",
    cursor: "pointer",
  };

  const wedo = [
    "Networking",
    "Education",
    "Support",
    "Advocacy",
    "Mentorship",
    "Collaboration",
  ];

  const wedoDes = [
    "Huddle communities can be great places to network with like-minded individuals who share common interests, goals, or professions. Members can connect with each other, share resources and ideas, and collaborate on projects.",
    "Huddle communities can provide a platform for members to learn from each other through discussions, workshops, and training sessions. Members can share their expertise and knowledge, as well as learn from others.",
    "Huddle communities can provide emotional support and encouragement to members who are going through difficult times or facing challenges. Members can share their experiences and offer advice to others who may be struggling.",
    "Huddle communities can advocate for social or political issues that are important to their members. Members can work together to raise awareness, promote change, and make a difference in their communities.",
    "Huddle communities can provide mentorship opportunities for members who are looking to learn from experienced individuals in their field or profession. Members can connect with mentors and receive guidance, feedback, and advice.",
    "Huddle communities can provide a platform for members to collaborate on projects, initiatives, or business ventures. Members can work together to bring their ideas to life and achieve their goals."
  ];

  return (
    <>
      <div className="container">
        <div style={{ textAlign: "center", marginTop: "120px" }}>
          <h1>What We Do💁🏻‍♀️</h1>
        </div>
        <div
          className="grid-container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            padding: "10px",
            gap: "10px",
            marginBottom: "50px",
          }}
        >
          {wedo.map((item, index) =>(
            <div 
            key={index}
            className="grid-item"
            style={styleX}
            onClick={() => handleClick(item)}
            >{item}</div>
          ))}
        </div>
        {showDescription ? <Description item={selectedItem} description={wedoDes[wedo.indexOf(selectedItem)]} /> : <Description />}
        
      </div>
    </>
  );
};

const Description = ({ item = "Networking", description ="Huddle communities can be great places to network with like-minded individuals who share common interests, goals, or professions. Members can connect with each other, share resources and ideas, and collaborate on projects." }) => {
  return (
    <div className="description" style={{padding:"15px 10px 30px 30px", marginBottom:"40px",boxShadow: "0 0 5px rgba(0, 0, 0, 0.15)", }}>
      <h2>{item}</h2>
      <p style={{opacity:"0.6"}}>{description}</p>
    </div>
  );
};

export default WeDo;

