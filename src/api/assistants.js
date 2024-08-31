
import { apiCore, jsonify } from "./core";

export const apiAssistant = {
  async getAllAssistants(){
    const res = await fetch(`${apiCore.url}/assistant/`, {
      method: "GET",
    });
    return await jsonify(res);
  },
  async postAssistant(token, data){
    const res = await fetch(`${apiCore.url}/assistant`, {
      method: "POST",
      headers: apiCore.headers(token),
      body: JSON.stringify(data)
    });
    return jsonify(res)
  }
}