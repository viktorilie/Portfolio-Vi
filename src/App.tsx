// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Portfolio-Vi/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
