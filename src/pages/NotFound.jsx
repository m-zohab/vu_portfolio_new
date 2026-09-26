import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import SEO from "../components/SEO.jsx";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page not found"
        description="The page you're looking for doesn't exist."
      />
      <section className="flex min-h-[60vh] items-center bg-paper py-20">
        <div className="section-container text-center">
          <p className="font-display text-7xl font-bold text-ink-200">404</p>
          <h1 className="mt-4 text-2xl font-bold text-ink-950 sm:text-3xl">
            This page wandered off somewhere
          </h1>
          <p className="mt-3 text-ink-500">
            The page you're looking for doesn't exist or may have moved.
          </p>
          <Link
            to="/"
            className="btn-motion mt-8 inline-flex items-center gap-2 rounded-full bg-ink-700 px-6 py-3 text-sm font-semibold text-white hover:bg-ink-800 hover:shadow-md"
          >
            <Home size={16} />
            Back to home
          </Link>
        </div>
      </section>
    </>
  );
}
