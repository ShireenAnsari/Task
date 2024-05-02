import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSectionAPI, fetchSections } from "../actions/Api";
import { removeSection, setSections } from "../Redux/Reducers/SectionReducer";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import toast from "react-hot-toast";

const SectionListing = () => {
  const dispatch = useDispatch();
  const sections = useSelector((state) => state.section.sections);
  const path = useNavigate();
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSections();
      dispatch(setSections(data));
    };
    fetchData();
  }, [dispatch]);

  const handleExportClick = () => {
    const worksheet = XLSX.utils.json_to_sheet(sections);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sections");
    XLSX.writeFile(workbook, "sections.xlsx");
  };

  const handleAddClick = () => {
    path("/section/add");
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (confirm) {
      await deleteSectionAPI(id);
      dispatch(removeSection(id));
      toast.success("Section removed successfully");
    }
  };

  return (
    <>
      <div className="container mt-5">
        <div className="d-flex justify-content-between mb-4">
          <h2>Section List</h2>
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
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sections.map((section, index) => (
                <tr key={section.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{section.name}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => path(`/section/update/${section.id}`)}
                      className="btn btn-primary me-2"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(section.id)}
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

export default SectionListing;
