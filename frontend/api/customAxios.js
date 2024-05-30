import axios from "axios";
import * as SecureStore from "expo-secure-store";

const customAxios = axios.create({
  baseURL: "http://localhost:8080",
});

customAxios.interceptors.request.use(
  async config => {
    const accessToken = await SecureStore.getItemAsync("accessToken");

    if (accessToken != null) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default customAxios;
