import axios from 'axios';
import { apiCore, jsonify } from "./core";

export const apiBook = {
  async getAllBooks(){
    try {
      const response = await axios.get(`${apiCore.url}/books`);
      // return response.data.reduce(reducer, {});
      return response.data
    } catch (error) {
      console.error('Failed to fetch books:', error);
      throw error;
    }
  },
  async postBook(token, data){
    const res = await fetch(`${apiCore.url}/books`, {
      method: "POST",
      headers: apiCore.headers(token),
      body: JSON.stringify(data)
    });
    return jsonify(res)
  }
}