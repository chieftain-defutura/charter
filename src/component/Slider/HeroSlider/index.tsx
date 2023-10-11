import React, { useState, useEffect } from "react";
import HeroImgOne from "../../../assets/images/hero-img-1.png";
import HeroImgTwo from "../../../assets/images/hero-img-2.png";
import HeroImgThree from "../../../assets/images/hero-img-3.png";
import "./HeroSlider.scss";

const data = [HeroImgThree, HeroImgOne, HeroImgTwo, HeroImgThree, HeroImgOne];

const HeroSlider: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePreviousClick = () => {
    setCurrentPage((currentPage - 1 + data.length) % data.length);
  };

  const handleNextClick = () => {
    setCurrentPage((currentPage + 1) % data.length);
  };

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentPage((c) => {
          if (c === data.length - 2) return 1;

          return c + 1;
        }),
      4000
    );

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="heroslider-container">
      <div className="heroslider-wrapper">
        <div className="image-container prev" onClick={handlePreviousClick}>
          <div className="image"></div>
          <img src={data[currentPage - 1]} alt={` ${currentPage - 1}`} />
        </div>
        <div className="image-container current">
          <img src={data[currentPage]} alt={` ${currentPage}`} />
        </div>
        <div className={`image-container next`} onClick={handleNextClick}>
          <div className="image"></div>
          <img src={data[currentPage + 1]} alt={` ${currentPage + 1}`} />
        </div>
      </div>

      <div className="slick-dots">
        <div
          style={{
            background: currentPage === 1 ? "white" : "gray",
            padding: currentPage === 1 ? "8px" : "4px",
            fontSize: "0px",
            borderRadius: "50%",
            margin: "4px",
            width: "8px",
          }}
          key={1}
          onClick={() => setCurrentPage(1)}
        >
          {1}
        </div>
        <div
          style={{
            background: currentPage === 2 ? "white" : "gray",
            padding: currentPage === 2 ? "8px" : "4px",
            fontSize: "0px",
            borderRadius: "50%",
            margin: "4px",
            width: "8px",
          }}
          key={2}
          onClick={() => setCurrentPage(2)}
        >
          {2}
        </div>
        <div
          style={{
            background: currentPage === 3 ? "white" : "gray",
            padding: currentPage === 3 ? "8px" : "4px",
            fontSize: "0px",
            borderRadius: "50%",
            margin: "4px",
            width: "8px",
          }}
          key={3}
          onClick={() => setCurrentPage(3)}
        >
          {3}
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
