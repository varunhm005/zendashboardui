// api.js
import axios from 'axios';

const API_URL = 'https://zendashboard-4ts7.onrender.com/'; // Replace this with your API URL

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'authorization': localStorage.getItem('token')
    // Add any other headers if required
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
      const token = localStorage.getItem('token');
      if (token) {
          config.headers['authorization'] = token;
      }
      return config;
  },
  (error) => {
      return Promise.reject(error);
  }
);

export { axiosInstance };

export const fetchData = async (endpoint, params) => {
  try {
    const response = await axiosInstance.get(endpoint, { params });
    return response.data;
  } catch (error) {
    // Handle errors here
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const postData = async (endpoint,payload, params) => {
  try {

    const response = await axiosInstance.post(endpoint, payload,params);
    return response.data;
  } catch (error) {
    // Handle errors here
    console.error('Error fetching data:', error);
    throw error;
  }
};

// Add more API functions as needed
