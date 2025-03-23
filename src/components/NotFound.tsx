import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="border-2 rounded-3 d-flex flex-column justify-content-around vw-100 vh-50 text-center">
        <h1 className="text-danger text-center display-1 fw-bold">404</h1>
        <h2 className=" display-4 fw-semibold pt-5 text-center">
          Page Not Found
        </h2>
        <p className="text-primary mb-3">
          Oops! The page you're looking for doesn't exist.
        </p>
        <div>
          <Link to="/Portfolio-Vi/" className="btn btn-primary mt-3">
            Back to Home
          </Link>
        </div>

      </div>
    </>
  );
};

export default NotFound;
