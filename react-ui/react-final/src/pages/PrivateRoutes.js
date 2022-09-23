import React from 'react';






// const PrivateRoute = ({component: Component, ...rest}) => {

//     const isLogin = () => {
//         if (localStorage.getItem("studentUsername")) {
//             return true;
//         }
//         if (localStorage.getItem("adminUsername")) {
//             return true;
//         }
//         if (localStorage.getItem("teacherUsername")) {
//             return true;
//         }
    
//         return false;
//     }
//     return (


//         <Routes>

       
//         <Route {...rest} 
//             render={props => (
//             isLogin() ?
//                 <Component {...props} />
//             : <Navigate to="/student_login" />
//         )} />
//         <Route {...rest} render={props => (
//             isLogin() ?
//                 <Component {...props} />
//             :  <Navigate to="/teacher_login" />
//         )} />
//         <Route {...rest} render={props => (
//             isLogin() ?
//                 <Component {...props} />
//             :  <Navigate to="/admin_login" />
//         )} />

//         </Routes>
//     );
// };

// export default PrivateRoute;


import { Navigate, Outlet } from 'react-router-dom'
const PrivateRoutes = () => {
   let auth = {'token1':false,'token2':false,'token3':false}

    const studentUsername= localStorage.getItem("studentUsername")
               
    const adminUsername= localStorage.getItem("adminUsername")
    
    const teacherUsername=localStorage.getItem("teacherUsername")

    if(studentUsername!="") auth.token1=true;
    if(adminUsername!="") auth.token2=true;
    if(teacherUsername!="") auth.token3=true;
             

return (
    <div>
    auth.token1 ? <Outlet/> : <Navigate to='/student_login'/>
    auth.token2 ? <Outlet/> : <Navigate to='/admin_login'/>
    auth.token3 ? <Outlet/> : <Navigate to='/teacher_login'/>
    </div>
  )
}
export default PrivateRoutes;