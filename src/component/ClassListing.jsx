import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteClassAPI, fetchClasses } from "../actions/Api";
import { removeClass, setClass } from "../Redux/Slices/ClassSlice";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import toast from "react-hot-toast";

const ClassListing = () => {
  const dispatch = useDispatch();
  const classes = useSelector((state) => state.class.classes);
  const path = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchClasses();
      dispatch(setClass(data));
    };
    fetchData();
  }, [dispatch]);

  const handleExportClick = () => {
    const worksheet = XLSX.utils.json_to_sheet(classes);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Classes");
    XLSX.writeFile(workbook, "classes.xlsx");
  };

  const handleAddClick = () => {
    path("/class/add");
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (confirm) {
      await deleteClassAPI(id);
      dispatch(removeClass(id));
      toast.success("Class removed successfully");
    }
  };

  return (
    <>
      <div className="container mt-5 ">
        <div className="d-flex justify-content-between mb-4">
          <h2>Class List</h2>
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
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((classItem, index) => (
                <tr key={classItem.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{classItem.name}</td>
                  <td>{classItem.description}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => path(`/class/update/${classItem.id}`)}
                      className="btn btn-primary me-2"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(classItem.id)}
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
    </>
  );
};

export default ClassListing;
