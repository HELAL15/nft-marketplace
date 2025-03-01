import { API_URL } from "@/constants";
import axios from "axios";
import Cookies from "js-cookie";

export const apiClient = axios.create({
  baseURL: API_URL,
  headers: { 
    "Content-Type": "application/json"
     , Accept: "application/json",
     "Access-Control-Allow-Origin": "*",
     
     },

     withCredentials:true

});


apiClient.interceptors.request.use((config) => {
  const token = Cookies.get("token");
  if (token) {
    console.log(token);
    console.log(config.headers);
    
    
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});