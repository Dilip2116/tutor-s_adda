
import './App.css';
import { Component } from 'react';
import Home from './pages/home'
import AboutUs from './pages/about_us';
import Contact from './pages/contact';
import { Provider } from 'react-redux';

import {  Route, Routes  ,Navigate} from 'react-router-dom';


import Home2 from './pages/home2';
import Header from './pages/Header';
import BottomBar from './pages/BottomBar';

import StudentRegistrationForm from './pages/StudentRegistrationForm';
import TeacherRegistrationForm from './pages/TeacherRegistrationForm';
import Student_Login from './pages/Student_Login';
import Teacher_Login from './pages/Teacher_Login';
import Admin_Login1 from './pages/Admin_Login1';

import FAQ from './pages/FAQ';
import Courses  from './pages/Courses';
import Forget_Password from './pages/Forget_Password';
import AdminDashboard from './pages/AdminDashboard';
import StudentDashboard from './pages/StudentDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import CousreLaunch from './pages/CourseLaunch';
import StudentProfile from './pages/StudentProfile';
import TeacherProfile from './pages/TeacherProfile';

import Error from './pages/Error';
import Scheduler from './pages/Scheduler';
import store from './pages/store/reducer';
import Logout from './pages/Logout';


 function App() {
  return (
    <div className="App">
   

        <Header/>
        
          <Routes>

          <Route index element={<Home2/>}/>
         
           <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/contact" element={<Contact />} />

          <Route exact path="/faq" element={<FAQ/>} />
          <Route exact path="/course" element={<Courses />} />
          
          <Route exact path="/admin_login" element={<Admin_Login1 />} />
          <Route exact path="/student_login" element={<Student_Login />} />
          <Route exact path="/teacher_login" element={<Teacher_Login />} />
          
           <Route exact path="/student_register" element={<StudentRegistrationForm />} />
          <Route exact path="/teacher_register" element={<TeacherRegistrationForm />} /> 
    
          <Route exact path="/forgotpswd" element={<Forget_Password />} />

          <Route path="/teacherdb" element={<TeacherDashboard/>}/>
          <Route path="/teacherprofile" element={<TeacherProfile />} />
          <Route path="/studentprofile" element={<StudentProfile/>} />
          <Route path="/admindb" element={<AdminDashboard />} />
          <Route path="/studentdb" element={<StudentDashboard />} />
          <Route path="/courselaunch" element={<CousreLaunch />} />
          <Route path="/scheduler" element={<Scheduler />} />

          <Route path="/logout" element={<Logout />} />

          <Route path="/error" element={<Error />} />

          <Route path="*" element={<Navigate to ="/error" />}/>

          

         
          
       
          </Routes>
       
          
          <BottomBar/>
      

   
        </div>
  );
}

export default App;
