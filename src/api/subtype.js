// api.js
import axios from 'axios';
import { apiCore } from "./core";

const jsonify = async (response) => {
  if (response.ok) {
    return await response.json();
  } else {
    throw {
      message: `Request failed with ${response.status}: ${response.statusText}`,
      code: response.status,
    };
  }
};

// Function to generate children nodes
export const generateChildrenNodes = () => {
  return axios.get(`${apiCore.url}/subtype/`);
};

// Function to generate a specific type of node
export const apiSubtype = {
  async generateNodeType(token, data){
    const res = await fetch(`${apiCore.url}/subtype/generate`, {
      method: "POST",
      headers: apiCore.headers(token),
      body: JSON.stringify(data)
    });
    return await jsonify(res);
  },
}
// export const async generateNodeType = (type, count) => {
//   return axios.post(`${apiCore.url}/subtype/generate`, {
//     type,
//     count,
//   });
// };

// Function to get all nodes
export const getAllNodes = () => {
  return axios.get(`${apiCore.url}/subtype/`);
};
  // async requestNewTOTP(token) {
  //   const res = await fetch(`${apiCore.url}/users/new-totp`, {
  //     method: "POST",
  //     headers: apiCore.headers(token),
  //   });
  //   return await jsonify(res);
  // },