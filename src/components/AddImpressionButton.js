// AddImpressionButton.js

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export default function AddImpressionButton({ onAddImpression }) {
  return (
    <div className="button-container">
      <div className="impression-button" onClick={onAddImpression}>
        <button className="main-button impression-btn">
          <FontAwesomeIcon icon={faPenToSquare} />
          Impression
        </button>
      </div>
    </div>
  );
}
