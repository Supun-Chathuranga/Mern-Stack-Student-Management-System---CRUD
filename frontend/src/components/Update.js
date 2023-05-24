import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const Update = () => {
  const { id } = useParams();

   //use useState hook to save fetched data
   const [student,setStudent]=useState({});
        //set form data
  const[studentData, setStudentData]=useState({});

    //get data from backend
    useEffect(()=>{
      axios.get(`http://localhost:8000/find/${id}`).then((response)=>{
          setStudent(response.data);
          console.log(student);
      }).catch((err)=>{
          console.log(err)
      })
  },[])

  const handleChange=(e)=>{
    setStudentData({...studentData,[e.target.name]:e.target.value});
  };

  
    // handle submit
    const handleSubmit=(event)=>{
      event.preventDefault();
      axios.put(`http://localhost:8000/update/${id}`,studentData).then((response)=>{
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
              <input type="text" class="form-control" id="name" name='name' placeholder={student.name} onChange={handleChange}/>

              <label for="birthday" class="form-label">Birthday</label>
              <input type="text" class="form-control" id="birthday" name='birthday' placeholder= {student.birthday} onChange={handleChange}/>

              <label for="gender" class="form-label">Gender</label>
              <input type="text" class="form-control" id="gender" name='gender' placeholder={student.gender} onChange={handleChange}/>

              <label for="address" class="form-label">Address</label>
              <input type="text" class="form-control" id="address" name='address' placeholder={student.address} onChange={handleChange}/>

              <button type='submit' class="btn btn-success mt-2">Update</button>
          </form>
            
        </div>
      
    </div>

  )
  
}

export default Update
