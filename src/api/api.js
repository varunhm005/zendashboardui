// api.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/'; // Replace this with your API URL

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTQ4OTQ2ODIsImV4cCI6MTcxNDg5ODI4Mn0.n9EElpKmaXkyRGwNU89ApN0FVwdcFQYki0sAcAglbbk'
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
