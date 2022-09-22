import React from "react";
import { Link, Outlet } from "react-router-dom"
import { SocialIcon } from 'react-social-icons';





export default function ForgotPassword(){
    return (
      <>   

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
 <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
 {/* <script src="//code.jquery.com/jquery-1.11.1.min.js"></script> */}



 <center>
 <div class="form-gap"></div>
<div class="container">
	<div class="row">
		<div class="col-md-4 col-md-offset-4">
            <div class="panel panel-default">
              <div class="panel-body">
                <div class="text-center">
                  <h3><i class="fa fa-lock fa-4x"></i></h3>
                  <h2 class="text-center">Forgot Password?</h2>
                  <p>You can reset your password here.</p>
                  <div class="panel-body">
    
                    <form id="register-form" role="form" autocomplete="off" class="form" >
    
                      <div class="form-group">
                        <div class="input-group">
                          <span class="input-group-addon"><i class="glyphicon glyphicon-envelope color-blue"></i></span>
                        Email:  <input id="email" name="email" placeholder="email address" class="form-control"  type="email" />
                        </div>
                      </div>

                      {/* <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                 <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                 </div> */}

             {/* <div class="form-group">
                  <label for="exampleInputPassword1">Re-enter Password:</label>
                 <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                 </div> */}
                 <br />
                      <div class="form-group">
                        <input name="recover-submit" class="btn btn-lg btn-primary btn-block" value="Reset Password" type="submit" />
                      </div>
                      
                      <input type="hidden" class="hide" name="token" /> 
                    </form>
    
                  </div>
                </div>
              </div>
            </div>
          </div>
	</div>
</div>

</center>
            
   </>
     

    );
}