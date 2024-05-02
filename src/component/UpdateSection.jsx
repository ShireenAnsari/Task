// UpdateSection.js
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; 
import { fetchSections, updateSectionAPI } from '../actions/Api';

import { updateSection } from '../Redux/Reducers/SectionReducer';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import SectionForm from './Forms/FormSection';

const UpdateSection = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const path = useNavigate();
  const { id } = useParams(); 

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSections(id);
      setFormData(data);
    };

    fetchData();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!formData.name) {
      toast.error('Please input section name');
      return;
    }

    const data = await updateSectionAPI(id, formData);
    dispatch(updateSection(data));
    toast.success('Section updated successfully');
    path('/section');
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Update Section</h2>
      <SectionForm handleSubmit={handleUpdate} formData={formData} setFormData={setFormData} />
    </div>
  );
};

export default UpdateSection;
