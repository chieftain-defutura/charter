import React from "react";
import Meena from "../../assets/images/meena-img.png";
import "./Mentor.scss";

const Mentor: React.FC = () => {
  return (
    <div className="mentor-wrapper">
      <div className="mx pad">
        <div className="mentor-container">
          <div className="mentor-head">
            <h4>
              <span>MENTOR</span>
            </h4>
            <h2>Struggling to master everything on your own?</h2>
            <div className="mobile-responsive">
              <img src={Meena} alt="" />
            </div>
            <p>
              Well, worry not! Our facilitators are your guiding lights,
              cheering you on at every milestone. They keep it simple, friendly,
              and encouraging, helping you conquer complex concepts
              effortlessly. With a hands-on approach, they ensure you're
              well-prepared for real-world challenges.  They're committed to
              your growth, always ready to answer your questions. Join us, and
              let our facilitators pave the way to your tech dreams.
            </p>
          </div>
          <div className="image">
            <img src={Meena} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentor;
