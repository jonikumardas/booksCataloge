import BooksDetails from "../components/ui/BooksDetails";
import Hero from "../layout/hero";
import Fetures from "./Fetures";

const Home = () => {
  return (
    <div>
      <Hero/>
      <Fetures/>
      <BooksDetails/>
    </div>
  );
};

export default Home;
