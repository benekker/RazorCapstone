import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";
import razorLogo from './Assets/razorLogo.png'

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(user)
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/">
            <img src={razorLogo} alt='razorLogo' className="razorLogo"></img>
          </Link>
        </li>
        <li className="grow">About</li>
        <li className="grow home" onClick={() => navigate("/")}>Home</li>
        <li className="grow" onClick={() => navigate("/bookappointment")}>Book Appointment</li>
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
