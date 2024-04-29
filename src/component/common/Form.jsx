import React from 'react'

const Form = ({handleSubmit,formData,from,setFormData}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  // studentId
  return (
    <div>
          <form onSubmit={handleSubmit}>
        <div className="row mb-3">
        <div className="col">
            <label htmlFor="studentId" className="form-label">Student Id</label>
            <input  type="text"  className="form-control" id="studentId" name="studentId" value={formData.studentId} onChange={handleChange} />
          </div>
          <div className="col">
            <label htmlFor="name" className="form-label">Name</label>
            <input  type="text"  className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="col">
            <label htmlFor="class" className="form-label">Class</label>
            <input type="text" className="form-control" id="class" name="class" value={formData.class} onChange={handleChange} />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="section" className="form-label">Section</label>
            <input type="text" className="form-control" id="section" name="section" value={formData.section} onChange={handleChange} />
          </div>
          <div className="col">
            <label htmlFor="classId" className="form-label">Class ID</label>
            <input type="text" className="form-control" id="classId" name="classId" value={formData.classId} onChange={handleChange} />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" className="form-control" id="description" name="description" value={formData.description} onChange={handleChange} />
          </div>
          <div className="col">
            <label htmlFor="sectionId" className="form-label">Section ID</label>
            <input type="text" className="form-control" id="sectionId" name="sectionId" value={formData.sectionId} onChange={handleChange} />
          </div>
          <div className="col">
            <label htmlFor="sectionname" className="form-label">Section Name</label>
            <input type="text" className="form-control" id="sectionname" name="sectionname" value={formData.sectionname} onChange={handleChange} />
          </div>
        </div>
        <div className='col col-md-8'>
        <button type="submit" className="btn btn-success">{from==='update'? 'Update Student':'Add Student'}</button>
        </div>
       
      </form>
    </div>
  )
}

export default Form