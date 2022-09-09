import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import bayviewWall from "./Assets/bayviewWall.jpg"
import "./HomePage.css"


const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user] = useAuth();
  const navigate = useNavigate();
  

 
  
  return (
  <div className="container">
    {user.is_staff ? (
      <button onClick={() => navigate("/staffpage")}>Staff Portal</button>
    ) : (
      <h1>Welcome, to Razor</h1>
    )}
      <img src={bayviewWall} />
    <p>Established in 2007, Razor is a contemporary men's barbershop that provides an upscale experience for an affordable price in a relaxed atmosphere.
       Locally owned and operated by barber, Anthony Leto, who boasts over 17 years of experience. 
       Located right in the heart of Bay View's newly revitalized business sector, Razor offers the finest custom haircut and service for your dollar. 
       Every individual receives special attention which includes: consultation, precision haircut or color, style, beard trim, hot towel and straight-edge razor detailing. 
       Come in and relax in a wide comfortable barber chair, watch television and enjoy a cold complimentary refreshment.</p>
  </div>
  
  );
};

export default HomePage;
