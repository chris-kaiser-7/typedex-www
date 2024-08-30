// api.js
import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api/v1';

// Function to generate children nodes
export const generateChildrenNodes = () => {
  return axios.get(`${BASE_URL}/subtype/`);
};

// Function to generate a specific type of node
export const generateNodeType = (type, count) => {
  return axios.post(`${BASE_URL}/type`, {
    type,
    count,
  });
};

// Function to get all nodes
export const getAllNodes = () => {
  return axios.get(`${BASE_URL}/subtype/`);
};