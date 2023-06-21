import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function Navigation() {
  const { currentUser } = useSelector((state) => state.users);
  const location = useLocation();
  const { pathname } = location;
  //   console.log(location.pathname);
  const links = [
    { path: "/labs/a3", label: "A3" },
    { path: "/labs/a4", label: "A4" },
    { path: "/hello", label: "Hello" },
    { path: "/tuiter", label: "Tuiter" },
    { path: "/users", label: "Users" },
  ];

  return (
    <div className="nav nav-pills mb-2">
      {/* Note that path in the "pathname === path" is without "", which means "pathname === "path"" is not correct
        Note that to={path}, not to= "path"!! */}
      {!currentUser && (
        <>
          <Link className="nav-link" to="/tuiter/login">
            Login
          </Link>
          <Link className="nav-link" to="/tuiter/register">
            Register
          </Link>
        </>
      )}

      {/* if current user, then show profile link */}
      {currentUser && (
        <Link className="nav-link" to="/profile">
          Profile
        </Link>
      )}
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
