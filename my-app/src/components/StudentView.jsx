import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import { fetchStudents } from './features/studentsSlice';
// import StudentList from './components/StudentList';
import StudentList from './StudentList';
import { fetchStudents } from '../features/studentsSlice';


const StudentView = () => {
  const dispatch = useDispatch();
  const { students, loading, error } = useSelector((state) => state.students);

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }
  return <StudentList students={students} />;
};

export default StudentView;
