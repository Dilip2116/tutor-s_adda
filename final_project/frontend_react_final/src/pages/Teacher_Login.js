import React ,{ useState} from "react";
import { Link,useNavigate } from "react-router-dom"
import { SocialIcon } from 'react-social-icons';
import Axios from 'axios';
// import { useDispatch, useSelector } from "react-redux"
import TeacherDashboard from "./TeacherDashboard";
import { useForm } from "react-hook-form"




export default function Teacher_Login(){

   
    // React States
    
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
 
   
    let [username,setUname] = useState("")
    let [password,setPassword] = useState("")
    let navigate = useNavigate()
   
   const user =localStorage.getItem("teacherUsername") ;
   const formValues={username: username ,password: password};
   
   const { register } = useForm();

     

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

    
    const postData = async (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      console.log("Errors : ",formErrors)
      setIsSubmit(true);
      console.log("Submit : ",isSubmit)
      if(Object.keys(formErrors).length === 0 && isSubmit ){
      try{
         
        const res = await Axios.post(`http://localhost:8080/teacherlogin/${username}/${password}`)
        if(res.data !== ""){
         alert("successfully Logged in!!")
         localStorage.setItem("teacherUsername", username);
         localStorage.setItem("teacherid",res.data.teacher_id);        
         window.location.href = "/teacherdb"
      }
        else{
         alert("Enter Valid username and paassword");
         window.location.href = "/teacher_login"}
        }
        catch (err){
          console.log(err)
        }
      }
    }
    




    return (
      <div>
      {user ? <TeacherDashboard/> :
        <form className="form_style">
          {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div className="alert alert-success " role="alert"><div className="center"><strong>Signed in successfully</strong></div></div>
            ):<></>} */}

        <h3 className="textalign">Teacher-Login</h3>

        <div className="form-group">
           <label>Username</label>
           <input type="text" className="form-control" placeholder="Enter username" onChange={(e)=>{ setUname(e.target.value) } }  />
          
        </div>
        <p style={{'color':'red'}}>{formErrors.username}</p>

        <div className="form-group">
           <label>Password</label>
           <input type="password" className="form-control" placeholder="Enter password" onChange={(e)=>{ setPassword(e.target.value)} } />
        </div>
        <p style={{'color':'red'}}>{formErrors.password}</p>
      
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