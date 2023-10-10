import React from "react";
import Footer from "./component/Footer";
import Approach from "./component/Approach";
import PartnerAlongside from "./component/PartnerAlongside";
import Mentor from "./component/Mentor";
import LifeSkills from "./component/LifeSkills";
import Curriculum from "./component/Curriculum";
import Header from "./component/Header";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Approach />
      <Curriculum />
      <LifeSkills />
      <Mentor />
      <PartnerAlongside />
      <Footer />
    </div>
  );
};

export default App;
