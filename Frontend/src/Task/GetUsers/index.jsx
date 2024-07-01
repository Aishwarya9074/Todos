import { useState,useEffect } from "react";
import axios from "../../utils/axios"
import "./getusers.css";
import { savecreds } from "../../utils";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";
const GetUsers=()=>{
    const [getuser,setGetuser]=useState([])
    const gototasks=useNavigate()
    const getTasks=async()=>{
        
        const response=await axios.get('/user')
       
      
        console.log(response.data)
        setGetuser(response.data)
    }
    useEffect(()=>{
        getTasks()
    },[])
    return <div>
        <Navbar/>
        <div className="gettask">
        <h1>GetUsers</h1>
        <ul>
            {getuser.map(user=>(
                <li>
                    <h2 onClick={()=>gototasks(`/admin/tasks/users/${user._id}`)}>{user.username}</h2>
                    <p>{user.email}</p>
                </li>

            ))}
        </ul>
        
    </div>
    <footer className="footer">
          <p>&copy; 2024 EmayamTech. All rights reserved.</p>
        </footer>
    </div>
}
export default GetUsers;