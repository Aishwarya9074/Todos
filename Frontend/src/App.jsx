import {Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
// import GetTasks from "./Task/GetTasks/index"
import "./App.css";
import UserLogin from './Authentication/User/UserLogin';
import UserSignup from './Authentication/User/UserSignup';
import ManagerLogin from './Authentication/Manager/ManagerLogin';
import ManagerSignup from "./Authentication/Manager/Managersignup"
import AdminLogin from './Admin/AdminLogin';
import TaskForm from './Task/TaskForm';
import GetUsers from './Task/GetUsers';
import GetTasks from './Task/GetTasks';
import CreateTask from './Task/CreateTask';


const App=()=>{
    return <div className="app">
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/user/login' element={<UserLogin/>} />
        <Route path='/user/signup' element={<UserSignup/>} />
        <Route path='/manager/login' element={<ManagerLogin/>} />
        <Route path='/manager/signup' element={<ManagerSignup/>} />
        <Route path='/admin/login' element={<AdminLogin/>} />
        <Route path='/tasks/:id' element={<TaskForm/>} />
        <Route path='/user' element={<GetUsers/>} />
        <Route path='/admin/tasks/users/:id' element={<GetTasks/>} />
        <Route path='/admin/tasks/users/:id' element={<GetTasks/>} />
        <Route path='/tasks/task/:id' element={<CreateTask/>} />
       




        











    </Routes>

</div>

}

export default App;