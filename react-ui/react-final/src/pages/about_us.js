import React from "react";
import AddNew from "./UploadImage";



function AboutUs() {
    return (
       <div className="main-layout inner_page">
        
          {/* <div className="loader_bg">
             <div className="loader"><img src="assets/images/loading.gif" alt="#"/></div>
          </div> */}
        
        
          
          
          <div id="about" className="about">
            <div className="container">
               <div className="row">
                  <div className="col-md-6 offset-md-3">
                     <div className="titlepage" >
                        <h2 >About Us</h2>
                        <br/>
                        <br/>
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
          
         
         
         
       
       </div>
)
  }
  
  export default AboutUs;