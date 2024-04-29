import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'; // Import useParams hook
import { fetchStudents, updateStudentAPI } from '../actions/Api';
import Form from './common/Form';
import { updateStudent } from '../Redux/StudentReducer';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
const UpdateUser = () => {
  const dispatch = useDispatch();
  const [state,setstate]=useState([]);
  const path=useNavigate();
  const { id } = useParams(); // Extract the 'id' parameter from the URL
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchStudents(id);
      dispatch(updateStudent(data));
      setstate(data)
      console.log(state)
    };

    fetchData();
  }, [dispatch]);
  console.log(id)
  const handleupdate = async(e) => {
    e.preventDefault();
    if (Object.values(state).some(value => !value)) {
      toast.error('Please input all required fields');
      return;
  }
    const data = await updateStudentAPI(id,state);
    dispatch(updateStudent(data));
    toast.success('Student updated Succesfully');
   path('/');
    
  };
  return (
    <div className="container mt-5">
    <h2 className="text-center mb-4">Update Student</h2>
  <Form from={'update'} handleSubmit={handleupdate} formData={state} setFormData={setstate}/>
  </div>
  )
}

export default UpdateUser