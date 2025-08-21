import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudentAsync } from "../features/studentsSlice";

const StudentForm = ({ onClose }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [grade, setGrade] = useState("");
  const [gender, setGender] = useState("Male");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // validation
    if (!name || !age || !grade || !gender) {
      setError("All required fields must be filled!");
      return;
    }

    if (isNaN(age) || age <= 0) {
      setError("Age must be a valid number greater than 0");
      return;
    }

    setError("");

    // create new student object
    const newStudent = {
      name,
      age: Number(age),
      grade,
      gender,
      attendance: "Present",
      marks: 0,
    };

    dispatch(addStudentAsync(newStudent));

    if (onClose) onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded">
      <h3>Add Student</h3>

      {error && <p className="text-danger">{error}</p>}

      <div className="mb-2">
        <label>Name:</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="mb-2">
        <label>Age:</label>
        <input
          type="number"
          className="form-control"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
      </div>

      <div className="mb-2">
        <label>Grade:</label>
        <input
          type="text"
          className="form-control"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          required
        />
      </div>

      <div className="mb-2">
        <label>Gender:</label>
        <div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="male"
              name="gender"
              value="Male"
              checked={gender === "Male"}
              onChange={() => setGender("Male")}
            />
            <label className="form-check-label" htmlFor="male">
              Male
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="female"
              name="gender"
              value="Female"
              checked={gender === "Female"}
              onChange={() => setGender("Female")}
            />
            <label className="form-check-label" htmlFor="female">
              Female
            </label>
          </div>
        </div>
      </div>

      <div className="d-flex gap-2 mt-3">
        <button type="submit" className="btn btn-primary">
          Add Student
        </button>
        <button type="button" className="btn btn-secondary" onClick={onClose}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default StudentForm;
