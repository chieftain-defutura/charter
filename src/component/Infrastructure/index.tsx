import React from "react";
import "./Infrastructure.scss";
import InfrastructureSlider from "../Slider/InfrastructureSlider";
const Infrastructure = () => {
  return (
    <div className="infrastucture-container">
      <div className="mx">
        <div className="infrastructure-wrapper">
          <InfrastructureSlider />
          <div className="content">
            <span>infrastructure</span>
            <h2>
              Our infrastructure is incredibly <span> High-end</span> &
              exceptional that there is no comparison to be found anywhere else.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;
