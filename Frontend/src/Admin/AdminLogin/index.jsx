import { useState } from "react";
import axios from "../../utils/axios"
import "./adminlogin.css";
import { savecreds } from "../../utils";
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";

const AdminLogin=()=>{
    const [admin,setAdmin]=useState({Adminname:'',password:''})
    const tasknavigate=useNavigate()
    const adminChange=(e,key)=>{
        console.log({...admin,[key]:e.target.value})
        setAdmin({...admin,[key]:e.target.value})

    }
    const adminLogin=async ()=>{
        const response=await axios.post('/admin/login',admin)
        savecreds(response.data.token )
        console.log(response.data)
        tasknavigate(`/user`)
    }
    return <div>
        <Navbar/>
        <div className="adminlogin">
        <div className="admin-user">
        <h1>AdminLogin</h1>
       
        <div className="admin-input">
        <input type="text" placeholder="Adminname" onChange={(e)=>adminChange(e,'Adminname')} />
        <div className="icon">
        <i  class="fa-solid fa-user"></i>

        </div>
        </div>
   
       
      <div className="admin-input">
      <input type="password" placeholder="Password" onChange={(e)=>adminChange(e,'password')} />
      <div className="icon">
      <i class="fa-solid fa-lock"></i>

      </div>
      
      </div>
        <button onClick={adminLogin}>login</button>
        </div>
    </div>
    </div>

}

export default AdminLogin;