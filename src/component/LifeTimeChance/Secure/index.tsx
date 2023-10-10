import React from "react";
import "./Secure.scss";
import Mail from "../../../assets/icons/mail.svg";
import User from "../../../assets/icons/user.svg";
import Phone from "../../../assets/icons/phone.svg";

import Button from "../../Button";
import { ReactComponent as Tick } from "../../../assets/icons/tick.svg";
interface ISecure {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}
const Secure: React.FC<ISecure> = ({ count, setCount }) => {
  console.log(count);
  return (
    <div className="secure-container">
      {count === 1 && (
        <div className="container-one">
          <div className="input-container">
            <div className="input-wrapper">
              <div className="title">What should we call you here?</div>
              <div className="input">
                <img src={User} alt="" />
                <input type="text" placeholder="Name" />
              </div>
            </div>
            <div className="input-wrapper">
              <div className="title">
                We keep it light and send only what matters!
              </div>
              <div className="input">
                <img src={Mail} alt="" />
                <input type="text" placeholder="E-mail" />
              </div>
            </div>
            <div className="input-wrapper">
              <div className="title">Can you drop your WhatsApp number ?</div>
              <div className="input">
                <img src={Phone} alt="" />
                <input type="text" placeholder="Phone" />
              </div>
            </div>
          </div>

          <Button
            variant="primary"
            children="Next"
            onClick={() => setCount(2)}
          />
          <div className="router">
            <h1>01</h1>
            <div className="border"></div>
            <h1>02</h1>
          </div>
        </div>
      )}

      {count === 2 && (
        <div className="container-one">
          <div className="input-container">
            <div className="input-wrapper">
              <div className="title">
                Go ahead and pick the program that suits you.
              </div>
              <div className="input">
                <input
                  type="text"
                  placeholder="Remote programme for fresher graduates"
                />
              </div>
            </div>
            <div className="input-wrapper">
              <div className="title">
                Which time frame suits you best for your classes, AM or PM?
              </div>
              <div className="input">
                <input type="text" placeholder="Morning batch" />
              </div>
            </div>
            <div className="input-wrapper">
              <div className="title">
                Make your choice among the available courses.
              </div>
              <div className="input">
                <input type="text" placeholder="Cluster 1" />
              </div>
            </div>
          </div>
          <Button
            variant="primary"
            children="Next"
            onClick={() => setCount(3)}
          />
          <div className="router">
            <h1>01</h1>
            <div className="border"></div>
            <h1>02</h1>
          </div>
        </div>
      )}

      {count === 3 && (
        <div className="final-view">
          <div className="">
            <h4>Let's wrap things up.</h4>
            <h2> See you soon.</h2>
          </div>
          <div className="image">
            <Tick />
          </div>
        </div>
      )}
    </div>
  );
};

export default Secure;
