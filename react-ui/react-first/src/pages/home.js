
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom"
import { SocialIcon } from 'react-social-icons';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import Header from "./Header";
import Student_Login from "./Student_Login";



function Home() {

   const [stat, setsat] = useState(false)
   return (

      <div className="main-layout">

         <div className="loader_bg">
            <div className="loader"><img src="../assets/images/loading.gif" alt="#" /></div>
         </div>

         <header className="full_bg">

            <div className="header">
               <div className="container-fluid">
                  <div className="row">
                     <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                        <div className="full">
                           <div className="center-desk">
                              <div className="logo">
                                 <a href="index.html"><img src="../assets/images/logo.png" alt="#" /></a>
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
                                    <a className="nav-link" href="#index">Home</a>
                                 </li>
                                 <li className="nav-item">
                                    <a className="nav-link" href="#about">About</a>
                                 </li>
                                 
                                 <li className="nav-item">
                                    <a className="nav-link" href="#faq">F.A.Q.</a>
                                 </li>
                                 <li className="nav-item">
                                    <a className="nav-link" href="#contact">Contact</a>
                                 </li>
                                 <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                       Login
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                       <nav>
                                          <Link to="/student_login" className="dropdown-item">Admin</Link>
                                          <Link to="/student_login" className="dropdown-item">Student</Link>
                                          <Link to="/student_login" className="dropdown-item">Teacher</Link>
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



         {/* ----------------Home section ---------------- */}


            <section className="banner_main">
               <div className="container">
                  <div className="banner_po">
                     <div className="row">
                        <div className="col-md-7">
                           <div className="text_box">

                              <span>Online Learning</span>
                              <h1 >Learn Everyday

                              </h1>
                              <hr />
                              <br />

                              <h2> <strong> Learning is to obtain new knowledge that will have a tremendous impact on our
                                 well-being. It is important to learn new skills and techniques as learning allows an individual to be
                                 able to have an intelligent conversation with other people.</strong> </h2>
                              <br />
                              <br />
                              <br />
                              <Link className="read_more" to="/courses" role="button">All Courses</Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </header>



         {/* ----------------About section ---------------- */}

         <div id="about" className="about">
            <div className="container">
               <div className="row">
                  <div className="col-md-6 offset-md-3">
                     <div className="titlepage" >
                        <h2 >About Us</h2>
                        <span>On this global platform, multiple teachers can launch their
                           online courses on any subject, and students can select the
                           courses based on their preferences and reviews of teachers. This
                           platform will help teachers to manage their individual schedules
                           and assist them in managing quizzes. At the end of each course,
                           students can give reviews to the teacher regarding their
                           performance to help other students while selecting courses.

                        </span>
                     </div>
                  </div>
                  <div className="col-md-12">
                     <div className="about_img">
                        <figure><img src="../assets/images/about.jpg" alt="#" /></figure>
                        {/* <a className="read_more" href="Javascript:void(0)"> Read More</a> */}
                     </div>
                  </div>
               </div>
            </div>
         </div>

         

         {/* ----------------contact section ---------------- */}

         <section id="contact">
            <div className="contact">
               <div className="container">
                  <div className="row">
                     <div className="col-md-12">
                        <div className="titlepage">
                           <h2>Contact Us</h2>
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-md-6  padding_right0">
                        <div className="map_main">
                           <div className="map-responsive">
                              {/* <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France" width="600" height="453" frameborder="0" style="border:0; width: 100%;" allowfullscreen=""></iframe> */}
                           </div>
                        </div>
                     </div>
                     <div className="col-md-6 padding_left0">
                        <form id="request" className="main_form">
                           <div className="row">
                              <div className="col-md-12 ">
                                 <input className="contactus" placeholder="Name" type="type" name="Name" />
                              </div>
                              <div className="col-md-12">
                                 <input className="contactus" placeholder="Phone" type="type" name="Phone" />
                              </div>
                              <div className="col-md-12">
                                 <input className="contactus" placeholder="Email" type="type" name="Email" />
                              </div>
                              <div className="col-md-12">
                                 <textarea className="textarea" placeholder="Message" type="type" Message="Message">Message</textarea>
                              </div>
                              <div className="col-md-12">
                                 <button className="send_btn">Send</button>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </section>

        
        
         {/* ----------------FAQ section ---------------- */}


         <section id="faq">
            <div class="container mt-5 mb-5">
               <div class="row">
                  <div class="col-md-12">
                     <div class="card">
                        <div class="card-div d-flex flex-column">
                           <h3 class="font-weight-bold">Frequently Asked Questions</h3>
                           <span class="d-block text-center px-3">If you are new to Q-Answer or looking for answer to your questions. this guide will <br /> help you to learn more about our service and their features.</span>
                        </div>
                        <div class="card-div-2">
                          
                           <div class="px-1 mb-2">
                              <div class="box d-flex justify-content-between align-items-center">
                                 <div>
                                    <i class="fa fa-file"></i>
                                    <span>How to add custom config or css file for post editor?</span>
                                 </div>
                                 <i class="fa fa-plus"></i>
                              </div>
                           </div>
                           <div class="px-1 mb-2">
                              <div class="box d-flex justify-content-between align-items-center">
                                 <div>
                                    <i class="fa fa-file"></i>
                                    <span>How to configure DocSearch in a supported public theme?</span>
                                 </div>
                                 <i class="fa fa-plus"></i>
                              </div>
                           </div>
                           <div class="px-1 mb-2">
                              <div class="box d-flex justify-content-between align-items-center">
                                 <div>
                                    <i class="fa fa-file"></i>
                                    <span>How to implement  GDPR cookies popup support?</span>
                                 </div>
                                 <i class="fa fa-plus"></i>
                              </div>
                           </div>
                           <div class="px-1 mb-2">
                              <div class="box d-flex justify-content-between align-items-center">
                                 <div>
                                    <i class="fa fa-file"></i>
                                    <span>How to add custom config or css file for post editor?</span>
                                 </div>
                                 <i class="fa fa-plus"></i>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>


         <div><center><Outlet></Outlet></center></div>
 
         <footer>
            <div className="footer">
               <div className="container">
                  <div className="row">
                     <div className="col-md-8 offset-md-2">
                        {/* <div className="newslatter">
                           <h4>Subscribe Our Newsletter</h4>
                           <form className="bottom_form">
                              <input className="enter" placeholder="Enter your email" type="text" name="Enter your email" />
                              <button className="sub_btn">subscribe</button>
                           </form>
                        </div> */}
                        <h1>Social links:- </h1> &nbsp;
                     
                        <SocialIcon url="https://www.facebook.com" />&emsp;
                        <SocialIcon url="https://twitter.com/login/" />&emsp;
                        <SocialIcon url="https://www.linkedin.com/login/" />&emsp;
                        <SocialIcon url="https://in.pinterest.com/login/" />&emsp;
                        <SocialIcon url="https://www.instagram.com" /><br/><br/>
                     
                     </div>
                     <div className="col-sm-12">
                        <div className=" border_top1"></div>
                     </div>
                  </div>
                  <br/>
                  <div className="row">
                     <div className="col-md-4">
                        <h3>menu LINKS</h3>
                        <ul class="link_menu">
                           <li><a href="#">Home</a></li>
                           <li><a href="#about"> About</a></li>
                           <li><a href="#faq">F.A.Q.</a></li>
                           <li><a href="#contact">Contact</a></li>
                        </ul>
                     </div>
                     <div className=" col-md-3">
                        <h3>Online Tutition</h3>
                        <p className="many">
                           There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected
                        </p>
                     </div>

                     <div className="col-lg-3 offset-mdlg-2     col-md-4 offset-md-1">
                        <h3>Contact Us</h3>
                        <ul className="conta">
                           <li><i className="fa fa-map-marker" aria-hidden="true"></i> Jaipur</li>
                           <li> <i className="fa fa-envelope" aria-hidden="true"></i><a href="#"> tutoradda@gmail.com</a></li>
                           <li><i className="fa fa-mobile" aria-hidden="true"></i> Call : +01 1234567890</li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="copyright">
                  <div className="container">
                     <div className="row">
                        <div className="col-md-10 offset-md-1">

                           <p>@tutoradda © 2022 All Rights Reserved.</p>
                           
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </footer>


      </div>
   )
}

export default Home;