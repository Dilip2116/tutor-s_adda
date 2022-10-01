import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import  Axios  from 'axios';

export default function CousreLaunch() {

  let navigate = useNavigate();

  function dashboard() {
    navigate('/teacherdb');
  }
  function course() {
    navigate('/courselaunch')
  }
  function schedule() {
    navigate('/scheduler')
  }
  function profile() {
    navigate('/teacherprofile')
  }
  function joincourse() {
    navigate('/course')
  }
   
  //adding new course in database
const [course_about, setAbout] = useState('')
const [course_category, setCategory] = useState('')
const [course_duration, setDuration] = useState('')
const [course_end_date, setEndDate] = useState('')

const [course_end_time, setEndTime] = useState('')

const [course_start_time, setStartTime] = useState('')
const [course_fee, setFee] = useState('')
const [course_max_strenth, setMaxStrength] = useState('')
const [course_name, setCourseName] = useState('')
const [course_start_date, setStartDate] = useState('')

console.log(
  course_end_time.toLocaleString('en-US', { hour: 'numeric', hour12: true })
); 



// setEndTime(course_start_time)

  function logOut() {
    localStorage.removeItem("teacherUsername");
    navigate('/teacher_login');
  }

  // const [username,setUsername]=useState("");
  const username = localStorage.getItem('teacherUsername');

  const course_teacher_id = localStorage.getItem('teacherid');


  // const postData = async () => {
  //   try{
  //     const res = await Axios.post(`http://localhost:8080/addcourse`,{course_about, course_category, course_duration, course_end_date,  course_start_time, course_fee, course_end_time,course_max_strenth, course_name, course_start_date,course_teacher_id})
  //     if(res.data !== ""){
  //       alert("Successfully Course Launched!!");
  //       navigate("/course");
  //       }
  //     else{alert("Course Launch Failed!!!");}
  //     }
  //     catch (err){
  //       console.log(err)
  //     }
  //  }


 

  //form validation ......
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  // const { register } = useForm();


  const formValues = {
    course_name: course_name, course_category: course_category,
    course_duration: course_duration, course_max_strenth: course_max_strenth,
    course_start_date: course_start_date,  course_end_date :  course_end_date,
    course_start_time:course_start_time, course_end_time:course_end_time,
    course_about:course_about,course_fee:  course_fee,
    course_category: course_category,course_name: course_name
  };

  const validate = (values) => {
    const errors = {};
    
    if (!values.course_name) {
      errors.course_name = "Course name is required!";
    }
    if (!values.course_category) {
      errors.course_category = "course category is required!";
    }
    if (!values.course_duration) {
      errors.course_duration = "course duration is required!";
    }
    if (!values.course_max_strenth) {
      errors.course_max_strenth = "course max strenth is required!";
    }
    if (!values.course_start_date) {
      errors.course_start_date = "course start date is required!";
    }
    if (!values.course_end_date) {
      errors.course_end_date = "course end date  is required!";
    }
    if (!values.course_category) {
      errors.course_category = "course category  is required!";
    }
    if (!values.course_name) {
      errors.course_name = "course name   is required!";
    }
    
    if (!values.course_fee) {
      errors.course_fee = "course end date  is required!";
    }
    if (!values.course_start_time) {
      errors.course_start_time = "course start time is required!";
    }
    if (!values.course_end_time) {
      errors.course_end_time = "course end time is required!";
    }
    if (!values.course_about) {
      errors.course_about = "course about is required!";
    }

    return errors;
  };

  const postData = async () => {
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    if(Object.keys(formErrors).length === 0 && isSubmit ){
    try{
      const res = await Axios.post(`http://localhost:8080/varifynewcourse`,{course_about, course_category, course_duration, course_end_date,  course_start_time, course_fee, course_end_time,course_max_strenth, course_name, course_start_date,course_teacher_id})
      if(res.data == true){
        alert("Successfully Course Launched!!");
        navigate("/course");
        }
      else{alert("Time Slot Colliding Select another slot !!!");}
      }
      catch (err){
        console.log(err)
      }
   }
  }

  //     useEffect(()=>{
  //       setUsername(localStorage.getItem('studentUsername'));
  //        if(username===''){
  //          navigate('/teacher_login')
  //        }
  //  },[] )

  return (
    <div>
      <body>

        {/* <!-- ======= Sidebar ======= --> */}

        <aside id="sidebar" className="sidebar">


          {/* <!-- ======= Header ======= --> */}
          {/* <header id="header" className="header fixed-top d-flex align-items-center"> */}
          <div className="d-flex align-items-center justify-content-between">
            <i className="bi bi-list toggle-sidebar-btn"></i>
            {/* <a href="#" className="logo d-flex align-items-center">
              <img src="assets/img/EPariksha.png" alt="" />
              <span className="d-none d-lg-block">E-Pariksha</span>
            </a> */}
          </div>
          {/* <!-- End Logo --> */}
          <nav className="header-nav ms-auto">
            <ul className="d-flex align-items-center">
              <li className="nav-item dropdown pe-3">
                <a href="#" className="nav-link nav-profile d-flex align-items-center pe-0" data-bs-toggle="dropdown">
                  <img src="assets/images/profile.jpg" alt="Profile" className="rounded-circle" />
                  <span className="d-none d-md-block text ps-2"><h3><strong>{username}</strong></h3></span>
                </a>
                {/* <!-- End Profile Image Icon --> */}
                {/* <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                  <li className="dropdown-header">
                    <h6>Group2</h6>
                    <span>Tutor's Adda</span>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button className="dropdown-item d-flex align-items-center" style={{ 'border': 'none' }} onClick={profile}>
                      <i className="bi bi-person"></i>
                      <span>My Profile</span>
                    </button>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item d-flex align-items-center" href="http://localhost:8081">
                      <i className="bi bi-box-arrow-right"></i>
                      <span>Sign Out</span>
                    </a>
                  </li>
                </ul> */}
                {/* <!-- End Profile Dropdown Items --> */}
              </li>
              {/* <!-- End Profile Nav --> */}
            </ul>
          </nav>
          {/* <!-- End Icons Navigation --> */}
          {/* </header> */}
          {/* <!-- End Header --> */}


          <br /><br /><br />
          <ul className="sidebar-nav" id="sidebar-nav">
            <li className="nav-item">
              <button className="nav-link collapsed active" style={{ 'border': 'none', 'width': '100%' }} onClick={dashboard}>
                <i className="bi bi-grid"></i>
                <span>Dashboard</span>
              </button>
            </li>
            {/* <!-- End Dashboard Nav --> */}
            <li className="nav-item">
              <button className="nav-link collapsed" style={{ 'border': 'none', 'width': '100%' }} onClick={profile}>
                <i className="bi bi-person-workspace"></i>
                <span>Profile</span>
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link collapsed" style={{ 'border': 'none', 'width': '100%' }} onClick={schedule}>
                <i className="bi bi-calendar2-week"></i>
                <span>Schedule</span>
              </button>
            </li>
            {/* End Exam Page Nav */}
            <li className="nav-item">
              <button className="nav-link collapsed" style={{ 'border': 'none', 'width': '100%' }} onClick={course}>
                <i className="bi bi-plus-circle"></i>
                <span>Add Course</span>
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link collapsed" style={{ 'border': 'none', 'width': '100%' }} onClick={joincourse}>
                <i className="bi bi-plus-circle"></i>
                <span>All Courses</span>
              </button>
            </li>


            <br />
            <br />
            <br />
            <li className="nav-item">
              <button className=" btn btn-success" style={{ 'border': 'none', 'width': '100%' }} onClick={logOut}>
                <i className="bi bi-arrow-bar-right" ></i>
                &emsp;<span>Logout</span>
              </button>
            </li>
            {/* End Exam History Page Nav */}
          </ul>
        </aside>
        {/* End Sidebar */}


        <main id="main" className="main" style={{ 'width': '100%' }} >
          <sections className="section ">
            <div class="pagetitle" >
              <h1>New Course Form</h1>
              <nav>
                <ol class="breadcrumb">

                  <li class="breadcrumb-item"><button style={{ 'border': 'none' }} onClick={dashboard}>Home</button></li>
                  <li class="breadcrumb-item active"><button style={{ 'border': 'none' }} onClick={course}>Add Course</button></li>
                </ol>
              </nav>
            </div>
          </sections>

          {/* <!-- End Page Title --> */}
          <div className="card text-center">
  <h5><div className="card-header">Course Launch Form</div></h5>
  <div className="card-body">
    {/* <h5 className="card-title">Special title treatment</h5> */}
    <p className="card-text"><section class="section ">

{/* <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 textalign">New Cousre Details</h3> */}
<form className="form_style">
  {/* <div className="row">
    <div className="col-md-12 mb-4">

      
    </div>
  </div> */}

  <div className="row">
  <div className="col-md-6 mb-4">
      <div className="form-outline">
        <label className="form-label">Teacher id:- </label>
        <input type="text" id="cName" className="form-control form-control-lg " value={course_teacher_id} readonly required />
      </div>
    <div className="form-outline">
      <label className="form-label">Course Name</label>
      <input type="text" id="cName" className="form-control form-control-lg" onChange={(e) => setCourseName(e.target.value)} required />
    </div>
    <p style={{'color':'red'}}>{formErrors.course_name}</p>

  </div>

    
 



    <div className="col-md-6 mb-4">

    <div className="form-outline">
      <label className="form-label">Course Fee</label>
      <input type="text" id="cName" className="form-control form-control-lg" onChange={(e) => setFee(e.target.value)} required />
    </div>
    <p style={{'color':'red'}}>{formErrors.course_fee}</p>

      <div className="form-outline">
        <label className="form-label" >Course Category</label>
        <input type="text" id="cCategory" className="form-control form-control-lg" onChange={(e) => setCategory(e.target.value)} required />
      </div>
      <p style={{'color':'red'}}>{formErrors.course_category}</p>


    </div>
  </div>

  <div className="row">
    <div className="col-md-6 mb-4">

      <div className="form-outline">
        <label className="form-label">Course Duration</label>
        <input type="number" id="cDuration" className="form-control form-control-lg" onChange={(e) => setDuration(e.target.value)}  required />
      </div>
      <p style={{'color':'red'}}>{formErrors.course_duration}</p>


    </div>

    <div className="col-md-6 mb-4">

      <div className="form-outline">
        <label className="form-label" >Course Strength</label>
        <input type="number" id="cStrength" className="form-control form-control-lg" onChange={(e) => setMaxStrength(e.target.value)} required />
      </div>
      <p style={{'color':'red'}}>{formErrors.course_max_strenth}</p>


    </div>
  </div>

  <div className="row">
    <div className="col-md-6 mb-4">

      <div className="form-outline">
        <label className="form-label">Start Date</label>
        <input type="date" id="cStartDate" className="form-control form-control-lg" onChange={(e) => setStartDate(e.target.value)} required />
      </div>
      <p style={{'color':'red'}}>{formErrors.course_start_date}</p>


    </div>

    <div className="col-md-6 mb-4">

      <div className="form-outline">
        <label className="form-label" >End Date</label>
        <input type="date" id="cEndDate" className="form-control form-control-lg" onChange={(e) => setEndDate(e.target.value)} required />
      </div>
      <p style={{'color':'red'}}>{formErrors.course_end_date}</p>

    </div>
  </div>

  <div className="row">
    <div className="col-md-6 mb-4">

      <div className="form-outline">
        <label className="form-label">Start Time</label>
        <input type="time" id="cStartTime" className="form-control form-control-lg" onChange={(e) => setStartTime(e.target.value)} required />
      </div>
      <p style={{'color':'red'}}>{formErrors.course_start_time}</p>


    </div>

    <div className="col-md-6 mb-4">

      <div className="form-outline">
        <label className="form-label" >End Time</label>
        <input type="time" id="cEndTime" className="form-control form-control-lg" onChange={(e) => setEndTime(e.target.value)} required />
      </div>
      <p style={{'color':'red'}}>{formErrors.course_end_time}</p>


    </div>
  </div>

  <div className="row">
    <div className="col-md-12 mb-4 pb-2">

      <div className="form-group shadow-textarea">
        <label >About</label>
        <textarea className="form-control z-depth-1" id="cAbout" rows="3" placeholder="Write about course..." onChange={(e) => setAbout(e.target.value)} required></textarea>
      </div>
      <p style={{'color':'red'}}>{formErrors.course_about}</p>


    </div>
  </div>

  <div className="mt-4 pt-2">

    <button type="button" className="btn btn-success btn-lg btn-block" onClick={postData}>Launch Course</button>

  </div>

</form>
</section>
</p>
    
  </div>
  
</div>
          

        </main>
        {/* <!-- End #main --> */}
      </body>
    </div>
  );
}