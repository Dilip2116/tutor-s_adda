import React from 'react'
import { useNavigate } from 'react-router'


export default function StudentDashboard() {

  let navigate = useNavigate();

  function dashboard() {
    navigate('/studentdb');
  }
  function examHistory() {
    navigate('/examhistory')
  }
  function examDash() {
    navigate('/examdash')
  }
  function profile() {
    navigate('/studentprofile')
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
                  <img src="assets2/img/profile.jpg" alt="Profile" className="rounded-circle" />
                  <span className="d-none d-md-block dropdown-toggle ps-2">Student</span>
                </a>
                {/* <!-- End Profile Image Icon --> */}
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
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
                </ul>
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
              <button className="nav-link collapsed active" style={{ 'border': 'none', 'width': '80%' }} onClick={dashboard}>
                <i className="bi bi-grid"></i>
                <span>Dashboard</span>
              </button>
            </li>
            {/* <!-- End Dashboard Nav --> */}
            <li className="nav-item">
              <button className="nav-link collapsed" style={{ 'border': 'none', 'width': '80%'}} onClick={profile}>
                <i className="bi bi-person-workspace"></i>
                <span>Profile</span>
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link collapsed" style={{ 'border': 'none', 'width': '80%' }} onClick={examDash}>
                <i className="bi bi-calendar2-week"></i>
                <span>Schedule</span>
              </button>
            </li>
            {/* End Exam Page Nav */}
            <li className="nav-item">
              <button className="nav-link collapsed" style={{ 'border': 'none', 'width': '80%' }} onClick={examHistory}>
                <i className="bi bi-plus-circle"></i>
                <span>New Course</span>
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
              <div class="col-lg-6">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Upcoming Class</h4>
                    <center>
                      <img src="assets2/img/calendar.png" style={{ 'height': '100px', 'width': '100px' }}></img><br/><br/>
                      <div>
                          <h5>Date : 14/09/2022</h5><br/>
                          <h5>Time : 11:00 AM</h5>
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
