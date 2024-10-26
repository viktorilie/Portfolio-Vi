import { BsCaretRightFill } from "react-icons/bs";
import { BsFileEarmarkCode } from "react-icons/bs";
import "./MainCard.css";

const MainCard = () => {
  return (
    <>
      <div className="d-flex flex-row container">
        <div className="card d-flex flex-column m-3 p-5">
          <div>
            <h1>Viktor Ilie</h1>
            <h5>
              <b>Full Stack Developer</b>
            </h5>
          </div>
          <div>
            <p>
              I'm a software developer with passion to work on both frontend and
              backend. Specialized in react and developing my skills in C#. With
              experience for complex scalable web apps. I'm looking for new and
              exciting opportunities. Open for remote work.
            </p>
          </div>
          <div className="py-1 d-flex ">
            <p>
              <b>Want to know how I may help your project?</b>
              <br />
              Check out my portfolio and my resume
            </p>
          </div>
          <div className="align-items-center">
            <button
              className="btn-portfolio"
              onClick={() => {
                window.location.href = "#portfolio";
              }}>
              <BsCaretRightFill className="mx-1" />
              View my Portfolio
            </button>
            <button className="btn-portfolio">
              <BsFileEarmarkCode className="mx-1" size={20} />
              View my Resume
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCard;
