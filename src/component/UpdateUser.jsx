import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'; // Import useParams hook
import { fetchStudents } from '../actions/Api';
import Form from './common/Form';
import { updateStudent } from '../Redux/StudentReducer';
import { useDispatch, useSelector } from 'react-redux';
const UpdateUser = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students.students);
  const [state,setstate]=useState([]);
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
  return (
    <div className="container mt-5">
    <h2 className="text-center mb-4">Update Student</h2>
  <Form from={'update'} formData={state}/>
  </div>
  )
}

export default UpdateUser