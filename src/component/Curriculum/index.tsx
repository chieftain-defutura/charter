import React from "react";
import { ReactComponent as Download } from "../../assets/icons/download.svg";
import GroupImg from "../../assets/images/Group.png";
import "./Curriculum.scss";

const Curriculum: React.FC = () => {
  return (
    <div className="curriculum-wrapper">
      <div className="mx pad">
        <div className="curriculum-container">
          <div className="group-img">
            <img src={GroupImg} alt="" />
          </div>
          <div className="curriculum-content">
            <span>Curriculum Highlights</span>
            <h2>
              The exclusive dynamic course that's on everyone's wish list.
            </h2>
            <p>
              This course includes front-end, back-end, UI, and Web3, by
              breaking them down into core and allied components. This dynamic
              approach opens up a wide range of career possibilities, allowing
              you to choose what suits your preferences and adjust your career
              path accordingly. Whether you want to stick with your core or team
              up with your allied technology, it's all up to you!
            </p>
          </div>
          <div className="responsive-group-img">
            <img src={GroupImg} alt="" />
          </div>
        </div>

        <div className="cluster-wrapper">
          <div className="box">
            <div className="head">
              <h4>Cluster</h4>
              <h1>01</h1>
            </div>
            <div className="content">
              <div className="flex-box">
                <div>
                  <p>CORE</p>
                  <h3>UX Design</h3>
                </div>
                <div className="border-right"></div>
                <div>
                  <p>ALLIED</p>
                  <h3>Frontend</h3>
                </div>
              </div>
              <p>
                If you are unsure about choosing your career between UX designer
                and front-end developer this is the ideal blend for your varied
                interests.
              </p>
              <a href="/" className="download">
                <Download />
                <p>Download curriculum</p>
              </a>
            </div>
          </div>
          <div className="box second-box">
            <div className="head second-head">
              <h4>Cluster</h4>
              <h1>02</h1>
            </div>
            <div className="content second-content">
              <div className="flex-box">
                <div>
                  <p>CORE</p>
                  <h3>Frontend</h3>
                </div>
                <div className="border-right"></div>
                <div>
                  <p>ALLIED</p>
                  <h3>UX Design</h3>
                </div>
              </div>
              <p>
                If you aspire to be a front-end developer but also have a second
                thought about doubling as a UX designer, this is the perfect
                opportunity for you.
              </p>
              <a href="/" className="download">
                <Download />
                <p>Download curriculum</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
