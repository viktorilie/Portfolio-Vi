import "../App.css";
import { BsFilePersonFill } from "react-icons/bs";
import { BsLaptopFill } from "react-icons/bs";
import { BsBriefcaseFill } from "react-icons/bs";
import { BsFileEarmarkCode } from "react-icons/bs";
// import { BsEnvelopePaperFill } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFillSendFill } from "react-icons/bs";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div
        className="sidebar d-none d-md-flex flex-column px-3 text-dark shadow-lg border-right position-sticky vh-100"
        style={{ width: "250px", top: "0" }}>
        <div>
          <img
            className="sidebarimage shadow-lg rounded"
            src="./images/IMG_0013.JPG"
          />
        </div>
        <div>
          <h2 className="text-center">Viktor Ilie</h2>
          <h6 className="text-center">web developer</h6>
        </div>
        <hr />
        <ul className="nav navbar-nav flex-column mx-3">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <BsFilePersonFill className="mx-3" size={24} />
              <text className="">About Me</text>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#skills">
              <BsBriefcaseFill className="mx-3" size={24} />
              <text className="">Skills</text>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#portfolio">
              <BsLaptopFill className="mx-3" size={24} />
              <text className="">Portfolio</text>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#resume">
              <BsFileEarmarkCode className="mx-3" size={24} />
              <text className="">Resume</text>
            </a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="#">
              <BsEnvelopePaperFill className="mx-3" size={24} />
              <text className="">Contact me</text>
            </a>
          </li> */}
        </ul>
        <hr />
        {/* social media links */}
        <div className="list-inline mx-3">
          <li className="list-inline-item">
            <a className="nav-link" href="https://twitter.com/red_dev_vi">
              <BsTwitterX className="mx-3" size={24} />
            </a>
          </li>

          <li className="list-inline-item">
            <a
              className="nav-link"
              href="https://www.linkedin.com/in/viktor-ilie/">
              <BsLinkedin className="mx-3" size={24} />
            </a>
          </li>
          <li className="list-inline-item">
            <a className="nav-link" href="https://github.com/viktorilie">
              <BsGithub className="mx-3" size={24} />
            </a>
          </li>
        </div>
        <hr />
        <div className="py-2">
          <div className="px-3">
            <button
              type="submit"
              className="btn btn-outline-dark w-100 hireMe-button">
              <BsFillSendFill />
              <small>Hire me</small>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
