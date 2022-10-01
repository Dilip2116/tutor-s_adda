import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"

export default function Logout() {
   
    let navigate = useNavigate()
    
    useEffect(()=>{
       localStorage.removeItem("username");
        navigate("/");
    
    },[])
    
    
    
  }