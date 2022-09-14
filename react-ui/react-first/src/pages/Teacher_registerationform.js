import React from "react";
import { Link, Outlet } from "react-router-dom"
import { SocialIcon } from 'react-social-icons';





export default function Student_registrationform(){
    return (

 
 <form className="form_style">
          <h3 className="textalign">Teacher Registration Form</h3>
 <div className="form-group" >
                    <label>First name</label>
                    <input type="text" id="tFname" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" id="tLname" className="form-control" placeholder="Last name" />
                </div>
				
				 <div className="form-group">
                    <label>Birthday</label>
                    <input type="text"  id="tDOB" className="form-control" placeholder="Enter Birthday" />
                </div>
				
				<div className="form-group">
                    <label>Gender</label>
                   
                </div>


                <div className="form-group">
                    <label>Female</label>
                    <input type="radio" id="tFemale" className="form-control" name="gender" />
                </div>
				
				 <div className="form-group">
                    <label>Male</label>
                    <input type="radio" id="tMale" className="form-control" name="gender"   />
                </div>
				
				
				 <div className="form-group">
                    <label>Other</label>
                    <input type="radio" id="tOther" className="form-control" name="gender"  />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" id="tEmail" className="form-control" placeholder="Enter email" />
                </div>
				
				<div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" id="tEmail" className="form-control" placeholder="Enter Phone Number" />
                </div>
				
				<div className="form-group">
                    <label>Username</label>
                    <input type="text" id="tUname" className="form-control" placeholder="Enter Username" />
                </div>
				

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" id="tPwd"  className="form-control" placeholder="Enter password" />
                </div>
				
				<div className="form-group">
                    <label>Re-Enter Password</label>
                    <input type="password" id="tPwd1"  className="form-control" placeholder="Re-Enter password" />
                </div>
				
				<div className="form-group">
                    <label>Street</label>
                    <input type="text" id="tStreet"  className="form-control" placeholder="Enter Street" />
                </div>
				
				<div className="form-group">
                    <label>Pincode</label>
                    <input type="text" id="tPincode"  className="form-control" placeholder="Enter Street" />
                </div>
				
				<div className="form-group">
                    <label>City</label>
                    <input type="text" id="tCity"  className="form-control" placeholder="Enter City" />
                </div>
				
				<div className="form-group">
                    <label>State</label>
                    <input type="text" id="tState"  className="form-control" placeholder="Enter State" />
                </div>
				
				<div className="form-group">
                    <label>Country</label>
                    <input type="text" id="tCountry"  className="form-control" placeholder="Enter Country" />
                </div>
				
				<div className="form-group">
                    <label>Qualification</label>
                    <input type="text" id="tQualification"  className="form-control" placeholder="Enter Qualification" />
                </div>
				
				<div className="form-group">
                    <label>Experience</label>
                    <input type="number" id="tExp"  className="form-control" placeholder="Enter Experience" />
                </div>
                
                <div className="form-group">
                    <label>Upload Profile</label>
                    <input type="file" className="form-control" placeholder="First name" />
                </div>
				
				<div className="form-group">
                  <input className="form-check-input" type="checkbox" value="" id="tCheck" />
				    <label>Agree to terms and conditions</label>
                </div>
				

                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <Link to="/teacher_login">log in?</Link>
                </p>
            </form>





    );
}