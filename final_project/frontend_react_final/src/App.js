
import './App.css';
import AboutUs from './pages/about_us';
import Contact from './pages/contact';
import { Route, Routes , BrowserRouter,Navigate} from 'react-router-dom';
import Home2 from './pages/Home2';
import Header from './pages/Header';
import BottomBar from './pages/BottomBar';
import StudentRegistrationForm from './pages/StudentRegistrationForm';
import TeacherRegistrationForm from './pages/TeacherRegistrationForm';
import Student_Login from './pages/Student_Login';
import Teacher_Login from './pages/Teacher_Login';
import Admin_Login1 from './pages/Admin_Login1';
import FAQ from './pages/FAQ';
import Courses from './pages/Courses';
import Forget_Password from './pages/Forget_Password';
import AdminDashboard from './pages/AdminDashboard';
import StudentDashboard from './pages/StudentDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import CousreLaunch from './pages/CourseLaunch';
import CousreDetails from './pages/CourseDetails';
import StudentProfile from './pages/StudentProfile';
import TeacherProfile from './pages/TeacherProfile';
import StudentSchedule from './pages/StudentSchedule';
import Error from './pages/Error';
import Scheduler from './pages/Scheduler';
// import Logout from './pages/Logout';
import TimeTable from './pages/TimeTable';
import StudentRegistered from './pages/StudentRegistered';
import CourseAll from './pages/CourseAll';
import CourseFeesEdit from './pages/CourseFeesEdit';
import Rating from './pages/ReviewPages/Rating';
import ProtectedRoute from './pages/ProtectedRoute';
import ProtectedRoute2 from './pages/ProtectedRoute2';
import ProtectedRoute3 from './pages/ProtectedRoute3';




// import PrivateRoute from './pages/privateRoute';



function App() {
  const sLoggedIn = localStorage.getItem('sLoggedIn');
  // const navigate=useNavigate();
  return (

    
    <div className="App">


      <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/"  element={<Home2/>} />
        
        <Route  exact path="/admin_login" element={<Admin_Login1 />} />
        <Route  exact path="/admindb" element={<AdminDashboard />} />

        <Route path="/studentsall" element={<ProtectedRoute Component={ StudentRegistered} />} />
        <Route path="/coursesall" element={<ProtectedRoute Component={ CourseAll} />} />
        <Route path="/coursefees" element={<ProtectedRoute Component={ CourseFeesEdit} />} />
       
        <Route  exact path="/student_login" element={<Student_Login />} />
        <Route  exact path="/studentprofile" element={<ProtectedRoute3 Component3={ StudentProfile} />} />
        <Route  exact path="/studentdb" element={<ProtectedRoute3 Component3={ StudentDashboard} />} />
        <Route  exact path="/student_scheduler" element={<ProtectedRoute3 Component3={ StudentSchedule} />} />

        <Route  exact path="/student_register" element={<StudentRegistrationForm />} />

        
        <Route  exact path="/teacher_login" element={<Teacher_Login />} />
        <Route  exact path="/teacher_register" element={<TeacherRegistrationForm />} />
        <Route  exact path="/courselaunch" element={<ProtectedRoute2 Component2={ CousreLaunch} />} />
        <Route  exact path="/teacherdb" element={<ProtectedRoute2 Component2={ TeacherDashboard} />} />
        <Route  exact path="/teacherprofile" element={<ProtectedRoute2 Component2={ TeacherProfile} />} />
        <Route  exact path="/scheduler" element={<ProtectedRoute2 Component2={ Scheduler} />} />
       
       
        <Route  exact path="/forgotpswd" element={<Forget_Password />} />
      
        
        <Route  exact path="/coursedetails" element={<CousreDetails />} />
        <Route exact path="/about" element={<AboutUs />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route  exact path="/faq" element={<FAQ />} />
        <Route  exact path="/course" element={<Courses />} />
       
        <Route  exact path="/timetable" element={<TimeTable />} />
       
        <Route path="/rating" element={<Rating />} />

         <Route  exact path="/error" element={<Error />} /> 
        <Route  exact path="*" element={<Navigate to="/error" />} /> 
        
        
      </Routes>
        <BottomBar />
      </BrowserRouter>  
        
     
    

    </div>
  );
}

export default App;
