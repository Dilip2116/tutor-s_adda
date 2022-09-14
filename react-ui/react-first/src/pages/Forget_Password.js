import React from "react";
import { Link, Outlet } from "react-router-dom"






export default function Forget_Password() {
   return (


      
      <div class="main-layout inner_page">




         <form className="form_style">

            <h3 className="textalign">Forget-Password</h3>

            <div className="form-group">
               <label>Email</label>
               <input type="email" className="form-control" placeholder="Enter email" />
            </div>

           





            <button type="submit" className="btn btn-dark btn-lg btn-block">Submit</button>
           
            {/* 
<div class="text-left">
	<button type="button" class="btn btn-primary">Register</button>
</div> */}

         </form>


      </div>

   );
}