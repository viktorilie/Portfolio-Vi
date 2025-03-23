import "./Portfolio.css";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio">
      <div className="vcard row  m-2 p-5">
        <h3 className="fw-semibold mb-4">Portfolio</h3>

        {/*  1 */}
        <div className="col-sm">
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
        </div>

        {/* 2 */}
        <div className="col-sm">
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
        </div>

        {/* 3  */}
        <div className="col-sm">
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
