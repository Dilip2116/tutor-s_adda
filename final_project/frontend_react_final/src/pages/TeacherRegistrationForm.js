import React,{useState} from "react";
import { Link} from "react-router-dom"
import  Axios  from "axios";
import { useForm } from "react-hook-form"



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
const [country, setCountry] = useState('')
const [pincode, setPin] = useState('')
const [state, setState] = useState('')
const [street, setStreet] = useState('')
const [rePassword,setRepass] = useState('')

 //form validation ......
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);


  const { register } = useForm();
 const formValues = {
    teacher_fname: teacher_fname, teacher_email: teacher_email,
    teacher_gender: teacher_gender, teacher_lname: teacher_lname,
    teacher_mobile: teacher_mobile, teacher_about : teacher_about,
    teacher_experience:teacher_experience, teacher_qualification:teacher_qualification,
    city: city, state: state, street: street, pincode: pincode,
    teacher_username: teacher_username, teacher_password: teacher_password,
    country: country, rePassword: rePassword
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    const passregex = /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$ %^&*-]).{8,15}/;

    if (!values.teacher_username) {
      errors.teacher_username = "Username is required!";
    }
    if (!values.teacher_fname) {
      errors.teacher_fname = "First name is required!";
    }
    if (!values.teacher_lname) {
      errors.teacher_lname = "Last name is required!";
    }
    if (!values.teacher_gender) {
      errors.teacher_gender = "gender is required!";
    }
    if (!values.teacher_mobile) {
      errors.teacher_mobile = "Mobile  is required!";
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
    if (!values.teacher_about) {
      errors.teacher_about = "About is required!";
    }
    if (!values.teacher_experience) {
      errors.teacher_experience = "Experience is required!";
    }
    if (!values.teacher_qualification) {
      errors.teacher_qualification = "Qualification is required!";
    }

    if (!values.teacher_email) {
      errors.teacher_email = "Email is required!";
    } else if (!regex.test(values.teacher_email)) {
      errors.teacher_email = "This is not a valid email format!";
    }

    if (!values.teacher_password) {
      errors.teacher_password = "password is required!";
    } else if (!passregex.test(values.teacher_password)) {
      errors.teacher_password = "This is not a valid password At least one upper case English letter,lower case English letter,one digit ,one special character,Minimum eight in length";
    }
    if(values.teacher_password!=values.rePassword)
    {    
      errors.rePassword="Password and Confirm Password fields must be same";
    }

    return errors;
  };


const address={city, country, pincode, state, street}

