import React ,{useState,useEffect} from 'react';
import  Axios  from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { useNavigate ,Navigate} from 'react-router';
import TeacherRating from './ReviewPages/TeacherRating';
import ShowRating from './ReviewPages/ShowRating';


export default function CourseDetails()
{

    const course_id =localStorage.getItem('courseid');
    const teacher_id =localStorage.getItem('tc_id');

    const course1_id=localStorage.getItem('courseid');
   
    const student= localStorage.getItem('studentUsername');
    const student1_id=localStorage.getItem('studentID');

    const [show, setShow] = useState(false);
    let navigate = useNavigate();


    
  // const [myData, setMyData] = useState([]);
  // //getting reviews from db
  // const getData = async () => {
  //   try {
  //           const res = await Axios.get(`http://localhost:8080/reviewbycourse/${course_id}`)
  //           if(res.data !== "")
  //           {
  //             console.log("Data1 : ",res.data);
  //               setMyData(res.data);
  //           }
  //       } catch (err) {
  //           console.log(err)
  //       }
  //   }



    
    const handleClose = () => {
       
        setShow(false)
    };

    const postCourseTeacherID = async () => {
        try{
          const res = await Axios.post(`http://localhost:8080/register`,{course1_id,student1_id})
          if(res.data === true){
          
            alert("Successfully registered in course");
            window.location.href = "/studentdb"
          }
          else{
            alert("you have already registered in course");
              window.location.href = "/course"
            }
         
        }
          catch (err){
            console.log(err)
          }
       }
   
       

    const handleShow = () =>{ 
        if(student==null) 
        {
            // 
            alert("Please login to join this course!!")
            navigate('/student_login');
            
        }
       
        else
        {
            setShow(true)
        }
    };

    const checkEligibility = () =>{ 
        if( courseData.course_student_count < courseData.course_max_strenth) 
        {
            postCourseTeacherID();
        
        }
        else
        {
            alert("Maximum strength is full. !! You must wait for next batch or can check for another tutor.")
            navigate('/course');
        }
    };


    const [courseData, setCourseData] = useState([]);
     const [teacherData, setTeacherData] = useState([]);

    const getCourseData = async () => {
        try {
          const res = await Axios.get(`http://localhost:8080/getcourse/${course_id}`);
          setCourseData(res.data);
        } catch (error) {
          alert(error.message);
        }
      };

      const getTeacherData = async () => {
        try {
          const res = await Axios.get(`http://localhost:8080/getteacher/${teacher_id}`);
          setTeacherData(res.data);
        } catch (error) {
          alert(error.message);
        }
      };
    
    
      // NOTE:  calling the function
      useEffect(() => {
        getCourseData();
        getTeacherData();
        // getData();
        
      }, []);

    
    return(
        <div>
            <hr/>
            <strong>
            {/* <h1>----:Course Details:----</h1>
            <br/>
            <h3>Coruse id:- {course_id} </h3>
            <h3>teacher id:- {teacher_id} </h3> */}
            <div className="student-profile py-4">
  <div className="container">
    <div className="row">
      <div className="col-lg-3">
        <div className="card shadow-sm">
          <div className="card-header bg-transparent border-0">
            <h3 className="mb-0"><i className="far fa-clone pr-1"></i>Teacher Details</h3>
            <img className="profile_img" src="assets/images/profile.jpg" alt=""/>
            <br/>
            <br/>
            <h3><strong>{teacherData.teacher_fname } { teacherData.teacher_lname}</strong></h3>
          </div>
          <div className="card-body">
            <p className="mb-0"><strong className="pr-1">Teacher ID:</strong>{teacherData.teacher_id}</p>
            <p className="mb-0"><strong className="pr-1">About:</strong>{teacherData.teacher_about}</p>
            <p className="mb-0"><strong className="pr-1">Teaching Experience:</strong>{teacherData.teacher_experience} Years</p>
            <p className="mb-0"><strong className="pr-1">Qualification:</strong>{teacherData.teacher_qualification}</p>    
            <p className="mb-0"><strong className="pr-1">Contact:</strong>{teacherData.teacher_mobile}</p>
            <p className="mb-0"><strong className="pr-1">E-mail:</strong>{teacherData.teacher_email}</p>               
          </div>         
        </div>
        <TeacherRating/>
      </div>
      <div className="col-lg-6">
        <div className="card shadow-sm">
          <div className="card-header bg-transparent border-0">
            <h3 className="mb-0"><i className="far fa-clone pr-1"></i>Course Information</h3>
          </div>
          <div className="card-body pt-0">
            <table className="table table-bordered">
              <tr>
                <th width="30%">Course ID</th>
                <td width="2%">:</td>
                <td>{courseData.course_id}</td>
              </tr>
              <tr>
                <th width="30%">Course Category</th>
                <td width="2%">:</td>
                <td>{courseData.course_category}</td>
              </tr>
              <tr>
                <th width="30%">Course Name</th>
                <td width="2%">:</td>
                <td>{courseData.course_name}</td>
              </tr>
              <tr>
                <th width="30%">Course Duration</th>
                <td width="2%">:</td>
                <td>{courseData.course_duration} (months)</td>
              </tr>
              <tr>
                <th width="30%">Course Start-Date</th>
                <td width="2%">:</td>
                <td>{courseData.course_start_date}</td>
              </tr>
              <tr>
                <th width="30%">Course End-Date</th>
                <td width="2%">:</td>
                <td>{courseData.course_end_date}</td>
              </tr>
              <tr>
                <th width="30%">Class-Timing</th>
                <td width="2%">:</td>
                <td>{courseData.course_start_time} - {courseData.course_end_time}</td>
              </tr>
              <tr>
                <th width="30%">Course Fees</th>
                <td width="2%">:</td>
                <td>{courseData.course_fee}</td>
              </tr>
              <tr>
                <th width="30%">Maximum Strength</th>
                <td width="2%">:</td>
                <td>{courseData.course_max_strenth}</td>
              </tr>
              <tr>
                <th width="30%">No. of Student Registered</th>
                <td width="2%">:</td>
                <td>{courseData.course_student_count}</td>
              </tr>
              <tr>
                <th width="30%">About Course</th>
                <td width="2%">:</td>
                <td>{courseData.course_about}</td>
              </tr>
              <tr>
                 <th width="30%"></th>
                {/* <td width="2%">:</td>
                <td></td>  */}
              </tr>
              
              </table>
              <div className='center d-grid gap-2 col-6 mx-auto'>
                <Button   class="btn btn-success" onClick={handleShow}>Join Course</Button>
              </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>Please Confirm to Join Course!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={checkEligibility}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
          </div>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="card shadow-sm">
          <div className="card-header bg-transparent border-0">
            <h3 className="mb-0"><i className="far fa-clone pr-1"></i>Course Review</h3> 
          </div>
          <div className="card-body pt-0">
          <table className="table table-bordered">
            <ShowRating/>
          </table>
          </div>         
        </div>
      </div>
    </div>
  </div>
</div>

            </strong>

            <hr/>
        </div>
    )

}