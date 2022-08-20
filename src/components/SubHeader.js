import React from "react";
import style from "../explore.module.css";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function SubHeader(props) {
  return (
    <div className={style.head}>
      <Link to="/home">
        {" "}
        <FaArrowLeft className={style.arrow} />
      </Link>
      <h3 className={style.headerh3}>EXPLORE</h3>
    </div>
  );
}

export default SubHeader;
