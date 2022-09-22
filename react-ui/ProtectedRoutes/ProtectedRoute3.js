import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute(props){

    const {Component3} = props
    let navigate = useNavigate();

    useEffect(()=>{
        let studentLoggedIn = localStorage.getItem('studentUsername')
       
        if(studentLoggedIn === null)
        {
            navigate('/student_login')
        }
    })
    
    return(
        <div>
            <Component3/>
        </div>
    )
}