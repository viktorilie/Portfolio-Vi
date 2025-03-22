import Sidebar from "./Sidebar";
import Skills from "./Skills";
import AboutCard from "./AboutCard";
import Portfolio from "./Portfolio";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <div className="pt-4 w-100">
          <AboutCard />
          <Skills />
          <Portfolio />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
