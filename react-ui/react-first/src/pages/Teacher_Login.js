import React from "react";
import { Link, Outlet } from "react-router-dom"
import { SocialIcon } from 'react-social-icons';





export default function Teacher_Login(){
    return (
      
   
        <form className="form_style">

        <h3 className="textalign">Teacher-Login</h3>

        <div className="form-group">
           <label>Email</label>
           <input type="email" className="form-control" placeholder="Enter email" />
        </div>

        <div className="form-group">
           <label>Password</label>
           <input type="password" className="form-control" placeholder="Enter password" />
        </div>

        <div className="form-group">
           <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="customCheck1" />
              <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
           </div>
        </div>





        <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
        <p className="forgot-password text-right">
           Forgot <Link to="/forgotpswd">password?</Link>
        </p>
        {/* 
<div class="text-left">
<button type="button" class="btn btn-primary">Register</button>
</div> */}

        <Link class="btn btn-info text-left" to="/teacher_register" role="button">Register</Link>
     </form>

    );
}