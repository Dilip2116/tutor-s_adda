import React from "react";
import { useNavigate } from 'react-router'

export default function CousreLaunch() {

  let navigate = useNavigate();

  function dashboard() {
    navigate('/teacherdb');
  }
  function course() {
    navigate('/courselaunch')
  }
  function examDash() {
    navigate('/examdash')
  }
  function profile() {
    navigate('/teacherprofile')
  }

  //adding new course in database
  


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
                  <span className="d-none d-md-block dropdown-toggle ps-2">Tutor</span>
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
              <button className="nav-link collapsed active" style={{ 'border': 'none', 'width': '100%' }} onClick={dashboard}>
                <i className="bi bi-grid"></i>
                <span>Dashboard</span>
              </button>
            </li>
            {/* <!-- End Dashboard Nav --> */}
            <li className="nav-item">
              <button className="nav-link collapsed" style={{ 'border': 'none', 'width': '100%'}} onClick={profile}>
                <i className="bi bi-person-workspace"></i>
                <span>Profile</span>
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link collapsed" style={{ 'border': 'none', 'width': '100%' }} onClick={examDash}>
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
              <button className="nav-link collapsed" style={{ 'border': 'none', 'width': '100%' }} onClick={course}>
                <i className="bi bi-journal-check"></i>
                <span>Current Courses</span>
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
                <li class="breadcrumb-item active"><button style={{ 'border': 'none' }} onClick={course}>Add Course</button></li>
              </ol>
            </nav>
          </div>
          {/* <!-- End Page Title --> */}
          <section class="section ">
          <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 textalign">New Cousre Details</h3>
            <form className="form_style">
                <div className="row">
                    <div className="col-md-6 mb-4">

                        <div className="form-outline">
                            <label className="form-label">Course Name</label>
                            <input type="text" id="cName" className="form-control form-control-lg" required />                           
                        </div>

                    </div>


                    <div className="col-md-6 mb-4">

                        <div className="form-outline">
                            <label className="form-label" >Course Category</label>
                            <input type="text" id="cCategory" className="form-control form-control-lg" required />                 
                        </div>

                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-4">

                        <div className="form-outline">
                            <label className="form-label">Course Duration</label>
                            <input type="number" id="cDuration" className="form-control form-control-lg" required />   
                        </div>

                    </div>

                    <div className="col-md-6 mb-4">

                        <div className="form-outline">
                            <label className="form-label" >Course Strength</label>
                            <input type="number" id="cStrength" className="form-control form-control-lg" required />
                        </div>

                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-4">

                        <div className="form-outline">
                            <label className="form-label">Start Date</label>
                            <input type="date" id="cStartDate" className="form-control form-control-lg" required />     
                        </div>

                    </div>

                    <div className="col-md-6 mb-4">

                        <div className="form-outline">
                            <label className="form-label" >End Date</label>
                            <input type="date" id="cEndDate" className="form-control form-control-lg" required />                           
                        </div>

                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-4">

                        <div className="form-outline">
                            <label className="form-label">Start Time</label>
                            <input type="time" id="cStartTime" className="form-control form-control-lg" required />                            
                        </div>

                    </div>

                    <div className="col-md-6 mb-4">

                        <div className="form-outline">
                            <label className="form-label" >End Time</label>
                            <input type="time" id="cEndTime" className="form-control form-control-lg" required />                           
                        </div>

                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 mb-4 pb-2">

                        <div className="form-group shadow-textarea">
                            <label >About</label>
                            <textarea className="form-control z-depth-1" id="cAbout" rows="3" placeholder="Write about course..." required></textarea>
                        </div>

                    </div>
                </div>

                <div className="mt-4 pt-2">

                    <button type="button" className="btn btn-success btn-lg btn-block">Launch Course</button>

                </div>

            </form>
          </section>


        </main>
        {/* <!-- End #main --> */}
      </body>
    </div>
  );
}