import React from 'react';
import { Link } from 'react-router-dom';

const StudentList = ({ students }) => {
  if (!students || students.length === 0) {
    return <p>No students available.</p>;
  }

  return (
    <ul>
      <h3>Student List</h3>

      {students.map((student,index) => (
        <li key={student.id ?? index}>
          <Link to={`/details/${student._id}`}>
            {student.name} - Age: {student.age}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default StudentList;
