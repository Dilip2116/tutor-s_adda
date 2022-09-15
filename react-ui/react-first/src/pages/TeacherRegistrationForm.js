import React from "react";
import { Link, Outlet } from "react-router-dom"
import { SocialIcon } from 'react-social-icons';





export default function TeacherRegistrationForm() {


const [teacher_about, setAbout] = useState('')
const [teacher_email, setEmail] = useState('')
const [teacher_experience, setExperience] = useState('')
const [teacher_gender, setGender] = useState('')
const [teacher_fname, setFname] = useState('')
const [teacher_lname, setLname] = useState('')
const [teacher_mobile, setMobile] = useState('')
const [teacher_password, setPassword] = useState('')
const [teacher_qualification, setQualification] = useState('')
const [teacher_username, setUsername] = useState('')
const [city  , setCity] = useState('')
const [ country, setCountry] = useState('')
const [pincode, setPin] = useState('')
const [state, setState] = useState('')
const [street, setStreet] = useState('')

const postData = async () => {
  try{
    const res = await Axios.post(`http://localhost:8080/addteacher`,{teacher_about, teacher_email, teacher_experience, teacher_gender, teacher_fname, teacher_lname, teacher_mobile, teacher_password, teacher_qualification, teacher_username, city, country, pincode, state, street})
    if(res.data !== ""){window.location.href = "/teacher_login"}
    else{window.location.href = "/teacher_register"}
    }
    catch (err){
      console.log(err)
    }
 }

  return (
    <>

      <title>Teacher Registration</title>

      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>

      <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 textalign">Teacher Registration Form</h3>
      <form className="form_style">

        <div className="row">
          <div className="col-md-6 mb-4">

            <div className="form-outline">
              <input type="text" id="tFname" className="form-control form-control-lg" onChange={(e) => setFname(e.target.value)} required />
              <label className="form-label">First Name</label>
            </div>

          </div>
          <div className="col-md-6 mb-4">

            <div className="form-outline">
              <input type="text" id="tLname" className="form-control form-control-lg" onChange={(e) => setLname(e.target.value)} required />
              <label className="form-label" >Last Name</label>
            </div>

          </div>
        </div>

         <div className="row">
          {/*<div className="col-md-6 mb-4 d-flex align-items-center">

            <div className="form-outline datepicker w-100">
              <input type="text" className="form-control form-control-lg" id="tDOB" onChange={(e) => setUserName(e.target.value)} required />
              <label className="form-label">Birthday</label>
            </div>

          </div> */}
          <div className="col-md-6 mb-4">

            <h6 className="mb-2 pb-1">Gender: </h6>

            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="tFemale"
                value="option1" onChange={(e) => setGender(e.target.value)}/>
              <label className="form-check-label">Female</label>
            </div>

            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="tMale"
                value="option2" onChange={(e) => setGender(e.target.value)}/>
              <label className="form-check-label" >Male</label>
            </div>

            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="tOther"
                value="option3" onChange={(e) => setGender(e.target.value)}/>
              <label className="form-check-label" for="otherGender">Other</label>
            </div>

          </div>
        </div>



        <div className="row">
          <div className="col-md-6 mb-4 pb-2">

            <div className="form-outline">
              <input type="email" id="tEmail" className="form-control form-control-lg" onChange={(e) => setEmail(e.target.value)} required />
              <label className="form-label" >Email</label>
            </div>

          </div>


          <div className="col-md-6 mb-4 pb-2">

            <div className="form-outline">
              <input type="tel" id="tPhone" className="form-control form-control-lg" onChange={(e) => setMobile(e.target.value)} required />
              <label className="form-label" >Phone Number</label>
            </div>

          </div>
        </div>



        <div className="row">
          <div className="col-md-12 mb-4 pb-2">

            <div className="form-outline">
              <input type="text" id="tUname" className="form-control form-control-lg" onChange={(e) => setUsername(e.target.value)} required />
              <label className="form-label" >Username</label>
            </div>

          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-4 pb-2">

            <div className="form-outline">
              <input type="password" id="tPwd" className="form-control form-control-lg" onChange={(e) => setPassword(e.target.value)} required />
              <label className="form-label" >Password</label>
            </div>

          </div>


          <div className="col-md-6 mb-4 pb-2">

            <div className="form-outline">
              <input type="password" id="tPwd1" className="form-control form-control-lg"  required />
              <label className="form-label" >Re-Enter Password</label>
            </div>

          </div>
        </div>



        <div className="row">
          <div className="col-md-6 mb-4 pb-2">

            <div className="form-outline">
              <input type="text" id="tStreet" className="form-control form-control-lg" onChange={(e) => setStreet(e.target.value)} required />
              <label className="form-label" >Street</label>
            </div>

          </div>


          <div className="col-md-6 mb-4 pb-2">

            <div className="form-outline">
              <input type="text" id="tPincode" className="form-control form-control-lg" onChange={(e) => setPin(e.target.value)} required />
              <label className="form-label" >Pincode</label>
            </div>

          </div>
        </div>

        <div className="row">
          <div className="col-md-4 mb-4 pb-2">

            <div className="form-outline">
              <input type="text" id="tCity" className="form-control form-control-lg" onChange={(e) => setCity(e.target.value)} required />
              <label className="form-label" >City</label>
            </div>

          </div>

          <div className="col-md-4 mb-4 pb-2">

            <div className="form-outline">
              <input type="text" id="tState" className="form-control form-control-lg" onChange={(e) => setState(e.target.value)} required />
              <label className="form-label" >State</label>
            </div>

          </div>

          <div className="col-md-4 mb-4 pb-2">

            <div className="form-outline">
              <input type="text" id="tCountry" className="form-control form-control-lg" onChange={(e) => setCountry(e.target.value)} required />
              <label className="form-label" >Country</label>
            </div>

          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-4 pb-2">

            <div className="form-outline">
              <input type="text" id="tQualification" className="form-control form-control-lg" onChange={(e) => setQualification(e.target.value)} required />
              <label className="form-label" >Qualification</label>
            </div>

          </div>

          <div className="col-md-6 mb-4 pb-2">

            <div className="form-outline">
              <input type="number" id="tExp" className="form-control form-control-lg" onChange={(e) => setExperience(e.target.value)} required />
              <label className="form-label" >Experience</label>
            </div>

          </div>
        </div>

        <div className="row">
          <div className="col-md-12 mb-4 pb-2">

            <div className="form-group shadow-textarea">
              <label >About</label>
              <textarea className="form-control z-depth-1" id="tAbout" rows="3" placeholder="Write something here..." onChange={(e) => setAbout(e.target.value)} required></textarea>
            </div>

          </div>
        </div>

        <div className="row">
          <div className="col-md-12 mb-4 pb-2">

            <div className="form-outline">
              <input type="file" id="profile" className="form-control form-control-lg" />
              <label className="form-label" >Upload Profile</label>
            </div>

          </div>


        </div>


        <div classNameName="form-group">

          <div classNameName="form-group">
            <input type="checkbox" id="tCheck" />Agree to terms and conditions
          </div>
        </div>

        <div className="mt-4 pt-2">

          <button type="button" className="btn btn-success btn-lg btn-block" onClick={postData}>Register</button>

        </div>

        <p className="forgot-password text-right">
                    Already registered <Link to="/teacher_login">log in?</Link>
                </p>

      </form>

    </>


  );
}