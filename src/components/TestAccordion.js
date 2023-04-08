import React, { useState } from "react";
import "../Accordion.css";

const Accordion = () => {
  const [active, setActive] = useState(null);

  const toggleAccordion = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <div>
      <h2>Accordion with symbols</h2>
      <p>
        In this example we have added a "plus" sign to each button. When the
        user clicks on the button, the "plus" sign is replaced with a "minus"
        sign.
      </p>
      {[1, 2, 3].map((index) => (
        <div key={index}>
          <button
            className={`accordion ${active === index ? "active" : ""}`}
            onClick={() => toggleAccordion(index)}
          >
            Section {index}
          </button>
          <div className="panel" style={{ maxHeight: active === index ? "none" : "0" }}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
