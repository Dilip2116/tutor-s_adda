import React, { useState, useEffect, useRef, useReducer } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UploadImage from './UploadImage';
import Axios from 'axios';
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form"
import { useReference } from 'react-admin';
import { set } from 'react-hook-form';
import validator from 'validator';

export default function TeacherProfile() {

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

    function logOut() {
        localStorage.removeItem("teacherUsername");
        localStorage.removeItem("teacherid");
        navigate('/teacher_login');
    }

    // const [username,setUsername]=useState("");
    const username = localStorage.getItem('teacherUsername');
    const teacher_id = localStorage.getItem("teacherid");

    //     useEffect(()=>{
    //       setUsername(localStorage.getItem('studentUsername'));
    //        if(username===''){
    //          navigate('/teacher_login')
    //        }
    //  },[] )

    //for image upload 

    // const [file, setFile] = useState(null);


    //     const fileHandler =( event) => {
    //       console.log(event.target.files[0]);
    //       let reader = new FileReader();
    //       reader.onload = function(e) {
    //         setFile(e.target.result);
    //       };
    //       reader.readAsDataURL(event.target.files[0]);
    //     };


    const [myData, setMyData] = useState([])
   

    const [emailValid, setEmailValid] = useState(true);

    //email validation
    const validateEmail = email => {
        return validator.isEmail(email) && email.length > 0;
      }


    


    //get techerData

    const getData = async (event) => {
        try {

            const res = await Axios.get(`http://localhost:8080/getteacher/${teacher_id}`)
            if (res.data !== "") {
                setMyData(res.data);
                console.log(myData.teacher_email);
            }
            else { alert("Error!!!") }
        }
        catch (err) {
            console.log(err)
        }
    }


    //for editting profile>...

  
     
     const teacher_fname=myData.teacher_fname;
     const teacher_email= myData.teacher_email ;
     const  teacher_gender= myData.teacher_gender ;
     const teacher_lname= myData.teacher_lname;
    const teacher_mobile=myData.teacher_mobile;
   const  teacher_about =myData.teacher_about;
   const  teacher_experience=myData.teacher_experience;
   const  teacher_qualification=myData.teacher_qualification;
   const teacher_username=myData.teacher_username;
   const teacher_password=myData.teacher_password;
   const  address=myData.address;

     //validation 
   

    

    const updateProfile = async () => {
        try {
            const res = await Axios.post(`http://localhost:8080/updateteacher`, { teacher_id, teacher_about, teacher_email, teacher_experience, teacher_gender, teacher_fname, teacher_lname, teacher_mobile, teacher_password, teacher_qualification, teacher_username, address  })
            if (res.data == true) {
                alert("Profile Updated Successfully");
                localStorage.setItem("teacherUsername", teacher_username);
                navigate("/teacherprofile")
            }
            else {
                alert("Profile Not Updated!! ");
            }

        }
   
        catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {    
        getData();
    }, [])

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
                                    <a href="#" className="nav-link nav-profile d-flex align-items-center pe-0" data-bs-toggle="dropdown">
                                        <img src="assets/images/profile.jpg" alt="Profile" className="rounded-circle" />

                                        {/* <img src= {`assets/images/${file}`} alt="Profile" className="rounded-circle" /> */}


                                        {/* <Link to="/uploadimage"  >Change Profile</Link> */}


                                        <span className="d-none d-md-block  ps-2 text" > <h3><strong>{myData.teacher_username}</strong></h3></span>
                                    </a>
                                </a>
                                {/*<!-- End Profile Image Icon --> */}
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
                            {/* <!-- End Profile Nav -->  */}
                        </ul>
                    </nav>
                    {/* <!-- End Icons Navigation --> */}
                    {/* </header> */}
                    {/* <!-- End Header --> */}


                    <br /><br /><br />
                    <ul className="sidebar-nav margin-button" id="sidebar-nav">
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
                                <i className="bi bi-check2-all"></i>
                                <span>All Courses</span>
                            </button>
                        </li>

                        <br />
                        <br /><br />
                        <li className="nav-item">
                            <button className="btn btn-success" style={{ 'border': 'none', 'width': '100%' }} onClick={logOut}>
                                <i className='bi bi-arrow-bar-right'></i>
                                &emsp;<span>Logout</span>
                            </button>


                        </li>
                      
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
                            <div class="col-xl-12">
                                <div class="card " >
                                    <div class="card-body pt-3">
                                        {/* <!-- Bordered Tabs -->
                                       
                                                 <div class="row">
                                                    <div class="col-lg-3 col-md-4 label ">Change Profile</div>
                                                    <div class="col-lg-9 col-md-8"><UploadImage/></div>
                                                </div> */}
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
                                            
                                                <div className="col-lg-8">
                                                    <div className="">
                                                        {/* <div className="card-header bg-transparent border-0">
                                                                <h3 className="mb-0"><i className="far fa-clone pr-1"></i>Edit Information</h3>
                                                            </div> */}
                                                        <div className="card-body pt-0">
                                                            <table className="">
                                                                <tr>
                                                                    <th width="30%">First Name</th>
                                                                    <td width="2%">:</td>
                                                                    <td>{myData.teacher_fname} </td>
                                                                </tr>
                                                                <tr>
                                                                    <th width="30%">Last Name</th>
                                                                    <td width="2%">:</td>
                                                                    <td>{myData.teacher_lname} </td>
                                                                </tr>
                                                                <tr>
                                                                    <th width="30%">Mobile Number</th>
                                                                    <td width="2%">:</td>
                                                                    <td>{myData.teacher_mobile}</td>
                                                                </tr>

                                                                <tr>
                                                                    <th width="30%">Username</th>
                                                                    <td width="2%">:</td>
                                                                    <td>{myData.teacher_username}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th width="30%">Gender</th>
                                                                    <td width="2%">:</td>
                                                                    <td>{myData.teacher_gender}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th width="30%">E-mail</th>
                                                                    <td width="2%">:</td>
                                                                    <td>{myData.teacher_email}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th width="30%">Qualification</th>
                                                                    <td width="2%">:</td>
                                                                    <td>{myData.teacher_qualification} </td>
                                                                </tr>
                                                                <tr>
                                                                    <th width="30%">Experience(years)</th>
                                                                    <td width="2%">:</td>
                                                                    <td>{myData.teacher_experience}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th width="30%">About me</th>
                                                                    <td width="2%">:</td>
                                                                    <td>{myData.teacher_about}</td>
                                                                </tr>

                                                            </table>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="tab-pane fade pt-3  " id="profile-change-password">

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

                                            <div class="tab-pane fade profile-edit pt-3 " id="profile-edit">

                                                <form>
                                                    <div className="col-lg-8">
                                                        <div className="">
                                                            {/* <div className="card-header bg-transparent border-0">
                                                                <h3 className="mb-0"><i className="far fa-clone pr-1"></i>Edit Information</h3>
                                                            </div> */}
                                                            <div className="card-body pt-0">
                                                            <table className="">
                                                                    <tr>
                                                                        <th width="30%">First Name</th>
                                                                        <td width="2%">:</td>
                                                                        <td>{myData.teacher_fname} <input type="text" onChange={(e) => {setMyData({...myData,teacher_fname:e.target.value})}} required></input></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th width="30%">Last Name</th>
                                                                        <td width="2%">:</td>
                                                                        <td>{myData.teacher_lname}  <input type="text" onChange={(e) => {setMyData({...myData,teacher_lname:e.target.value}) }} /></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th width="30%">Mobile Number</th>
                                                                        <td width="2%">:</td>
                                                                        <td>{myData.teacher_mobile}<input type="text" onChange={(e) => {setMyData({...myData,teacher_mobile:e.target.value})}} /></td>
                                                                    </tr>

                                                                    <tr>
                                                                        <th width="30%">Username</th>
                                                                        <td width="2%">:</td>
                                                                        <td>{myData.teacher_username} <input type="text" onChange={(e) => {setMyData({...myData,teacher_username:e.target.value}) }} ></input></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th width="30%">Gender</th>
                                                                        <td width="2%">:</td>
                                                                        <td>{myData.teacher_gender} <input type="text" onChange={(e) => { setMyData({...myData,teacher_gender:e.target.value}) }} ></input></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th width="30%">E-mail</th>
                                                                        <td width="2%">:</td>
                                                                        <td>{myData.teacher_email} <input type="email" onChange={(e) => { setMyData({...myData,teacher_email:e.target.value}); setEmailValid(validateEmail(e.target.value))}} ></input>
                                                                        { !emailValid && <p style={{'color':'red'}}>Email is not valid!!</p>}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th width="30%">Qualification</th>
                                                                        <td width="2%">:</td>
                                                                        <td>{myData.teacher_qualification} <input type="text" onChange={(e) => {setMyData({...myData,teacher_qualification:e.target.value}) }} ></input></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th width="30%">Experience(years)</th>
                                                                        <td width="2%">:</td>
                                                                        <td>{myData.teacher_experience} <input type="number" onChange={(e) => { setMyData({...myData,teacher_experience:e.target.value}) }}></input></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th width="30%">About me</th>
                                                                        <td width="2%">:</td>
                                                                        <td>{myData.teacher_about} <input type="text" onChange={(e) => { setMyData({...myData,teacher_about:e.target.value}) }} ></input></td>
                                                                    </tr>

                                                                    
                                                                    {/* <tr>
                                                                        <td>
                                                                  <center><div className='d-grid gap-2 d-md-block'>  <button type="button" onClick={() => { updateProfile(); }} className="btn btn-primary " >Save Changes</button></div></center>
                                                                    </td>
                                                                    </tr> */}



                                                                </table>
                                                                <div className='center d-grid gap-2 col-6 mx-auto'>
                <Button   class="btn btn-success" onClick={updateProfile}>Save Changes</Button>
              </div>

                                                            </div>
                                                        </div>
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
        </>
    );
}




