// api.js
import axios from 'axios';
import { useState } from 'react';

const BASE_URL = 'http://localhost:3001'; // Your mock API base URL

export const fetchStudents = async (id) => {
  const [data,setData]=useState([])
  let url = `${BASE_URL}/students`;
  
  if (id) {
    url += `/${id}`;
  }

  const response = await axios.get(url);
  setData(response.data)
  console.log(response.data);
  return data
};

export const addStudentAPI = async (studentData) => {
  const response = await axios.post(`${BASE_URL}/students`, studentData);
  return response.data;
};

export const updateStudentAPI = async (id, studentData) => {
  const response = await axios.put(`${BASE_URL}/students/${id}`, studentData);
  return response.data;
};

export const deleteStudentAPI = async (id) => {
  await axios.delete(`${BASE_URL}/students/${id}`);
};
