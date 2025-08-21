import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import StudentView from "./components/StudentView";
import ClassView from "./components/ClassView";
import SchoolView from "./components/SchoolView";
import StudentForm from "./components/StudentForm";
import StudentsDetails from "./components/StudentDetails";

function App() {
  return (
    <>
      <Header />

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<StudentView />} />
          <Route path="/students" element={<StudentView />} />
          <Route path="/classes" element={<ClassView />} />
          <Route path="/school" element={<SchoolView />} />
          <Route path="/form" element={<StudentForm />} />
          <Route path="/details/:id" element={<StudentsDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
