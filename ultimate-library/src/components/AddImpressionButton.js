// AddImpressionButton.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import ImpressionModal from "./ImpressionModal";

export default function AddImpressionButton({ bookId }) {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [storedImpression, setStoredImpression] = useState("");

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const fetchStoredImpression = () => {
    const storedImpression = localStorage.getItem(`book${bookId}_impression`);
    setStoredImpression(storedImpression || "");
    openModal();
  };

  return (
    <div className="button-container">
      <div
        className="impression-button"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={fetchStoredImpression}
      >
        <button className="main-button impression-btn">
          <FontAwesomeIcon icon={faPenToSquare} />
          Impression
        </button>
      </div>
      {showModal && (
        <ImpressionModal
          bookId={bookId}
          storedImpression={storedImpression}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}
