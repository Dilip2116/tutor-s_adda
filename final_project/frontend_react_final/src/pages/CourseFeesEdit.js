import React, { useEffect, useState } from 'react'
import { Link, Outlet } from "react-router-dom"
import { SocialIcon } from 'react-social-icons';
import { useNavigate } from 'react-router'
import axios from 'axios'


export default function CourseFeesEdit() {

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

    const [course, setCourse] = useState([]);
    const [fee, setFee] = useState()
    // const x = {fees : fee};
    

    const getData = async () => {
        try {
                const res = await axios.get(`http://localhost:8080/getcourse`)
                setCourse(res.data);
            } catch (err) {
                console.log(err)
            }
        }

    const username = localStorage.getItem('adminUsername');

    // function verify(){
    //    setUsername(localStorage.getItem('adminUsername'));
    //     if(username===''){
    //       navigate('/admin_login')
    //     }
    // }

    useEffect(() => {
        // verify()

        getData();
    }, [])

    function getCourses() {
        var courses = course.map(element => {return <tr key={element.course_id}>
            <td >{element.course_about}</td>   
            <td >{element.course_category}</td>
            <td >{element.course_duration}</td>
            <td >{element.course_start_date}</td>
            <td >{element.course_end_date}</td>
            <td >{element.course_name}</td>
            <td >{element.course_max_strenth}</td>   
            <td ><input type="text" onChange={(e)=>{setFee(e.target.value)}} defaultValue={element.course_fee}/></td>
            <td >{element.course_start_time}</td>
            <td >{element.course_end_time}</td>
            <td>
                <button className="btn btn-outline-success" style={{ 'width': '100%' }} onClick={()=>{updateData(element.course_id)}}>
                    <span>Update</span>
                </button>
            </td>
            {/* <td>
                <button className="btn btn-outline-success" style={{ 'width': '100%' }} onClick={()=>{updateData(element.course_id)}}>
                    <span>Save</span>
                </button>
            </td> */}
        </tr>
        })
        return courses;
    }


    function logOut() {
        localStorage.removeItem("adminUsername");
        navigate('/admin_login');
    }

    // function updateData (id) {
    //     updateFee(id);
    // }

    const updateData = async(id) => {                

    //     fetch(`http://localhost:8080/updatecoursefee/${id}/${x.fees}`, {
    //         method: 'POST',
    //         body: JSON.stringify(x),
    //         credentials: "same-origin", //include, same-origin
    //         headers: {'Content-Type': 'application/x-www-form-urlencoded' }//'application/json',},
    //     })
    // .then((data) => data.json())
    // .then((resp) => console.log(resp))
    // .catch((err) => console.log(err))


        try{
            // console.log("First Inside updateData :", fee)
            const res = await axios.post(`http://localhost:8080/updatecoursefee/${id}/${fee}`)
            alert("Fees Updated Successfully");
            getData();
            // if(res.data !== "")
            // {
            //     console.log("second Inside updateData")
            //     // getData();
            //     alert("Fees Updated Successfully");
            //     console.log("Inside updateData")
            // }     
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
                                    <br /><br /> <span className="d-none d-md-block text" id="text"><h3><strong>{username}</strong></h3></span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    {/* <!-- End Icons Navigation --> */}

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
                            <button className="nav-link collapsed" style={{ 'border': 'none', 'width': '100%' }} onClick={allStudents}>
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
                        <br /><br />
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
                        <h1>Update Fees</h1>
                        <nav>
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><button style={{ 'border': 'none' }} onClick={dashboard}>Home</button></li>
                                <li class="breadcrumb-item active"><button style={{ 'border': 'none' }} onClick={updateFees}>Update Fees</button></li>
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
                                                        <th scope="col">About Course</th>
                                                        <th scope="col">Category</th>
                                                        <th scope="col">Duration</th>
                                                        <th scope="col">Start Date</th>
                                                        <th scope="col">End Date</th>
                                                        <th scope="col">Course Name</th>
                                                        <th scope="col">Course Strength</th>
                                                        <th scope="col">Course Fees</th>
                                                        <th scope="col">Start Time</th>
                                                        <th scope="col">End Time</th>
                                                        <th scope="col">Update</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {getCourses() }

                                                </tbody>
                                            </table>

                                                    {/* {getCourses() } */}

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