import "./Portfolio.css";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio">
      <div className="vcard d-flex flex-row m-2 p-5">
        <h3 className="fw-semibold mb-4">Portfolio</h3>

        {/*  1 */}
        <PortfolioCard
          imageSrc={"https://placehold.co/200"}
          altText="WEBSITE FOR IT COMPANY SHOWCASING THEIR PORTFOLIO & SKILLS"
          title="WEBSITE FOR IT COMPANY SHOWCASING THEIR PORTFOLIO & SKILLS"
          description="Developed a sophisticated website for an IT company to effectively
              showcase their portfolio and technical skills. The project
              involved both front-end and back-end development, ensuring a
              seamless user experience and robust functionality to attract
              potential clients and partners."
          githubLink={"github/"}
        />

        {/* 2 */}

        <PortfolioCard
          imageSrc={"https://placehold.co/200"}
          altText="WEB/MOBILE APPLICATION FOR TELEPHONY SERVICES AND MANAGEMENT"
          title="WEB/MOBILE APPLICATION FOR TELEPHONY SERVICES AND MANAGEMENT"
          description="
          Developed a sophisticated website for an IT company to effectively
              showcase their portfolio and technical skills. The project
              involved both front-end and back-end development, ensuring a
              seamless user experience and robust functionality to attract
              potential clients and partners."
          githubLink={"github/"}
        />

        <PortfolioCard
          imageSrc={"https://placehold.co/200"}
          altText="WEB/MOBILE APPLICATION FOR TELEPHONY SERVICES AND MANAGEMENT"
          title="WEB/MOBILE APPLICATION FOR TELEPHONY SERVICES AND MANAGEMENT"
          description="
          Developed a sophisticated website for an IT company to effectively
              showcase their portfolio and technical skills. The project
              involved both front-end and back-end development, ensuring a
              seamless user experience and robust functionality to attract
              potential clients and partners."
          githubLink={"github/"}
        />

        <PortfolioCard
          imageSrc={"https://placehold.co/200"}
          altText="WEB/MOBILE APPLICATION FOR TELEPHONY SERVICES AND MANAGEMENT"
          title="WEB/MOBILE APPLICATION FOR TELEPHONY SERVICES AND MANAGEMENT"
          description="
          Developed a sophisticated website for an IT company to effectively
              showcase their portfolio and technical skills. The project
              involved both front-end and back-end development, ensuring a
              seamless user experience and robust functionality to attract
              potential clients and partners."
          githubLink={"github/"}
        />

        {/* <div className="d-flex flex-row py-3">
          <div className="d-flex flex-column shadow">
            <img
              src="https://placehold.co/250"
              alt="WEB/MOBILE APPLICATION FOR TELEPHONY SERVICES AND MANAGEMENT"
              className="img-fluid rounded w-100"
            />
          </div>
          <div className="d-flex flex-column shadow">
            <h6 className="fw-bold p-2">
              WEB/MOBILE APPLICATION FOR TELEPHONY SERVICES AND MANAGEMENT
            </h6>
            <p className="p-2">
              Developed a web and mobile application to manage telephony
              services and streamline service operations. The project involved
              both front-end and back-end development, focusing on creating a
              scalable and user-friendly platform to handle various telephony
              services and management tasks.
            </p>
          </div>
        </div>

        <div className="d-flex flex-row py-3">
          <div className="d-flex flex-column shadow">
            <img
              src="https://placehold.co/250"
              alt="FRONT-END REACT COMPONENT LIBRARY"
              className="img-fluid rounded w-100"
            />
          </div>
          <div className="d-flex flex-column shadow">
            <h6 className="fw-bold p-2">FRONT-END REACT COMPONENT LIBRARY</h6>
            <p className="p-2">
              Developed a robust front-end React component library designed to
              streamline the development process and promote code reusability
              across multiple projects. The project focused on creating reusable
              and consistent components, enhancing development efficiency and
              maintaining a cohesive design system across various applications.
            </p>
          </div>
        </div>
        <div className="d-flex flex-row py-3">
          <div className="d-flex flex-column shadow">
            <img
              src="https://placehold.co/250"
              alt="FRONT-END REACT COMPONENT LIBRARY"
              className="img-fluid rounded w-100"
            />
          </div>
          <div className="d-flex flex-column shadow">
            <h6 className="fw-bold p-2">
              WEB APPLICATION FOR COMPUTING, BUSINESS CONTINUITY & DATACENTER
              SERVICES
            </h6>
            <p className="p-2">
              Developed a comprehensive web and mobile application to manage
              computing, business continuity, and data center services. The
              project focused on creating a scalable and robust platform to
              ensure seamless operation and management of critical services,
              with a focus on user-friendly design and functionality across
              different devices.
            </p>
          </div>
        </div>

        <div className="d-flex flex-row py-3">
          <div className="d-flex flex-column shadow">
            <img
              src="https://placehold.co/250"
              alt="FRONT-END REACT COMPONENT LIBRARY"
              className="img-fluid rounded w-100"
            />
          </div>
          <div className="d-flex flex-column shadow">
            <h6 className="fw-bold p-2">
              WEB APPLICATION FOR TRAVEL AGENCY MANAGMENT & ARRANGEMENTS
            </h6>
            <p className="p-2">
              A web application designed for managing travel agency and its
              arrangements for group tours, offering features like customer
              management, booking handling, itinerary planning,to streamline
              operations efficiently.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Portfolio;
