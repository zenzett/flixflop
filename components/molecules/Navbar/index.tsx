import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-16 px-20 py-4 flex justify-between items-center text-orange-40">
      <Link href="/home">
        <span className="text-xl font-bold">FlixFlop</span>
      </Link>
      <div className="flex items-center gap-8">
        <Link href="/home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-5"
          >
            <path
              fillRule="evenodd"
              d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
        <Link href="/movies">
          <div>Movies</div>
        </Link>
        <Link href="/mywatchlist">
          <div>My Watchlist</div>
        </Link>
      </div>
      <Link href="/myprofile">
        <div>My Profile</div>
      </Link>
    </div>
  );
};

export default Navbar;
