import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
function DetailsButton() {
  return (
    <button className="details-button">
      {" "}
      <FontAwesomeIcon icon={faCircleInfo} />
      More info
    </button>
  );
}

export default DetailsButton;
