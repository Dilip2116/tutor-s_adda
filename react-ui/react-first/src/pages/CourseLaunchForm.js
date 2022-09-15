import React from "react";






export default function CousreLaunchForm(){
    return (
      <>   
              
  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">CourseLaunchForm</h3>
              <form>
  

               
                <div className="row">
                  <div className="col-md-6 mb-4">
  
                    <div className="form-outline">
                      <input type="text" id="cName" className="form-control form-control-lg" required />
                      <label className="form-label">Course Name</label>
                    </div>
  
                  </div>

                 
                  <div className="col-md-6 mb-4">
  
                    <div className="form-outline">
                      <input type="text" id="cCategory" className="form-control form-control-lg" required/>
                      <label className="form-label" >Course Category</label>
                    </div>
  
                  </div>
                </div>


               
                <div className="row">
                    <div className="col-md-6 mb-4">
    
                      <div className="form-outline">
                        <input type="number" id="cDuration" className="form-control form-control-lg" required />
                        <label className="form-label">Course Duration</label>
                      </div>
    
                    </div>


                    
                    <div className="col-md-6 mb-4">
    
                      <div className="form-outline">
                        <input type="number" id="cStrength" className="form-control form-control-lg" required/>
                        <label className="form-label" >Course Strength</label>
                      </div>
    
                    </div>
                  </div>
  

                 
                <div className="row">
                    <div className="col-md-6 mb-4">
    
                      <div className="form-outline">
                        <input type="date" id="cStartDate" className="form-control form-control-lg" required />
                        <label className="form-label">Start Date</label>
                      </div>
    
                    </div>


                   
                    <div className="col-md-6 mb-4">
    
                      <div className="form-outline">
                        <input type="date" id="cEndDate" className="form-control form-control-lg" required/>
                        <label className="form-label" >End Date</label>
                      </div>
    
                    </div>
                  </div>
                

                 

                  
                <div className="row">
                    <div className="col-md-6 mb-4">
    
                      <div className="form-outline">
                        <input type="time" id="cStartTime" className="form-control form-control-lg" required />
                        <label className="form-label">Start Time</label>
                      </div>
    
                    </div>


                   
                    <div className="col-md-6 mb-4">
    
                      <div className="form-outline">
                        <input type="time" id="cEndTime" className="form-control form-control-lg" required/>
                        <label className="form-label" >End Time</label>
                      </div>
    
                    </div>
                  </div>
                
               
                  <div className="row">
                    <div className="col-md-12 mb-4 pb-2">
    
                      <div className="form-group shadow-textarea">
                        <label >About</label>
                        <textarea className="form-control z-depth-1" id="cAbout" rows="3" placeholder="Write about course..." required></textarea>
                      </div>
    
                    </div>
  
                    
                  </div>
  
              

                <div className="mt-4 pt-2">
                  
                  <button type="button" className="btn btn-success btn-lg btn-block">Launch Course</button>

                </div>
  
              </form>
   </>
     

    );
}