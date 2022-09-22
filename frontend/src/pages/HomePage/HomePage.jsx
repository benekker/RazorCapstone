import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import bayviewWall from "./Assets/bayviewWall.jpg"
import "./HomePage.css"
import haircut from './Assets/haircutimg.png'
import beardtrim from './Assets/beardtrimimg.png'
import colorservice from './Assets/colorserviceimg.png'



const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user] = useAuth();
  const navigate = useNavigate();
  

 
  
  return (
  <div className="main-container">
    {user.is_staff ? (
      <div className="staff-button">
        <button onClick={() => navigate("/staffpage")}>Staff Portal</button>
      </div>
    ) : (
      <div className="main-header"> 
        <h1>Welcome, to Razor.</h1>
        <h2>Where quality service meets maximum comfort</h2>
      </div>
    )}
    <div className="content-container">
      <div className="main-image">
        <img src={bayviewWall} />
      </div>
      <div className="info">
        <div className="hours">
            <h2>Hours</h2>
            <p>Open monday - saturday</p>
            <p>10AM - 6PM</p>
        </div>
        <div className="contact">
            <h2>Contact</h2>
            <p>by appointment only | Book through our site or call 414 482-0633</p>
            <p>Located at 2340 S. Kinnickinnic Ave. Milwaukee, WI 53207</p>
        </div>
        <div className="services">
          <h2>Services</h2>
          <p><img src={haircut} alt="haircut img"/>Haircut: $20</p>
          <p><img src={beardtrim} alt="beardtrim img"/>Beard Trim: $14</p>
          <p><img src={colorservice} alt="colorservice img"/>Color Service: $25</p>
        </div>
      </div>
      </div>
  </div>
  
  );
};

export default HomePage;
