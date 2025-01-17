import axios from "axios";

axios.defaults.withCredentials = false;

function userSignUp(data) {
  return axios({
    method: "POST",
    url: "http://0.0.0.0:7878/signup",
    data: data,
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return { message: err };
    });
}

function userSignIn(data) {
  return axios({
    method: "POST",
    url: "http://0.0.0.0:7878/signin",
    data: data,
  })
    .then((response) => {
      console.log("response: ", response);
      return response;
    })
    .catch((err) => {
      return { message: err };
    });
}

function userEdit(data, userId) {
  return axios({
    method: "PUT",
    url: `http://localhost:3000/api/auth/edit/${userId}`,
    data: data,
  })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return { message: err };
    });
}

function userLogout() {
  return axios({
    method: "DELETE",
    url: "http://localhost:3000/api/auth/logout",
  });
}

function userDelete(userId) {
  return axios({
    method: "DELETE",

    url: `http://localhost:3000/api/auth/delete/${userId}`,
  });
}

export { userSignIn, userLogout, userSignUp, userEdit, userDelete };
