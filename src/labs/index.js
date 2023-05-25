import Assignment3 from "./a3";
import Assignment4 from "./a4";
import { Link } from "react-router-dom";
import Navigation from "../nav";

function Labs(params) {
  return (
    <div>
      {/* <h3>Assignment 3</h3> */}
      {/* <Link to="/labs/a3">A3</Link> |<Link to="/hello">Hello</Link> |
      <Link to="/tuiter">Tuiter</Link> */}
      <Navigation />

      <Assignment3 />
    </div>
  );
}

export default Labs;
