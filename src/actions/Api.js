import axios from 'axios';

const BASE_URL = 'http://localhost:3001'; 

export const fetchStudents = async (id) => {
  let url = `${BASE_URL}/students`;
  
  if (id) {
    url += `/${id}`;
  }

  const response = await axios.get(url);
 const data=response.data
  console.log(response.data);
  return data
};

export const addStudentAPI = async (studentData) => {
  console.log(studentData)
  const response = await axios.post(`${BASE_URL}/students`, studentData);
  console.log(response.data)
  return response.data;
};

export const updateStudentAPI = async (id, studentData) => {
  const response = await axios.put(`${BASE_URL}/students/${id}`, studentData);
  return response.data;
};

export const deleteStudentAPI = async (id) => {
  await axios.delete(`${BASE_URL}/students/${id}`);
};
