import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const NavigationSidebar = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
      <div className="list-group">
        <Link to="/" className="list-group-item list-group-item-action">
          <i className="fab fa-twitter"></i>
        </Link>
        {/* Home */}
        {/* <NavLink to="/tuiter" end>: end means this link will be active only when the path is exactly "/tuiter".
        If the path is "/tuiter/somethingelse", the link will not be active. */}
        {/* The Bootstrap responsive layout setting is being applied only to the text.
        The icon <i className="fa-solid fa-hashtag"></i> will always be displayed because it does not have any responsive classes.
        The text "Explore" is within a span element with the classes d-none and d-xl-inline, which are responsive classes.
        This means the text will be hidden on smaller screens (d-none), and will only appear inline (d-xl-inline) on extra-large (xl) screens. */}
        <NavLink
          to="/tuiter/home"
          end
          className="list-group-item list-group-item-action"
        >
          <i className="fa-solid fa-home"></i>
          <span className="d-none d-xl-inline ps-1">Home</span>
        </NavLink>
        {/* Explore */}
        <NavLink
          to="/tuiter/explore"
          className="list-group-item list-group-item-action"
        >
          <i className="fa-solid fa-hashtag"></i>
          <span className="d-none d-xl-inline ps-1">Explore</span>
        </NavLink>
        {/* Notifications */}
        <NavLink
          to="/tuiter/notifications"
          className="list-group-item list-group-item-action"
        >
          <i className="fa-solid fa-bell"></i>
          <span className="d-none d-xl-inline ps-1">Notifications</span>
        </NavLink>
        {/* Messages */}
        <NavLink
          to="/tuiter/messages"
          className="list-group-item list-group-item-action"
        >
          <i className="fa-solid fa-envelope"></i>
          <span className="d-none d-xl-inline ps-1">Messages</span>
        </NavLink>

        {/* Bookmarks */}
        <NavLink
          to="/tuiter/bookmarks"
          className="list-group-item list-group-item-action"
        >
          <i className="fa-solid fa-bookmark"></i>
          <span className="d-none d-xl-inline ps-1">Bookmarks</span>
        </NavLink>

        {/* Lists */}
        <NavLink
          to="/tuiter/lists"
          className="list-group-item list-group-item-action"
        >
          <i className="fa-solid fa-list"></i>
          <span className="d-none d-xl-inline ps-1">Lists</span>
        </NavLink>

        {/* Profile */}
        <NavLink
          to="/tuiter/profile"
          className="list-group-item list-group-item-action"
        >
          <i className="fa-solid fa-user"></i>
          <span className="d-none d-xl-inline ps-1">Profile</span>
        </NavLink>
        {/* More */}
        <NavLink
          to="/tuiter/more"
          className="list-group-item list-group-item-action"
        >
          <span className="fa-stack fa-2xs">
            <i className="fa-solid fa-circle fa-stack-2x"></i>
            <i className="fa-solid fa-ellipsis fa-stack-1x fa-inverse"></i>
          </span>
          <span className="d-none d-xl-inline">More</span>
        </NavLink>
        <div className="d-grid mt-2">
          <Link
            to="/tuiter/tweet"
            className="btn btn-primary btn-block rounded-pill"
          >
            Tweet
          </Link>
        </div>

        {!currentUser && (
          <Link className="list-group" to="/tuiter/login">
            {" "}
            Login{" "}
          </Link>
        )}
        {!currentUser && (
          <Link className="list-group" to="/tuiter/register">
            Register
          </Link>
        )}
        {currentUser && (
          <Link className="list-group" to="/tuiter/profile">
            {" "}
            Profile{" "}
          </Link>
        )}
      </div>
    </>
  );
};
export default NavigationSidebar;

// Use map to loop thourgh links
// const NavigationSidebar = () => {
//   const { pathname } = useLocation();
//   const [ignore, tuiter, active] = pathname.split("/");
//   const links = [
//     "home",
//     "explore",
//     "notifications",
//     "messages",
//     "bookmarks",
//     "lists",
//     "profile",
//     "more",
//   ];
//   return (
//     <div className="list-group">
//       {links.map((link) => (
//         <Link
//           key={link}
//           to={`/tuiter/${link}`}
//           className={`list-group-item text-capitalize ${
//             active === link ? "active" : ""
//           }`}
//         >
//           {link}
//         </Link>
//       ))}
//     </div>
//   );
// };
// export default NavigationSidebar;
