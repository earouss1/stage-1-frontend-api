import { APiKey } from "./Constants";

export const baseUrl =
  process.env.NODE_ENV === "production"
    ? `https://nomoreparties.co/news/v2/everythingq=${keyword}&apiKey=${APiKey}&from=${fromDate()}&to=${currentDate()}$pageSize=100`
    : "http://localhost:3001";

export const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export const handleRequest = (url, options = {}) => {
  return fetch(url, options).then(handleResponse);
};

export const signIn = (email, password, username) => {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, username }),
  }).then(handleResponse);
};

export const signUp = (email, password, username) => {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, username }),
  }).then(handleResponse);
};

export const handleToken = (token) => {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(handleResponse);
};
