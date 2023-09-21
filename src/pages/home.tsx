import Fotter from "../layout/fotter";
import Hero from "../layout/hero";
import Books from "./Books";
import Fetures from "./Fetures";

const Home = () => {
  return (
    <div>
      <Hero/>
      <Fetures/>
      <Books/>
      <Fotter/>
    </div>
  );
};

export default Home;
