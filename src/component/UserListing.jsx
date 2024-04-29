import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudents } from '../actions/Api';
import { setStudents } from '../Redux/StudentReducer';
import { useNavigate } from 'react-router-dom';


const UserListing = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students.students);
  const path=useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchStudents();
      dispatch(setStudents(data));
    };
    fetchData();
  }, [dispatch]);

  const handleExportClick = () => {
    // Logic to export data
    console.log('Exporting data...');
  };
  
  const handleAddClick = () => {
    // Logic to export data
    console.log('Exporting data...');
    path('/user/add')
    
  };

  return (
    <>
    <div className="container mt-5 ">
      <div className="d-flex justify-content-between mb-4">
        <h2>Student List</h2>
        <div className='d-flex gap-2'>
        <button type="button" className="btn btn-success" onClick={handleExportClick}>
          Export
        </button>
        <button type="button" className="btn btn-primary" onClick={handleAddClick}>
        Create
        </button>
        </div>
      </div>
      <table className="table table-striped ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Class</th>
            <th scope="col">Section</th>
            <th scope="col">Class ID</th>
            <th scope="col">Description</th>
            <th scope="col">Section ID Name</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
              <th scope="row">{index + 1}</th>
              <td>{student.name}</td>
              <td>{student.class}</td>
              <td>{student.section}</td>
              <td>{student.classId}</td>
              <td>{student.description}</td>
              <td>{student.sectionIdName}</td>
              <td>
                <button type="button" onClick={()=>path(`/user/update/${student.id}`)}  className="btn btn-primary me-2">Edit</button>
                <button type="button" className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    </>
    
  );
};

export default UserListing;
