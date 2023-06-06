import React, { useState } from "react";
import { AiOutlinePicture } from "react-icons/ai";
import { HiOutlineDocument, HiOutlineLocationMarker } from "react-icons/hi";
import { MdFormatListBulleted } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { TbCalendarStats } from "react-icons/tb"; // Ensure this import is correct
import { BiBold, BiItalic } from "react-icons/bi";
import { createTuit } from "../reducers/tuits-reducer";
import { useDispatch } from "react-redux";

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening] = useState("");
  const dispatch = useDispatch();
  const tuitClickHandler = () => {
    const newTuit = {
      tuit: whatsHappening,
    };
    dispatch(createTuit(newTuit));
    setWhatsHappening("");
  };
  return (
    <div className="row gx-3 mt-3 mb-3">
      <div className="col-auto ms-3">
        <img
          src="/images/nasa.jpg"
          width={60}
          className="wd-user-image text-wrap"
          alt="user avatar"
        />
      </div>
      <div className="col">
        <textarea
          value={whatsHappening}
          placeholder="What's happening?"
          className="form-control border-0"
          onChange={(event) => setWhatsHappening(event.target.value)}
        ></textarea>

        <div>
          <button
            className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
            onClick={tuitClickHandler}
          >
            Tuit
          </button>
          <div className="text-primary fs-2">
            <AiOutlinePicture className="me-3" />
            <HiOutlineDocument className="me-3" />
            <MdFormatListBulleted className="me-3" />
            <BsEmojiSmile className="me-3"></BsEmojiSmile>
            <TbCalendarStats className="me-3"></TbCalendarStats>
            <HiOutlineLocationMarker className="me-3"></HiOutlineLocationMarker>
            <BiBold className="me-3"></BiBold>
            <BiItalic className="me-3"></BiItalic>
          </div>
        </div>
      </div>
      <div className="col-12">
        <hr />
      </div>
    </div>
  );
};
export default WhatsHappening;
