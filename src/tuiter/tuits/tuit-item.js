import React from "react";
import TuitStats from "./tuit-stats";
import { useDispatch } from "react-redux";
import { deleteTuitThunk } from "../../services/tuits-thunks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import "../home-screen/home.css";

const TuitItem = ({ tuit }) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  };
  return (
    <li className="list-group-item border-secondary">
      <div className="row">
        <div className="col-1">
          <img
            alt=""
            className="float-start rounded-circle"
            src={`/images/${tuit.image}`}
            width="40px"
            height="40px"
          />
        </div>
        <div className="col-11">
          <div className="float-start fw-bold"> {tuit.topic} &nbsp;</div>
          <div className="float-start">
            <i className="fa fa-sm">
              <FontAwesomeIcon
                icon={faCircleCheck}
                size="x"
                className="icon-background"
                style={{ color: "blue" }}
              />
            </i>{" "}
            &nbsp;
          </div>
          <div className="float-start">
            {" "}
            {tuit.handle} • {tuit.time}{" "}
          </div>
          <div className="float-end">
            <i
              className="fas fa-x float-end"
              onClick={() => deleteTuitHandler(tuit._id)}
            ></i>
          </div>
          <br />
          <div className="mb-2" style={{ fontSize: "15px" }}>
            {tuit.tuit}
          </div>
          <div className="col-12 mt-2">
            <TuitStats tuit={tuit} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default TuitItem;
