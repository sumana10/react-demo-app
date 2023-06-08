import React, { useState } from "react";
import "../Accordion.css";

const Accordion = ({ sections }) => {

  const [active, setActive] = useState(null);

 /**
  * The function toggles the active state of an accordion item based on its index.
  * @param index - The index parameter is a number that represents the index of the accordion item that
  * is being toggled. It is used to determine which accordion item should be set as active or inactive.
  */
  const toggleAccordion = (index) => {
    // setActive(active === index ? null : index);
    setActive(index);
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
