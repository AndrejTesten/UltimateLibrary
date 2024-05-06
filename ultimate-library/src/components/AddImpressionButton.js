import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export default function AddImpressionButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="button-container">
      <div
        className="impression-button"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button className="main-button impression-btn">
          <FontAwesomeIcon icon={faPenToSquare} />
          Impression
        </button>
      </div>
    </div>
  );
}
