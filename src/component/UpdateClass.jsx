// UpdateClass.js
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; 
import { fetchClasses, updateClassAPI } from '../actions/Api';

import { updateClass } from '../Redux/Reducers/ClassReducer';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import ClassForm from './common/FormClass';

const UpdateClass = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const path = useNavigate();
  const { id } = useParams(); 

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchClasses(id);
      setFormData(data);
    };

    fetchData();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!formData.name) {
      toast.error('Please input class name');
      return;
    }

    const data = await updateClassAPI(id, formData);
    dispatch(updateClass(data));
    toast.success('Class updated successfully');
    path('/class');
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Update Class</h2>
      <ClassForm handleSubmit={handleUpdate} formData={formData} setFormData={setFormData} />
    </div>
  );
};

export default UpdateClass;
