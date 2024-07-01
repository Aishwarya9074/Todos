import { useState } from "react";
import axios from "../../../utils/axios";
import { Link } from "react-router-dom";
import "./managerlogin.css";
import Navbar from "../../../Components/Navbar";

const ManagerLogin=()=>{
    const [login,setLogin]=useState({username:'',password:''})
    const loginChange=(e,key)=>{
        console.log({...login,[key]:e.target.value})
        setLogin({...login,[key]:e.target.value})
    }
    const loginClick=async()=>{
        const response=await axios.post('/manager/login',login)
        console.log(response.data)
    }
    return(
        <div>
            <Navbar/>
            <div className="managerlogin">
      <div className="form-manager">
      <h1>ManagerLogin</h1>
       
       <div className="input-manager">
       <input type="text" placeholder="username"  onChange={(e)=>loginChange(e,'username')} />
       <div className="icon">
        <i  class="fa-solid fa-user"></i>
        </div>
       </div>
       
       <div className="input-manager">
       <input type="password" placeholder="Password"  onChange={(e)=>loginChange(e,'password')} />
       <div className="icon">
        <i class="fa-solid fa-lock"></i>
        </div>
       </div>
        <button onClick={loginClick}>login</button>
        <div className="register-link">
            <p>Don't have an account <Link to="/manager/signup">Signup</Link></p>
        </div>
      </div>
    </div>
        </div>
    )

}

export default ManagerLogin;