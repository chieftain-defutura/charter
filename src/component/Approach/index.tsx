import React from "react";
import "./Approach.scss";
import { ApproachData } from "../../utils/data/ApproachData";

const Approach: React.FC = () => {
  return (
    <div className="approach-wrapper" id="approach">
      <div className="mx pad">
        <div className="approach-container">
          <div>
            <h3>
              <span>APPROACH</span>
            </h3>
            <h2>We bring something different to the table.</h2>
          </div>
          <div className="approach-content">
            {ApproachData.map((f, index) => {
              return (
                <div key={index} className="flex-item">
                  <f.icon />
                  <h3>{f.title}</h3>
                  <p>{f.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;
