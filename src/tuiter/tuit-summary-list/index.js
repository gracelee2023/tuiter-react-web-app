import React from "react";
// replace getting tuits from a file
// import tuitsArray from "./tuits.json";
// to getting tuits from the store
import { useSelector } from "react-redux";
import TuitSummaryItem from "./tuit-summary-item";

const TuitSummaryList = () => {
  // destruct tuits from the state in the store
  const { tuits } = useSelector((state) => state.tuits);
  return (
    <ul className="list-group">
      {tuits.map((tuit) => (
        <TuitSummaryItem key={tuit._id} tuit={tuit} />
      ))}
    </ul>
  );
};
export default TuitSummaryList;
