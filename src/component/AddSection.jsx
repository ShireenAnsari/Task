// AddSection.js
import React, { useState } from 'react';
import { addSectionAPI } from '../actions/Api';

import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SectionForm from './Forms/FormSection';
import { addSection } from '../Redux/Slices/SectionSlice';

const AddSection = () => {
  const path = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name) {
      toast.error('Please input section name');
      return;
    }

    const data = await addSectionAPI(formData);
    dispatch(addSection(data));
    toast.success('Section added successfully');
    path('/section');
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Create Section</h2>
      <SectionForm from='add' handleSubmit={handleSubmit} formData={formData} setFormData={setFormData} />
    </div>
  );
};

export default AddSection;
