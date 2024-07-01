import Navbar from "../../Components/Navbar";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className="home-page">
         <section className="intro">
           
               <h1>Welcome to Your Task Manager</h1>
            <p>Manage tasks efficiently with our role-based to-do list application.</p>

         </section>
         <section className="features">
         <h2>Key Features</h2>
         <div className="feature">
         <ul>
          <li>User Authentication with Role Management</li>
          <li>Task Creation, Management, and Assignment</li>
          <li>Dynamic Content Rendering Based on User Roles</li>
          <li>Secure API Integration with JWT Authentication</li>
        </ul>
         </div>
         </section>
         <section className="about">
            <div className="feature">
            <h2>About Us</h2>
            <p>We are dedicated to providing a robust task management solution that meets the needs of various organizational roles.</p>
            </div>

         </section>
         <footer className="footer">
          <p>&copy; 2024 EmayamTech. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
