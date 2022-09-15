import React from 'react';
import logo from './logo.svg';
import './App.css';
import TeacherDashboard from './Components/TeacherDashboard';
import AdminDashboard from './Components/AdminDashboard';
import TeacherProfile from './Components/TeacherProfile';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import StudentDashboard from './Components/StudentDashboard';
import CousreLaunch from './Components/CourseLaunch';
import StudentProfile from './Components/StudentProfile';

function App() {
  return (
    
    <Routes>
          
          <Route path="/teacherdb" element={<TeacherDashboard/>}/>
          <Route path="/teacherprofile" element={<TeacherProfile />} />
          <Route path="/studentprofile" element={<StudentProfile/>} />
          <Route path="/admindb" element={<AdminDashboard />} />
          <Route path="/studentdb" element={<StudentDashboard />} />
          <Route path="/courselaunch" element={<CousreLaunch />} />
          
    </Routes>
  );
}

export default App;
