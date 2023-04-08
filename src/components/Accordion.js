import React, { useState } from "react";
import "../Accordion.css";

const Accordion = ({ sections }) => {
  const [active, setActive] = useState(null);

  const toggleAccordion = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <div className="accordion-container">
      {sections.map((section, index) => (
        <>
          <div key={index}>
            <button
              className={`accordion ${active === index ? "active" : ""}`}
              onClick={() => toggleAccordion(index)}
            >
              {section.title}
            </button>
            <div
              className="panel"
              style={{ maxHeight: active === index ? "none" : "0" }}
            >
              <p>{section.content}</p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Accordion;
