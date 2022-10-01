import React from "react";
import { Link, Outlet } from "react-router-dom"
import { SocialIcon } from 'react-social-icons';

function FAQ() {
    return (
       <div class="main-layout inner_page">
        
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
            {/* <div class="d-flex align-items-center justify-content-center vh-100">
            <div class="text-center">
                <h1 class="display-1 fw-bold">404</h1>
                <p class="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
                <p class="lead">
                    The page you’re looking for doesn’t exist.
                  </p>
                <a href="index.html" class="btn btn-primary">Go Home</a>
            </div>
        </div> */}
         </section>

      
       </div>
    )
  }
  
  export default FAQ;