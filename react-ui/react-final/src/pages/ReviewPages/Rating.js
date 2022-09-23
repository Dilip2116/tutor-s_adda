import React, { useState } from 'react';
import { useNavigate } from 'react-router'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ShowRating from './ShowRating';
import TeacherRating from './TeacherRating';
import Q1 from './Q1';
import Q2 from './Q2';
import Q3 from './Q3';
import Q4 from './Q4';
import Q5 from './Q5';
import axios from 'axios';

export default function Rating ()
{
  const [first_rating, setr1] = useState(0);
  const star1 = (rating) => {
    setr1(rating + 1);
  };

  const [second_rating, setr2] = useState(0);
  const star2 = (rating) => {
    setr2(rating + 1);
  };

  const [third_rating, setr3] = useState(0);
  const star3 = (rating) => {
    setr3(rating + 1);
  };

  const [ fourth_rating, setr4] = useState(0);
  const star4 = (rating) => {
    setr4(rating + 1);
  };

  const [fifth_rating, setr5] = useState(0);
  const star5 = (rating) => {
    setr5(rating + 1);
  };

  let navigate=useNavigate();
  // To get ratings from database
 
  const course_id = localStorage.getItem("courseId");
  const  student_id = localStorage.getItem("studentID");

  
    // To Post ratings into database

  const [stars,setStars] = useState();
  

  const postData = async () => {
    
    try {
            const res = await axios.post(`http://localhost:8080/addreview`, { fifth_rating , first_rating , fourth_rating , second_rating , third_rating, course_id , student_id})
            if(res.data===true)
            {
              alert("ThankYou for Rate us...")
              navigate('/studentdb')
            }
            else{
              alert("Already Rated for this course...!!")
              navigate('/studentdb')
              
            }
        } catch (err) {
            console.log(err)
        }
    }
 
    return(
        <>
        <div className="container , center" ><h1 className='heading'>
        Feedback Form
      </h1>
        <table className='table'><tr><td><i class="bi bi-star-fill"></i></td></tr>
          <tr><td>1) Overall rating for teacher:</td><td> <Q1 rfun1={star1} /></td></tr>
          <tr><td>2) Explanations by instructor were:</td><td>  <Q2 rfun2={star2} /></td></tr>
          <tr><td>3) Answers to student questions were:</td><td> <Q3 rfun3={star3} /></td></tr>
          <tr><td>4) Relavence of course content was:</td><td> <Q4 rfun4={star4} /></td></tr>
          <tr><td>5) Availability of extra help when needed was:</td><td> <Q5 rfun5={star5} /></td></tr>

        </table><br />
        
        
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}>

          <button className='button1' onClick={postData}>Submit</button>
        </div>
      </div>
      {/* <i class="bi bi-1-circle"></i>
      <h1>new value={first_rating}</h1>
      <h1>new value={second_rating}</h1>
      <h1>new value={third_rating}</h1>
      <h1>new value={ fourth_rating}</h1>
      <h1>new value={fifth_rating}</h1> */}
      
      
        
        </>
    )
}