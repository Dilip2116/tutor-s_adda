import React from "react";
import { Link, Outlet } from "react-router-dom"
import { SocialIcon } from 'react-social-icons';





export default function Admin_Login(){
    return (
      
            
   //  <div className="vh-100" style="background-color: #11e2c6;">
   //      <div className="container py-5 h-100">
   //        <div className="row d-flex justify-content-center align-items-center h-100">
   //          <div className="col col-xl-10">
   //            <div className="card" style="border-radius: 1rem;">
   //              <div className="row g-0">
   //                <div className="col-md-6 col-lg-5 d-none d-md-block">
   //                  <img src="../assets/images/login3.jpg" 
   //                    alt="login form" className="img-fluid" style="border-radius: 1rem 0 0 1rem;" />
   //                </div>
   //                <div className="col-md-6 col-lg-7 d-flex align-items-center">
   //                  <div className="card-body p-4 p-lg-5 text-black">
      
   //                    <form>
      
   //                      <div className="d-flex align-items-center mb-3 pb-1">
   //                        <i className="fas fa-cubes fa-2x me-3" style="color: #ff6219;"></i>
   //                        <img src="../assets/images/logo.png" alt="Logo" style="width:100px;height:100px;"/>
   //                      </div>
      
   //                      <h5 className="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Sign into your account</h5>
      
   //                      <div className="form-outline mb-4">
   //                        <input type="email" id="form2Example17" className="form-control form-control-lg" />
   //                        <label className="form-label" for="form2Example17">Email address</label>
   //                      </div>
      
   //                      <div className="form-outline mb-4">
   //                        <input type="password" id="form2Example27" className="form-control form-control-lg" />
   //                        <label className="form-label" for="form2Example27">Password</label>
   //                      </div>
      
   //                      <div className="pt-1 mb-4">
   //                        <button className="btn btn-dark btn-lg btn-block" type="button">Login</button>
   //                      </div>
      
   //                      <a className="small text-muted" href="forgotPwd.html">Forgot password?</a>
   //                      <p className="mb-5 pb-lg-2" style="color: #393f81;">Don't have an account? <a href="Student_registrationform.html"
   //                          style="color: #393f81;">Register here</a></p>
   //                      <a href="#!" className="small text-muted">Terms of use.</a>
   //                      <a href="#!" className="small text-muted">Privacy policy</a>
   //                    </form>
      
   //                  </div>
   //                </div>
   //              </div>
   //            </div>
   //          </div>
   //        </div>
   //      </div>
      
      
   
       // </div>
            <div class="main-layout inner_page">
         
   
        
   
            <form className="form_style">

<h3 className="textalign">Admin-Login</h3>

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


<div class="text-left">
	<button type="button" class="btn btn-primary">Login</button>
</div> 


{/* 
<button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
<p className="forgot-password text-right">
    Forgot <a href="#">password?</a>
</p> 
 
<div class="text-left">
	<button type="button" class="btn btn-primary">Register</button>
</div> 

<Link class="btn btn-info text-left" to="/student_register" role="button">Register</Link> */}
</form>

 
       </div>

    );
}