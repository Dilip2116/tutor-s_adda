import React ,{useState} from "react";
import { Link, Outlet } from "react-router-dom"
import { SocialIcon } from 'react-social-icons';
import Axios from 'axios'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useForm } from "react-hook-form"






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


    const address={city, country, pincode, state, street}



   
    
      
  //form validation ......
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const { register } = useForm();


  const formValues={student_fname:student_fname,student_email:student_email,
    student_gender:student_gender,student_lname:student_lname,
    student_mobile:student_mobile,student_dob:student_dob,
    city:city,state:state,street:street,pincode:pincode,  
    student_username: student_username ,student_password: student_password,
  country: country,rePassword: rePassword};

  const validate = (values) => {
    const errors = {};
     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    const passregex = /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$ %^&*-]).{8,15}/;
  
    if (!values.student_username) {
      errors.student_username = "Username is required!";
    }
    if (!values.student_fname) {
      errors.student_fname = "First name is required!";
    }
    if (!values.student_lname) {
      errors.student_lname = "Last name is required!";
    }
    if (!values.student_gender) {
      errors.student_gender = "gender is required!";
    }
    if (!values.student_dob) {
      errors.student_dob = "Date of birth is required!";
    }
    if (!values.student_mobile) {
      errors.student_mobile = "Mobile  is required!";
    }
    if (!values.city) {
      errors.city = "City is required!";
    }
    if (!values.country) {
      errors.country = "Country is required!";
    }
    if (!values.pincode) {
      errors.pincode = "Pincode is required!";
    }
    if (!values.state) {
      errors.state = "State is required!";
    }
    if (!values.rePassword) {
      errors.rePassword = "Confirm Password is required!";
    }
    if (!values.street) {
      errors.street = "street is required!";
    }
  
     if (!values.student_email) {
       errors.student_email = "Email is required!";
     } else if (!regex.test(values.student_email)) {
       errors.student_email = "This is not a valid email format!";
     }

     if (!values.student_password) {
      errors.student_password = "password is required!";
    } else if (!passregex.test(values.student_password)) {
      errors.student_password = "This is not a valid password At least one upper case English letter,lower case English letter,one digit ,one special character,Minimum eight in length";
    }
    if(values.student_password!=values.rePassword)
    {
      
      errors.rePassword="Password and Confirm Password fields must be same";
    }
   
    return errors;
  };


  const postData = async (e) => {
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    console.log('Please select');
    if(Object.keys(formErrors).length === 0 && isSubmit ){
      console.log('Please select');
      try{
      const res = await Axios.post(`http://localhost:8080/addstudent`,{student_email , student_fname , student_gender , student_lname , student_mobile , student_password , student_username , student_dob,address})
      if(res.data == true){
        alert("Successfully registered");
        window.location.href = "/student_login"}
      else{
        alert("duplicate registration check details!!!")
        window.location.href = "/student_register"}
      }
      catch (err){
        console.log(err)
      }
    }
   }


  return (
    <>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>

      {/* {(Object.keys(formErrors).length === 0 && isSubmit )? 
      (<div className="alert alert-success " role="alert"><div className="center"><strong>Successfully Registered!!</strong></div></div>
          )    : */}
      

      (



      <form className="form_style">
      <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 textalign">Student Registration Form</h3>

      
        <div className="row">
          <div className="col-md-6 mb-4">

            <div className="form-outline">
              <input type="text" id="sFname" className="form-control form-control-lg" onChange={(e) => setFname(e.target.value)} required />
              <label className="form-label">First Name</label>
            </div>
            <p style={{'color':'red'}}>{formErrors.student_fname}</p>


          </div>
          <div className="col-md-6 mb-4">

            <div className="form-outline">
              <input type="text" id="sLname" className="form-control form-control-lg" onChange={(e) => setLname(e.target.value)} required/>
              <label className="form-label" >Last Name</label>
            </div>
            <p style={{'color':'red'}}>{formErrors.student_lname}</p>


          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-4 d-flex align-items-center">

            <div className="form-outline datepicker w-100">
              <input type="date" className="form-control form-control-lg" id="sDOB" onChange={(e) => setDob(e.target.value)} required/>
              <label className="form-label">Birthday</label>
            </div>
            <p style={{'color':'red'}}>{formErrors.student_dob}</p>


          </div>
          <div className="col-md-6 mb-4">

            <h6 className="mb-2 pb-1">Gender: </h6>

            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="sFemale"
                value="female" onChange={(e) => setGender(e.target.value)} required/>
              <label className="form-check-label">Female</label>
            </div>


            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="sMale"
                value="male" onChange={(e) => setGender(e.target.value)} required/>
              <label className="form-check-label" >Male</label>
            </div>

            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="sOther"
                value="option3" onChange={(e) => setGender(e.target.value)} required />
              <label className="form-check-label" for="otherGender">Other</label>
            </div>

          </div>
          <p style={{'color':'red'}}>{formErrors.student_gender}</p>

        </div>



        <div className="row">
          <div className="col-md-6 mb-4 pb-2">

            <div className="form-outline">
              <input type="email" id="sEmail" className="form-control form-control-lg" onChange={(e) => setEmail(e.target.value)} required />
              <label className="form-label" >Email</label>
            </div>
            <p style={{'color':'red'}}>{formErrors.student_email}</p>


          </div>


          <div className="col-md-6 mb-4 pb-2">

            <div className="form-outline">
              <input type="tel" id="sPhone" className="form-control form-control-lg" onChange={(e) => setMobile(e.target.value)} required />
              <label className="form-label" >Phone Number</label>
            </div>
            <p style={{'color':'red'}}>{formErrors.student_mobile}</p>


          </div>
        </div>



        <div className="row">
          <div className="col-md-12 mb-4 pb-2">

            <div className="form-outline">
              <input type="text" id="sUname" className="form-control form-control-lg" onChange={(e) => setUsername(e.target.value)} required />
              <label className="form-label" >Username</label>
            </div>
            <p style={{'color':'red'}}>{formErrors.student_username}</p>


          </div>


        </div>





        <div className="row">
          <div className="col-md-6 mb-4 pb-2">

            <div className="form-outline">
              <input type="password" id="sPwd" className="form-control form-control-lg" onChange={(e) => setPassword(e.target.value)} required />
              <label className="form-label" >Password</label>
            </div>
            <p style={{'color':'red'}}>{formErrors.student_password}</p>


          </div>


          <div className="col-md-6 mb-4 pb-2">

            <div className="form-outline">
              <input type="password" id="sPwd1" className="form-control form-control-lg" onChange={(e) => setRepass(e.target.value)} required />
              <label className="form-label" >Re-Enter Password</label>
            </div>
            <p style={{'color':'red'}}>{formErrors.rePassword}</p>


          </div>
        </div>





        <div className="row">
          <div className="col-md-6 mb-4 pb-2">

            <div className="form-outline">
              <input type="text" id="sStreet" className="form-control form-control-lg" onChange={(e) => setStreet(e.target.value)} required/>
              <label className="form-label" >Street</label>
            </div>
            <p style={{'color':'red'}}>{formErrors.street}</p>


          </div>


          <div className="col-md-6 mb-4 pb-2">

            <div className="form-outline">
              <input type="text" id="sPincode"  className="form-control form-control-lg" onChange={(e) => setPin(e.target.value)} required />
              <label className="form-label" >Pincode</label>
            </div>
            <p style={{'color':'red'}}>{formErrors.pincode}</p>


          </div>
        </div>



        <div className="row">
          <div className="col-md-4 mb-4 pb-2">

            <div className="form-outline">
              <input type="text" id="sCity" className="form-control form-control-lg" onChange={(e) => setCity(e.target.value)} required/>
              <label className="form-label" >City</label>
            </div>
            <p style={{'color':'red'}}>{formErrors.city}</p>


          </div>


          <div className="col-md-4 mb-4 pb-2">

            <div className="form-outline">
              <input type="text" id="sState" className="form-control form-control-lg" onChange={(e) => setState(e.target.value)} required/>
              <label className="form-label" >State</label>
            </div>
            <p style={{'color':'red'}}>{formErrors.state}</p>
          </div>



          <div className="col-md-4 mb-4 pb-2">

            <div className="form-outline">
              <input type="text" id="sCountry" className="form-control form-control-lg" onChange={(e) => setCountry(e.target.value)} required/>
              <label className="form-label" >Country</label>
            </div>
            <p style={{'color':'red'}}>{formErrors.country}</p>


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
                    Already registered <Link to="/student_login">log in?</Link>
                </p>




        <div className="mt-4 pt-2">

          <button type="button" className="btn btn-success btn-lg btn-block" onClick={postData}>Register</button>

        </div>

      </form>
      )


    </>
      


  );
}