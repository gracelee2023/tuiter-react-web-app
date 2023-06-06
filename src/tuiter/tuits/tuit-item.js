import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faComment,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";
import { faRetweet, faUpload } from "@fortawesome/free-solid-svg-icons";
// import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "../home-screen/home.css";
import { useDispatch } from "react-redux";
import { deleteTuit } from "../reducers/tuits-reducer";

const TuitItem = ({
  tuit = {
    avatarIcon: "/images/spaceX.jpeg",
    userName: "spaceX",
    handle: "spacex",
    time: "2h",
    title:
      "Tesla CyberTruck lands on Mars and picks up the Curiosity rover on its 6' bed",
    liked: true,
    replies: 123,
    retuits: 432,
    likes: 12345,
  },
}) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  };
  return (
    <li className="list-group-item p-3">
      <div className="row gx-3">
        {/* Poster avatar */}
        <div className="col-auto">
          <img
            width={50}
            className="float-end rounded-circle"
            alt=""
            src={tuit.avatarIcon}
          />
        </div>

        {/* Tuit poster */}
        <div className="col">
          {/* place the below content in another row */}
          <div class="row">
            {/* place the below content in another column */}
            <div class="col">
              <span className="fw-bold">{tuit.userName}</span>
              <span className="fa-stack fa-2xs">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  size="2x"
                  className="icon-background"
                  style={{ color: "blue" }}
                />
                {/* <FontAwesomeIcon
                  icon={faCheck}
                  inverse
                  transform="shrink-6"
                  className="icon-foreground"
                  style={{ color: "white" }}
                /> */}
              </span>
              <span className="text-secondary">
                {tuit.handle} · {tuit.time}
              </span>
            </div>

            {/* Delete tuit button*/}
            <div className="col-auto">
              <button
                type="button"
                className="btn bg-transparent p-0"
                onClick={() => deleteTuitHandler(tuit._id)}
              >
                <i className="fas fa-remove fa-1x"></i>
              </button>
            </div>
          </div>

          {/* Tuit message */}
          <div className="mb-3">{tuit.title}</div>

          <div class="row text-secondary mt-3">
            <div class="col-3">
              <FontAwesomeIcon icon={faComment} className="me-2" />
              {tuit.replies}
            </div>
            <div class="col-3">
              <FontAwesomeIcon icon={faRetweet} className="me-2" />
              {tuit.retuits}
            </div>
            <div class="col-3">
              <FontAwesomeIcon
                icon={faHeart}
                style={{ color: "red" }}
                className="me-2"
              />
              {tuit.likes}
            </div>
            <div class="col-3">
              <FontAwesomeIcon icon={faUpload} />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TuitItem;
