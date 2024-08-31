import { apiCore, jsonify } from "./core";

export const apiSubtype = {
  async generateNodeType(token, data){
    const res = await fetch(`${apiCore.url}/subtype/generate`, {
      method: "POST",
      headers: apiCore.headers(token),
      body: JSON.stringify(data)
    });
    return await jsonify(res);
  },
  async getAllSubtypes(){
    const res = await fetch(`${apiCore.url}/subtype/`, {
      method: "GET",
    });
    return await jsonify(res);
  },
  async postSubtype(token, data){
    const res = await fetch(`${apiCore.url}/subtype/`, {
      method: "POST",
      headers: apiCore.headers(token),
      body: JSON.stringify(data)
    });
    return await jsonify(res);
  }
}