import React from "react";
import style from "./roomCard.module.css";
import data from "../data/roomCard.json";
// import { FaArrowRight } from "react-icons/fa";
import { BsChatDots, BsChatDotsFill, BSFillPersonFill } from "react-icons/bs";

function RoomInfoCard() {
  return (
    <>
      {data.map((item) => (
        <div>
          <div>
            <div className={style.roomCardContainer}>
              <h6>{item.title}</h6>
              <h2>{item.sub_title}</h2>
              <div className={style.roomMembers}>
                <div>
                  <img src="./86.jpg"></img>
                  <img src="./16.jpg"></img>
                </div>
                <div>
                  {item.members.map((person) => (
                    <p>
                      {person.first_name} {person.last_name} <BsChatDots />
                    </p>
                  ))}
                  <p className="d-flex align-items-center">
                    <span className="mr-2">1.8</span>
                    <span className="mx-2"></span>{" "}
                    <span className="mx-2">5</span>
                    <BsChatDotsFill />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default RoomInfoCard;
