import React from 'react';

const StudentSectionForm = ({ handleSubmit, formData, setFormData,from }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="class" className="form-label">Class</label>
            <input type="text" className="form-control" id="class" name="class" value={formData.class} onChange={handleChange} />
          </div>
          <div className="col">
            <label htmlFor="section" className="form-label">Section</label>
            <input type="text" className="form-control" id="section" name="section" value={formData.section} onChange={handleChange} />
          </div>
        </div>
        <div className='col col-md-8'>
          <button type="submit" className="btn btn-success">{from==='add'?'Add Student':'Update Student'}</button>
        </div>
      </form>
    </div>
  );
};

export default StudentSectionForm;
