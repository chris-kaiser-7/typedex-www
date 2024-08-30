export const apiCore = {
  url: process.env.REACT_APP_PUBLIC_API_URL,
  headers(token) {
    return {
      "Cache-Control": "no-cache",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
  },
};