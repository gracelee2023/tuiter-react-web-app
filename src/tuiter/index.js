// import { Link } from "react-router-dom";
// import Navigation from "../nav";

// function Tuiter() {
//   return (
//     <div>
//       {/* <Link to="/labs/a3">A3</Link> |<Link to="/hello">Hello</Link> |
//       <Link to="/tuiter">Tuiter</Link> */}
//       <Navigation />

//       <h1>Tuiter</h1>
//     </div>
//   );
// }
// export default Tuiter;

import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen/home-screen";
import ExploreScreen from "./explore-screen/index";
import BookmarksScreen from "./bookmarks-screen/bookmarks-screen";
import ProfileScreen from "./profile-screen/profile-screen";
// WhoToFollowList is the index.js file in who-to-follow-list directory
import WhoToFollowList from ".//who-to-follow-list";
import WhoToFollowListItem from "./who-to-follow-list/who-to-follow-list-item";

function Tuiter() {
  return (
    <div>
      <Nav />
      <div className="row">
        <div className="col-2">
          <NavigationSidebar />
        </div>
        <div className="col-7">
          <Routes>
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/explore" element={<ExploreScreen />} />
            <Route path="/bookmarks" element={<BookmarksScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Routes>
        </div>
        <div className="col-3">
          {/* <ul className="list-group">
            <li className="list-group-item">
              <h4>Who to follow</h4>
            </li>  ------ WhoToFollowList below already include the heading*/}
          <WhoToFollowList />
          {/* <WhoToFollowListItem />
            <WhoToFollowListItem
              who={{
                userName: "Tesla",
                handle: "tesla",
                avatarIcon: "tesla.png",
              }}
            />
            <WhoToFollowListItem
              who={{
                userName: "SpaceX",
                handle: "spacex",
                avatarIcon: "spaceX.jpeg",
              }}
            /> */}
          {/* </ul> */}
        </div>
      </div>
    </div>
  );
}
export default Tuiter;
