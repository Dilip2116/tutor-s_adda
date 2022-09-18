import React ,{useState} from "react";
import { Link, Outlet } from "react-router-dom"
import { SocialIcon } from 'react-social-icons';
import Axios from 'axios'





export default function StudentRegistrationForm() {

    
  const [student_fname, setFname] = useState('')
	const [student_gender, setGender] = useState('')
    const [student_lname, setLname] = useState('')
	const [student_mobile, setMobile] = useState('')

    const [student_password, setPassword] = useState('')
    const [rePassword  , setRepass] = useState('')
	const [student_username, setUsername] = useState('')

    const [student_dob, setDob] = useState('')
	const [ student_email, setEmail] = useState('')


    const [city  , setCity] = useState('')
	const [ country, setCountry] = useState('')
    const [pincode, setPin] = useState('')
	const [state, setState] = useState('')
    const [street, setStreet] = useState('')




    const postData = async () => {
      try{
        const res = await Axios.post(`http://localhost:8080/addstudent`,{student_email , student_fname , student_gender , student_lname , student_mobile , student_password , student_username , student_dob,city   , country , pincode , state , street})
        if(res.data !== ""){window.location.href = "/student_login"}
        else{window.location.href = "/student_register"}
        }
        catch (err){
          console.log(err)
        }
     }
    





  return (
    <>

      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
      <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 textalign">Student Registration Form</h3>



      <form className="form_style">

        <div className="row">
          <div className="col-md-6 mb-4">

            <div className="form-outline">
              <input type="text" id="sFname" className="form-control form-control-lg" onChange={(e) => setFname(e.target.value)} required />
              <label className="form-label">First Name</label>
            </div>

          </div>
          <div className="col-md-6 mb-4">

            <div className="form-outline">
              <input type="text" id="sLname" className="form-control form-control-lg" onChange={(e) => setLname(e.target.value)} required/>
              <label className="form-label" >Last Name</label>
            </div>

          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-4 d-flex align-items-center">

            <div className="form-outline datepicker w-100">
              <input type="date" className="form-control form-control-lg" id="sDOB" onChange={(e) => setDob(e.target.value)} required/>
              <label className="form-label">Birthday</label>
            </div>

          </div>
          <div className="col-md-6 mb-4">

            <h6 className="mb-2 pb-1">Gender: </h6>

            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="sFemale"
                value="option1" onChange={(e) => setGender(e.target.value)} required/>
              <label className="form-check-label">Female</label>
            </div>

            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="sMale"
                value="option2" onChange={(e) => setGender(e.target.value)} required/>
              <label className="form-check-label" >Male</label>
            </div>

            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="sOther"
                value="option3" onChange={(e) => setGender(e.target.value)} required />
              <label className="form-check-label" for="otherGender">Other</label>
            </div>

          </div>
        </div>



        <div className="row">
          <div className="col-md-6 mb-4 pb-2">

            <div className="form-outline">
              <input type="email" id="sEmail" className="form-control form-control-lg" onChange={(e) => setEmail(e.target.value)} required />
              <label className="form-label" >Email</label>
            </div>

          </div>


          <div className="col-md-6 mb-4 pb-2">

            <div className="form-outline">
              <input type="tel" id="sPhone" className="form-control form-control-lg" onChange={(e) => setMobile(e.target.value)} required />
              <label className="form-label" >Phone Number</label>
            </div>

          </div>
        </div>



        <div className="row">
          <div className="col-md-12 mb-4 pb-2">

            <div className="form-outline">
              <input type="text" id="sUname" className="form-control form-control-lg" onChange={(e) => setUsername(e.target.value)} required />
              <label className="form-label" >Username</label>
            </div>

          </div>


        </div>





        <div className="row">
          <div className="col-md-6 mb-4 pb-2">

            <div className="form-outline">
              <input type="password" id="sPwd" className="form-control form-control-lg" onChange={(e) => setPassword(e.target.value)} required />
              <label className="form-label" >Password</label>
            </div>

          </div>


          <div className="col-md-6 mb-4 pb-2">

            <div className="form-outline">
              <input type="password" id="sPwd1" className="form-control form-control-lg" onChange={(e) => setRepass(e.target.value)} required />
              <label className="form-label" >Re-Enter Password</label>
            </div>

          </div>
        </div>





        <div className="row">
          <div className="col-md-6 mb-4 pb-2">

            <div className="form-outline">
              <input type="text" id="sStreet" className="form-control form-control-lg" onChange={(e) => setStreet(e.target.value)} required/>
              <label className="form-label" >Street</label>
            </div>

          </div>


          <div className="col-md-6 mb-4 pb-2">

            <div className="form-outline">
              <input type="text" id="sPincode"  className="form-control form-control-lg" onChange={(e) => setPin(e.target.value)} required />
              <label className="form-label" >Pincode</label>
            </div>

          </div>
        </div>



        <div className="row">
          <div className="col-md-4 mb-4 pb-2">

            <div className="form-outline">
              <input type="text" id="sCity" className="form-control form-control-lg" onChange={(e) => setCity(e.target.value)} required/>
              <label className="form-label" >City</label>
            </div>

          </div>


          <div className="col-md-4 mb-4 pb-2">

            <div className="form-outline">
              <input type="text" id="sState" className="form-control form-control-lg" onChange={(e) => setState(e.target.value)} required/>
              <label className="form-label" >State</label>
            </div>

          </div>



          <div className="col-md-4 mb-4 pb-2">

            <div className="form-outline">
              <input type="text" id="sCountry" className="form-control form-control-lg" onChange={(e) => setCountry(e.target.value)} required/>
              <label className="form-label" >Country</label>
            </div>

          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mb-4 pb-2">

            <div className="form-outline">
              <input type="file" id="profile" className="form-control form-control-lg"  />
              <label className="form-label" >Upload Profile</label>
            </div>

          </div>


        </div>



        <div classNameName="form-group">
          <input type="checkbox" id="tCheck" />Agree to terms and conditions
        </div>

        <p className="forgot-password text-right">
                    Already registered <Link to="/teacher_login">log in?</Link>
                </p>




        <div className="mt-4 pt-2">

          <button type="button" className="btn btn-success btn-lg btn-block" onClick={postData}>Register</button>

        </div>

      </form>


    </>


  );
}