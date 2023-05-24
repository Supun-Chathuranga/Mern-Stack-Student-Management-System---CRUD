import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Home = () => {
    //use useState hook to save fetched data
    const [students,setStudents]=useState([]);

    //get data from backend
    useEffect(()=>{
        axios.get("http://localhost:8000")
        .then((response)=>{
            setStudents(response.data);
        }).catch((err)=>{
            console.log("Can not get data ", err);
        })
    },[])

    //handle delete student 
    const handleDelete=(id)=>{
      axios.delete(`http://localhost:8000/delete/${id}`).then((response)=>{
        
        alert(response.data);
        setStudents(students.filter((student)=>student._id !==id));

      }).catch((error)=>{
        alert(error)
      })

    }

  return (
    <div>
      <Link to={`/add`}><button type="button" class="btn btn-info">Add Student +</button></Link>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Birthday</th>
            <th scope="col">Gender</th>
            <th scope="col">Address</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>

        {students.map((student,index) => (
          <tr key={student._id}>
            <th scope="row">{index+1}</th>
            <td>{student.name}</td>
            <td>{student.birthday}</td>
            <td>{student.gender}</td>
            <td>{student.address}</td>
            <td>
              <Link to={`/update/${student._id}`} ><button type="button" class="btn btn-warning">Edit</button></Link>&nbsp; 
              <button type="button" class="btn btn-danger" onClick={()=>handleDelete(student._id)}>Delete</button>
            </td>
          </tr>
        ))}

        </tbody>
      </table>
    </div>

  
  )
}

export default Home
