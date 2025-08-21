import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter, setSortBy } from "../features/studentsSlice";

const ClassView = () => {
  const dispatch = useDispatch();
  const { students, filter, sortBy } = useSelector((state) => state.students);

  const filteredStudents = students.filter((student) => {
    if (filter === "All") return true;
    if (filter === "Boys") return student.gender === "Male";
    if (filter === "Girls") return student.gender === "Female";
    return true;
  });

  let sortedStudents = [...filteredStudents];

  if (sortBy === "Name") {
    sortedStudents.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "Marks") {
    sortedStudents.sort((a, b) => (b.marks || 0) - (a.marks || 0));
  } else if (sortBy === "Attendance") {
    sortedStudents.sort((a, b) => (b.attendance || 0) - (a.attendance || 0));
  }

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  const handleSortChange = (e) => {
    dispatch(setSortBy(e.target.value));
  };

  return (
    <div className="container py-4">
      <h2>Class View</h2>
      <hr/>
      <div className="row">
<div className="col-md-6">
      <label>
        Filter by Gender:{" "}
        <select className='form-select' value={filter} onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="Boys">Boys</option>
          <option value="Girls">Girls</option>
        </select>
      </label>
      </div>

<div className="col-6">
      <label >
        Sort by:{" "}
        <select className='form-select' value={sortBy} onChange={handleSortChange}>
          <option value="Name">Name</option>
          <option value="Marks">Marks</option>
          <option value="Attendance">Attendance</option>
        </select>
      </label>
      </div>
      </div>

      <ul className="mt-3">
        {sortedStudents.length > 0 ? (
          sortedStudents.map((student, index) => (
            <li key={student.id ?? index}>
              {student.name} - {student.gender} - Marks:
              {student.marks ?? "Unknown"} - Attendance:
              {student.attendance ?? "Unknown"}
            </li>
          ))
        ) : (
          <p>No students found</p>
        )}
      </ul>
    </div>
  );
};

export default ClassView;
