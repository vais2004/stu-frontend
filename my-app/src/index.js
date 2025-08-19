// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import store from "./store";

// import StudentForm from "./components/StudentForm";
// import SchoolView from "./components/SchoolView";
// import StudentList from "./components/StudentList";
// import StudentView from "./components/StudentView";
// import StudentsDetails from "./components/StudentDetails";
// import ClassView from "./components/ClassView";

// const router = createBrowserRouter([
//   { path: "/", element: <StudentView /> },
//   { path: "/classes", element: <ClassView /> },
//   { path: "/school", element: <SchoolView /> },
//   { path: "/list", element: <StudentList /> },
//   { path: "/details/:id", element: <StudentsDetails /> },
//   { path: "/form", element: <StudentForm /> },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </Provider>
//   </React.StrictMode>
// );
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";      // <-- import Provider
import store from "./store";                 // <-- import your Redux store

import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>                 {/* <-- Wrap your app */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
