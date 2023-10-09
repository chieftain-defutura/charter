import React from "react";
import Footer from "./component/Footer";
import Approach from "./component/Approach";
import PartnerAlongside from "./component/PartnerAlongside";
import Mentor from "./component/Mentor";

const App: React.FC = () => {
  return (
    <div>
      <Approach />
      <Mentor />
      <PartnerAlongside />
      <Footer />
    </div>
  );
};

export default App;
