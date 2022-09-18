
import { SocialIcon } from 'react-social-icons';
import React from "react";
import { Link  } from "react-router-dom";



export default function BottomBar(){

return(
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
                   <li><a href="/">Home</a></li>
                   <li><Link to="/about"> About</Link></li>
                   <li><Link to="/faq">F.A.Q.</Link></li>
                   <li><Link to="/contact">Contact</Link></li>
                </ul>
             </div>
             <div className=" col-md-3">
                <h3>Online Tutition</h3>
                <p className="many">
                Online tution classes are convenient for both student and tutor. In today’s tech-savvy era online tuitions have proved to be more easy and flexible
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
);
}