import React from "react";
import Footer from "./component/Footer";
import Approach from "./component/Approach";
import PartnerAlongside from "./component/PartnerAlongside";
import Mentor from "./component/Mentor";
import LifeSkills from "./component/LifeSkills";
import Curriculum from "./component/Curriculum";

const App: React.FC = () => {
  return (
    <div>
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
