import axios from 'axios';

const BASE_URL = 'http://localhost:3001'; 

export const fetchClasses = async (id) => {
  let url = `${BASE_URL}/classes`;
  
  if (id) {
    url += `/${id}`;
  }

  const response = await axios.get(url);
  return response.data;
};

export const addClassAPI = async (classData) => {
  const response = await axios.post(`${BASE_URL}/classes`, classData);
  return response.data;
};

export const updateClassAPI = async (id, classData) => {
  const response = await axios.put(`${BASE_URL}/classes/${id}`, classData);
  return response.data;
};

export const deleteClassAPI = async (id) => {
  await axios.delete(`${BASE_URL}/classes/${id}`);
};

export const fetchSections = async (id) => {
  let url = `${BASE_URL}/sections`;
  
  if (id) {
    url += `/${id}`;
  }

  const response = await axios.get(url);
  return response.data;
};

export const addSectionAPI = async (sectionData) => {
  const response = await axios.post(`${BASE_URL}/sections`, sectionData);
  return response.data;
};

export const updateSectionAPI = async (id, sectionData) => {
  const response = await axios.put(`${BASE_URL}/sections/${id}`, sectionData);
  return response.data;
};

export const deleteSectionAPI = async (id) => {
  await axios.delete(`${BASE_URL}/sections/${id}`);
};
export const fetchStudents = async (id) => {
  let url = `${BASE_URL}/students`;
  
  if (id) {
    url += `/${id}`;
  }

  const response = await axios.get(url);
  return response.data;
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