import { useState,useEffect } from "react";
import axios from "../../utils/axios";
import DatePicker  from 'react-datepicker';
import "./createtask.css";
import Navbar from "../../Components/Navbar";
const CreateTask=()=>{
    const [task, setTask] = useState({
        title: "",
        description: "",
        status: "pending", // Default status
        dueDate: new Date(), // Initialize with current date
      });
    
       // Correct hook usage
    
      useEffect(() => {
        const currentDate = new Date();
        setTask((prevTask) => ({
          ...prevTask,
          dueDate: currentDate,
        }));
      }, []);
    
      const taskChange = (e, key) => {
        if (key === "dueDate") {
          setTask({ ...task, [key]: e });
        } else {
          setTask({ ...task, [key]: e.target.value });
        }
      };
    
      const taskSubmit = async () => {
        try {
          const id = localStorage.getItem("id");
          const token = localStorage.getItem("token");
    
          const response = await axios.post(
            `/tasks/task/${id}`,
            task,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
    
          console.log(response.data);
        } catch (e) {
          console.log(e);
        }
      };
    
     
    
      return (
       <div>
        <Navbar/>
        <div className="form-tasks">
          <div className="task-form">
            <h1>Task Form</h1>
    
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={task.title}
              onChange={(e) => taskChange(e, "title")}
            />
    
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              value={task.description}
              onChange={(e) => taskChange(e, "description")}
            />
    
            <label htmlFor="status">Status:</label>
            <select
              id="status"
              value={task.status}
              onChange={(e) => taskChange(e, "status")}
            >
              <option value="pending">Pending</option>
              <option value="in progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
    
            <label htmlFor="dueDate">Due Date:</label>
            <DatePicker
              selected={task.dueDate}
              onChange={(date) => taskChange(date, "dueDate")}
              dateFormat="yyyy-MM-dd"
            />
    
            <button onClick={taskSubmit}>Submit</button>
            {/* <button onClick={navigateToTaskList}>Tasklist</button> */}
          </div>
        </div>
       </div>
      );
    }


export default CreateTask;