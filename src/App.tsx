import React from "react";
import Footer from "./component/Footer";
import Approach from "./component/Approach";
import PartnerAlongside from "./component/PartnerAlongside";
import Mentor from "./component/Mentor";
import LifeSkills from "./component/LifeSkills";
import Curriculum from "./component/Curriculum";
import Hero from "./component/Hero";
import Infrastructure from "./component/Infrastructure";
import Header from "./component/Header";
import Transformation from "./component/Transformation";
import LifeTimeChance from "./component/LifeTimeChance";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Transformation />
      <Approach />
      <Curriculum />
      <LifeSkills />
      <Infrastructure />
      <Mentor />
      <PartnerAlongside />
      <LifeTimeChance />
      <Footer />
    </div>
  );
};

export default App;
