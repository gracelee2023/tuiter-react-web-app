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
// import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen/home-screen";
import ExploreScreen from "./explore-screen/index";
import BookmarksScreen from "./bookmarks-screen/bookmarks-screen";
import ProfileScreen from "./profile-screen/profile-screen";
// WhoToFollowList is the index.js file in who-to-follow-list directory
import WhoToFollowList from ".//who-to-follow-list";
// import WhoToFollowListItem from "./who-to-follow-list/who-to-follow-list-item";
// import the whoreducer
import whoReducer from "./reducers/who-reducer";
// import the new tuits reducer
import tuitsReducer from "./reducers/tuits-reducer";
// import configureStore
import { configureStore } from "@reduxjs/toolkit";
// import the Provider component
import { Provider } from "react-redux";
// configure the store
// const store = configureStore({ reducer: { who: whoReducer } });
const store = configureStore({
  reducer: { who: whoReducer, tuits: tuitsReducer },
});

function Tuiter() {
  return (
    <Provider store={store}>
      <div>
        {/* <Nav /> */}
        {/* < className="row mt-2">:In Bootstrap, mt-2 stands for "margin-top: 2". mt-2 is giving the div a top margin of approximately '0.5rem' or '8px'.  */}
        <div className="row mt-2">
          {/* The col-2 col-lg-1 col-xl-2 is also a set of class names from Bootstrap, used to specify the layout of an HTML element in a responsive grid system. */}
          {/* col-2: This class sets the width of the <div> to occupy 2 out of 12 columns of the Bootstrap's grid system on all devices (by default, Bootstrap's grid system has 12 columns).
          col-lg-1: This class changes the width of the <div> to occupy 1 out of 12 columns on large devices (screen widths equal to or greater than 992px in Bootstrap 4 and 5).
          col-xl-2: This class changes the width of the <div> to occupy 2 out of 12 columns on extra large devices (screen widths equal to or greater than 1200px in Bootstrap 4 and 5). */}
          <div className="col-2 col-lg-1 col-xl-2">
            <NavigationSidebar />
          </div>
          <div className="col-10 col-lg-7 col-xl-6">
            {/* <h1>Tuiter</h1> */}
            <Routes>
              <Route path="/home" element={<HomeScreen />} />
              <Route path="/explore" element={<ExploreScreen />} />
              <Route path="/bookmarks" element={<BookmarksScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
            </Routes>
          </div>
          <div className="d-none d-lg-block col-lg-4 col-xl-4">
            <WhoToFollowList />
            {/* <ul className="list-group">
            <li className="list-group-item">
              <h4>Who to follow</h4>
            </li>  ------ WhoToFollowList below already include the heading*/}

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
    </Provider>
  );
}
export default Tuiter;
