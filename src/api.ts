import axios from "axios";
import Cookies from "universal-cookie";

const cookie = new Cookies();

const axiosInstance = axios.create({
  baseURL: "/",
});

axiosInstance.interceptors.request.use(config => {
    const CSRF_TOKEN = cookie.get("csrftoken");
    if (CSRF_TOKEN) {
      config.headers['X-CSRFToke'] = CSRF_TOKEN;
    }
    return config;
});

export default axiosInstance;