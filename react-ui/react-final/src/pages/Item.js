import React ,{useNavigate}from "react";
import { Link, Outlet,NavLink  } from "react-router-dom";




// React Component to display individual item
const Item= ({ course_name, course_category,course_id ,course_teacher_id})=>{
  
  const handleClick = (event, param) => {
    console.log(event);
    console.log(param);
    localStorage.setItem("courseid", param);
    localStorage.setItem("tc_id",course_teacher_id);
  };

  // localStorage.setItem("courseid",course_id)


return(
  
  <div className="item-container1 ">
    <div>

    <div className="boxx">
    <img src="../assets/images/img7.jpg"/>
    <span className="item-label1">Name:</span>{course_name}<br/>
    <span className="item-label1">Category:</span>{course_category}<br/>
    <span className="item-label1">Course Id:</span>{course_id}<br/>
    <span className="item-label1">Teacher Id:</span>{course_teacher_id}<br/>
    <Link className=" btn btn-success" style={{ 'border': 'none', 'width': '50%' ,'font':'caption' }} to="/coursedetails" onClick={event=>handleClick(event,course_id)}>Register</Link>
  </div>
      {/* <span className="item-label1">Name:</span>
      {course_name}
    </div>
    <div>
      <span className="item-label1">Category:</span>
      {course_category}
    </div> */}
  </div>
  </div>
  );
};
  

export default Item;