import React from "react";
import Arrow from "../../assets/icons/Arrow.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/linkedin.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import HeroSlider from "../Slider/HeroSlider";
import "./Hero.scss";

const Hero: React.FC = () => {
  const render = (
    <div className="social-media">
      <p>Follow us on</p>
      <div className="icons">
        <a
          href="https://www.instagram.com/reel/CyBdIIYPlWc/?igshid=MzRlODBiNWFlZA=="
          target="_blank"
          rel="noreferrer"
        >
          <Instagram />
        </a>
        <a
          href="https://www.linkedin.com/company/dewallstreet-capital/"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin />
        </a>
        <a
          href="https://twitter.com/Dewallstreet_"
          target="_blank"
          rel="noreferrer"
        >
          <Twitter />
        </a>
      </div>
    </div>
  );
  return (
    <div className="hero-container">
      <div className="mx">
        <div className="hero-wrapper">
          <div className="container-one">
            <div className="content">
              <h2>
                If there is a <span>daydreaming</span> competition, you will win
                first place!
              </h2>
              <p>
                Don't get triggered. It's true. You are just learning like
                others even without asking why and convincing yourself that you
                are doing good. It's not too late, start planning for your
                future and work towards it. Join now for your better future,
                where your DREAM is our priority.
              </p>
              <a
                href="https://main-lander.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="enroll">
                  <h5>Enroll now!</h5>
                  <img src={Arrow} alt="" />
                </div>
              </a>
            </div>
            <div className="links">{render}</div>
          </div>
          <div className="container-two">
            <HeroSlider />
          </div>
          <div className="media-links">{render}</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
