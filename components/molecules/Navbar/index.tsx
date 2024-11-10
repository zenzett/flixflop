"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FunctionComponent, HTMLAttributes, useCallback, useEffect, useMemo, useRef, useState } from "react";

import FlixFlopLogo from "@/components/atoms/FlixflopLogo";

import HomeButton from "./_components/HomeButton";
import LoginButton from "./_components/LoginButton";
import ProfileMenu from "./_components/ProfileMenu";

interface NavbarProps extends HTMLAttributes<HTMLDivElement> {
  name?: string;
}

const Navbar: FunctionComponent<NavbarProps> = ({ name, ...attrs }) => {
  const pathname = usePathname();

  const isTrendingAllPage = pathname === "/trending/all";
  const isTrendingMoviesPage = pathname === "/trending/movies";
  const isTrendingTVPage = pathname === "/trending/tv";
  const isTrendingPeoplePage = pathname === "/trending/people";

  const isMoviesNowPlayingPage = pathname === "/movies/now-playing";
  const isMoviesPopularPage = pathname === "/movies/popular";
  const isMoviesTopRatedPage = pathname === "/movies/top-rated";
  const isMoviesUpcomingPage = pathname === "/movies/upcoming";

  const isTVAiringTodayPage = pathname === "/tv/airing-today";
  const isTVOnTheAirPage = pathname === "/tv/on-the-air";
  const isTVPopularPage = pathname === "/tv/popular";
  const isTVTopRatedPage = pathname === "/tv/top-rated";

  const isPeoplePopularPage = pathname === "/people/popular";
  const isLoginPage = pathname === "/login";

  const trendingRef = useRef<HTMLDivElement | null>(null);
  const moviesRef = useRef<HTMLDivElement | null>(null);
  const tvRef = useRef<HTMLDivElement | null>(null);
  const peopleRef = useRef<HTMLDivElement | null>(null);

  const trendingButtonRef = useRef<HTMLButtonElement | null>(null);
  const moviesButtonRef = useRef<HTMLButtonElement | null>(null);
  const tvButtonRef = useRef<HTMLButtonElement | null>(null);
  const peopleButtonRef = useRef<HTMLButtonElement | null>(null);

  const [isShowTrending, setIsShowTrending] = useState<boolean>(false);
  const [isShowMovies, setIsShowMovies] = useState<boolean>(false);
  const [isShowTV, setIsShowTV] = useState<boolean>(false);
  const [isShowPeople, setIsShowPeople] = useState<boolean>(false);

  const isShowLoginButton = useMemo(() => {
    if (!isLoginPage) {
      return <LoginButton />;
    } else {
      return <HomeButton />;
    }
  }, [isLoginPage]);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (trendingRef.current && !trendingRef.current.contains(event.target as Node) && trendingButtonRef.current && !trendingButtonRef.current.contains(event.target as Node)) {
      setIsShowTrending(false);
    }
    if (moviesRef.current && !moviesRef.current.contains(event.target as Node) && moviesButtonRef.current && !moviesButtonRef.current.contains(event.target as Node)) {
      setIsShowMovies(false);
    }
    if (tvRef.current && !tvRef.current.contains(event.target as Node) && tvButtonRef.current && !tvButtonRef.current.contains(event.target as Node)) {
      setIsShowTV(false);
    }
    if (peopleRef.current && !peopleRef.current.contains(event.target as Node) && peopleButtonRef.current && !peopleButtonRef.current.contains(event.target as Node)) {
      setIsShowPeople(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="h-16 px-20 py-4 flex justify-between items-center text-orange-40" {...attrs}>
      <Link href="/home">
        <FlixFlopLogo />
      </Link>
      {!isLoginPage && (
        <div className="flex items-center gap-8">
          <div className="relative flex flex-col items-center" {...attrs}>
            <button onClick={() => setIsShowTrending((prev) => !prev)} className="btn border-transparent" ref={trendingButtonRef}>
              Trending
            </button>
            {isShowTrending && (
              <div ref={trendingRef} className={`absolute flex flex-col justify-center items-center top-12 rounded-xl border border-pink-hover w-40 p-2 shadow-lg shadow-pink-disabled`}>
                <Link href="/trending/all" className={`w-full text-center py-1 rounded-md transition duration active:scale-90 hover:bg-pink-950 ${isTrendingAllPage ? "text-pink-magenta" : ""}`}>
                  All
                </Link>
                <Link href="/trending/movies" className={`w-full text-center py-1 rounded-md transition duration active:scale-90 hover:bg-pink-950 ${isTrendingMoviesPage ? "text-pink-magenta" : ""}`}>
                  Movies
                </Link>
                <Link href="/trending/people" className={`w-full text-center py-1 rounded-md transition duration active:scale-90 hover:bg-pink-950 ${isTrendingPeoplePage ? "text-pink-magenta" : ""}`}>
                  People
                </Link>
                <Link href="/trending/tv" className={`w-full text-center py-1 rounded-md transition duration active:scale-90 hover:bg-pink-950 ${isTrendingTVPage ? "text-pink-magenta" : ""}`}>
                  TV
                </Link>
              </div>
            )}
          </div>
          <div className="relative flex flex-col items-center" {...attrs}>
            <button onClick={() => setIsShowMovies((prev) => !prev)} className="btn border-transparent" ref={moviesButtonRef}>
              Movies
            </button>
            {isShowMovies && (
              <div ref={moviesRef} className={`absolute flex flex-col justify-center items-center top-12 rounded-xl border border-pink-hover w-40 p-2 shadow-lg shadow-pink-disabled`}>
                <Link href="/movies/now-playing" className={`w-full text-center py-1 rounded-md transition duration active:scale-90 hover:bg-pink-950 ${isMoviesNowPlayingPage ? "text-pink-magenta" : ""}`}>
                  Now Playing
                </Link>
                <Link href="/movies/popular" className={`w-full text-center py-1 rounded-md transition duration active:scale-90 hover:bg-pink-950 ${isMoviesPopularPage ? "text-pink-magenta" : ""}`}>
                  Popular
                </Link>
                <Link href="/movies/top-rated" className={`w-full text-center py-1 rounded-md transition duration active:scale-90 hover:bg-pink-950 ${isMoviesTopRatedPage ? "text-pink-magenta" : ""}`}>
                  Top Rated
                </Link>
                <Link href="/movies/upcoming" className={`w-full text-center py-1 rounded-md transition duration active:scale-90 hover:bg-pink-950 ${isMoviesUpcomingPage ? "text-pink-magenta" : ""}`}>
                  Upcoming
                </Link>
              </div>
            )}
          </div>
          <div className="relative flex flex-col items-center" {...attrs}>
            <button onClick={() => setIsShowTV((prev) => !prev)} className="btn border-transparent" ref={tvButtonRef}>
              TV Series
            </button>
            {isShowTV && (
              <div ref={tvRef} className={`absolute flex flex-col justify-center items-center top-12 rounded-xl border border-pink-hover w-40 p-2 shadow-lg shadow-pink-disabled`}>
                <Link href="/tv/airing-today" className={`w-full text-center py-1 rounded-md transition duration active:scale-90 hover:bg-pink-950 ${isTVAiringTodayPage ? "text-pink-magenta" : ""}`}>
                  Airing Today
                </Link>
                <Link href="/tv/on-the-air" className={`w-full text-center py-1 rounded-md transition duration active:scale-90 hover:bg-pink-950 ${isTVOnTheAirPage ? "text-pink-magenta" : ""}`}>
                  On The Air
                </Link>
                <Link href="/tv/popular" className={`w-full text-center py-1 rounded-md transition duration active:scale-90 hover:bg-pink-950 ${isTVPopularPage ? "text-pink-magenta" : ""}`}>
                  Popular
                </Link>
                <Link href="/tv/top-rated" className={`w-full text-center py-1 rounded-md transition duration active:scale-90 hover:bg-pink-950 ${isTVTopRatedPage ? "text-pink-magenta" : ""}`}>
                  Top Rated
                </Link>
              </div>
            )}
          </div>
          <div className="relative flex flex-col items-center" {...attrs}>
            <button onClick={() => setIsShowPeople((prev) => !prev)} className="btn border-transparent" ref={peopleButtonRef}>
              People
            </button>
            {isShowPeople && (
              <div ref={peopleRef} className={`absolute flex flex-col justify-center items-center top-12 rounded-xl border border-pink-hover w-40 p-2 shadow-lg shadow-pink-disabled`}>
                <Link href="/people/popular" className={`w-full text-center py-1 rounded-md transition duration active:scale-90 hover:bg-pink-950 ${isPeoplePopularPage ? "text-pink-magenta" : ""}`}>
                  Popular
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
      {name !== undefined ? <ProfileMenu name={name} /> : isShowLoginButton}
    </div>
  );
};

export default Navbar;
