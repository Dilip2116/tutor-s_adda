import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute(props){

    const {Component2} = props
    let navigate = useNavigate();

    useEffect(()=>{
        let teacherLoggedIn = localStorage.getItem('teacherUsername')
        if(teacherLoggedIn === null)
        {
            navigate('/teacher_login')
        }
    })
    
    return(
        <div>
            <Component2/>
        </div>
    )
}