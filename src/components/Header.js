import React from "react";
import style from "./Header.module.css";
import { Link } from "react-router-dom";
// import { FaSearch } from "react-icons/fa";
// import { FaMailBulk } from "react-icons/fa";

function Header() {
  return (
    <div className={style.Header}>
      <Link exact to={"/explore"}>
        <img src="search.png" />
      </Link>
      <div className={style.nav_items}>
        <Link exact to="/friends_invite">
          <img src="email.png" />
        </Link>
        <Link exact to="/upcoming">
          <img src="calendar.png" />
        </Link>
        <Link exact to="/activity">
          <img src="notification.png" />
        </Link>
        <Link exact to="/profile">
          <img src="32.jpg" style={{ borderRadius: "20px" }} />
        </Link>
      </div>
    </div>
  );
}

export default Header;
