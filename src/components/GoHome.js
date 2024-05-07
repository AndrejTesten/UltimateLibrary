import { Link } from "react-router-dom";

export default function GoHome() {
  return (
    <div>
      <Link to={`/`}>
        <button className="go-home">Go Back</button>
      </Link>
    </div>
  );
}
