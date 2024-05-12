// api.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/'; // Replace this with your API URL

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'authorization': localStorage.getItem('token')
    // Add any other headers if required
  },
});

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

    console.log("endpoint",endpoint)
    const response = await axiosInstance.post(endpoint, payload,params);
    console.log("response",response.data)
    return response.data;
  } catch (error) {
    // Handle errors here
    console.error('Error fetching data:', error);
    throw error;
  }
};

// Add more API functions as needed
