import React, { useState } from "react";
import "./LifeTimeChance.scss";
import Calender from "../../assets/icons/calendar.png";
import Seats from "../../assets/icons/seat.svg";
import Secure from "./Secure";

const LifeTimeChance = () => {
  const [count, setCount] = useState(1);
  return (
    <div className="lifetimechance-container">
      <div className="mx">
        <div className="lifetimechance-wrapper">
          <div className="content">
            <h2>
              This is once in a <span>lifetime chance</span>, don't pass it up.
            </h2>
            <p>
              To get into our course, potential candidates must participate in
              the entrance examination. Only a few will have the opportunity to
              register for our course. You could be among those fortunate
              individuals. Therefore, do not hesitate any longer, hurry up!
            </p>
            <div className="timer-and-seats">
              <div className="timer">
                <div className="time">
                  <h1>23</h1>
                  <h4>weeks</h4>
                </div>
                <div className="time">
                  <h1>43</h1>
                  <h4>days</h4>
                </div>
                <div className="time">
                  <h1>03</h1>
                  <h4>hours</h4>
                </div>
              </div>
              <div className="seats">
                <div className="seat">
                  <img src={Calender} alt="" />
                  <div className="date">
                    <h3>BATCH STARTS FROM</h3>
                    <h4>15 June, 2024</h4>
                  </div>
                </div>
                <div className="border"></div>
                <div className="seat">
                  <img src={Seats} alt="" />
                  <div className="date">
                    <h3>AVAILABLE SEATS</h3>
                    <h4>03 seats</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="secure"
            style={{
              justifyContent: count === 3 ? "center" : "",
              alignItems: count === 3 ? "center" : "",
            }}
          >
            {count !== 3 && (
              // <h2>
              //   <span>Secure</span> your place before it's taken.
              // </h2>
              <div className="head">
                <h3>Secure</h3>
                <h2>your place before it's taken.</h2>
              </div>
            )}
            <Secure count={count} setCount={setCount} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeTimeChance;
