// function ExploreScreen() {
//   return <h1>Explore</h1>;
// }
// export default ExploreScreen;

// import TuitSummaryItem from "../tuit-summary-list/tuit-summary-item";
// import TuitSummaryList from "../tuit-summary-list";

// function ExploreScreen() {
//   return (
//     <div>
//       <h1>Explore</h1>
//       <ul className="list-group">
//         {/* <div/> */}
//         {/* <TuitSummaryList />
//         <TuitSummaryItem />
//         <TuitSummaryItem /> */}
//         <TuitSummaryList />
//       </ul>
//     </div>
//   );
// }
// export default ExploreScreen;

import React from "react";
import TuitSummaryList from "../tuit-summary-list";
import { AiOutlineSearch } from "react-icons/ai";
import { GoGear } from "react-icons/go";
import "./index.css";
function ExploreScreen() {
  return (
    <>
      <div className="row">
        <div className="col-11 position-relative">
          <input
            placeholder="Search Tuiter"
            className="form-control rounded-pill ps-5"
          />
          <AiOutlineSearch
            className="fs-3 position-absolute 
                       wd-nudge-up"
          />
        </div>
        <div className="col-1">
          <GoGear
            className="wd-top-4 float-end
                       fs-3 position-relative"
          />
        </div>
      </div>
      <ul className="nav nav-pills mb-2 mt-2">
        <li className="nav-item">
          <button className="nav-link active">For You</button>
        </li>
        <li className="nav-item">
          <button className="nav-link">Trending</button>
        </li>
        <li className="nav-item">
          <button className="nav-link">News</button>
        </li>
        <li className="nav-item">
          <button className="nav-link">Sports</button>
        </li>
        <li className="nav-item">
          <button className="nav-link">Entertainment</button>
        </li>
      </ul>
      <div className="position-relative mb-2">
        <img src="/images/starship.png" alt="" className="w-100" />
        <h1 className="position-absolute wd-nudge-up text-white">
          SpaceX Starship
        </h1>
      </div>
      <TuitSummaryList />
    </>
  );
}
export default ExploreScreen;
