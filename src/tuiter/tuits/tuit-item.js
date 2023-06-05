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
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-2">
          <img
            width={70}
            className="wd-user-image"
            alt=""
            src={tuit.avatarIcon}
          />
        </div>

        <div className="col-10">
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
            <div class="col-auto">
              <i class="fa-solid fa-ellipsis text-secondary"></i>
            </div>
            <div>{tuit.title}</div>
          </div>
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
