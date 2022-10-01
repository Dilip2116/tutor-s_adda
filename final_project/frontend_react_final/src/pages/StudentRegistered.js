import React, { useEffect, useState } from 'react'
import { Link, Outlet } from "react-router-dom"
import { SocialIcon } from 'react-social-icons';
import { useNavigate } from 'react-router'
import Axios from 'axios'


export default function StudentRegistered() {

  let navigate = useNavigate();

  function dashboard() {
    navigate('/admindb');
  }
  function allStudents() {
    navigate('/studentsall');
  }
  function allCourses() {
    navigate('/coursesall');
  }
  function updateFees() {
    navigate('/coursefees');
  }

  const [student,setStudent] =useState([]);
  // const [username,setUsername] =useState("");

  const getData = async () => {
    try{
         const res = await Axios.get("http://localhost:8080/getstudent")
         setStudent(res.data);
        
    }catch (err){
        console.log(err)
      }
    };

    const username = localStorage.getItem('adminUsername');

    // function verify(){
    //    setUsername(localStorage.getItem('adminUsername'));
    //     if(username===''){
    //       navigate('/admin_login')
    //     }
    // }

  useEffect(()=>{
      // verify()

      getData();
  },[])

  function getStudents(){
    var students = student.map(element => {return <tr key={element.id}>                                                      
      <td>{element.student_fname}</td>
      <td>{element.student_lname}</td>
      <td>{element.student_mobile}</td>
      <td>{element.student_dob}</td>
      <td>{element.student_gender}</td>
      <td>{element.student_username}</td>
      <td>{element.student_email}</td>                                                     
      {/* <td>
      <button className="btn btn-outline-danger" style={{'width': '100%' }} onClick={()=>removeData(element.student_id)}>
        <span>Remove</span>
      </button>
      </td> */}
  </tr>})
    console.log("students",students)
    return students;
}

  
  function logOut() {
    localStorage.removeItem("adminUsername");
    navigate('/admin_login');   
  }

  const removeData = async (id) => {
    try{
      const res = await Axios.delete(`http://localhost:8080/deletestudent/${id}`)
    //  setStudent(res.data);
    //  localStorage.setItem("studentId", res.data.student_id)
    //  const id = localStorage.getItem("studentId");
    }catch (err){
     console.log(err)
    }
  }



  return (
    <div>
  
      <body>
    
        {/* <!-- ======= Sidebar ======= --> */}

        <aside id="sidebar" className="sidebar">
          <div className="d-flex align-items-center justify-content-between">
          </div>
          {/* <!-- End Logo --> */}
          <nav className="header-nav ms-auto">
            <ul className="d-flex align-items-center">
              <li className="nav-item dropdown pe-3">
                <a href="#" className="nav-link nav-profile d-flex align-items-center pe-0" data-bs-toggle="dropdown">
                  <img src="assets/images/profile.jpg" alt="Profile" className="rounded-circle" />
                 <br/><br/> <span className="d-none d-md-block text"><h3><strong>{username}</strong></h3></span>              
                </a>
              </li>
            </ul>
          </nav>
          {/* <!-- End Icons Navigation --> */}

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
              <button className="nav-link collapsed" style={{ 'border': 'none', 'width': '100%'}} onClick={allStudents}>
                <i className="bi bi-person-workspace"></i>
                <span>Registered Student</span>
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
                <i className=" "></i>
                <span>Logout</span>
              </button>
            </li>
            {/* End Exam History Page Nav */}
          </ul>
        </aside>
        {/* End Sidebar */}

         <main id="main" className="main">
         
         <div class="pagetitle">
            <h1>Students Details</h1>
            <nav>
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><button style={{ 'border': 'none' }} onClick={dashboard}>Home</button></li>
                <li class="breadcrumb-item active"><button style={{ 'border': 'none' }} onClick={allStudents}>Students</button></li>
              </ol>
            </nav>
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
                                                        <th scope="col">First Name</th>
                                                        <th scope="col">Last Name</th>
                                                        <th scope="col">Mobile Number</th>
                                                        <th scope="col">DateofBirth</th>
                                                        <th scope="col">Gender</th>
                                                        <th scope="col">UserName</th>
                                                        <th scope="col">E-mail</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                
                                                    {getStudents()}

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
  );
}