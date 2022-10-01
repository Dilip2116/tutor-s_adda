import React ,{useState}from "react";
import { Link, Outlet,useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import Axios from 'axios'
import StudentDashboard from "./StudentDashboard";
import { useForm } from "react-hook-form"



export default function Student_Login() {

   const [formErrors, setFormErrors] = useState({});
   const [isSubmit, setIsSubmit] = useState(false);

    // React States   
    let [username,setUname] = useState("")
    let [password,setPassword] = useState("")
    let navigate = useNavigate()


    const formValues={username: username ,password: password};

   const { register } = useForm();

      const user =localStorage.getItem("studentUsername") ;

      const validate = (values) => {
         const errors = {};
         const passregex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
       
         if (!values.username) {
           errors.username = "Username is required!";
         }
         if (!values.password) {
            errors.password = "password is required!";
          } else if (!passregex.test(values.password)) {
            errors.password = "This is not a valid password At least one upper case English letter,lower case English letter,one digit ,one special character,Minimum eight in length";
          }
         return errors;
       };
     
    
    const postData = async (event) => {
      event.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
      if(Object.keys(formErrors).length === 0 && isSubmit ){
      try{
        const res = await Axios.post(`http://localhost:8080/studentlogin/${username}/${password}`)
        if(res.data !== "")
        {
         localStorage.setItem("studentUsername", username);       
         localStorage.setItem("studentID",res.data.studentId ); 
         console.log(res.data);
         alert("Successfully logged in ");
         window.location.href = "/studentdb"
        }
        else{
          alert("Invalid user details");
         window.location.href = "/student_login"
        }
     }
        catch (err){
          console.log(err)
        }        
      }
   }
     
      
   return (
        
      <div class="main-layout inner_page">
            
            {user ? <StudentDashboard/> :

         <form className="form_style">
            <h3 className="textalign">Student-Login</h3>

            <div className="form-group">
               <label>Username</label>
               <input type="text" className="form-control" placeholder="Enter username" value={username} onChange={(e)=>{setUname(e.target.value)} }   />
            </div>
            <p style={{'color':'red'}}>{formErrors.username}</p>

            <div className="form-group">
               <label>Password</label>
               <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={(e)=>{setPassword(e.target.value)} }   />
            </div>
            <p style={{'color':'red'}}>{formErrors.password}</p>
            
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