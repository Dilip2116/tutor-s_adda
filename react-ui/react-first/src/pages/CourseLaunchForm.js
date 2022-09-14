import React from "react";
import { Link, Outlet } from "react-router-dom"
import { SocialIcon } from 'react-social-icons';





export default function CousreLaunchForm(){
    return (
      <>   
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>        
  <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">CourseLaunchForm</h3>
              <form>
  

               
                <div class="row">
                  <div class="col-md-6 mb-4">
  
                    <div class="form-outline">
                      <input type="text" id="cName" class="form-control form-control-lg" required />
                      <label class="form-label">Course Name</label>
                    </div>
  
                  </div>

                 
                  <div class="col-md-6 mb-4">
  
                    <div class="form-outline">
                      <input type="text" id="cCategory" class="form-control form-control-lg" required/>
                      <label class="form-label" >Course Category</label>
                    </div>
  
                  </div>
                </div>


               
                <div class="row">
                    <div class="col-md-6 mb-4">
    
                      <div class="form-outline">
                        <input type="number" id="cDuration" class="form-control form-control-lg" required />
                        <label class="form-label">Course Duration</label>
                      </div>
    
                    </div>


                    
                    <div class="col-md-6 mb-4">
    
                      <div class="form-outline">
                        <input type="number" id="cStrength" class="form-control form-control-lg" required/>
                        <label class="form-label" >Course Strength</label>
                      </div>
    
                    </div>
                  </div>
  

                 
                <div class="row">
                    <div class="col-md-6 mb-4">
    
                      <div class="form-outline">
                        <input type="date" id="cStartDate" class="form-control form-control-lg" required />
                        <label class="form-label">Start Date</label>
                      </div>
    
                    </div>


                   
                    <div class="col-md-6 mb-4">
    
                      <div class="form-outline">
                        <input type="date" id="cEndDate" class="form-control form-control-lg" required/>
                        <label class="form-label" >End Date</label>
                      </div>
    
                    </div>
                  </div>
                

                 

                  
                <div class="row">
                    <div class="col-md-6 mb-4">
    
                      <div class="form-outline">
                        <input type="time" id="cStartTime" class="form-control form-control-lg" required />
                        <label class="form-label">Start Time</label>
                      </div>
    
                    </div>


                   
                    <div class="col-md-6 mb-4">
    
                      <div class="form-outline">
                        <input type="time" id="cEndTime" class="form-control form-control-lg" required/>
                        <label class="form-label" >End Time</label>
                      </div>
    
                    </div>
                  </div>
                
               
                  <div class="row">
                    <div class="col-md-12 mb-4 pb-2">
    
                      <div class="form-group shadow-textarea">
                        <label >About</label>
                        <textarea class="form-control z-depth-1" id="cAbout" rows="3" placeholder="Write about course..." required></textarea>
                      </div>
    
                    </div>
  
                    
                  </div>
  
              

                <div class="mt-4 pt-2">
                  
                  <button type="button" class="btn btn-success btn-lg btn-block">Launch Course</button>

                </div>
  
              </form>
   </>
     

    );
}