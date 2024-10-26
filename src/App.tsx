// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import MainCard from "./components/MainCard";

import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <div className="pt-4 w-100">
          <MainCard />
          <Skills />
          <Portfolio />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
