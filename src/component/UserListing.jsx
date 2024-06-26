import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudentAPI, fetchStudents } from "../actions/Api";
import { removeStudent, setStudents } from "../Redux/Slices/StudentSlice";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import toast from "react-hot-toast";

const UserListing = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students.students);
  const path = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchStudents();
      dispatch(setStudents(data));
    };
    fetchData();
  }, [dispatch]);

  const handleExportClick = () => {
    // Convert students data to Excel format
    const worksheet = XLSX.utils.json_to_sheet(students);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Students");
    XLSX.writeFile(workbook, "students.xlsx");
  };

  const handleAddClick = () => {
    path("/user/add");
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (confirm) {
      await deleteStudentAPI(id);
      dispatch(removeStudent(id));
      toast.success("Student removed successfully");
    }
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between mb-4">
        <h2>Student List</h2>
        <div className="d-flex gap-2">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleExportClick}
          >
            Export
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleAddClick}
          >
            Create
          </button>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Class</th>
              <th scope="col">Section</th>
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
                <td>
                  <button
                    type="button"
                    onClick={() => path(`/user/update/${student.id}`)}
                    className="btn btn-primary me-2"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(student.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserListing;
