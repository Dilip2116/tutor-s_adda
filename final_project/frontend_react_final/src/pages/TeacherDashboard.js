import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom';
import axios from 'axios';



export default function TeacherDashboard() {

  let navigate = useNavigate();

  function dashboard() {
    navigate('/teacherdb');
  }
  function course() {
    navigate('/courselaunch')
  }
  function joincourse() {
    navigate('/course')
  }
  function scheduler() {
    navigate('/scheduler')
  }

  // function scheduler() {
  //   navigate('/timetable')
  // }
  function profile() {
    navigate('/teacherprofile')
  }

  const [courses, setCourse] = useState([]);
  const [upcomingcourse, setUpComingCourse] = useState();

  const [cname,setCname]=useState("");
  const [ctime,setCtime]  = useState("");
  const [cdate,setCdate]  = useState("");

  // const [username, setUsername] = useState("");
  const teacherid = localStorage.getItem("teacherid");

  const totalCourses=courses.length;

  const getData = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/getcoursebyteacher/${teacherid}`)
      setCourse(res.data);
    } catch (err) {
      console.log(err)
    }
  }

  //getting upcoming course..
  const getUpcomingCourse = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/upcommingcourse/${teacherid}`)
      if(res!="")
        setCname(res.data.course_name);
        setCtime(res.data.course_start_time);
    } catch (err) {
      console.log(err)
    }
  }
  //
  console.log("upcoming course:",upcomingcourse)

 
 
 

  useEffect(() => {
    // verify()

    getData();
    getUpcomingCourse();
  }, [])

  function getCourses() {
    var cours = courses.map(element => {
      return <tr key={element.course_id}>
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

      </tr>
    })
    // console.log("students", students)
    return cours;
  }

  // const username=localStorage.getItem('teacherUsername');

  function logOut() {
    localStorage.removeItem("teacherUsername");
    localStorage.removeItem("teacherid");
    navigate('/teacher_login');
  }

  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(localStorage.getItem('teacherUsername'));
    if (username === '') {
      navigate('/teacher_login')
    }
  }, [])

  return (
    <div>
      <body className='body-for-sticky content'>

        {/* <!-- ======= Sidebar ======= --> */}

        <aside id="sidebar" className="sidebar">


          {/* <!-- ======= Header ======= --> */}
          {/* <header id="header" className="header fixed-top d-flex align-items-center"> */}
          <div className="d-flex align-items-center justify-content-between">
            <i className="bi bi-list toggle-sidebar-btn"></i>
           
          </div>
          {/* <!-- End Logo --> */}
          <nav className="header-nav ms-auto">
            <ul className="d-flex align-items-center">
              <li className="nav-item dropdown pe-3">
                <a href="#" className="nav-link nav-profile d-flex align-items-center pe-0" data-bs-toggle="dropdown">
                  <img src="assets/images/profile.jpg" alt="Profile" className="rounded-circle" />
                  <span className="d-none d-md-block  ps-2 text" > <h3><strong>{username}</strong></h3></span>
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


          <br />
          <br />
          <br />
          <ul className="sidebar-nav" id="sidebar-nav">
            <li className="nav-item">
              <button className="nav-link collapsed active" style={{ 'border': 'none', 'width': '100%' }} onClick={dashboard}>
                <i className="bi bi-grid"></i>
                <span>Teacher Dashboard</span>
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
                <i className="bi bi-check2-all"></i>
                <span>All Courses</span>
              </button>
            </li>

            <br />
            <br />
            <br />
            <li className="nav-item">
              <button className=" btn btn-success" style={{ 'border': 'none', 'width': '100%' }} onClick={logOut}>
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
            <center></center>
            <h1>Dashboard</h1>
            <nav>
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><button style={{ 'border': 'none' }} onClick={dashboard}>Home</button></li>
                <li class="breadcrumb-item active"><button style={{ 'border': 'none' }} onClick={dashboard}>Dashboard</button></li>
              </ol>
            </nav>
          </div>
         

<section class="section">
            <div class="row">
              <div class="col-lg-6 ">
                <div class="card">
                  <div class="card-body" >   
                  {/* style={{ 'height': '100%', 'width': '100%' }} */}
                    <h2 class="card-title">Upcoming class</h2>
                    <center>
                      <img src="assets/images/teacher.png" style={{ 'height': '100px', 'width': '100px' }}></img><br/><br/>
                      <div>
                      <h5 ><strong>Class Name:- </strong>{cname}</h5>
                      <h5 ><strong>ClassTime:- </strong>{ctime}</h5>
                      </div>
                    </center>                   
                  </div>
                </div>
              </div>
              
              <div class="col-lg-6 ">
                <div class="card">
                  <div class="card-body" >   
                  {/* style={{ 'height': '100%', 'width': '100%' }} */}
                    <h4 class="card-title">Running Courses Count</h4>
                    <center>
                      <img src="assets/images/books.jpg" style={{ 'height': '100px', 'width': '100px' }}></img><br/><br/>
                      <div>
                        <h2>{totalCourses}</h2>
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


          {/* <!-- End #main --> */}


        </main>
        {/* <!-- End #main --> */}
      </body>
    </div>
  )
}
