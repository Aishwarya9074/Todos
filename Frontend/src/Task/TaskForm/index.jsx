import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import "./taskform.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";

const TaskForm = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const id = localStorage.getItem("id");
        const token = localStorage.getItem("token");
        const response = await axios.get(`/tasks/list/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTasks(response.data);
        console.log(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchTasks();
  }, []);

  const dltTask = async (taskId) => {
    await axios.delete(`/tasks/${taskId}`);
    setTasks(tasks.filter(task => task._id !== taskId));
  }

  return (
    <div>
      <Navbar />
      <div className="main-task">
        <div className="task-forms">
          <h1>Task List</h1>

          {error && <p>Error: {error}</p>}

          <ul>
            {tasks.map(task => (
              <li key={task._id}>
                <strong>Title:</strong> {task.title}
                <strong>Description:</strong>
                <p>{task.description}</p>
                <span className={`status ${task.status.replace(' ', '-')}`}>{task.status}</span>
                <button className="delete-button" onClick={() => dltTask(task._id)}>Delete</button>
              </li>
            ))}
          </ul>
          <div className="btn">
            <button onClick={() => navigate(`/tasks/task/${localStorage.getItem("id")}`)}>Taskform</button>
          </div>
        </div>
        <footer className="footer">
          <p>&copy; 2024 EmayamTech. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default TaskForm;
