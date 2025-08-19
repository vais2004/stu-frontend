import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateStudentAsync } from '../features/studentsSlice';

const EditStudentForm = ({ student, onClose }) => {
  const dispatch = useDispatch();
  
  // Initialize form state with existing student data
  const [name, setName] = useState(student.name || '');
  const [age, setAge] = useState(student.age || '');
  const [grade, setGrade] = useState(student.grade || '');
  const [gender, setGender] = useState(student.gender || '');
  const [attendance, setAttendance] = useState(student.attendance || '');
  const [marks, setMarks] = useState(student.marks || '');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!name || !age || !grade) {
      setError('Name, Age, and Grade are required fields!');
      return;
    }

    if (isNaN(age) || age <= 0) {
      setError('Age must be a valid number greater than 0');
      return;
    }

    if (marks && isNaN(marks)) {
      setError('Marks must be a valid number');
      return;
    }

    setError('');

    // Create updated student object
    const updatedStudent = {
      name,
      age: Number(age),
      grade,
      gender,
      attendance: attendance || 0,
      marks: marks ? Number(marks) : 0,
    };

    // Dispatch update action
    dispatch(updateStudentAsync({ 
      id: student._id, 
      updatedData: updatedStudent 
    }));

    if (onClose) onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded">
      <h3>Edit Student</h3>

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
              checked={gender === 'Male'}
              onChange={() => setGender('Male')}
            />
            <label className="form-check-label" htmlFor="male">Male</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="female"
              name="gender"
              value="Female"
              checked={gender === 'Female'}
              onChange={() => setGender('Female')}
            />
            <label className="form-check-label" htmlFor="female">Female</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="other"
              name="gender"
              value="Other"
              checked={gender === 'Other'}
              onChange={() => setGender('Other')}
            />
            <label className="form-check-label" htmlFor="other">Other</label>
          </div>
        </div>
      </div>

      <div className="mb-2">
        <label>Attendance (days):</label>
        <input
          type="number"
          className="form-control"
          value={attendance}
          onChange={(e) => setAttendance(e.target.value)}
        />
      </div>

      <div className="mb-2">
        <label>Marks:</label>
        <input
          type="number"
          className="form-control"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
        />
      </div>

      <div className="d-flex gap-2 mt-3">
        <button type="submit" className="btn btn-primary">Update</button>
        <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
      </div>
    </form>
  );
};

export default EditStudentForm;