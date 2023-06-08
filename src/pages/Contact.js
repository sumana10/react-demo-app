import illustation from "../assets/images/illustration-your-users.svg";
import messages from "../assets/images/icon-messages.svg"
import { Hero, Feature } from "../components/";
import { useState } from "react";


const ContactPage = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitting ${name} ${email} ${message}`);
    setName("");
    setEmail("");
    setMessage("");
    setShowMessage(true);
  }


  const btnStyle = {
    
    padding: "15px 60px",
    borderRadius: "50px",
    border: "none",
    backgroundColor: "#fff",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "700",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.15)",
    backgroundColor: "#00BFFF",
    color: "#fff",
    width: "100%",
    

}

  return (
    <>
    
    <main>
    <div className="container">
        <Hero title="Contact Us" illustation={illustation} />
        <Feature title="Let's stay connected, drop us a line!" desc={"example@huddle.com"} featureicon={messages}/>
        
        <section className="contact-form">
        {!showMessage ? (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Name"
              value={name}
              onChange={(event) =>setName(event.target.value)}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={message}
              placeholder="Send Meassage"
              onChange={(event) => setMessage(event.target.value)}
              required
            ></textarea>

            {/* <Button title="Send Message" stylex={btnStyle}/> */}
            <button stylex={btnStyle}>Send Message</button>
          </form>) : (
          <Message/>)}
        
        </section>
      
    </div>
    </main>
    </>
  );
};

export default ContactPage;

const Message = () =>{

  return (
    <div>
      <h2 style={{color: "green"}}>Successfully Submitted</h2>
    </div>
  )
}
