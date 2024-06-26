// AddClass.js
import React, { useState } from 'react';
import { addClassAPI } from '../actions/Api';

import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ClassForm from './Forms/FormClass';
import { addClass } from '../Redux/Slices/ClassSlice';

const AddClass = () => {
  const path = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name) {
      toast.error('Please input all required fields');
      return;
    }

    const data = await addClassAPI(formData);
    dispatch(addClass(data));
    toast.success('Class added successfully');
    path('/class');
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Create Class</h2>
      <ClassForm from='Add' handleSubmit={handleSubmit} formData={formData} setFormData={setFormData} />
    </div>
  );
};

export default AddClass;
