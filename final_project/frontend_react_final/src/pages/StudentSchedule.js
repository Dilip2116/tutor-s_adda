// import { Eventcalendar, getJson, toast } from '@mobiscroll/react';
// import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import React ,{useState,useEffect}from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Axios from 'axios';

import { useNavigate } from 'react-router-dom';

export default function StudentSchedule() {
    const [myEvents, setEvents] = React.useState([]);

    
  let navigate = useNavigate();

  function dashboard() {
    navigate('/studentdb');
  }

  
  
  function joincourse() {
    navigate('/course')
  }

  function scheduler() {
    navigate('/student_scheduler')
  }
  function profile() {
    navigate('/studentprofile')
  }


    
    
    
    function logOut() {

      localStorage.removeItem("studentUsername");
      localStorage.removeItem("studentID");
      localStorage.removeItem("sLoggedIn");
      navigate('/student_login');
      
    }

    let [courseData, setCourseData] = useState([])
  // const [username,setUsername]=useState("");
  const username =localStorage.getItem('studentUsername');
  const studentid = localStorage.getItem('studentID');
  const [date, setDate] = useState(new Date());
  const locale = 'fr-CA';






  const cdate = new Intl.DateTimeFormat(
    locale,
    {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).format(date)

    const onDateChange = (newDate) => {
      setDate(newDate);
      getData();
      console.log(newDate);
    }


  console.log("date:-", cdate);

  
  
//   function verify(){
//     // setUsername(localStorage.getItem('studentUsername'));
//     if(username===''){
//       navigate('/student_login')
//     }
//   }

//   useEffect(()=>{
//     verify();
// },[] )

//getting all courses for particular teacher
const getData = async (event) => {
  try {
    const res = await Axios.get(`http://localhost:8080/getcoursebystudentdate/${cdate}/${studentid}`)
    if (res.data !== "") {
      setCourseData(res.data);
      console.log(res.data);
    }
    else { alert("Error!!!") }
  }
  catch (err) {
    console.log(err)
  }
}

console.log(courseData);
// useEffect(() => {
  
   
// }, [])

console.log("DATE format", date);
const list=courseData.map((e,index)=>{return (<table key={index} className="table table-bordered">
  <tr>
    <th >Course Name: {e.course_name}</th>
    <th >Time : {e.course_start_time}</th>
    <th>Start-date: {e.course_start_date}</th>
    <th >End-date: {e.course_end_date}</th>
  </tr>
  </table> ) })


    return (
        <>
         <body className='row-3'>
        
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
                  <span className="d-none d-md-block text ps-2"><h3><strong>{username}</strong></h3></span>
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
              <button className="nav-link collapsed"  style={{ 'border': 'none', 'width': '100%' }} onClick={scheduler}>
                <i className="bi bi-calendar2-week"></i>
                <span>Schedule</span>
              </button>
            </li>
            {/* End Exam Page Nav */}
            <li className="nav-item">
              <button className="nav-link collapsed" style={{ 'border': 'none', 'width': '100%' }} onClick={joincourse}>
                <i className="bi bi-plus-circle"></i>
                <span>New Course</span>
              </button>
            </li>
            <br/><br/><br/>
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

         <main id="main" className="main">
         
         <div className="pagetitle">
            <h1>Schedule</h1>
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><button style={{ 'border': 'none' }} onClick={dashboard}>Home</button></li>
                <li className="breadcrumb-item active"><button style={{ 'border': 'none' }} onClick={dashboard}>Dashboard</button></li>
              </ol>
            </nav>
          </div>
          {/* <!-- End Page Title --> */}
          
          
        
             {/*
            <div class="row">
              <div class="col-lg-6">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Upcoming Class</h4>
                    <center>
                      <img src="assets/images/calendar.png" style={{ 'height': '100px', 'width': '100px' }}></img><br/><br/>
                      <div>
                          <h5>Date : 14/09/2022</h5><br/>
                          <h5>Time : 11:00 AM</h5>
                      </div>
                    </center>

                  </div>
                </div>
              </div>
            </div> */}
             
             {/* <section className="section  scheduler " >
        <Eventcalendar
            theme="ios" 
            themeVariant="dark"
            clickToCreate={false}
            dragToCreate={false}
            dragToMove={false}
            dragToResize={false}
            eventDelete={false}
            data={myEvents}
            view={view}
            onEventClick={onEventClick}
       />
       </section> */}
       <div className="container ">
            <div className="row">
              <div className="col-lg-4">
                <div className="card shadow-sm">
                  <div className="card-header bg-transparent text-center" >
                    {/* <img className="profile_img" src="assets/images/profile.jpg" alt=""/>
            <br/>
            <br/>
            <h3><strong>{teacherData.teacher_fname } { teacherData.teacher_lname}</strong></h3> */}
                    <div className='app' >
                      <h1 className='text-center'><strong>Student Schedule</strong></h1>
                    
                      <div className='calendar-container '  >
                        <Calendar onChange={onDateChange} value={date} />
                      </div>
                      {/* <p className='text-center'>
        <strong><span className='bold'>Selected Date:</span></strong>{' '}
        {date.toDateString()}
      </p> */}
                    </div>
                  </div>
                  {/* <div className="card-body">
            <p className="mb-0"><strong className="pr-1">Teacher ID:</strong>{teacherData.teacher_id}</p>
            <p className="mb-0"><strong className="pr-1">About:</strong>{teacherData.teacher_about}</p>
            <p className="mb-0"><strong className="pr-1">Teaching Experience:</strong>{teacherData.teacher_experience} Years</p>
            <p className="mb-0"><strong className="pr-1">Qualification:</strong>{teacherData.teacher_qualification}</p>    
            <p className="mb-0"><strong className="pr-1">Contact:</strong>{teacherData.teacher_mobile}</p>
            <p className="mb-0"><strong className="pr-1">E-mail:</strong>{teacherData.teacher_email}</p>    
          </div> */}
                </div>
              </div>
              <div className="col-lg-8">
                <div className="card shadow-sm">
                  <div className="card-header bg-transparent border-0">
                    <h3 className="mb-0"><i className="far fa-clone pr-1" style={{ 'fontSize': '2em' }}></i >Selected Date:{date.toDateString()}</h3>
                  </div>
                  <div className="card-body pt-0 ">
                    <br />
                    <br />
                    <hr />
                    {/* <strong style={{'fontSize':'2em'}}>1.:- {courseData.course_name}  </strong>  <br />
                    <strong style={{'fontSize':'2em'}}>2.:- {courseData.course_name} </strong> <br />
                    <strong style={{'fontSize':'2em'}}>3.:- {courseData.course_name}  </strong><br />
                    <strong style={{'fontSize':'2em'}}>4.:- {courseData.course_name}  </strong><br />
                    <strong style={{'fontSize':'2em'}}>5.:- {courseData.course_name} </strong><br /> */}
                    {list}

                  </div>
                </div>
              </div>
            </div>
          </div>


        </main>
        {/* <!-- End #main --> */}
        
      </body>

        {/* <TeacherDashboard/> */}
        
      
       
     
       </>
    ); 
}
