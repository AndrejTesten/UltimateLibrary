import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function ShelfButton() {
  return (
    <Link to={`/shelf`}>
      <button className="shelf-button">
        <FontAwesomeIcon className="icon" icon={faBookOpenReader} />
        Go to your Shelf
      </button>
    </Link>
  );
}

export default ShelfButton;
