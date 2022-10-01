
import React from "react";
import { Link, Outlet,NavLink  } from "react-router-dom";
import swal from 'sweetalert'


export default function Header(){

return(
  <>
<div className="header">
               <div className="container-fluid">
                  <div className="row">
                     <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                        <div className="full">
                           <div className="center-desk">
                           <div className="logo">
                                 <Link to="/"><img src="../assets/images/logo.png" alt="#" /></Link>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                        <nav className="navigation navbar navbar-expand-md navbar-dark ">
                           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                           </button>
                           <div className="collapse navbar-collapse" id="navbarsExample04">
                              <ul className="navbar-nav mr-auto">
                                 <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home</Link>
                                 </li>
                                 <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                 </li>
                                 
                                 <li className="nav-item">
                                 <Link className="nav-link" to="/faq">FAQ</Link>
                                 </li>
                                 <li className="nav-item">

                                    <Link className="nav-link" to="/contact">Contact</Link>
                                 </li>
                                 <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle glyphicon glyphicon-log-in" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                       Login
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                       <nav>

                                          <Link to="/admin_login" className="dropdown-item">Admin</Link>
                                          <Link to="/student_login" className="dropdown-item">Student</Link>
                                          <Link to="/teacher_login" className="dropdown-item">Teacher</Link>
                                       </nav>
                                    </div>
                                 </li>
                              </ul>
                           </div>
                        </nav>
                     </div>
                  </div>
               </div>
             
            </div>

            
        
       
</>


);
}