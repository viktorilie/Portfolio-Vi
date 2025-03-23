import "./Portfolio.css";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio">
      <div className="vcard row m-2 p-5">
        <h3 className="fw-semibold mb-4">Portfolio</h3>

        {/*  1 */}
        <div className="col-sm">
          <PortfolioCard
            imageSrc={"https://placehold.co/200"}
            altText="WEBSITE FOR IT COMPANY SHOWCASING THEIR PORTFOLIO & SKILLS"
            title="WEBSITE FOR IT COMPANY SHOWCASING THEIR PORTFOLIO & SKILLS"
            description="Developed a sophisticated website for an IT company to effectively
              showcase their portfolio and technical skills. The project
              involved with main foxus in front-end ensuring a
              seamless user experience and robust functionality to attract
              potential clients and partners."
            githubLink={"github/"}
          />
        </div>

        {/* 2 */}
        <div className="col-sm">
          <PortfolioCard
            imageSrc={"https://placehold.co/200"}
            altText="WEB/MOBILE APPLICATION FOR TELEPHONY SERVICES AND MANAGEMENT"
            title="WEB/MOBILE APPLICATION FOR TELEPHONY SERVICES AND MANAGEMENT"
            description="
                Developed a web application to manage telephony
               services and streamline service operations. The project involved
               both front-end and back-end development, focusing on creating a
               scalable and user-friendly platform to handle various telephony
               services and management tasks."
            githubLink={"github/"}
          />
        </div>

        {/* 3  */}
        <div className="col-sm">
          <PortfolioCard
            imageSrc={"https://placehold.co/200"}
            altText="WEB APPLICATION FOR COMPUTING, BUSINESS CONTINUITY & DATACENTER
               SERVICES"
            title="WEB APPLICATION FOR COMPUTING, BUSINESS CONTINUITY & DATACENTER
               SERVICES"
            description="
              Developed comprehensive web application to manage
               computing, business continuity and data center services. Focused on creating a scalable and robust platform to
               ensure seamless operation and management of critical services,
               with a focus on user-friendly design and functionality across
               different devices."
            githubLink={"github/"}
          />
        </div>

        {/* 4 */}
        <div className="col-sm">
          <PortfolioCard
            imageSrc={"https://placehold.co/200"}
            altText="FRONT-END REACT COMPONENT LIBRARY"
            title="FRONT-END REACT COMPONENT LIBRARY"
            description="
              Developed a robust front-end React component library designed to
               streamline the development process and promote code reusability
               across multiple projects. The project focused on creating reusable
               and consistent components, enhancing development efficiency and
               maintaining a cohesive design system across various applications."
            githubLink={"github/"}
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
