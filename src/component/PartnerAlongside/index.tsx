import React from "react";
import { ReactComponent as EndQuotes } from "../../assets/icons/end-quotes.svg";
import SamImg from "../../assets/images/sam.png";
import Dewall from "../../assets/logos/dewall.png";
import "./Partner.scss";

const PartnerAlongside: React.FC = () => {
  return (
    <div className="partner-wrapper">
      <div className="mx">
        <div className="partner-container">
          <h2>
            <span>PARTNER ALONGSIDE</span>
          </h2>
          <div className="partner-box">
            <div className="sam-content">
              <img src={SamImg} alt="" />
              <h3>Sam Raj. A</h3>
              <p>Director</p>
            </div>
            <div className="second-item">
              <div className="dewall-logo">
                <div className="mobile-prime-btn">
                  <button>PRIME Recruitment PARTNER</button>
                </div>
                <img src={Dewall} alt="" />
                <div className="prime-btn">
                  <button>PRIME Recruitment PARTNER</button>
                </div>
              </div>
              <EndQuotes />
              <p>
                In 2022, We've recruited the top ten students from the Dehustle
                Institute's workshop. Looking ahead to 2024, we have ambitious
                plans to expand our team by hiring 20 new individuals. If you
                excel in your internship project, We Dewallstreet is prepared to
                provide you with a conditional offer letter. We hire the best.
                Are you the one?
              </p>
            </div>
            <div className="mobile-responsive">
              <img src={SamImg} alt="" />
              <div>
                <h3>Sam Raj. A</h3>
                <p>Director</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerAlongside;
