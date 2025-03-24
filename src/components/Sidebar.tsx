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
import PortfolioImage from "../assets/portfolio_image.jpg";
import ThemeToggle from "../theme/ThemeToggle";

const Sidebar = () => {
  return (
    <>
      <div
        className="sidebar d-none d-md-flex flex-column text-dark border-right position-sticky vh-100 me-2  px-3"
        style={{ width: "250px", top: "0" }}>
        <div>
          <img
            className="sidebarimage shadow-lg rounded"
            src={PortfolioImage}
            alt="Portfolio image placeholder"
          />
        </div>
        <div>
          <h2 className="text-center fw-bolder">Viktor Ilie</h2>
          <h6 className="text-center">web developer</h6>
        </div>
        <hr className="p-1 m-1" />
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
        <hr className="p-1 m-1" />
        {/* social media links */}
        <div className="list-inline">
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
        <div className="px-3 mb-3">
          <button type="submit" className="btn btn-dark w-100 hireMe-button">
            <BsFillSendFill />
            <small className="ps-2">Hire me</small>
          </button>
        </div>
        <div className="d-flex flex-row">
          <button className="btn btn-dark btn-sm">Theme change</button>
        </div>
        <ThemeToggle />
      </div>
    </>
  );
};

export default Sidebar;
