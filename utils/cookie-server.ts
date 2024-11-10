// utils/auth.server.ts (Server-side code)
import { cookies } from "next/headers";

const TOKEN_COOKIE_NAME = "auth_token";

// Function to store token in cookies (server-side)
export const storeTokenInCookies = (token: string) => {
  const cookieStore = cookies();
  cookieStore.set(TOKEN_COOKIE_NAME, token, { path: "/", httpOnly: true });
};

// Function to delete token from cookies (server-side)
export const removeTokenFromCookies = () => {
  const cookieStore = cookies();
  cookieStore.delete(TOKEN_COOKIE_NAME);
};

// Function to retrieve token from cookies (server-side)
export const getTokenFromCookies = (): string | null => {
  const cookieStore = cookies();
  return cookieStore.get(TOKEN_COOKIE_NAME)?.value || null;
};
