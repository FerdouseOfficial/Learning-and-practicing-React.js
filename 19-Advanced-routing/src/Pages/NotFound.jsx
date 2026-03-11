const NotFound = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-gray-800">404</h1>
          <p className="text-4xl font-semibold text-gray-700 mt-4">
            Page Not Found
          </p>
          <p className="text-gray-600 text-lg mt-2">
            Sorry, the page you're looking for doesn't exist.
          </p>
          <a
            href="/"
            className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
