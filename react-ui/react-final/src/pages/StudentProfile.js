import React ,{useState,useEffect}from 'react';
import { useNavigate } from 'react-router'
// import { useSelector } from "react-redux";
import Axios from 'axios';


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

    localStorage.removeItem("studentUsername");
    localStorage.removeItem("studentID");
  
    navigate('/student_login');
    
  }

  // //fetching username from reducx store
  // const uname = useSelector((state)=>{return state.username});

  
  // const [username,setUsername]=useState("");
   const  username=localStorage.getItem('studentUsername');
   const studentid=localStorage.getItem("studentID");

  
//     function verify(){
//       // setUsername(localStorage.getItem('studentUsername'));
//       username=localStorage.getItem('studentUsername');
//       if(username===''){
//         navigate('/student_login')
//       }
//     }

const [myData ,setMyData]=useState([])
   
console.log(myData);


  
const [student_fname, setFname] = useState('')
// const [student_gender, setGender] = useState('')
  const [student_lname, setLname] = useState('')
const [student_mobile, setMobile] = useState('')

  const [student_password, setPassword] = useState('')
  // const [rePassword  , setRepass] = useState('')
const [student_username, setUsername] = useState('')

  const [student_dob, setDob] = useState('')
const [ student_email, setEmail] = useState('')


//   const [city  , setCity] = useState('')
// const [ country, setCountry] = useState('')
//   const [pincode, setPin] = useState('')
// const [state, setState] = useState('')
//   const [street, setStreet] = useState('')

  const address = myData.address;
  const student_gender=myData.student_gender;
  const student_id=myData.student_id;

  // const address={city, country, pincode, state, street}

  const updateProfile = async (event) => {
    
    try{
      const res = await Axios.post(`http://localhost:8080/updatestudent`,{student_id,student_email , student_fname , student_gender , student_lname , student_mobile , student_password , student_username , student_dob,address})
      if(res.data !== ""){
        alert("Successfully Porfile Updated");
        window.location.href = "/student_profile"}
      else{window.location.href = "/student_register"}
      }
      catch (err){
        console.log(err)
      }
   }
  


const getData = async (event) => {
  try{
     
    const res = await Axios.get(`http://localhost:8080/studentbyid/${studentid}`)
    if(res.data !== ""){
     setMyData(res.data);
     console.log(myData);
  }
    else{alert("Error!!!")}
    }
    catch (err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getData();
    updateProfile();
},[] )

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
                  <br/><br/><span className="d-none d-md-block ps-2 text" ><h3><strong>{username}</strong></h3></span>
                </a>
                {/* <!-- End Profile Image Icon --> */}
                {/* <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                  <li className="dropdown-header">
                    <h6>Welecom {username}</h6>
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

          <br/><br/><br/>
          <ul class="sidebar-nav" id="sidebar-nav">
            <li class="nav-item">
              <button class="nav-link collapsed" style={{ 'border': 'none','width': '100%' }} onClick={dashboard}>
                <i class="bi bi-grid"></i>
                <span>Dashboard</span>
              </button>
            </li>
            {/* <!-- End Dashboard Nav --> */}
            <li class="nav-item">
              <button class="nav-link collapsed" style={{ 'border': 'none' ,'width': '100%'}} onClick={profile}>
                <i class="bi bi-card-list"></i>
                <span>Profile</span>
              </button>
            </li>
            {/* End Exam Page Nav */}
            <li class="nav-item">
              <button class="nav-link collapsed" style={{ 'border': 'none','width': '100%' }} onClick={schedule}>
                <i class="bi bi-box-arrow-in-right"></i>
                <span>Schedule</span>
              </button>
            </li>
            <li class="nav-item">
              <button class="nav-link collapsed" style={{ 'border': 'none' ,'width': '100%'}} onClick={joincourse}>
                <i class="bi bi-box-arrow-in-right"></i>
                <span>New Course</span>
              </button>
            </li>
            <br/>
            <br/><br/>
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
                <div class="card" style={{'width':'100%','height':'100%'}}>
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
                                                                
                                                               
                                                                

                                                            </table>

                                                        </div>
                                                    </div>
                                                </div>
                      </div> 
                      <div class="tab-pane fade profile-edit pt-6" id="profile-edit">
                        
                        <form>
                          <div class="row mb-3">
                            <label for="firstName" class="col-md-4 col-lg-3 col-form-label">First Name</label>
                            <div class="col-md-8 col-lg-9">
                              <input name="firstName" type="text" class="form-control" id="firstName"  onChange={(e)=>{setFname(e.target.value)}} defaultValue={myData.student_fname} />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label for="lastName" class="col-md-4 col-lg-3 col-form-label">Last Name</label>
                            <div class="col-md-8 col-lg-9">
                              <input name="lastName" type="text" class="form-control" id="lastName" onChange={(e)=>{setLname(e.target.value)}}  defaultValue={myData.student_lname} />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label for="mobno" class="col-md-4 col-lg-3 col-form-label">Mobile Number</label>
                            <div class="col-md-8 col-lg-9">
                              <input name="mobno" type="text" class="form-control" id="mobno" onChange={(e)=>{setMobile(e.target.value)}} defaultValue={myData.student_mobile} />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label for="dob" class="col-md-4 col-lg-3 col-form-label">Date Of Birth</label>
                            <div class="col-md-8 col-lg-9">
                              <input name="dob" type="date" class="form-control" id="dob" onChange={(e)=>{setDob(e.target.value)}} defaultValue={myData.student_dob} />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label for="username" class="col-md-4 col-lg-3 col-form-label">Username</label>
                            <div class="col-md-8 col-lg-9">
                              <input name="username" type="text" class="form-control" id="username" onChange={(e)=>{setUsername(e.target.value)}}  defaultValue={myData.student_username} />
                            </div>
                          </div>
                          {/* <div class="row mb-3">
                            <label for="username" class="col-md-4 col-lg-3 col-form-label">Gender</label>
                            <div class="col-md-8 col-lg-9">
                              <input name="username" type="text" class="form-control" id="username" value={myData.student_gender} />
                            </div>
                          </div> */}
                          <div class="row mb-3">
                            <label for="Email" class="col-md-4 col-lg-3 col-form-label">Email</label>
                            <div class="col-md-8 col-lg-9">
                              <input name="email" type="text" class="form-control" id="Email" onChange={(e)=>{setEmail(e.target.value)}} defaultValue={myData.student_email} />
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
                            <button type="submit" pnClick={updateProfile} class="btn btn-primary">Save Changes</button>
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
