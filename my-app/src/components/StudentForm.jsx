// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { addStudentAsync, updateStudentAsync } from '../features/studentsSlice';

// const StudentForm = ({ existingStudent, onClose }) => {
//   const dispatch = useDispatch();

//   // pre-fill form if editing
//   const [name, setName] = useState(existingStudent ? existingStudent.name : '');
//   const [age, setAge] = useState(existingStudent ? existingStudent.age : '');
//   const [grade, setGrade] = useState(
//     existingStudent ? existingStudent.grade : ''
//   );
//   const [gender, setGender] = useState(
//     existingStudent ? existingStudent.gender : 'Male'
//   );
//   const [attendance, setAttendance] = useState(
//     existingStudent ? existingStudent.attendance : 'Present'
//   );
//   const [marks, setMarks] = useState(
//     existingStudent ? existingStudent.marks : ''
//   );
//   const [error, setError] = useState('');

//   // handle form submit
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // validation
//     if (!name.trim() || !age || !grade.trim() || !gender) {
//       setError('All required fields must be filled!');
//     return;
//     }
//     if (isNaN(age) || age <= 0) {
//       setError('Age must be a valid number greater than 0');
//       return;
//     }

//     if (isNaN(marks) && marks !== '') {
//       setError('Marks must be a valid number');
//       return;
//     }

//     setError('');

//     // create new student object
//     const newStudent = {
//       //id: existingStudent ? existingStudent.id : Date.now(), // temporary id if new
//     name: name.trim(),
//       age: Number(age),
//       grade: grade.trim(),
//       gender,
//       attendance: existingStudent ? attendance : 'Present', // Default value
//       marks: marks ? Number(marks) : 0, // Default value
//     };

//     if (existingStudent) {
//       dispatch(
//         updateStudentAsync({ id: existingStudent._id, updatedData: newStudent })
//       );
//     } else {
//       dispatch(addStudentAsync(newStudent));
//     }

//     if (onClose) onClose();
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-3 border rounded">
//       <h3>{existingStudent ? 'Edit Student' : 'Add Student'}</h3>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       <div className="mb-2">
//         <label>Name:</label>
//         <input
//           type="text"
//           className="form-control"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </div>

//       <div className="mb-2">
//         <label>Age:</label>
//         <input
//           type="number"
//           className="form-control"
//           value={age}
//           onChange={(e) => setAge(e.target.value)}
//         />
//       </div>

//       <div className="mb-2">
//         <label>Grade:</label>
//         <input
//           type="text"
//           className="form-control"
//           value={grade}
//           onChange={(e) => setGrade(e.target.value)}
//         />
//       </div>

//       <div className="mb-2">
//         <label>Gender:</label>
//         <div>
//           <input
//             type="radio"
//             id="male"
//             name="gender"
//             value="Male"
//             checked={gender === 'Male'}
//             onChange={() => setGender('Male')}
//           />
//           <label htmlFor="male" className="ms-1 me-3">
//             Male
//           </label>

//           <input
//             type="radio"
//             id="female"
//             name="gender"
//             value="Female"
//             checked={gender === 'Female'}
//             onChange={() => setGender('Female')}
//           />
//           <label htmlFor="female" className="ms-1">
//             Female
//           </label>
//         </div>
//       </div>

//       {existingStudent && (
//         <div className="mb-2">
//           <label>Attendance:</label>
//           <select
//             className="form-control"
//             value={attendance}
//             onChange={(e) => setAttendance(e.target.value)}
//           >
//             <option value="Present">Present</option>
//             <option value="Absent">Absent</option>
//           </select>
//         </div>
//       )}

//       {existingStudent && (
//         <div className="mb-2">
//           <label>Marks:</label>
//           <input
//             type="number"
//             className="form-control"
//             value={marks}
//             onChange={(e) => setMarks(e.target.value)}
//           />
//         </div>
//       )}

//       <button type="submit" className="btn btn-primary mt-2">
//         {existingStudent ? 'Update Student' : 'Add Student'}
//       </button>
//     </form>
//   );
// };

// export default StudentForm;


import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStudentAsync } from '../features/studentsSlice';

const StudentForm = ({ onClose }) => {
  const dispatch = useDispatch();
  
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [grade, setGrade] = useState('');
  const [gender, setGender] = useState('Male');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!name || !age || !grade || !gender) {
      setError('All required fields must be filled!');
      return;
    }

    if (isNaN(age) || age <= 0) {
      setError('Age must be a valid number greater than 0');
      return;
    }

    setError('');

    // Create new student object
    const newStudent = {
      name,
      age: Number(age),
      grade,
      gender,
      attendance: 'Present', // Default value
      marks: 0, // Default value
    };

    // Dispatch add action
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
        </div>
      </div>

      <div className="d-flex gap-2 mt-3">
        <button type="submit" className="btn btn-primary">Add Student</button>
        <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
      </div>
    </form>
  );
};

export default StudentForm;