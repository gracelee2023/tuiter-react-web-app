import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();
  const { pathname } = location;
  //   console.log(location.pathname);
  const links = [
    { path: "/labs/a3", label: "A3" },
    { path: "/hello", label: "Hello" },
    { path: "/tuiter", label: "Tuiter" },
  ];

  return (
    <div className="nav nav-pills mb-2">
      {/* Note that path in the "pathname === path" is without "", which means "pathname === "path"" is not correct
        Note that to={path}, not to= "path"!! */}

      {links.map(({ path, label }) => (
        <Link
          key={path}
          className={`nav-link ${pathname === path ? "active" : ""}`}
          to={path}
        >
          {label}
        </Link>
      ))}

      {/* <Link
        className={`nav-link ${location.pathname === "/labs/a3" ? "active" : ""}`}
        to="/labs/a3">
        A3
      </Link>

      <Link className={`nav-link ${location.pathname === "/hello" ? "active" : ""}`}
        to="/hello">
        Hello
      </Link>

      <Link className={`nav-link ${location.pathname === "/tuiter" ? "active" : ""}`}
        to="/tuiter">
        Tuiter
      </Link> */}
    </div>
  );
}

export default Navigation;
