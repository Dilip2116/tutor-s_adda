import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute(props){

    const {Component} = props
    let navigate = useNavigate();

    useEffect(()=>{
        let adminloggedIn = localStorage.getItem('adminUsername')

        if(adminloggedIn === null)
        {
            navigate('/admin_login')
        }
    })
    
    return(
        <div>
            <Component/>
        </div>
    )
}