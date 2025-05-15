export const baseUrl = "http://localhost:3001";

/*export const authorize = (email, password) => {
  // Pretend we did a fetch request that gave us back a token
  return new Promise((resolve, reject) => {
    resolve({ token: "a fake token" });
  });
};

export const checkToken = (token) => {
  // Pretend we did a fetch request that gave us back a user
  return new Promise((resolve, reject) => {
    resolve({
      data: { name: "fake user", email: "fake@example,com", _id: "fake-id" },
    });
  });
};*/

export const fakeSignIn = (email, password) => {
  return new Promise((resolve, reject) => {
    resolve({ token: "this-jwt-token-is-fake" });
  });
};

export const fakeSignUp = (email, password) => {
  return new Promise((resolve, reject) => {
    resolve({ message: "Sign up was a success" });
  });
};

export const checkFakeToken = (token) => {
  return new Promise((resolve, reject) => {
    resolve({
      data: {
        username: "Allan",
        email: "fake-allan@example.com",
        _id: "fake-id",
      },
    });
  });
};
