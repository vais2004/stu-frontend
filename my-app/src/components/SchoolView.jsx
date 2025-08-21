import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSchoolStats } from "../features/schoolSlice";

export default function SchoolView() {
  const dispatch = useDispatch();
  const { students } = useSelector((state) => state.students);
  const schoolStats = useSelector((state) => state.school); // Changed to get entire school state

  useEffect(() => {
    if (students && students.length > 0) {
      const totalStudents = students.length;

      let totalAttendance = 0;
      students.forEach((student) => {
        const attendance = Number(student.attendance) || 0;
        totalAttendance += attendance;
      });
      const averageAttendance = totalAttendance / totalStudents;

      let totalMarks = 0;
      students.forEach((student) => {
        const marks = Number(student.marks) || 0;
        totalMarks += marks;
      });
      const averageMarks = totalMarks / totalStudents;

      let topStudent = null;
      let highestMarks = -1;
      students.forEach((student) => {
        const marks = Number(student.marks) || 0;
        if (marks > highestMarks) {
          highestMarks = marks;
          topStudent = student;
        }
      });

      dispatch(
        updateSchoolStats({
          totalStudents,
          averageAttendance,
          averageMarks,
          topStudent,
        })
      );
    }
  }, [students, dispatch]);

  if (!schoolStats) {
    return <div className="alert alert-primary" role="alert">Loading school data...</div>;
  }

  return (
    <div className="container py-3">
      <h2>School View</h2>
      <hr/>
      <p>
        <b>Total Students:</b> {schoolStats.totalStudents}
      </p>
      <p>
        <b>Average Attendance:</b>{" "}
        {schoolStats.averageAttendance?.toFixed(2) || "0.00"}%
      </p>
      <p>
        <b>Average Marks:</b> {schoolStats.averageMarks?.toFixed(2) || "0.00"}
      </p>
      <p>
        <b>Top Student:</b> {schoolStats.topStudent?.name || "-"}
      </p>
    </div>
  );
}
