import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import style from "./activity.module.css";
import exploreStyle from "./explore.module.css";
import data from "./data/explore.json";

function Activity() {
  return (
    <>
      <div className={style.activityContainer}>
        <div className={exploreStyle.header}>
          <div className={exploreStyle.head}>
            <Link to="/home">
              <FaArrowLeft className={style.arrow} />
            </Link>
            <h5>ACTIVITY</h5>
          </div>
        </div>
        <div className={style.activity}>
          <div className={style.box}>
            <img src="/32.jpg" />
            <p>
              Grant Cardone scheduled "10X Kids w/Sabrina & Scarlett Cardone"
              for Monday April 12 at 1:00am
            </p>
          </div>
          <div className={style.box}>
            <img src="/32.jpg" />
            <p>
              Grant Cardone scheduled "10X Kids w/Sabrina & Scarlett Cardone"
              for Monday April 12 at 1:00am
            </p>
          </div>
          <div className={style.box}>
            <img src="/32.jpg" />
            <p>
              Grant Cardone scheduled "10X Kids w/Sabrina & Scarlett Cardone"
              for Monday April 12 at 1:00am
            </p>
          </div>
          <div className={style.box}>
            <img src="/32.jpg" />
            <p>
              Grant Cardone scheduled "10X Kids w/Sabrina & Scarlett Cardone"
              for Monday April 12 at 1:00am
            </p>
          </div>
          <div className={style.box}>
            <img src="/32.jpg" />
            <p>
              Grant Cardone scheduled "10X Kids w/Sabrina & Scarlett Cardone"
              for Monday April 12 at 1:00am
            </p>
          </div>
          <div className={style.box}>
            <img src="/32.jpg" />
            <p>
              Grant Cardone scheduled "10X Kids w/Sabrina & Scarlett Cardone"
              for Monday April 12 at 1:00am
            </p>
          </div>
          <div className={style.box}>
            <img src="/32.jpg" />
            <p>
              Grant Cardone scheduled "10X Kids w/Sabrina & Scarlett Cardone"
              for Monday April 12 at 1:00am
            </p>
          </div>
          <div className={style.box}>
            <img src="/32.jpg" />
            <p>
              Grant Cardone scheduled "10X Kids w/Sabrina & Scarlett Cardone"
              for Monday April 12 at 1:00am
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Activity;
