import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";

import Axios from 'axios'
import {useNavigate} from "react-router-dom"
import AdminDashboard from "./AdminDashboard";
  







export default function Admin_Login1() {

   
    let [username,setUname] = useState('')
    let [password,setPassword] = useState('')
   let [check,setCheck] = useState("");

 const user = localStorage.getItem('adminUsername');


function postData(e){
        e.preventDefault();
        if(username==="" || password=="" )
        {
            setCheck("username/password required");
        }
        if(username ==="admin123" && password ==="1234")
        { 
        alert("successfully logged in");
         localStorage.setItem("adminUsername", username);

          
        }
      }
                
        
        
      
    //}


    
  // Generate JSX code for error message
  // const renderErrorMessage = (name) =>
  // name === errorMessages.name && (
  //   <div className="error">{errorMessages.message}</div>
  // );

//   if(loggedIn) { 
//      navigate('/admindb')
// }


    return (


        

     
       // Login Form
        <div class="main-layout inner_page">
          {user  ? <AdminDashboard/> : 
            <form className="form_style"  >
                <h3 className="textalign">Admin-Login</h3>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" name="username" placeholder="Enter email" value={username} onChange={(e)=>{setUname(e.target.value)} }required />
                    <p style={{'color':'red'}}>{check}</p>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" placeholder="Enter password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
                    <p style={{'color':'red'}}>{check}</p>

                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1"  required/>
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={postData}>Sign in</button>
            </form>
}
        </div>

       

    );
}