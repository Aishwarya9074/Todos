import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './gettasks.css';

const GetTasks = () => {
  const { id } = useParams();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state
  const [error, setError] = useState(null); // Added error state

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`/tasks/users/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setTasks(response.data);
      setLoading(false); // Set loading to false after fetching
    } catch (error) {
      console.error('Error fetching tasks:', error);
      setError('Error fetching tasks');
      setLoading(false); // Set loading to false even if there's an error
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="gettasks">
      <h1>Tasks for User ID: {id}</h1>
      {/* <ul>
        {tasks.length > 0 ? (
          tasks.map(task => (
            <li key={task._id}>
              <h2>{task.title}</h2>
              <p>{task.description}</p>
              <p>Status: {task.status}</p>
            </li>
          ))
        ) : (
          <li>No tasks found for User ID: {id}</li>
        )}
      </ul> */}
    </div>
  );
};

export default GetTasks;
