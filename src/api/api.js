// api.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/'; // Replace this with your API URL

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTQ3NTE2MTQsImV4cCI6MTcxNDc1NTIxNH0.MU0m5LN0na0xWYp7c8N2RUOUd0x_ZtL75yH_vRdw5bE'
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

// Add more API functions as needed
