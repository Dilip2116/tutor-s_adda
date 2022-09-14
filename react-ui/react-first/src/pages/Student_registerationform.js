import React from "react";
import { Link, Outlet } from "react-router-dom"
import { SocialIcon } from 'react-social-icons';





export default function Student_registrationform(){
    return (
      <>
 
  <form className="form_style">
                <h3 className="textalign">Student Registration Form</h3>
                
                <div className="form-group" >
                    <label>First name</label>
                    <input type="text" id="sFname" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" id="sLname" className="form-control" placeholder="Last name" />
                </div>
				
				 <div className="form-group">
                    <label>Birthday</label>
                    <input type="text"  id="sDOB" className="form-control" placeholder="Enter Birthday" />
                </div>
				
				<div className="form-group">
                    <label>Gender</label>
                   
                </div>


                <div className="form-group">
                    <label>Female</label>
                    <input type="radio" id="sFemale" className="form-control" placeholder="Enter Female" />
                </div>
				
				 <div className="form-group">
                    <label>Male</label>
                    <input type="radio" id="sMale" className="form-control" placeholder="Enter Male" />
                </div>
				
				
				 <div className="form-group">
                    <label>Other</label>
                    <input type="radio" id="sOther" className="form-control" placeholder="Enter Other" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" id="sEmail" className="form-control" placeholder="Enter email" />
                </div>
				
				<div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" id="sEmail" className="form-control" placeholder="Enter Phone Number" />
                </div>
				
				<div className="form-group">
                    <label>Username</label>
                    <input type="text" id="sUname" className="form-control" placeholder="Enter Username" />
                </div>
				

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" id="sPwd"  className="form-control" placeholder="Enter password" />
                </div>
				
				<div className="form-group">
                    <label>Re-Enter Password</label>
                    <input type="password" id="sPwd1"  className="form-control" placeholder="Re-Enter password" />
                </div>
				
				<div className="form-group">
                    <label>Street</label>
                    <input type="text" id="sStreet"  className="form-control" placeholder="Enter Street" />
                </div>
				
				<div className="form-group">
                    <label>Pincode</label>
                    <input type="text" id="sPincode"  className="form-control" placeholder="Enter Street" />
                </div>
				
				<div className="form-group">
                    <label>City</label>
                    <input type="text" id="sCity"  className="form-control" placeholder="Enter City" />
                </div>
				
				<div className="form-group">
                    <label>State</label>
                    <input type="text" id="sState"  className="form-control" placeholder="Enter State" />
                </div>
				
				<div className="form-group">
                    <label>Country</label>
                    <input type="text" id="sCountry"  className="form-control" placeholder="Enter Country" />
                </div>
				
				
				
				<div className="form-group">
                  <input className="form-check-input" type="checkbox" value="" id="sCheck" />
				    <label>Agree to terms and conditions</label>
                </div>
				

                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <Link to="/student_login">log in?</Link>
                </p>
            </form>
   </>
     

    );
}