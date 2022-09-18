import React ,{ useState} from "react";
import { Link,useNavigate } from "react-router-dom"
import { SocialIcon } from 'react-social-icons';
import Axios from 'axios';
// import { useDispatch, useSelector } from "react-redux"
import TeacherDashboard from "./TeacherDashboard";




export default function Teacher_Login(){

   
    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
   
    let [username,setUname] = useState("")
    let [password,setPassword] = useState("")
    let navigate = useNavigate()
    let [loggedIn, setLoggedin] = useState(false)
    
   //  const dispatch= useDispatch()
   const user =localStorage.getItem("teacherUsername") ;


    
    const postData = async (event) => {
      event.preventDefault();
      try{
         
        const res = await Axios.post(`http://localhost:8080/teacherlogin/${username}/${password}`)
        if(res.data !== ""){
         
         localStorage.setItem("teacherUsername", username);
         window.location.href = "/teacherdb"
         setLoggedin(true);
   
      }
        else{window.location.href = "/teacher_login"}
        }
        catch (err){
          console.log(err)
        }
      }
    




    return (
      <div>
      {user ? <TeacherDashboard/> :
        <form className="form_style">

        <h3 className="textalign">Teacher-Login</h3>

        <div className="form-group">
           <label>Username</label>
           <input type="text" className="form-control" placeholder="Enter username" onChange={(e)=>{setUname(e.target.value)} } required />
        </div>

        <div className="form-group">
           <label>Password</label>
           <input type="password" className="form-control" placeholder="Enter password" onChange={(e)=>{setPassword(e.target.value)} } required />
        </div>

        <div className="form-group">
           <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="customCheck1" />
              <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
           </div>
        </div>





        <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={postData}>Sign in</button>
        <p className="forgot-password text-right">
           Forgot <Link to="/forgotpswd">password?</Link>
        </p>
        {/* 
<div class="text-left">
<button type="button" class="btn btn-primary">Register</button>
</div> */}

        <Link class="btn btn-info text-left" to="/teacher_register" role="button">Register</Link>
     </form>
}
</div>

    );
}