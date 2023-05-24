import React, { useState } from 'react';
import axios from 'axios';

const AddStudent = () => {

  //set form data
  const[studentData, setStudentData]=useState({});

  const handleChange=(e)=>{
    setStudentData({...studentData,[e.target.name]:e.target.value});
  };

  //handle submit student data
  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:8000/add',studentData).then((response)=>{
      alert(response.data);

    }).catch((error)=>{
      console.log(error)

    });

  }

  return (
    <div>
        <div class="mb-3">
          <form onSubmit={handleSubmit}>
              <label for="name" class="form-label">Name</label>
              <input type="text" class="form-control" id="name" name='name' placeholder="Ex: Kavindu" onChange={handleChange}/>

              <label for="birthday" class="form-label">Birthday</label>
              <input type="text" class="form-control" id="birthday" name='birthday' placeholder="Ex: 1999-05-02" onChange={handleChange}/>

              <label for="gender" class="form-label">Gender</label>
              <input type="text" class="form-control" id="gender" name='gender' placeholder="Ex: male or female" onChange={handleChange}/>

              <label for="address" class="form-label">Address</label>
              <input type="text" class="form-control" id="address" name='address' placeholder="Ex: pitipana, hoamagama" onChange={handleChange}/>

              <button type='submit' class="btn btn-success mt-2">Add</button>
          </form>
            
        </div>
      
    </div>
  )
}

export default AddStudent
