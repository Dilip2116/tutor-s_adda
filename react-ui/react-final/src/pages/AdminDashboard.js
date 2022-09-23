import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from "react-router-dom";
import Admin_Login1 from './Admin_Login1';
import axios from 'axios';


export default function AdminDashboard() {

  let navigate = useNavigate();

  function dashboard() {
    navigate('/admindb');
  }
  function allStudents() {
    navigate('/studentsall')
  }
  function allCourses() {
    navigate('/coursesall');
  }
  function updateFees() {
    navigate('/coursefees');
  }

  const [username,setUsername] =useState("");
  const [noOfStudents,setNoOfStudents] =useState("");
  const [noOfTeachers,setNoOfTeachers] =useState("");
  const [noOfCourses,setNoOfCourses] =useState("");

  // const user=localStorage.getItem("adminUsername");

  const registeredStudents = async () => {
    try {
            const res = await axios.get(`http://localhost:8080/studentcount`)
            setNoOfStudents(res.data);
            console.log("Total Students : ",noOfStudents)
        } catch (err) {
            console.log(err)
        }
    }
  
    const registeredTeachers = async () => {
      try {
              const res = await axios.get(`http://localhost:8080/teachercount`)
              setNoOfTeachers(res.data);
              console.log("Total Teachers : ",noOfTeachers)
          } catch (err) {
              console.log(err)
          }
      }

      const CoursesRunning = async () => {
        try {
                const res = await axios.get(`http://localhost:8080/coursecount`)
                setNoOfCourses(res.data);
                console.log("Total Courses : ",noOfCourses)
            } catch (err) {
                console.log(err)
            }
        }

  useEffect(()=>{
       setUsername(localStorage.getItem('adminUsername'));
        if(username===''){
          navigate('/admin_login')
        }

        registeredStudents()
        registeredTeachers()
        CoursesRunning()
        
  },[] )

  

  function logOut() {

    localStorage.removeItem("adminUsername");
    navigate('/admin_login');
    
  }

  return (
    <div>
   
    
      <body>
        

        {/* <!-- ======= Sidebar ======= --> */}

        <aside id="sidebar" className="sidebar">


            {/* <!-- ======= Header ======= --> */}
        {/* <header id="header" className="header fixed-top d-flex align-items-center"> */}
          <div className="d-flex align-items-center justify-content-between">
            {/* <i className="bi bi-list toggle-sidebar-btn"></i> */}
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
                 <br/><br/> <span className="d-none d-md-block  text" ><h3><strong>{username}</strong></h3></span>
                  
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



          <br/><br/><br/>
          <ul className="sidebar-nav" id="sidebar-nav">
            <li className="nav-item">
              <button className="nav-link collapsed active" style={{ 'border': 'none', 'width': '100%' }} onClick={dashboard}>
                <i className="bi bi-grid"></i>
                <span>Admin Dashboard</span>          
              </button> 
            </li>
            {/* <!-- End Dashboard Nav --> */}
            <li className="nav-item">
              <button className="nav-link collapsed" style={{ 'border': 'none', 'width': '100%'}} onClick={allStudents}>
                <i className="bi bi-person-workspace"></i>
                <span>Registered Students</span>
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link collapsed" style={{ 'border': 'none', 'width': '100%' }} onClick={allCourses}>
                <i className="bi bi-journal-check"></i>
                <span>All Courses</span>
              </button>
            </li>
            {/* End Exam Page Nav */}
            <li className="nav-item">
              <button className="nav-link collapsed" style={{ 'border': 'none', 'width': '100%' }} onClick={updateFees}>
                <i className="bi bi-plus-circle"></i>
                <span>Update Fees</span>
              </button>
            </li>
            <br></br>
            <br/><br/> 
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
            <h1>Dashboard</h1>
            <nav>
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><button style={{ 'border': 'none' }} onClick={dashboard}>Home</button></li>
                <li class="breadcrumb-item active"><button style={{ 'border': 'none' }} onClick={dashboard}>Dashboard</button></li>
              </ol>
            </nav>
          </div>
          {/* <!-- End Page Title --> */}
          <section class="section">
            <div class="row">
              <div class="col-lg-3 ">
                <div class="card">
                  <div class="card-body" >   
                  {/* style={{ 'height': '100%', 'width': '100%' }} */}
                    <h2 class="card-title">Total Teachers Count</h2>
                    <center>
                      <img src="assets/images/teacher.png" style={{ 'height': '100px', 'width': '100px' }}></img><br/><br/>
                      <div>
                          <h2>{noOfTeachers}</h2>
                      </div>
                    </center>                   
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="card">
                  <div class="card-body" >   
                  {/* style={{ 'height': '100%', 'width': '100%' }} */}
                    <h4 class="card-title">Total Students Count</h4>
                    <center>
                      <img src="assets/images/student.jpg" style={{ 'height': '100px', 'width': '100px' }}></img><br/><br/>
                      <div>
                        <h2>{noOfStudents}</h2>
                      </div>
                    </center>                   
                  </div>
                </div>
              </div>
              <div class="col-lg-3 ">
                <div class="card">
                  <div class="card-body" >   
                  {/* style={{ 'height': '100%', 'width': '100%' }} */}
                    <h4 class="card-title">Running Courses Count</h4>
                    <center>
                      <img src="assets/images/books.jpg" style={{ 'height': '100px', 'width': '100px' }}></img><br/><br/>
                      <div>
                        <h2>{noOfCourses}</h2>
                      </div>
                    </center>                   
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