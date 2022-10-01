import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router'
// import { useSelector } from "react-redux";
import Axios from 'axios';
import Button from 'react-bootstrap/Button';
import validator from 'validator';
import swal from 'sweetalert'


export default function StudentProfile() {

  let navigate = useNavigate();
  function dashboard() {
    navigate('/studentdb');
  }
  function schedule() {
    navigate('/student_scheduler')
  }
  function joincourse() {
    navigate('/course')
  }
  function profile() {
    navigate('/studentprofile')
  }

  function logOut() {
    swal("Logged Out!");
    localStorage.removeItem("studentUsername");
    localStorage.removeItem("studentID");
    

   

    navigate('/student_login');

  }

  // //fetching username from reducx store
  // const uname = useSelector((state)=>{return state.username});


  // const [username,setUsername]=useState("");
  const username = localStorage.getItem('studentUsername');
  const studentid = localStorage.getItem("studentID");


  //     function verify(){
  //       // setUsername(localStorage.getItem('studentUsername'));
  //       username=localStorage.getItem('studentUsername');
  //       if(username===''){
  //         navigate('/student_login')
  //       }
  //     }

  const [myData, setMyData] = useState([])

  const [emailValid, setEmailValid] = useState(true);

  //email validation
  const validateEmail = email => {
    return validator.isEmail(email) && email.length > 0;
  }

  //for changing password

  const [oldpassword,setOldPass] = useState("");
  const [newpassword,setNewPassword] = useState("");
  const [repass,setRepass] =useState("");
  const [passcheck1,setPasscheck1] = useState(true);
  const [passcheck2,setPasscheck2] = useState(true);
  const [isSubmit, setIsSubmit  ]= useState(false);

  const [error,setError] = useState({});
  const validatePass = (newpassword,repass) => {
    const errors ={}
   const passregex = /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$ %^&*-]).{8,15}/;
   
    if (!passregex.test(newpassword)) {
      errors.newpassword = "This is not a valid password At least one upper case English letter,lower case English letter,one digit ,one special character,Minimum eight in length";
      setPasscheck1(false)
    }
    if(newpassword!=repass)
    {
      setPasscheck2(false)
      errors.repass="new password and re-type Password fields must be same";
    }

    return errors;
    
  }




 // console.log(myData);












  // const address={city, country, pincode, state, street}

  const student_dob = myData.student_dob;
  const student_fname = myData.student_fname;
  const student_email = myData.student_email;
  const student_password = myData.student_password;
  const student_gender = myData.student_gender;
  const student_username = myData.student_username;
  const student_lname = myData.student_lname;
  const studentId = myData.studentId;
  console.log(studentId);
  const student_mobile = myData.student_mobile;
  const address = myData.address;
  
  //student_id,student_email , student_fname , student_gender , student_lname , student_mobile , student_password , student_username , student_dob,address

  const updateProfile = async () => {
    try {
      const res = await Axios.post(`http://localhost:8080/updatestudent`, {
        studentId, student_email, student_fname, student_gender, student_lname, student_mobile, student_password, student_username, student_dob, address
      })
      console.log("post", myData)
      console.log("response", res)

      if (res.data) {
        alert("Profile Updated Successfully");
        localStorage.setItem("studentUsername", student_username);
        navigate("/studentdb")
      }
      else {
        alert("Profile Not Updated!! ");
      }
    }

    catch (err) {
      console.log(err)
    }
  }



  const getData = async (event) => {
    try {

      const res = await Axios.get(`http://localhost:8080/studentbyid/${studentid}`)
      if (res.data !== "") {
        setMyData(res.data);
        console.log(myData);
      }
      else { alert("Error!!!") }
    }
    catch (err) {
      console.log(err)
    }
  }

  //change password
  const updatePassword = async (e) => {
      // e.preventDefault();
      console.log("inside function",newpassword)
      console.log("inside function",oldpassword)
      console.log("inside function",studentId)
      setError(validatePass( newpassword,repass))
      setIsSubmit(true);
      console.log("inside function",isSubmit)
      console.log("error",error);
      if(Object.keys(error).length==0 && isSubmit){
        console.log("inside function")
    try {
      const res = await Axios.put(`http://localhost:8080/changestudentpassword/${studentId}/${newpassword}/${oldpassword}`)
      
      console.log("response", res)

      if (res.data==true)
        {
          console.log("response")
        //   <div className="spinner-border" role="status">
        //   <span className="sr-only">Loading...</span>
        // </div>
        alert("Password Updated Successfully");
        navigate("/studentdb")
        }
      else {
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        alert("Password Not Updated!! ");
          }
    }
    catch (err) {
      console.log(err)
    }
  }
  }

  useEffect(() => {
    getData();

  }, [])

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
                  <img src="assets/images/profile.jpg" alt="Profile" className="rounded-circle" />
                  <br /><br /><span className="d-none d-md-block ps-2 text" ><h3><strong>{myData.student_username}</strong></h3></span>
                </a>
              
              </li>
              {/* <!-- End Profile Nav --> */}
            </ul>
          </nav>
          {/* <!-- End Icons Navigation --> */}
          {/* </header> */}
          {/* <!-- End Header --> */}

          <br /><br /><br />
          <ul class="sidebar-nav" id="sidebar-nav">
            <li class="nav-item">
              <button class="nav-link collapsed" style={{ 'border': 'none', 'width': '100%' }} onClick={dashboard}>
                <i class="bi bi-grid"></i>
                <span>Dashboard</span>
              </button>
            </li>
            {/* <!-- End Dashboard Nav --> */}
            <li class="nav-item">
              <button class="nav-link collapsed" style={{ 'border': 'none', 'width': '100%' }} onClick={profile}>
                <i class="bi bi-card-list"></i>
                <span>Profile</span>
              </button>
            </li>
            {/* End Exam Page Nav */}
            <li class="nav-item">
              <button class="nav-link collapsed" style={{ 'border': 'none', 'width': '100%' }} onClick={schedule}>
                <i class="bi bi-box-arrow-in-right"></i>
                <span>Schedule</span>
              </button>
            </li>
            <li class="nav-item">
              <button class="nav-link collapsed" style={{ 'border': 'none', 'width': '100%' }} onClick={joincourse}>
                <i class="bi bi-box-arrow-in-right"></i>
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
                <div class="card" style={{ 'width': '100%', 'height': '100%' }}>
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
                    <div class="tab-content   pt-12 set-width">
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
                                  <td>{myData.student_fname} </td>
                                </tr>
                                <tr>
                                  <th width="30%">Last Name</th>
                                  <td width="2%">:</td>
                                  <td>{myData.student_lname} </td>
                                </tr>
                                <tr>
                                  <th width="30%">Mobile Number</th>
                                  <td width="2%">:</td>
                                  <td>{myData.student_mobile}</td>
                                </tr>
                                <tr>
                                  <th width="30%">Username</th>
                                  <td width="2%">:</td>
                                  <td>{myData.student_username}</td>
                                </tr>
                                <tr>
                                  <th width="30%">Gender</th>
                                  <td width="2%">:</td>
                                  <td>{myData.student_gender}</td>
                                </tr>
                                <tr>
                                  <th width="30%">E-mail</th>
                                  <td width="2%">:</td>
                                  <td>{myData.student_email}</td>
                                </tr>
                                <tr>
                                  <th width="30%">DOB</th>
                                  <td width="2%">:</td>
                                  <td>{myData.student_dob}</td>
                                </tr>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane fade profile-edit pt-6" id="profile-edit">

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
                                    <td>{myData.student_fname} <input type="text" onChange={(e) => { setMyData({ ...myData, student_fname: e.target.value }) }} required></input></td>
                                  </tr>
                                  <tr>
                                    <th width="30%">Last Name</th>
                                    <td width="2%">:</td>
                                    <td>{myData.student_lname}  <input type="text" onChange={(e) => { setMyData({ ...myData, student_lname: e.target.value }) }} /></td>
                                  </tr>
                                  <tr>
                                    <th width="30%">Mobile Number</th>
                                    <td width="2%">:</td>
                                    <td>{myData.student_mobile}<input type="text" onChange={(e) => { setMyData({ ...myData, student_mobile: e.target.value }) }} /></td>
                                  </tr>

                                  <tr>
                                    <th width="30%">Username</th>
                                    <td width="2%">:</td>
                                    <td>{myData.student_username} <input type="text" onChange={(e) => { setMyData({ ...myData, student_username: e.target.value }) }} ></input></td>
                                  </tr>
                                  <tr>
                                    <th width="30%">Gender</th>
                                    <td width="2%">:</td>
                                    <td>{myData.student_gender} <input type="text" onChange={(e) => { setMyData({ ...myData, student_gender: e.target.value }) }} ></input></td>
                                  </tr>
                                  <tr>
                                    <th width="30%">DOB</th>
                                    <td width="2%">:</td>
                                    <td>{myData.student_dob} <input type="date" onChange={(e) => { setMyData({ ...myData, student_dob: e.target.value }) }} ></input></td>
                                  </tr>
                                  <tr>
                                    <th width="30%">E-mail</th>
                                    <td width="2%">:</td>
                                    <td>{myData.student_email} <input type="email" onChange={(e) => { setMyData({ ...myData, student_email: e.target.value }); setEmailValid(validateEmail(e.target.value)) }} ></input>
                                      {!emailValid && <p style={{ 'color': 'red' }}>Email is not valid!!</p>}</td>
                                  </tr>
                                </table>
                                <div className='center d-grid gap-2 col-6 mx-auto'>
                                  <Button class="btn btn-success" onClick={updateProfile}>Save Changes</Button>
                                </div>

                              </div>
                            </div>
                          </div>



                        </form>

                      </div>
                      <div class="tab-pane fade pt-3" id="profile-change-password">

                        <form>
                          <div class="row mb-3">
                            <label for="currentPassword" class="col-md-4 col-lg-3 col-form-label">Current Password</label>
                            <div class="col-md-8 col-lg-9">
                              <input name="password" type="password" class="form-control" id="currentPassword" onChange={(e) => {setOldPass(e.target.value)}}/>
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label for="newPassword" class="col-md-4 col-lg-3 col-form-label">New Password</label>
                            <div class="col-md-8 col-lg-9">
                              <input name="newpassword" type="password" class="form-control" id="newPassword"  onChange={(e) => {setNewPassword(e.target.value)}} />
                            </div>
                            {!passcheck1 && <p style={{'color':'red'}}>{error.newpassword}</p>}
                            
                          </div>
                          <div class="row mb-3">
                            <label for="renewPassword" class="col-md-4 col-lg-3 col-form-label">Re-enter New Password</label>
                            <div class="col-md-8 col-lg-9">
                              <input name="renewpassword" type="password" class="form-control" id="renewPassword" onChange={(e) => {setRepass(e.target.value)}}  />
                            </div>
                            {!passcheck2 && <p style={{'color':'red'}}>{error.repass}</p>}
                            
                          </div>
                          <div class="text-center">
                            <button type="submit" class="btn btn-primary" onClick={updatePassword}>Change Password</button>
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
