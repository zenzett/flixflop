const TOKEN_COOKIE_NAME = "auth_token";

export const storeTokenInClientCookies = (token: string) => {
  document.cookie = `${TOKEN_COOKIE_NAME}=${token}; path=/; secure; samesite=strict`;
};

export const removeTokenFromClientCookies = () => {
  document.cookie = `${TOKEN_COOKIE_NAME}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
};

export const getTokenFromClientCookies = (): string | null => {
  const match = document.cookie.match(new RegExp("(?:^|; )" + TOKEN_COOKIE_NAME + "=([^;]*)"));
  return match ? match[1] : null;
};
