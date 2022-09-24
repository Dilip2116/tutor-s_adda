import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { Link } from "react-router-dom"
import axios from "axios";

export default function StudentDashboard() {

  let navigate = useNavigate();

  function dashboard() {
    navigate('/studentdb');
  }
  function joincourse() {
    navigate('/course')
  }
  function scheduler() {
    navigate('/student_scheduler')
  }
  function profile() {
    navigate('/studentprofile')
  }

  const [username, setUsername] = useState("");
  // const studentusername=localStorage.getItem('studentUsername');

  function verify() {
    setUsername(localStorage.getItem('studentUsername'));
    if (username === '') {
      navigate('/student_login')
    }
  }





  function logOut() {

    localStorage.removeItem("studentUsername");
    localStorage.removeItem("studentID");
    localStorage.removeItem("sLoggedIn");
    navigate('/student_login');

  }



  // const [courseId, setCourseId] = useState([])




  const [courses, setCourse] = useState([]);
  const [upcomingcourse, setUpComingCourse] = useState();

  const [cname,setCname]=useState("");
  const [ctime,setCtime]  = useState("");
  // const [username, setUsername] = useState("");
  const studentid = localStorage.getItem("studentID");


  // const getData = async () => {
  //   try {
  //     const res = await axios.get(`http://localhost:8080/coursesbystudentid/${studentid}`)
  //     setCourseId(res.data);
  //     getCourseByStudentID();
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  // console.log("ID",courseId)

  const getCourseByStudentID = async (e) => {

    try {
      
         var res = await axios.get(`http://localhost:8080/coursesbystudentid/${studentid}`)
         setCourse(res.data);
        console.log(res.data);  
    } 
    catch (err) {
      console.log(err)
    }
  }
  console.log("string..",courses)
  
  //upcoming classe for student..

  //getting upcoming course..
  const getUpcomingCourse = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/upcommingstudentcourse/${studentid}`)
     
      if(res!="")
        setCname(res.data.course_name);
        setCtime(res.data.course_start_time);
    } catch (err) {
      console.log(err)
    }
  }
  //
  console.log("upcoming course:",upcomingcourse,cname,ctime)


  useEffect(() => {
     verify()
    
     getCourseByStudentID();
     getUpcomingCourse();
    
    
  }, [])



  function getCourses() {
    var cours = courses.map(element => {
      return <tr key={element.course_id}>
        <td>{element.course_id}</td>
        <td>{element.course_about}</td>
        <td>{element.course_category}</td>
        <td>{element.course_duration}</td>
        <td>{element.course_start_date}</td>
        <td>{element.course_end_date}</td>
        <td>{element.course_name}</td>
        <td>{element.course_max_strenth}</td>
        <td>{element.course_fee}</td>
        <td>{element.course_start_time}</td>
        <td>{element.course_end_time}</td>
          <td>
                <button className="btn btn-outline-success" onClick={()=>{localStorage.setItem("courseId",element.course_id); navigate('/rating')}} style={{ 'width': '100%' }} >
                    <span>Rate course</span>
                </button>
            </td>

      </tr>
    })
    // console.log("students", students)
    return cours;
  }

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
                  <br /><br /><span className="d-none d-md-block ps-2 text" ><h3><strong>{username}</strong></h3></span>
                </a>
               
              </li>
              {/* <!-- End Profile Nav --> */}
            </ul>
          </nav>
          {/* <!-- End Icons Navigation --> */}
          {/* </header> */}
          {/* <!-- End Header --> */}


          <br />
          <br /><br />
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
              <button className="nav-link collapsed" style={{ 'border': 'none', 'width': '100%' }} onClick={scheduler}>
                <i className="bi bi-calendar2-week"></i>
                <span>Schedule</span>
              </button>
              {/* <button className="nav-link collapsed" style={{ 'border': 'none', 'width': '80%' }} onClick={examDash}>
                <i className="bi bi-calendar2-week"></i>
                <span>Schedule</span>
              </button> */}
            </li>
            {/* End Exam Page Nav */}
            <li className="nav-item">
              <button className="nav-link collapsed" style={{ 'border': 'none', 'width': '100%' }} onClick={joincourse}>
                <i className="bi bi-plus-circle"></i>
                <span>New Course</span>
              </button>
            </li>
            <br />
            <br /><br />
            <li className="nav-item">
              <button className="btn btn-success" style={{ 'border': 'none', 'width': '100%' }} onClick={logOut}>
                <i className="bi bi-arrow-bar-right"></i>
                &emsp;<span>Logout</span>
              </button>
            </li>
            {/* End Exam History Page Nav */}
          </ul>
        </aside>
        {/* End Sidebar */}

        <main id="main" className="main">

          <div class="pagetitle">
            <h1>Student Dashboard</h1>
            <nav>
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><button style={{ 'border': 'none' }} onClick={dashboard}>Home</button></li>
                <li class="breadcrumb-item active"><button style={{ 'border': 'none' }} onClick={dashboard}>Dashboard</button></li>
              </ol>
            </nav>
          </div>
          {/* <!-- End Page Title --> */}
          <section class="section ">
            <div class="row">
              <div class="col-lg-12">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Upcoming Class</h4>
                    <center>
                      <img src="assets/images/calendar.png" style={{ 'height': '100px', 'width': '100px' }}></img><br /><br />
                      <div>
                        <h5>Date : {new Date().toDateString()}</h5><br />
                        <div>
                          <h5><strong>Class Name:- </strong>{cname}</h5>
                          <h5 ><strong>ClassTime:- </strong>{ctime}</h5> 
                      </div>
                      </div>
                    </center>

                  </div>
                </div>
              </div>
            </div>
          </section>

          <div class="pagetitle">
            <h1>Course Details</h1>

          </div>
          {/* <!-- End Page Title --> */}
          <section class="section">
            <div className="row">
              <div className="col-lg-12 mx-auto">
                <div className="card border-0 shadow">
                  <div className="card-body p-5">
                    <div className="table-responsive">
                      <table className="table m-0">
                        <thead>
                          <tr>
                            <th scope="col">Course Id</th>
                            <th scope="col">About Course</th>
                            <th scope="col">Category</th>
                            <th scope="col">Duration</th>
                            <th scope="col">Start Date</th>
                            <th scope="col">End Date</th>
                            <th scope="col">Course Name</th>
                            <th scope="col">Course Strength</th>
                            <th scope="col">Fees</th>
                            <th scope="col">Start Time</th>
                            <th scope="col">End Time</th>
                            <th scope="col">Rating</th>
                          </tr>
                        </thead>
                        <tbody>

                          {getCourses()}

                        </tbody>
                      </table>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


        </main>
        {/* <!-- End #main --> */}
      </body>
    </div>
  )
}
