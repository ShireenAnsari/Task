import React from 'react';

const SectionForm = ({ handleSubmit, formData, setFormData }) => {
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
        <div className='col col-md-8'>
          <button type="submit" className="btn btn-success">Add Section</button>
        </div>
      </form>
    </div>
  );
};

export default SectionForm;
