import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { deleteStudentAsync } from "../features/studentsSlice";
import EditStudentForm from "./EditStudentForm";

const StudentsDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showEditForm, setShowEditForm] = useState(false);

  const student = useSelector((state) =>
    state.students.students.find((s) => s._id === id)
  );

  const handleDelete = () => {
    dispatch(deleteStudentAsync(id));
    navigate("/students");
  };

  if (!student) return <p>Loading student details...</p>;

  return (
    <div className="container my-4">
      {showEditForm ? (
        <EditStudentForm
          student={student}
          onClose={() => setShowEditForm(false)}
        />
      ) : (
        <>
          <h2>{student.name}'s Details</h2>
          <p>
            <b>Age:</b> {student.age}
          </p>
          <p>
            <b>Grade:</b> {student.grade}
          </p>
          <p>
            <b>Gender:</b> {student.gender || "Not specified"}
          </p>
          <p>
            <b>Attendance:</b>{" "}
            {student.attendance !== undefined ? student.attendance : "N/A"}
          </p>
          <p>
            <b>Marks:</b> {student.marks !== undefined ? student.marks : "N/A"}
          </p>

          <div className="d-flex gap-2 mt-3">
            <button
              onClick={() => setShowEditForm(true)}
              className="btn btn-primary">
              Edit Details
            </button>
            <button onClick={handleDelete} className="btn btn-danger">
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default StudentsDetails;
