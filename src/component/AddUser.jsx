// CreateForm.js
import React, { useState } from 'react';
import { addStudentAPI } from '../actions/Api';
import { addStudent } from '../Redux/Reducers/StudentReducer';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import StudentSectionForm from './Forms/FormUser';

const AddUser = () => {
  const path=useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    class: '',
    section: ''
  });
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (Object.values(formData).some(value => !value)) {
      toast.error('Please input all required fields');
      return;
  }
  
    const data = await addStudentAPI(formData);
    dispatch(addStudent(data));
    toast.success('Student added Succesfully');
    path('/')
    
    
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Create Student</h2>
    <StudentSectionForm from={'Add'} handleSubmit={handleSubmit} formData={formData} setFormData={setFormData}/>
    </div>
  );
};

export default AddUser;
