// CreateForm.js
import React, { useState } from 'react';
import { addStudentAPI } from '../actions/Api';
import { addStudent } from '../Redux/StudentReducer';
import toast from 'react-hot-toast';
import Form from './common/Form';

const AddUser = () => {
  const [formData, setFormData] = useState({
    name: '',
    class: '',
    section: '',
    classId: '',
    description: '',
    sectionIdName: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const data = await addStudentAPI(formData);
    dispatch(addStudent(data));
    toast.success('Student added Succesfully');

    setFormData({
      name: '',
      class: '',
      section: '',
      classId: '',
      description: '',
      sectionIdName: ''
    });
    
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Create Student</h2>
    <Form handleChange={handleChange} handleSubmit={handleSubmit} formData={formData}/>
    </div>
  );
};

export default AddUser;
