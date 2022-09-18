import React from 'react'
import { useNavigate } from 'react-router'
import { useSelector } from "react-redux";

export default function StudentProfile() {

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


  //fetching username from reducx store
  const uname = useSelector((state)=>{return state.username});



  //Rendering
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
                    <h6>Welecom {uname}</h6>
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
          <ul class="sidebar-nav" id="sidebar-nav">
            <li class="nav-item">
              <button class="nav-link collapsed" style={{ 'border': 'none' }} onClick={dashboard}>
                <i class="bi bi-grid"></i>
                <span>Dashboard</span>
              </button>
            </li>
            {/* <!-- End Dashboard Nav --> */}
            <li class="nav-item">
              <button class="nav-link collapsed" style={{ 'border': 'none' }} onClick={profile}>
                <i class="bi bi-card-list"></i>
                <span>Profile</span>
              </button>
            </li>
            {/* End Exam Page Nav */}
            <li class="nav-item">
              <button class="nav-link collapsed" style={{ 'border': 'none' }} onClick={profile}>
                <i class="bi bi-box-arrow-in-right"></i>
                <span>Schedule</span>
              </button>
            </li>
            <li class="nav-item">
              <button class="nav-link collapsed" style={{ 'border': 'none' }} onClick={profile}>
                <i class="bi bi-box-arrow-in-right"></i>
                <span>New Course</span>
              </button>
            </li>
            {/* End Exam History Page Nav */}
          </ul>
        </aside>
        {/* End Sidebar */}
        <main id="main" class="main">
          <div class="pagetitle">
            <h1>Profile</h1>
            <nav>
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><button style={{ 'border': 'none' }} onClick={dashboard}>Home</button></li>
                <li class="breadcrumb-item active"><button style={{ 'border': 'none' }} onClick={profile}>Profile</button></li>
              </ol>
            </nav>
          </div>
          {/* <!-- End Page Title --> */}
          <section class="section">
            <div class="row">
              <div class="col-xl-12">
                <div class="card">
                  <div class="card-body pt-3">
                    {/* <!-- Bordered Tabs --> */}
                    <ul class="nav nav-tabs nav-tabs-bordered">
                      <li class="nav-item">
                        <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Overview</button>
                      </li>
                      <li class="nav-item">
                        <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Edit Profile</button>
                      </li>
                      <li class="nav-item">
                        <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password">Change Password</button>
                      </li>
                    </ul>
                    <div class="tab-content pt-12 set-width">
                      <div class="tab-pane fade show active profile-overview" id="profile-overview">
                        <h5 class="card-title">Profile Details</h5>
                        <div class="row">
                          <div class="col-lg-3 col-md-4 label ">First Name</div>
                          <div class="col-lg-9 col-md-8">{uname}</div>
                        </div>
                        <div class="row">
                          <div class="col-lg-3 col-md-4 label ">Last Name</div>
                          <div class="col-lg-9 col-md-8">Sharma</div>
                        </div>
                        <div class="row">
                          <div class="col-lg-3 col-md-4 label">Mobile Number</div>
                          <div class="col-lg-9 col-md-8">8622872468</div>
                        </div>
                        <div class="row">
                          <div class="col-lg-3 col-md-4 label">Date Of Birth</div>
                          <div class="col-lg-9 col-md-8">1/1/1001</div>
                        </div>
                        <div class="row">
                          <div class="col-lg-3 col-md-4 label">Username</div>
                          <div class="col-lg-9 col-md-8">rahul123</div>
                        </div>
                        <div class="row">
                          <div class="col-lg-3 col-md-4 label">Gender</div>
                          <div class="col-lg-9 col-md-8">male</div>
                        </div>
                        <div class="row">
                          <div class="col-lg-3 col-md-4 label">Email</div>
                          <div class="col-lg-9 col-md-8">rahul@example.com</div>
                        </div>
                        {/* <div class="row">
                          <div class="col-lg-3 col-md-4 label">SSC Percentage</div>
                          <div class="col-lg-9 col-md-8">90%</div>
                        </div>
                        <div class="row">
                          <div class="col-lg-3 col-md-4 label">HSC Percentage</div>
                          <div class="col-lg-9 col-md-8">70%</div>
                        </div>
                        <div class="row">
                          <div class="col-lg-3 col-md-4 label">Degree Percentage</div>
                          <div class="col-lg-9 col-md-8">80%</div>
                        </div>*/}
                      </div> 
                      <div class="tab-pane fade profile-edit pt-6" id="profile-edit">
                        
                        <form>
                          <div class="row mb-3">
                            <label for="firstName" class="col-md-4 col-lg-3 col-form-label">First Name</label>
                            <div class="col-md-8 col-lg-9">
                              <input name="firstName" type="text" class="form-control" id="firstName" value="Rahul" />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label for="lastName" class="col-md-4 col-lg-3 col-form-label">Last Name</label>
                            <div class="col-md-8 col-lg-9">
                              <input name="lastName" type="text" class="form-control" id="lastName" value="Sharma" />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label for="mobno" class="col-md-4 col-lg-3 col-form-label">Mobile Number</label>
                            <div class="col-md-8 col-lg-9">
                              <input name="mobno" type="text" class="form-control" id="mobno" value="8622872468" />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label for="dob" class="col-md-4 col-lg-3 col-form-label">Date Of Birth</label>
                            <div class="col-md-8 col-lg-9">
                              <input name="dob" type="text" class="form-control" id="dob" value="1/1/1001" />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label for="username" class="col-md-4 col-lg-3 col-form-label">Username</label>
                            <div class="col-md-8 col-lg-9">
                              <input name="username" type="text" class="form-control" id="username" value="rahul123" />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label for="username" class="col-md-4 col-lg-3 col-form-label">Gender</label>
                            <div class="col-md-8 col-lg-9">
                              <input name="username" type="text" class="form-control" id="username" value="male" />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label for="Email" class="col-md-4 col-lg-3 col-form-label">Email</label>
                            <div class="col-md-8 col-lg-9">
                              <input name="email" type="text" class="form-control" id="Email" value="rahul@example.com" />
                            </div>
                          </div>
                           {/*<div class="row mb-3">
                            <label for="ssc" class="col-md-4 col-lg-3 col-form-label">SSC Percentage</label>
                            <div class="col-md-8 col-lg-9">
                              <input name="ssc" type="text" class="form-control" id="ssc" value="90%" />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label for="hsc" class="col-md-4 col-lg-3 col-form-label">HSC Percentage</label>
                            <div class="col-md-8 col-lg-9">
                              <input name="hsc" type="text" class="form-control" id="hsc" value="70%" />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label for="degree" class="col-md-4 col-lg-3 col-form-label">Degree Percentage</label>
                            <div class="col-md-8 col-lg-9">
                              <input name="degree" type="text" class="form-control" id="degree" value="80%" />
                            </div>
                          </div> */}
                          <div class="text-center">
                            <button type="submit" class="btn btn-primary">Save Changes</button>
                          </div>
                        </form>
                        
                      </div>
                      <div class="tab-pane fade pt-3" id="profile-change-password">
                        
                        <form>
                          <div class="row mb-3">
                            <label for="currentPassword" class="col-md-4 col-lg-3 col-form-label">Current Password</label>
                            <div class="col-md-8 col-lg-9">
                              <input name="password" type="password" class="form-control" id="currentPassword" />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label for="newPassword" class="col-md-4 col-lg-3 col-form-label">New Password</label>
                            <div class="col-md-8 col-lg-9">
                              <input name="newpassword" type="password" class="form-control" id="newPassword" />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label for="renewPassword" class="col-md-4 col-lg-3 col-form-label">Re-enter New Password</label>
                            <div class="col-md-8 col-lg-9">
                              <input name="renewpassword" type="password" class="form-control" id="renewPassword" />
                            </div>
                          </div>
                          <div class="text-center">
                            <button type="submit" class="btn btn-primary">Change Password</button>
                          </div>
                        </form>
                        
                      </div>
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
