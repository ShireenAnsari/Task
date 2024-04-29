// CreateForm.js
import React, { useState } from 'react';
import { addStudentAPI } from '../actions/Api';
import { addStudent } from '../Redux/StudentReducer';
import toast from 'react-hot-toast';
import Form from './common/Form';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
  const path=useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    class: '',
    section: '',
    classId: '',
    description: '',
    sectionIdName: ''
  });
  const handleSubmit = async(e) => {
    e.preventDefault();
    const data = await addStudentAPI(formData);
    dispatch(addStudent(data));
    toast.success('Student added Succesfully');
    path('/')
    
    
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Create Student</h2>
    <Form from={'Add'} handleSubmit={handleSubmit} formData={formData} setFormData={setFormData}/>
    </div>
  );
};

export default AddUser;
