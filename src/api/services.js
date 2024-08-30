import { apiCore } from "./core";

export const apiService = {
  // USER CONTACT MESSAGE
  async postEmailContact(data) {
    const res = await fetch(`${apiCore.url}/service/contact`, {
      method: "POST",
      body: JSON.stringify(data),
    });

    return await res.json();
  },
};