
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom"
import { SocialIcon } from 'react-social-icons';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import Header from "./Header";

import BottomBar from "./BottomBar";
import Gallery from "./gallery";
import UploadImage from "./UploadImage";



function Home2() {

   const [stat, setsat] = useState(false)
   return (

      <div className="main-layout">
{/* 
         <div className="loader_bg">
            <div className="loader"><img src="../assets/images/loading.gif" alt="#" /></div>
         </div> */}

         

         

         {/* ----------------Home section ---------------- */}


           
        
         <section className="banner_main full_bg">
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
                              <Link className="read_more" to="/course" role="button">All Courses</Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <Gallery/>
            <UploadImage/>

            

     
      
      </div>
   )
}

export default Home2;