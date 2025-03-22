// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";

import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import AboutCard from "./components/AboutCard";

function App() {
  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <main>
          <AboutCard />
          <Skills />
          <Portfolio />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
