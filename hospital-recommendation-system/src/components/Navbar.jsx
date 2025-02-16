import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../logo.jpg';
import PopupForm from './ambulance-form';
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebaseConfig"; 
import { onAuthStateChanged, signOut } from "firebase/auth";
import { db } from "./firebaseConfig"; 
import { doc, updateDoc, serverTimestamp } from "firebase/firestore"; 

const Navbar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [user, setUser] = useState(null); // User state store karne ke liye
  const navigate = useNavigate();

  useEffect(() => {
    // Firebase authentication state listener
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // User ka data update karna
    });
    return () => unsubscribe(); // Cleanup function
  }, []);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
  const openLoginForm = () => setIsLoginOpen(true);
  const closeLoginForm = () => setIsLoginOpen(false);

  const handlePostView = () => {
    if (!user) {
      openLoginForm(); // Agar user login nahi hai toh login form open karein
    } else {
      navigate("/PostView", { replace: true});
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setUser(null); // Logout hone ke baad user state reset karna
      alert("Logout Successfully");
    } catch (error) {
      console.error("Logout Failed:", error.message);
    }
  };
  
  

  return (
    <>
      <div className='navbar'>
        <div className='navbar-logo ms-3'>
          <img src={logo} alt="Logo" /> <h2>Hospital Recommendation System</h2>
        </div>

        <div className='nav-link'>
          <nav>
            <ul>
              <li >
                <button style={{ borderRadius: '7px' }} onClick={openPopup}>
                  <b> BOOK AN AMBULANCE </b>
                </button>
              </li>
              <li>
                <button style={{ borderRadius: '7px' }} onClick={handlePostView}>
                  <b> POST A VIEW </b>
                </button>
              </li>

              {/* User Logged In hai to Dropdown, warna Login Button */}
              {user ? (
                <li className="dropdown">
                  <button className="primary" style={{ padding: '12px 15px'}}>
                    {user.email} ⬇
                  </button>
                  <div className="dropdown-content">
                    <button className='btn btn-primary' onClick={handleLogout}>Logout</button>
                  </div>
                </li>
              ) : (
                <li>
                  <button style={{ borderRadius: '7px' , marginRight:'10px' }} onClick={openLoginForm}>
                    <b> LOGIN </b>
                  </button>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>

      <PopupForm isOpen={isPopupOpen} onClose={closePopup} />
      <LoginForm isOpen={isLoginOpen} onClose={closeLoginForm} />
    </>
  );
};

export default Navbar;