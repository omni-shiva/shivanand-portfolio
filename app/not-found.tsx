import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <p className="section-kicker">404 · Page not found</p>
      <h1>This route is not part of the portfolio.</h1>
      <p>
        Return to the homepage to review production impact, public projects and contact details.
      </p>
      <Link className="button button-primary" href="/">
        Back to portfolio
      </Link>
    </main>
  );
}
