import Link from "next/link";


const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
            <h1 className="text-7xl md:text-9xl font-extrabold bg-linear-to-r from-red-400 to-orange-400 text-transparent bg-clip-text">
        404
      </h1>

      {/* Title */}
      <h2 className="mt-4 text-2xl md:text-3xl font-bold">
        Page not found
      </h2>

      {/* Description */}
      <p className="mt-2 text-gray-500 max-w-md">
        Sorry, we couldn’t find the page you’re looking for. It might have been moved or deleted.
      </p>

      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        <Link
          href="/"
          className="px-5 py-2 rounded-lg bg-linear-to-r from-red-400 to-orange-400 text-white font-medium hover:from-red-500 hover:to-orange-500 transition-all"
        >
          Go Home
        </Link>

      </div>
        </div>
    );
};

export default NotFoundPage;