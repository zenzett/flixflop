import Cookies from "js-cookie";

import { ProfileResponse } from "@/types/ProfileResponse";

const TOKEN_COOKIE_NAME = "auth_token";
const USER_ID_COOKIE_NAME = "user_id";

const PROFILE_COOKIES = ["avatar_gravatar_hash", "avatar_tmdb_path", "language_iso_639_1", "country_iso_3166_1", "name", "include_adult", "username"];

export const storeTokenInCookies = (token: string, userId: string) => {
  Cookies.set(TOKEN_COOKIE_NAME, token, { path: "/", secure: true, sameSite: "Strict" });
  Cookies.set(USER_ID_COOKIE_NAME, userId, { path: "/", secure: true, sameSite: "Strict" });
};

export const storeProfileInCookies = (profileData: ProfileResponse) => {
  if (profileData.avatar.gravatar.hash) {
    Cookies.set("avatar_gravatar_hash", profileData.avatar.gravatar.hash, { path: "/", secure: true, sameSite: "Strict" });
  }

  if (profileData.avatar.tmdb.avatar_path) {
    Cookies.set("avatar_tmdb_path", profileData.avatar.tmdb.avatar_path, { path: "/", secure: true, sameSite: "Strict" });
  }

  Cookies.set("language_iso_639_1", profileData.iso_639_1, { path: "/", secure: true, sameSite: "Strict" });
  Cookies.set("country_iso_3166_1", profileData.iso_3166_1, { path: "/", secure: true, sameSite: "Strict" });
  Cookies.set("name", profileData.name, { path: "/", secure: true, sameSite: "Strict" });
  Cookies.set("include_adult", String(profileData.include_adult), { path: "/", secure: true, sameSite: "Strict" });
  Cookies.set("username", profileData.username, { path: "/", secure: true, sameSite: "Strict" });
};

export const getToken = (): string | null => {
  return Cookies.get(TOKEN_COOKIE_NAME) || null;
};

export const getUserId = (): string | null => {
  return Cookies.get(USER_ID_COOKIE_NAME) || null;
};

export const getProfile = () => {
  const profile = {
    avatar_gravatar_hash: Cookies.get("avatar_gravatar_hash") ?? undefined,
    avatar_tmdb_path: Cookies.get("avatar_tmdb_path") ?? undefined,
    language_iso_639_1: Cookies.get("language_iso_639_1") ?? undefined,
    country_iso_3166_1: Cookies.get("country_iso_3166_1") ?? undefined,
    name: Cookies.get("name") ?? undefined,
    include_adult: Cookies.get("include_adult") === "true",
    username: Cookies.get("username") ?? undefined,
  };

  return profile;
};

export const removeAllUserCookies = () => {
  Cookies.remove(TOKEN_COOKIE_NAME, { path: "/" });
  Cookies.remove(USER_ID_COOKIE_NAME, { path: "/" });

  PROFILE_COOKIES.forEach((cookieName) => {
    Cookies.remove(cookieName, { path: "/" });
  });
};

export const simulateLogin = (username: string, password: string): { token: string | null; userId: string | null } => {
  if (username === "zenzett" && password === "matalu") {
    return {
      token: process.env.NEXT_PUBLIC_TOKEN_ZENZETT || null,
      userId: process.env.NEXT_PUBLIC_ID_ZENZETT || null,
    };
  }
  if (username === "anggar" && password === "matamu") {
    return {
      token: process.env.NEXT_PUBLIC_TOKEN_ANGGAR || null,
      userId: process.env.NEXT_PUBLIC_ID_ANGGAR || null,
    };
  }
  return { token: null, userId: null };
};

export const loginUser = (username: string, password: string) => {
  const { token, userId } = simulateLogin(username, password);
  if (token && userId) {
    storeTokenInCookies(token, userId);
  }
  return { token, userId };
};
