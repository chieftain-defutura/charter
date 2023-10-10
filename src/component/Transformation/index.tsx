import React, { useState, useEffect } from "react";
import "./Transformation.scss";
import ImageOne from "../../assets/images/madhu.png";
import ImageTwo from "../../assets/images/suganya.png";
import ImageThree from "../../assets/images/vicky.png";
import DewallLogo from "../../assets/logos/dewall.png";

const data = [
  {
    name: "vicky",
    role: "frontend developer",
    content:
      "I always had a dream of working in the tech industry, even though I had no coding skills to start with. To pursue my goal, I enrolled in a technology workshop, specifically choosing the technology track.  My determination led me to focus on improving my core skills.  The tasks assigned by Dehustle were highly beneficial because they concentrated only on career-related topics, avoiding unnecessary topics. Instead of traditional classroom learning, they provided hands-on practical training, which had a significant impact on my coding abilities. Now, I've gone from having no coding skills to being proficient in a range of technologies, including HTML, CSS, React, Next.js, TypeScript, GitHub, GitLab, Firebase, Node.js, and MongoDB.",
    image: ImageThree,
    date: "23 Mar,2019",
  },
  {
    name: "madhu",
    role: "frontend developer",
    content:
      "I always had a dream of working in the tech industry, even though I had no coding skills to start with. To pursue my goal, I enrolled in a technology workshop, specifically choosing the technology track.  My determination led me to focus on improving my core skills.  The tasks assigned by Dehustle were highly beneficial because they concentrated only on career-related topics, avoiding unnecessary topics. Instead of traditional classroom learning, they provided hands-on practical training, which had a significant impact on my coding abilities. Now, I've gone from having no coding skills to being proficient in a range of technologies, including HTML, CSS, React, Next.js, TypeScript, GitHub, GitLab, Firebase, Node.js, and MongoDB.",
    image: ImageOne,
    date: "23 Mar,2019",
  },
  {
    name: "suganya",
    role: "frontend developer",
    content:
      "I always had a dream of working in the tech industry, even though I had no coding skills to start with. To pursue my goal, I enrolled in a technology workshop, specifically choosing the technology track.  My determination led me to focus on improving my core skills.  The tasks assigned by Dehustle were highly beneficial because they concentrated only on career-related topics, avoiding unnecessary topics. Instead of traditional classroom learning, they provided hands-on practical training, which had a significant impact on my coding abilities. Now, I've gone from having no coding skills to being proficient in a range of technologies, including HTML, CSS, React, Next.js, TypeScript, GitHub, GitLab, Firebase, Node.js, and MongoDB.",
    image: ImageTwo,
    date: "23 Mar,2019",
  },
  {
    name: "vicky",
    role: "frontend developer",
    content:
      "I always had a dream of working in the tech industry, even though I had no coding skills to start with. To pursue my goal, I enrolled in a technology workshop, specifically choosing the technology track.  My determination led me to focus on improving my core skills.  The tasks assigned by Dehustle were highly beneficial because they concentrated only on career-related topics, avoiding unnecessary topics. Instead of traditional classroom learning, they provided hands-on practical training, which had a significant impact on my coding abilities. Now, I've gone from having no coding skills to being proficient in a range of technologies, including HTML, CSS, React, Next.js, TypeScript, GitHub, GitLab, Firebase, Node.js, and MongoDB.",
    image: ImageThree,
    date: "23 Mar,2019",
  },
  {
    name: "madhu",
    role: "frontend developer",
    content:
      "I always had a dream of working in the tech industry, even though I had no coding skills to start with. To pursue my goal, I enrolled in a technology workshop, specifically choosing the technology track.  My determination led me to focus on improving my core skills.  The tasks assigned by Dehustle were highly beneficial because they concentrated only on career-related topics, avoiding unnecessary topics. Instead of traditional classroom learning, they provided hands-on practical training, which had a significant impact on my coding abilities. Now, I've gone from having no coding skills to being proficient in a range of technologies, including HTML, CSS, React, Next.js, TypeScript, GitHub, GitLab, Firebase, Node.js, and MongoDB.",
    image: ImageOne,
    date: "23 Mar,2019",
  },
];
const Transformation = () => {
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
    <div className="transformation-container">
      <div className="mx">
        <div className="overlay"></div>
        <div className="transformation-wrapper">
          <div className="content">
            <span>transformation</span>
            <h2>Listen to those who turned their imaginations into reality.</h2>
          </div>
          <div className="slider">
            <div className="slider-container">
              <div
                className="image-container prev"
                onClick={handlePreviousClick}
              >
                <div className="image"></div>
                <img
                  src={
                    data[(currentPage - 1 + data.length) % data.length].image
                  }
                  alt={`Image ${currentPage - 1}`}
                />
              </div>
              <div className="image-container current">
                <img
                  src={data[currentPage].image}
                  alt={`Image ${currentPage}`}
                />
              </div>
              <div
                className={`image-container next ${
                  currentPage === data.length - 1 ? "no-animation" : ""
                }`}
                onClick={handleNextClick}
              >
                <div className="image"></div>
                <img
                  src={data[(currentPage + 1) % data.length].image}
                  alt={`Image ${currentPage + 1}`}
                />
              </div>
            </div>
            <div className="slider-content">
              <div className="">
                <h4>{data[currentPage].name}</h4>
                <h3>{data[currentPage].role}</h3>
              </div>
              <p>{data[currentPage].content}</p>
              <div className="border"></div>
              <div className="logo">
                <img src={DewallLogo} alt="" />
                <p>{data[currentPage].date}</p>
              </div>
            </div>
          </div>
          <div className="slick-dots">
            {data.map((f, i) => (
              <div
                style={{
                  background: currentPage === i ? "white" : "#252525",
                  padding: "2px",
                  fontSize: "0px",
                  //  borderRadius: "50%",
                  margin: "4px",
                  width: "42px",
                }}
                key={i}
                onClick={() => setCurrentPage(i)}
              >
                {i}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transformation;
