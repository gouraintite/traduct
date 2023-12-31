import axios from "axios";
const axiosInstance = axios;


axiosInstance.interceptors.request.use((req) => {
  req.headers.authorization = localStorage.getItem('userToken') 
    ? "Bearer " + localStorage.getItem('userToken')
    : "";
  return req;
});
 
axiosInstance.interceptors.response.use(
  (res) => res,
  (err) => { 
    console.log(err.response.data.httpStatus);
    if (window.location.pathname !== '/login' && err.response.data.httpStatus === 401) {
      localStorage.removeItem('userToken');
        window.location.href = "/login";
    }
    throw err;
  }
);

export default axiosInstance;
