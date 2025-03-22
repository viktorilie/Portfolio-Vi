import { BsCaretRightFill } from "react-icons/bs";
import { BsFileEarmarkCode } from "react-icons/bs";
import "./AboutCard.css";

const AboutCard = () => {
  return (
    <>
      <div className="vcard d-flex flex-column m-2 p-5">
        <div>
          <h1 className="fw-semibold">Viktor Ilie</h1>
          <code style={{ color: "#508c9b" }}>
            <code style={{ color: "#508c9b" }}>&lt;&gt;</code>Full Stack
            Developer<code style={{ color: "#508c9b" }}>&lt;/&gt;</code>
          </code>
        </div>
        <div className="pt-3">
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
    </>
  );
};

export default AboutCard;
