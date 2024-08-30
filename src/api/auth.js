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

export const apiAuth = {
  // LOGIN WITH MAGIC LINK OR OAUTH2 (USERNAME/PASSWORD)
  async loginWithMagicLink(email) {
    const res = await fetch(`${apiCore.url}/login/magic/${email}`, {
      method: "POST",
    });
    return await jsonify(res);
  },
  async validateMagicLink(token, data) {
    const res = await fetch(`${apiCore.url}/login/claim`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: apiCore.headers(token),
    });
    return await jsonify(res);
  },
  async loginWithOauth(username, password) {
    console.log(apiCore.url)
    console.log("test")
    const params = new URLSearchParams();
    params.append("username", username);
    params.append("password", password);
    const res = await fetch(`${apiCore.url}/login/oauth`, {
      method: "POST",
      body: params,
      headers: { "Content-Disposition": params },
    });
    return await jsonify(res);
  },
  // TOTP SETUP AND AUTHENTICATION
  async loginWithTOTP(token, data) {
    const res = await fetch(`${apiCore.url}/login/totp`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: apiCore.headers(token),
    });
    return await jsonify(res);
  },
  async requestNewTOTP(token) {
    const res = await fetch(`${apiCore.url}/users/new-totp`, {
      method: "POST",
      headers: apiCore.headers(token),
    });
    return await jsonify(res);
  },
  async enableTOTPAuthentication(token, data) {
    const res = await fetch(`${apiCore.url}/login/totp`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: apiCore.headers(token),
    });
    return await jsonify(res);
  },
  async disableTOTPAuthentication(token, data) {
    const res = await fetch(`${apiCore.url}/login/totp`, {
      method: "DELETE",
      body: JSON.stringify(data),
      headers: apiCore.headers(token),
    });
    return await jsonify(res);
  },
  // MANAGE JWT TOKENS (REFRESH / REVOKE)
  async getRefreshedToken(token) {
    const res = await fetch(`${apiCore.url}/login/refresh`, {
      method: "POST",
      headers: apiCore.headers(token),
    });
    return await jsonify(res);
  },
  async revokeRefreshedToken(token) {
    const res = await fetch(`${apiCore.url}/login/revoke`, {
      method: "POST",
      headers: apiCore.headers(token),
    });
    return await jsonify(res);
  },
  // USER PROFILE MANAGEMENT
  async createProfile(data) {
    const res = await fetch(`${apiCore.url}/users/`, {
      method: "POST",
      body: JSON.stringify(data),
    });
    return await jsonify(res);
  },
  async getProfile(token) {
    const res = await fetch(`${apiCore.url}/users/`, {
      headers: apiCore.headers(token),
    });
    return await jsonify(res);
  },
  async updateProfile(token, data) {
    const res = await fetch(`${apiCore.url}/users/`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: apiCore.headers(token),
    });
    return await jsonify(res);
  },
  // ACCOUNT RECOVERY
  async recoverPassword(email) {
    const res = await fetch(`${apiCore.url}/login/recover/${email}`, {
      method: "POST",
    });
    return await jsonify(res);
  },
  async resetPassword(password, claim, token) {
    const res = await fetch(`${apiCore.url}/login/reset`, {
      method: "POST",
      body: JSON.stringify({
        new_password: password,
        claim,
      }),
      headers: apiCore.headers(token),
    });
    return await jsonify(res);
  },
  async requestValidationEmail(token) {
    const res = await fetch(`${apiCore.url}/users/send-validation-email`, {
      method: "POST",
      headers: apiCore.headers(token),
    });
    return await jsonify(res);
  },
  async validateEmail(token, validation) {
    const res = await fetch(`${apiCore.url}/users/validate-email`, {
      method: "POST",
      body: JSON.stringify({ validation }),
      headers: apiCore.headers(token),
    });
    return await jsonify(res);
  },
  // ADMIN USER MANAGEMENT
  async getAllUsers(token) {
    const res = await fetch(`${apiCore.url}/users/all`, {
      headers: apiCore.headers(token),
    });
    return await jsonify(res);
  },
  async toggleUserState(token, data) {
    const res = await fetch(`${apiCore.url}/users/toggle-state`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: apiCore.headers(token),
    });
    return await jsonify(res);
  },
  async createUserProfile(token, data) {
    const res = await fetch(`${apiCore.url}/users/create`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: apiCore.headers(token),
    });
    return await jsonify(res);
  },
};
