import React from 'react'

const Student = () => {
  return (
    <div className="container mt-5">
    <h2 className="text-center mb-4">Update Student</h2>
  <Form from={'update'} handleSubmit={handleupdate} formData={state} setFormData={setstate}/>
  </div>
  )
}

export default Student