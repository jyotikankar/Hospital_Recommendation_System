import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import banner from './banner.png';
import TypewriterEffect from "./TypewriterEffect.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStethoscope, faPhoneAlt, faUserMd, faUserCheck } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row home-container">
        <div className="col-lg-6 col-md-12 text-section">
          <h1><TypewriterEffect /></h1>
          <p className="mt-5"  style={{ textAlign: 'justify' }}>
            Our Hospital Recommendation System is designed to help users find
            the best hospitals based on their medical conditions, financial status, 
            valid user reviews, and hospital background checks.
            The system allows users to compare hospital facilities, ensuring they 
            receive the best possible healthcare that meets their needs.
            <br /><br /> With an intelligent recommendation algorithm, it provides 
            personalized suggestions, making it easier to choose the right hospital. 
            Additionally, users can book doctor or gynecologist appointments directly 
            through the platform, ensuring a seamless and hassle-free healthcare experience.
          </p>
        </div>
        <div className="col-lg-6 col-md-12 image-section">
          <img src={banner} alt="Hospital Recommendation System" />
        </div>
      </div>


      <div className="row cards">
         <div className="col-lg-3 col-md-6 col-sm-12">
           <FontAwesomeIcon icon="fa-solid fa-stethoscope" />
         </div>

         <div className="col-lg-3 col-md-6 col-sm-12">
           <FontAwesomeIcon icon="fa-solid fa-phone" /> 
         </div>

         <div className="col-lg-3 col-md-6 col-sm-12">
           <FontAwesomeIcon icon="fa-solid fa-user-nurse" />
         </div>

         <div className="col-lg-3 col-md-6 col-sm-12">
           <FontAwesomeIcon icon="fa-solid fa-user-doctor" />
         </div>
      </div>
    </div>

    
  );
};

export default Home;
