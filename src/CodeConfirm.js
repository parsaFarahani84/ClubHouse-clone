import React from "react";
import style from "./phoneConfirm.module.css";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function CodeConfirm() {
  return (
    <div className={style.phoneConfirmContainer}>
      <Link exact to={"/get_username"} className={style.backBtn}>
        <FaArrowLeft className="b" />
      </Link>
      <div className="text-center">
        <h1 style={{ width: "100%", maxWidth: "200px", marginBottom: "1em" }}>
          Enter the code we just texted you
        </h1>
        <input
          type="text"
          style={{
            width: "100%",

            textAlign: "center",
            outline: "none",
          }}
        ></input>
        <p className="mt-2" style={{ marginBottom: "0.5em" }}>
          Didn't receive it? <span>Tap to resend.</span>
        </p>
      </div>
      <Link
        exact
        to={"allow_notification"}
        className="primaryBtn d-flex align-items-center"
      >
        Next
        <FaArrowRight className={style.m} />
      </Link>
    </div>
  );
}

export default CodeConfirm;
