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

export const jsonify = async (response) => {
  if (response.ok) {
    return await response.json();
  } else {
    throw {
      message: `Request failed with ${response.status}: ${response.statusText}`,
      code: response.status,
    };
  }
};