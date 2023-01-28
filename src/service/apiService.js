import axios from "axios";

const baseURL = process.browser
  ? process.env.NEXT_PUBLIC_API
  : process.env.NEXT_SERVER_API;

let jwt = process.browser ? localStorage.getItem("accessToken") : "";

const api = {
  request: function (config, isFormData) {
    return new Promise((resolve, reject) => {
      const headers = {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": isFormData ? "multipart/form-data" : "application/json",
      };
      axios({ baseURL, headers, ...config })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          if (!err.response) reject(err);
          if (err.response.status === 401 || err.response.status === 403) {
            if (process.browser) {
              window.location.href = "/admin/login";
              localStorage.removeItem("accessToken");
            }
          }
          reject(err.response.data);
        });
    });
  },
  get: function (url, params) {
    return this.request({
      url,
      method: "get",
      params,
    });
  },
  post: function (url, data, isFormData) {
    return this.request(
      {
        url,
        method: "post",
        data,
      },
      isFormData
    );
  },
  put: function (url, data) {
    let config = {
      url,
      method: "put",
      data,
    };
    return this.request(config);
  },
  delete: function (url, params) {
    return this.request({
      url,
      method: "delete",
      params,
    });
  },
};

export default api;
