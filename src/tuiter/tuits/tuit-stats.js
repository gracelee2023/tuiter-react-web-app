import React from "react";
import { updateTuitThunk } from "../../services/tuits-thunks";
import { useDispatch } from "react-redux";

const TuitStats = ({ tuit }) => {
  const liked = tuit.liked;
  const disliked = tuit.disliked;
  const dispatch = useDispatch();
  return (
    <>
      <div className="row">
        <div className="col-2">
          <i className="fa-light fa-comment"></i>
          &nbsp;{tuit.replies}
        </div>
        <div className="col-2">
          <i className="fa-light fa-retweet"></i>
          &nbsp;{tuit.retuits}
        </div>
        <div className="col-2">
          {liked && (
            <i
              onClick={() =>
                dispatch(
                  updateTuitThunk({
                    ...tuit,
                    likes: tuit.likes - 1,
                    liked: false,
                  })
                )
              }
              className="fa-solid fa-heart"
              style={{ color: "red" }}
            ></i>
          )}
          {!liked && (
            <i
              onClick={() =>
                dispatch(
                  updateTuitThunk({
                    ...tuit,
                    likes: tuit.likes + 1,
                    liked: true,
                  })
                )
              }
              className="fa-light fa-heart"
            ></i>
          )}
          &nbsp;{tuit.likes}
        </div>
        <div className="col-2">
          {disliked && (
            <i
              onClick={() =>
                dispatch(
                  updateTuitThunk({
                    ...tuit,
                    dislikes: tuit.dislikes - 1,
                    disliked: false,
                  })
                )
              }
              className="fa-solid fa-thumbs-down"
              style={{ color: "red" }}
            ></i>
          )}
          {!disliked && (
            <i
              onClick={() =>
                dispatch(
                  updateTuitThunk({
                    ...tuit,
                    dislikes: tuit.dislikes + 1,
                    disliked: true,
                  })
                )
              }
              className="fa-light fa-thumbs-down"
            ></i>
          )}
          &nbsp;{tuit.dislikes}
        </div>
        <div className="col-2">
          <i className="fa-light fa-upload"></i>
        </div>
      </div>
    </>
  );
};

export default TuitStats;
