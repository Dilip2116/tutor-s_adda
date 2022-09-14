
import './App.css';
import Home from './pages/home'
import AboutUs from './pages/about_us';
import Contact from './pages/contact';

import { BrowserRouter as Router, Route, Routes  ,Navigate,Switch,Outlet} from 'react-router-dom';


import Home2 from './pages/home2';
import Header from './pages/Header';
import BottomBar from './pages/BottomBar';
import Student_registrationform from './pages/Student_registerationform';
import Teacher_registrationform from './pages/Teacher_registerationform';
import Student_Login from './pages/Student_Login';
import Teacher_Login from './pages/Teacher_Login';
import Admin_Login from './pages/Admin_Login';
import FAQ from './pages/FAQ';
import Courses  from './pages/Courses';
import Forget_Password from './pages/Forget_Password';

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
          
          <Route exact path="/admin_login" element={<Admin_Login />} />
          <Route exact path="/student_login" element={<Student_Login />} />
          <Route exact path="/teacher_login" element={<Teacher_Login />} />
          <Route exact path="/student_register" element={<Student_registrationform />} />
          <Route exact path="/teacher_register" element={<Teacher_registrationform />} />
     
          <Route exact path="/forgotpswd" element={<Forget_Password />} />

         
          
       
          </Routes>
          <BottomBar/>
      

   
        </div>
  );
}

export default App;
