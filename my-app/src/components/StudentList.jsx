import React from "react";
import { Link } from "react-router-dom";

const StudentList = ({ students }) => {
  if (!students || students.length === 0) {
    return <p className="alert alert-secondary" role="alert">No students available.</p>;
  }

  return (
    <ul className="list-group list-group-flush">
      <h3>Student List</h3>
<hr/>
      {students.map((student, index) => (
        <li className="list-group-item" key={student.id ?? index}>
          <Link to={`/details/${student._id}`}>
            | Name: {student.name} | - | Age: {student.age} |
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default StudentList;
