import axios from 'axios';

let axiosInstance;

const addApiInterceptors = () => {
  axiosInstance = axios.create();
  axiosInstance.interceptors.request.use((request) => {
    request['headers']['Content-type'] = 'application/json; charset=UTF-8';
    return request;
  });

  axiosInstance.interceptors.response.use(response => {
    if (response.status === 200 || response.status === 201) {
      return Promise.resolve(response.data)
    }
    return Promise.reject(response.statusText)
  }, error => {
    return Promise.reject(error.response.status)
  })
}

const getRequest = (url, config) => {
  return axiosInstance.get(url, config)
}

const postRequest = (url, data, config) => {
  return axiosInstance.post(url, data, config)
}

const putRequest = (url, data, config) => {
  return axiosInstance.put(url, data, config)
}

const deleteRequest = (url, config) => {
  return axiosInstance.delete(url, config)
}

export {
  addApiInterceptors,
  getRequest,
  postRequest,
  putRequest,
  deleteRequest
}