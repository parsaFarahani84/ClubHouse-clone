import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import style from "./upComing.module.css";
// import oldStyle from "./activity.module.css";
import { FaCalendarCheck } from "react-icons/fa";

function upComing() {
  return (
    <div className={style.upComingContainer}>
      <div className={style.header}>
        <div className={style.head}>
          <Link to="/home">
            <FaArrowLeft className={style.arrow} />
          </Link>
          <h5>UPCOMING</h5>
          <FaCalendarCheck className={style.calendar} />
        </div>
        <div className={style.today}>
          <h5>TODAY</h5>
        </div>
      </div>
      <div className={style.upComing}>
        <div className={style.box}>
          <p className={style.time}>3:00 AM</p>
          <h5>Scared Cypher Sundays</h5>
          <img src="/32.jpg" />
          <img src="/16.jpg" />
          <img src="/32.jpg" />
          <img src="/16.jpg" />
          <p className={style.exp}>
            w/Mummu fresh, Rami Nashashibi, sadi Nawab & binta Diallo room room
            for morning reflection, reaction, Chanting, prayer, and sound
            healing freestyle cypher{" "}
          </p>
        </div>

        <div className={style.box}>
          <p className={style.time}>3:00 AM</p>
          <h5>Scared Cypher Sundays</h5>
          <img src="/32.jpg" />
          <img src="/16.jpg" />
          <img src="/32.jpg" />
          <img src="/16.jpg" />
          <p className={style.exp}>
            w/Mummu fresh, Rami Nashashibi, sadi Nawab & binta Diallo room room
            for morning reflection, reaction, Chanting, prayer, and sound
            healing freestyle cypher{" "}
          </p>
        </div>

        <div className={style.box}>
          <p className={style.time}>3:00 AM</p>
          <h5>Scared Cypher Sundays</h5>
          <img src="/32.jpg" />
          <img src="/16.jpg" />
          <img src="/32.jpg" />
          <img src="/16.jpg" />
          <p className={style.exp}>
            w/Mummu fresh, Rami Nashashibi, sadi Nawab & binta Diallo room room
            for morning reflection, reaction, Chanting, prayer, and sound
            healing freestyle cypher{" "}
          </p>
        </div>

      </div>
    </div>
  );
}

export default upComing;
