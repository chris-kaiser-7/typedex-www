
import axios from 'axios';
import { apiCore } from "./core";

const reducer = (acc, item) => {
  const { name, ...rest } = item;
  acc[name] = rest; 
  return acc;
};

export const getAllBooks = async () => {
  try {
    const response = await axios.get(`${apiCore.url}/books`);
    return response.data.reduce(reducer, {});
  } catch (error) {
    console.error('Failed to fetch books:', error);
    throw error;
  }
};
