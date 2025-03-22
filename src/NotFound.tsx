import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <h1 className="text-6xl font-bold text-gray-800 dark:text-white mb-4">
        404
      </h1>
      <h2 className="text-2xl font-medium text-gray-600 dark:text-gray-300 mb-8">
        Page Not Found
      </h2>
      <p className="text-gray-500 dark:text-gray-400 mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
