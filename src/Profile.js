import React from "react";
import exploreStyle from "./explore.module.css";
import style from "./profile.module.css";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { BsAt, BsUpload, BsPlus } from "react-icons/bs";
import {
  AiOutlineSetting,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

function profile() {
  return (
    <>
      <div className={style.profileContainer}>
        <div className={exploreStyle.header}>
          <div className={`${exploreStyle.head} text-right mb-0`}>
            <Link to="/home">
              <FaArrowLeft className={exploreStyle.arrow} />
            </Link>
            <div className={style.actionBtn}>
              <BsAt />
              <BsUpload />
              <AiOutlineSetting />
            </div>
          </div>
        </div>
        <img src="/32.jpg" className={style.profile_image} />
        <h4>Parsa Farahani</h4>
        <p>@iamparsa0425</p>

        <div className={style.follow}>
          <p>
            <span>0</span> followers
          </p>
          <p>
            <span>51</span> following
          </p>
        </div>
        <button>Add a bio</button>
        <div className="mb-4">
          <button className="mb-0">
            <AiOutlineTwitter /> Add Twitter
          </button>
          <button className="mb-0">
            <AiOutlineInstagram /> Add Instagram
          </button>
        </div>
        <div className={style.nominated}>
          <img src="/32.jpg" />
          <div>
            <p>joined 14-July-2020</p>
            <p>
              Nominated by <span>Anton Alarcon</span>
            </p>
          </div>
        </div>
        <p>Member of</p>
        <button className={style.addMemberBtn}>
          <BsPlus />
        </button>
      </div>
    </>
  );
}

export default profile;
