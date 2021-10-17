import { useState, useEffect } from 'react';
import axios from 'axios';
function Students() {

    const [student, setstudent] = useState([]);
  
    const fetchStudents = () => {
      axios.get("http://localhost:8080/api/v1/student").then(res => {
        console.log(res);
        setstudent(res.data);
      });
    };
  
    useEffect(() => {
      fetchStudents();
    }, []);

    const deleteStudent = (id, e) => {
      axios.delete(`http://localhost:8080/api/v1/student/${id}`) 
      .then(res => {   
        fetchStudents();
      })  
    }
    
    return student.map((student, index) => {
      return (
        <tr key={index}>
          <td>{student.id}</td>
          <td>{student.name}</td>
          <td>{student.email}</td>
          <td>{student.dob}</td>
          <td>{student.age}</td>
          <td><button onClick={(e) => deleteStudent(student.id, e)}>Delete</button></td>
        </tr>
      )
    });
  }

  export default Students;