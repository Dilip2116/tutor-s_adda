import React ,{useState}from "react";
import { Link, Outlet,useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import Axios from 'axios'
import StudentDashboard from "./StudentDashboard";






export default function Student_Login() {



    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    let [username,setUname] = useState("")
    let [password,setPassword] = useState("")
    let navigate = useNavigate()

      const user =localStorage.getItem("studentUsername") ;


   //  const dispatch= useDispatch()
    
    const postData = async (event) => {
      event.preventDefault();
      try{
        const res = await Axios.post(`http://localhost:8080/studentlogin/${username}/${password}`)
        if(res.data !== "")
        {
         localStorage.setItem("studentUsername", username);
         window.location.href = "/studentdb"
         // dispatch({type:"save",payload:{username:username,password:password}})
      }
        else{window.location.href = "/student_login"}
        }
        catch (err){
          console.log(err)
        }

         
         // if(username==="dilip123" && password==="1234")
         // {
         //    localStorage.setItem("username", username);
         // }

     }
     
      
                
        
        
      
   


    
  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );

  
   return (
      
    
      
      <div class="main-layout inner_page">
            
            {user ? <StudentDashboard/> :




         <form className="form_style">

            <h3 className="textalign">Student-Login</h3>

            <div className="form-group">
               <label>Username</label>
               <input type="text" className="form-control" placeholder="Enter username" onChange={(e)=>{setUname(e.target.value)} }  required/>
            </div>

            <div className="form-group">
               <label>Password</label>
               <input type="password" className="form-control" placeholder="Enter password" onChange={(e)=>{setPassword(e.target.value)} }  required/>
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
  
            <Link class="btn btn-info text-left" to="/student_register" role="button">Register</Link>
         </form>
         }

      </div>

   );
}