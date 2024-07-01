import { useState } from "react";
import axios from "../../../utils/axios";
import { Link } from "react-router-dom";
import "./userlogin.css";
import { useNavigate } from "react-router-dom";
import  { savecreds } from "../../../utils/index"

const UserLogin=()=>{
    
    const [login,setLogin]=useState({username:'',password:''})
    const navigate=useNavigate()
    const loginChange=(e,key)=>{
        console.log({...login,[key]:e.target.value})
        setLogin({...login,[key]:e.target.value})
    }
  
    const loginClick=async()=>{
        const response=await axios.post('/user/login',login)
        savecreds(response.data.token)
        console.log(response.data)
    
        navigate(`/tasks/${localStorage.getItem('id')}`)

    }
    return <div className="userlogin">
        <div className="form-user">
        <h1>UserLogin</h1>
        <div className="input-user">
            
        <input type="text" placeholder="Username"  onChange={(e)=>loginChange(e,'username')} />
        <div className="icon">
        <i  class="fa-solid fa-user"></i>
        </div>
        </div>

        <div className="input-user">
        <input type="password" placeholder="Password"  onChange={(e)=>loginChange(e,'password')} />
        <div className="icon">
        <i class="fa-solid fa-lock"></i>
        </div>
        </div>
        <button onClick={loginClick}>login</button>
        <div className="register-link">
            <p>Don't have an account <Link to="/user/signup">Signup</Link></p>
        </div>
        </div>
    </div>

}

export default UserLogin;