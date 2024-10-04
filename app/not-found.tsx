import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-full flex flex-col justify-center items-center text-center">
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href="/">
        <span style={{ color: "#0070f3", textDecoration: "underline" }}>
          Go back to Home
        </span>
      </Link>
    </div>
  );
}
