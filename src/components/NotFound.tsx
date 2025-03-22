import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="d-flex flex-column justify-items-center align-items-center">
        <h1 className="text-danger pb-5 text-center display-1 fw-bold">404</h1>
        <h2 className=" display-5 fw-semibold pt-5 text-center">
          Page Not Found
        </h2>
        <p className="text-primary mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link to="/Portfolio-Vi/" className="btn btn-primary mt-3">
          Back to Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
