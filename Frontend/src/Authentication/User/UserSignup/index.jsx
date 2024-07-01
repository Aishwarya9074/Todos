import { useState } from "react";
import axios from "../../../utils/axios"
import "./usersign.css";
import { useNavigate } from "react-router-dom";

const UserSignup=()=>{
    const[signup,setSignup]=useState({username:'',email:'',password:'',confirmPassword:''})
    const signnavigate=useNavigate()
    const signChange=(e,key)=>{
        console.log({...signup,[key]:e.target.value})
        setSignup({...signup,[key]:e.target.value})

    }
    const signupClick=async()=>{
        const response=await axios.post('/user/signup',signup)
        signup('/user/login')
        console.log(response.data)
    }
    return <div className="usersign">
        <div className="signup-user">
        <h1>userSignup</h1>
   
       <div className="input-sign">
       <input type="text" placeholder="Username" onChange={(e)=>signChange(e,'username')}  />
       <div className="icon">
       <i class="fa-solid fa-user"></i>
       </div>
       </div>
       
       <div className="input-sign">
       <input type="text" placeholder="email" onChange={(e)=>signChange(e,'email')} />
       <div className="icon">
       <i class="fa-solid fa-envelope"></i>
       </div>
       </div>
      
        <div className="input-sign">
            <input type="password"  placeholder="Password" onChange={(e)=>signChange(e,'password')} />
            <div className="icon">
            <i class="fa-solid fa-lock"></i>

                </div>
                </div>
         
        
       <div className="input-sign">
       <input type="password" placeholder="confirm Password" onChange={(e)=>signChange(e,'confirmPassword')} />
      <div className="icon">
      <i class="fa-solid fa-lock"></i>
      </div>
       </div>
        <button onClick={signupClick}>Signup</button>
        </div>
        
    </div>

}
export default UserSignup;