import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import style from "./phoneConfirm.module.css";
import PhoneInput from "react-phone-number-input";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function PhoneConfirmation() {
  const [value, setValue] = useState();
  return (
    <div className={style.phoneConfirmContainer}>
      <Link exact to="/" className={style.backBtn}>
        <FaArrowLeft className="b" />
      </Link>
      <h1>Enter your phone</h1>
      <PhoneInput
        international
        defaultCountry="US"
        value={value}
        onChange={setValue}
      />
      <p className={style.explain}>
        By entering your number, you're agreeing to our
        <span>Terms of Service and Privacy Policy. </span>
        Thanks
      </p>
      <Link
        exact
        to="/code_confirm"
        className="primaryBtn d-flex align-items-center"
      >
        Next
        <FaArrowRight className={style.m} />
      </Link>
    </div>
  );
}

export default PhoneConfirmation;
