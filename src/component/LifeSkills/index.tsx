import React from "react";
import "./LifeSkills.scss";
import { LifeSkillsData } from "../../data/lifeSkillsData";

const LifeSkills: React.FC = () => {
  return (
    <div className="life-skills-wrapper">
      <div className="mx">
        <div className="life-skills-container">
          <h4>
            <span>LIFE SKILLs</span>
          </h4>
          <h2>Education beyond texts.</h2>
        </div>
        <div className="life-skills-content">
          {LifeSkillsData.map((f, index) => {
            return (
              <div key={index} className="life-skills-box">
                <div>
                  <img src={f.image} alt="" />
                  <h3>{f.title}</h3>
                  <p>{f.description}</p>
                </div>
                <div className="border-right"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LifeSkills;
