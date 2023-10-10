import React, { useEffect, useState } from "react";
import ClassRoomImgOne from "../../../assets/images/class-img-1.png";
import ClassRoomImgTwo from "../../../assets/images/class-img-2.png";
import ClassRoomImgThree from "../../../assets/images/class-img-3.png";
import ClassRoomImgFour from "../../../assets/images/class-img-4.png";
import "./Infrastructure.scss";

const InfrastructureSlider: React.FC = () => {
  const data = [
    ClassRoomImgOne,
    ClassRoomImgTwo,
    ClassRoomImgThree,
    ClassRoomImgFour,
  ];

  const [currentPage, setCurrentPage] = useState(0);

  // const handlePreviousClick = () => {
  //   if (currentPage > 0) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };

  // const handleNextClick = () => {
  //   if (currentPage < data.length - 1) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };

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
  }, [data.length]);

  return (
    <div className="custom-paging-slider">
      {/* <button onClick={handlePreviousClick} disabled={currentPage === 0}>
        Previous
      </button> */}
      <div className="image-container">
        <img src={data[currentPage]} alt={`${currentPage + 1}`} />
      </div>
      {/* <button
        onClick={handleNextClick}
        disabled={currentPage === data.length - 1}
      >
        Next
      </button> */}
      <div className="images">
        {data.map((f, i) => (
          <div key={i} onClick={() => setCurrentPage(i)}>
            <img src={f} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfrastructureSlider;
