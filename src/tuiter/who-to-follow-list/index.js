import React from "react";
// we moved the data into the reducer instead
// import whoArray from "./who.json";
// import hook to retrieve state from reducer
import { useSelector } from "react-redux";

import WhoToFollowListItem from "./who-to-follow-list-item";
const WhoToFollowList = () => {
  // retrieve state from the store
  const whoArray = useSelector((state) => state.who);
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <h3>Who to follow</h3>
      </li>
      {whoArray.map((who) => (
        <WhoToFollowListItem key={who._id} who={who} />
      ))}
    </ul>
  );
};
export default WhoToFollowList;
