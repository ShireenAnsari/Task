import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'; // Import useParams hook
import { fetchStudents } from '../actions/Api';
import Form from './common/Form';
const UpdateUser = () => {
  const { id } = useParams(); // Extract the 'id' parameter from the URL
  const {data}=fetchStudents(id)
  console.log(id)
  return (
    <div>UpdateUser
      <button  className='btn btn-primary'>Display</button>
      <Form formData={data}/>
    </div>
  )
}

export default UpdateUser