const teacher={teacher_about, teacher_email, teacher_experience, teacher_gender, teacher_fname, teacher_lname, teacher_mobile, teacher_password, teacher_qualification, teacher_username, address}


 const postData = async (e) => {
  e.preventDefault();
  setFormErrors(validate(formValues)); 
  console.log("Errors : ",formErrors)
  setIsSubmit(true);
  console.log("Submit : ",isSubmit)
  
  if( Object.keys(formErrors).length === 0 && isSubmit )
    {
  try{
   
    const res = await Axios.post(`http://localhost:8080/addteacher`,{teacher_about, teacher_email, teacher_experience, teacher_gender, teacher_fname, teacher_lname, teacher_mobile, teacher_password, teacher_qualification, teacher_username, address})
    console.log(res)
    if(res.data==true){
      alert("Successfully registered");
      window.location.href = "/teacher_login"}
    else{
      alert("duplicate registration check details!!!")
      window.location.href = "/teacher_register"}
    
    }
    catch (err){
      console.log(err)
    }
  }
}


  return (
  
      <>
      <title>Teacher Registration</title>

      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>


      <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 textalign">Teacher Registration Form</h3>
      <form className="form_style" encType="multipart/form-data">

        <div className="row">
          <div className="col-md-6 mb-4">

            <div className="form-outline">
              <input type="text" id="tFname" className="form-control form-control-lg" onChange={(e) => setFname(e.target.value)} required />
              <label className="form-label">First Name</label>
            </div>
            <p style={{'color':'red'}}>{formErrors.teacher_fname}</p>


          </div>
          <div className="col-md-6 mb-4">

            <div className="form-outline">
              <input type="text" id="tLname" className="form-control form-control-lg" onChange={(e) => setLname(e.target.value)} required />
              <label className="form-label" >Last Name</label>
            </div>
            <p style={{'color':'red'}}>{formErrors.teacher_lname}</p>


          </div>
        </div>

         <div className="row">
          <div className="col-md-6 mb-4">

            <h6 className="mb-2 pb-1">Gender: </h6>

            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="tFemale"
                value="female" onChange={(e) => setGender(e.target.value)}/>
              <label className="form-check-label">Female</label>
            </div>

            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="tMale"
                value="male" onChange={(e) => setGender(e.target.value)}/>
              <label className="form-check-label" >Male</label>
            </div>

            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="tOther"
                value="other" onChange={(e) => setGender(e.target.value)}/>
              <label className="form-check-label" for="otherGender">Other</label>
            </div>

          </div>
        </div>
        <p style={{'color':'red'}}>{formErrors.teacher_gender}</p>


        <div className="row">
          <div className="col-md-6 mb-4 pb-2">

            <div className="form-outline">
              <input type="email" id="tEmail" className="form-control form-control-lg" onChange={(e) => setEmail(e.target.value)} required />
              <label className="form-label" >Email</label>
            </div>
            <p style={{'color':'red'}}>{formErrors.teacher_email}</p>

          </div>


          <div className="col-md-6 mb-4 pb-2">

            <div className="form-outline">
              <input type="tel" id="tPhone" className="form-control form-control-lg" onChange={(e) => setMobile(e.target.value)} required />
              <label className="form-label" >Phone Number</label>
            </div>
            <p style={{'color':'red'}}>{formErrors.teacher_mobile}</p>


          </div>
        </div>



        <div className="row">
          <div className="col-md-12 mb-4 pb-2">

            <div className="form-outline">
              <input type="text" id="tUname" className="form-control form-control-lg" onChange={(e) => setUsername(e.target.value)} required />
              <label className="form-label" >Username</label>
            </div>
            <p style={{'color':'red'}}>{formErrors.teacher_username}</p>


          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-4 pb-2">

            <div className="form-outline">
              <input type="password" id="tPwd" className="form-control form-control-lg" onChange={(e) => setPassword(e.target.value)}  required />
              <label className="form-label" >Password</label>
            </div>
            <p style={{'color':'red'}}>{formErrors.teacher_password}</p>


          </div>


          <div className="col-md-6 mb-4 pb-2">

            <div className="form-outline">
              <input type="password" id="tPwd1" className="form-control form-control-lg" onChange={(e) => setRepass(e.target.value)} required />
              <label className="form-label" >Re-Enter Password</label>
            </div>
            <p style={{'color':'red'}}>{formErrors.rePassword}</p>


          </div>
        </div>



        <div className="row">
          <div className="col-md-6 mb-4 pb-2">

            <div className="form-outline">
              <input type="text" id="tStreet" className="form-control form-control-lg" onChange={(e) => setStreet(e.target.value)} required />
              <label className="form-label" >Street</label>
            </div>
            <p style={{'color':'red'}}>{formErrors.street}</p>


          </div>


          <div className="col-md-6 mb-4 pb-2">

            <div className="form-outline">
              <input type="text" id="tPincode" className="form-control form-control-lg" onChange={(e) => setPin(e.target.value)} required />
              <label className="form-label" >Pincode</label>
            </div>
            <p style={{'color':'red'}}>{formErrors.pincode}</p>


          </div>
        </div>

        <div className="row">
          <div className="col-md-4 mb-4 pb-2">

            <div className="form-outline">
              <input type="text" id="tCity" className="form-control form-control-lg" onChange={(e) => setCity(e.target.value)} required />
              <label className="form-label" >City</label>
            </div>
            <p style={{'color':'red'}}>{formErrors.city}</p>


          </div>

          <div className="col-md-4 mb-4 pb-2">

            <div className="form-outline">
              <input type="text" id="tState" className="form-control form-control-lg" onChange={(e) => setState(e.target.value)} required />
              <label className="form-label" >State</label>
            </div>
            <p style={{'color':'red'}}>{formErrors.state}</p>


          </div>

          <div className="col-md-4 mb-4 pb-2">

            <div className="form-outline">
              <input type="text" id="tCountry" className="form-control form-control-lg" onChange={(e) => setCountry(e.target.value)} required />
              <label className="form-label" >Country</label>
            </div>
            <p style={{'color':'red'}}>{formErrors.country}</p>


          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-4 pb-2">

            <div className="form-outline">
              <input type="text" id="tQualification" className="form-control form-control-lg" onChange={(e) => setQualification(e.target.value)} required />
              <label className="form-label" >Qualification</label>
            </div>
            <p style={{'color':'red'}}>{formErrors.teacher_qualification}</p>


          </div>

          <div className="col-md-6 mb-4 pb-2">

            <div className="form-outline">
              <input type="number" id="tExp" className="form-control form-control-lg" onChange={(e) => setExperience(e.target.value)} required />
              <label className="form-label" >Experience</label>
            </div>
            <p style={{'color':'red'}}>{formErrors.teacher_experience}</p>


          </div>
        </div>

        <div className="row">
          <div className="col-md-12 mb-4 pb-2">

            <div className="form-group shadow-textarea">
              <label >About</label>
              <textarea className="form-control z-depth-1" id="tAbout" rows="3" placeholder="Write something here..." onChange={(e) => setAbout(e.target.value)} required></textarea>
            </div>
            <p style={{'color':'red'}}>{formErrors.teacher_about}</p>


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