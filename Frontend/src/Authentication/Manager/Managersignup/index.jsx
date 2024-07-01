import { useState } from "react";
import axios from "../../../utils/axios"
import "./managersign.css";
import Navbar from "../../../Components/Navbar";
import { useNavigate } from "react-router-dom";

const ManagerSignup=()=>{
    const [managersign,setManagersign]=useState({managername:'',email:'',managerPassword:'',confirmPassword:''})
    const signnavigate=useNavigate()
    const signChange=(e,key)=>{
        setManagersign({...managersign,[key]:e.target.value})
        console.log({...managersign,[key]:e.target.value})

    }
    const signupManager=async()=>{
        try{
            const response=await axios.post('/manager/signup',managersign)
            signnavigate('/manager/login')
        console.log(response.data)
        }
        catch(e){
            console.log(e)
        }
    }
    return <div>
        <Navbar/>
        <div className="managersign">
        <div className="manager-sign">
        <h1>ManagerSignup</h1>
    
    <div className="inputs-manager">
    <input type="text" placeholder="Username" onChange={(e)=>signChange(e,'managername')} />
    <div className="icon">
       <i class="fa-solid fa-user"></i>
       </div>
   
    </div>
   <div className="inputs-manager">
   <input type="email" placeholder="email" onChange={(e)=>signChange(e,'email')} />
   <div className="icon">
       <i class="fa-solid fa-envelope"></i>
       </div>
   </div>
    
    <div className="inputs-manager">
    <input type="password" placeholder="Password" onChange={(e)=>signChange(e,'managerPassword')} />
    <div className="icon">
            <i class="fa-solid fa-lock"></i>

                </div>
    </div>
   
   <div className="inputs-manager">
   <input type="password" placeholder="ConfirmPassword" onChange={(e)=>signChange(e,'confirmPassword')} />
   <div className="icon">
      <i class="fa-solid fa-lock"></i>
      </div>
   </div>
    <button onClick={signupManager} >Signup</button>
   
        </div>
      
  

</div>

    </div>
}
export default ManagerSignup;