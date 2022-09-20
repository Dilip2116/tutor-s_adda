import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ShowRating from './ShowRating';
import TeacherRating from './TeacherRating';

import Q1 from './Q1';
import Q2 from './Q2';
import Q3 from './Q3';
import Q4 from './Q4';
import Q5 from './Q5';



function App() {

  const [r1, setr1] = useState(0);
  const star1 = (rating) => {
    setr1(rating + 1);
  };

  const [r2, setr2] = useState(0);
  const star2 = (rating) => {
    setr2(rating + 1);
  };

  const [r3, setr3] = useState(0);
  const star3 = (rating) => {
    setr3(rating + 1);
  };

  const [r4, setr4] = useState(0);
  const star4 = (rating) => {
    setr4(rating + 1);
  };

  const [r5, setr5] = useState(0);
  const star5 = (rating) => {
    setr5(rating + 1);
  };

  return (
    <div>
      <div className="container , center" ><h1 className='heading'>
        Feedback Form
      </h1>
        <table className='table'><tr><td><i class="bi bi-star-fill"></i></td></tr>
          <tr><td>1) Overall rating for teacher:</td><td> <Q1 rfun1={star1} /></td></tr>
          <tr><td>2) Explanations by instructor were:</td><td>  <Q2 rfun2={star2} /></td></tr>
          <tr><td>3) Answers to student questions were:</td><td> <Q3 rfun3={star3} /></td></tr>
          <tr><td>4) Relavence of course content was:</td><td> <Q4 rfun4={star4} /></td></tr>
          <tr><td>5) Availability of extra help when needed was:</td><td> <Q5 rfun5={star5} /></td></tr>



        </table><br />
        
        
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}>

          <button className='button1' >Submit</button>
        </div>
      </div>
      <i class="bi bi-1-circle"></i>
      <h1>new value={r1}</h1>
      <h1>new value={r2}</h1>
      <h1>new value={r3}</h1>
      <h1>new value={r4}</h1>
      <h1>new value={r5}</h1>
      <ShowRating/>
      <TeacherRating/>

    </div>
  );
}

export default App;

