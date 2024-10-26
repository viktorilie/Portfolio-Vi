import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio container">
      <div className="card d-flex flex-column m-3 p-5">
        <h3 className="">Portfolio</h3>
        <div className="d-flex flex-row pb-5 pt-2 ">
          <h4>Projects I worked on:</h4>
        </div>

        {/* // Add a new project here */}
        <div className="d-flex flex-row py-3 ">
          <div className="d-flex flex-column shadow">
            <img
              src="https://placehold.co/250"
              alt="project name 1"
              className="img-fluid rounded w-100"
            />
          </div>
          <div className="d-flex flex-column shadow">
            <h6 className="fw-bold p-2">Project 1</h6>
            <p className="p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iusto
              deserunt, quam, nobis eveniet esse eos et beatae unde sed ex,
              doloribus at animi architecto! Consequuntur cumque mollitia porro
              voluptas.
            </p>
          </div>
        </div>
        <div className="d-flex flex-row py-3">
          <div className="d-flex flex-column shadow">
            <img
              src="https://placehold.co/250"
              alt="project1"
              className="img-fluid rounded w-100"
            />
          </div>
          <div className="d-flex flex-column shadow">
            <h6 className="fw-bold p-2">Project 2</h6>
            <p className="p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iusto
              deserunt, quam, nobis eveniet esse eos et beatae unde sed ex,
              doloribus at animi architecto! Consequuntur cumque mollitia porro
              voluptas.
            </p>
          </div>
        </div>

        <div className="d-flex flex-row py-3">
          <div className="d-flex flex-column shadow">
            <img
              src="https://placehold.co/250"
              alt="project1"
              className="img-fluid rounded w-100"
            />
          </div>
          <div className="d-flex flex-column shadow">
            <h6 className="fw-bold p-2">Project 2</h6>
            <p className="p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iusto
              deserunt, quam, nobis eveniet esse eos et beatae unde sed ex,
              doloribus at animi architecto! Consequuntur cumque mollitia porro
              voluptas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
