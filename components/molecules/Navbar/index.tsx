import Link from "next/link";

import UserIcon from "./_components/UserIcon";
import HomeIcon from "./_components/HomeIcon";

const Navbar = () => {
  return (
    <div className="h-16 px-20 py-4 flex justify-between items-center text-orange-40">
      <Link href="/home">
        <span className="text-xl font-bold">FlixFlop</span>
      </Link>
      <div className="flex items-center gap-8">
        <Link href="/home">
          <HomeIcon />
        </Link>
        <Link href="/movies">
          <div>Movies</div>
        </Link>
        <Link href="/tvshows">
          <div>Tv Shows</div>
        </Link>
        <Link href="/mywatchlist">
          <div>My Watchlist</div>
        </Link>
      </div>
      <Link href="/myprofile">
        <UserIcon />
      </Link>
    </div>
  );
};

export default Navbar;
