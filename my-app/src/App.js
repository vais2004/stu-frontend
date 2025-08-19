// import 'bootstrap/dist/css/bootstrap.min.css';

// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// // import { useState } from 'react';
// // import reactLogo from './assets/react.svg';
// // import viteLogo from '/vite.svg';
// // import './App.css';
// // import Header from './components/Header';

// // function App() {
// //   return (
// //     <>
// //       <Header />
// //       <div className="container mt-4">
// //         <Routes>
// //           <Route path="/" element={<Students />} />
// //           <Route path="/students" element={<Students />} />
// //           <Route path="/classes" element={<Classes />} />
// //           <Route path="/school" element={<School />} />
// //         </Routes>
// //       </div>
// //     </>
// //   );
// // }

// // export default App;

// //import { Routes, Route } from 'react-router-dom';
// //import Header from '../components/Header';
// //import StudentView from '../components/StudentView';
// //import StudentList from '../components/StudentList';
// //import ClassView from '../components/ClassView';
// //import SchoolView from '../components/SchoolView';

// //function App() {
// //return (
// //<>
// //<Header />
// //   <div className="container mt-4">
// //   <Routes>
// //   <Route path="/" element={<StudentView />} />
// //   <Route path="/students" element={<StudentView />} />
// // <Route path="/classes" element={<ClassView />} />
// //  <Route path="/school" element={<SchoolView />} />
// //        </Routes>
// //    </div>
// //</>
// // );
// //}

// //export default App;

// import { Routes, Route } from 'react-router-dom';
// //import Header from '../components/Header';
// import StudentView from './components/StudentView'; // Uncommented and fixed import
// import ClassView from './components/ClassView';
// import SchoolView from './components/SchoolView';
// import Header from './components/Header';
// import StudentForm from './components/StudentForm';
// import StudentsDetails from './components/StudentDetails';

// function App() {
//   return (
//     <>
//       <Header/>
//       <div className="container mt-4">
//         {/* <Routes>
//           <Route path="/" element={<StudentView />} />
//           <Route path="/students" element={<StudentView />} />
//           <Route path="/classes" element={<ClassView />} />
//           <Route path="/school" element={<SchoolView />} />
//         </Routes> */}
//       </div>
//       <StudentForm/>
//       <StudentView/>

//     </>
//   );
// }

// export default App;

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
      {/* Header shows on all pages */}
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
