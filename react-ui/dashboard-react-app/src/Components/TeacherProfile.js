import React from "react";
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom';

export default function TeacherProfile() {

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

    return (
        <>
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
                     {/*<!-- End Logo --> */}
                    <nav className="header-nav ms-auto">
                        <ul className="d-flex align-items-right">
                            <li className="nav-item dropdown pe-3">
                                <a href="#" className="nav-link nav-profile d-flex align-items-center pe-0" data-bs-toggle="dropdown">
                                    <img src="assets2/img/profile.jpg" alt="Profile" className="rounded-circle" />
                                    <span className="d-none d-md-block dropdown-toggle ps-2">Tutor</span>
                                </a>
                                 {/*<!-- End Profile Image Icon --> */}
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
                             {/* <!-- End Profile Nav -->  */}
                        </ul>
                    </nav>
                    {/* <!-- End Icons Navigation --> */}
                {/* </header> */}
                {/* <!-- End Header --> */}


                    <br/><br/><br/>
                    <ul className="sidebar-nav margin-button" id="sidebar-nav">
                        <li className="nav-item">
                            <button className="nav-link collapsed active" style={{ 'border': 'none', 'width': '80%' }} onClick={dashboard}>
                                <i className="bi bi-grid"></i>
                                <span>Dashboard</span>
                            </button>
                        </li>
                        {/* <!-- End Dashboard Nav --> */}
                        <li className="nav-item">
                            <button className="nav-link collapsed" style={{ 'border': 'none', 'width': '80%' }} onClick={profile}>
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
                            <button className="nav-link collapsed" style={{ 'border': 'none', 'width': '80%' }} onClick={course}>
                                <i className="bi bi-plus-circle"></i>
                                <span>Add Course</span>
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link collapsed" style={{ 'border': 'none', 'width': '80%' }} onClick={course}>
                                <i className="bi bi-book-fill"></i>
                                <span>Courses</span>
                            </button>
                        </li>
                        {/* <li className="nav-item">
                            <button className="nav-link collapsed" style={{ 'border': 'none', 'width': '80%' }} onClick={course}>
                                <i className="bi bi-box-arrow-right"></i>
                                <span>Signout</span>
                            </button>
                        </li> */}
                        {/* End Exam History Page Nav */}
                    </ul>
                </aside>
                {/* End Sidebar */}

                <main id="main" className="main">

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
                            <div class="col-lg-4">
                                <div class="card">
                                    <div class="card-body">
                                        <center>
                                            <div class="d-flex flex-column align-items-center text-center">
                                                <img src="assets2/img/profile.jpg" alt="Admin" class="rounded-circle" width="150" />
                                                <div class="mt-3">
                                                    <h4>Mr XYZ</h4>
                                                    <p class="text-secondary mb-1">Science Teacher</p>
                                                    <p class="text-muted font-size-sm">Pune , India</p>
                                                </div>
                                            </div>
                                        </center>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-8">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0"><b>First Name</b></h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                XYZ
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0"><b>Last Name</b></h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                ZZZ
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0"><b>Gender</b></h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                male
                                            </div>
                                        </div>
                                        <hr />

                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0"><b>User name</b></h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                xyz123
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0"><b>Email</b></h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                xyz@gmail.com
                                            </div>
                                        </div>
                                        <hr />

                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0"><b>Mobile</b></h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                1234567890
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0"><b>Qualification</b></h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                B.Tech
                                            </div>
                                        </div>
                                        <hr />

                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0"><b>Experience</b></h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                2 Years of teaching
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0"><b>About me</b></h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                n my most recent position at XYZ Company, I specialized in doing ___. The reason I applied for this
                                                job is I saw ___ on the job description and I think I would be able to help you ___ and ___. One of
                                                my key accomplishments in my last role for XYZ Company was helping them ___, and I’m confident I can
                                                help your team get similar results here.
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <a class="btn btn-info " target="__blank" href="teacher_profile.html">Edit</a>
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
        </>
    );
}