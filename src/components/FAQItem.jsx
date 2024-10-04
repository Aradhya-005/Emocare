import React, { useState } from "react";
import ListIcon from "../assets/listIcon.svg";
import dropDownIcon from "../assets/dropdownIcon.png";
import PropTypes from "prop-types";  


function FAQItem({ question, answer }) {

    const [isAnswerVisible, setIsAnswerVisible] = useState(false);

    // Toggle answer visibility
    const toggleAnswerVisibility = () => {
      setIsAnswerVisible((prev) => !prev);
    };
  return (
    <li>
      <div>
        <img src={ListIcon} alt="Square box with border" loading="lazy" />
        <strong>{question}</strong> {/* Directly using destructured props */}
        <img src={dropDownIcon} alt="Dropdown icon" loading="lazy"  onClick={toggleAnswerVisibility} />
      </div>
      {isAnswerVisible && <p className="faq-answer">{answer}</p>}      {/* Conditionally render the answer based on state */}
    </li>
  );
}
FAQItem.propTypes = {
    question: PropTypes.string.isRequired,  
    answer: PropTypes.string.isRequired,   
  };
  
export default FAQItem;
