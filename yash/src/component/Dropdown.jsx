import './Dropdown.css';
import React, { useState } from 'react';

const Dropdown = () => {
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [selectedTreatment, setSelectedTreatment] = useState("All Treatments");
  const [selectedBudget, setSelectedBudget] = useState("All Budgets");
  const [selectedHospitalType, setSelectedHospitalType] = useState("All Types");

  // Dropdown options
  const cities = [
    "All Cities",
    "Kolkata",
    "Mumbai",
    "Pune",
    "Delhi",
    "Hyderabad",
    "Ahmedabad",
    "Vellore",
    "Jaipur",
    "Chennai",
    "Bangalore",
    "Kerala",
  ];

  const treatments = [
    "All Treatments",
    "Fever",
    "Cold",
    "Surgery",
    "Cancer",
    "Diabetes",
  ];

  const budgets = [
    "All Budgets",
    "Below 10,000",
    "10,000 - 50,000",
    "50,000 - 1,00,000",
    "Above 1,00,000",
  ];

  const hospitalTypes = ["All Types", "Government", "Private"];

  // Handlers for dropdown changes
  const handleCityChange = (event) => setSelectedCity(event.target.value);
  const handleTreatmentChange = (event) => setSelectedTreatment(event.target.value);
  const handleBudgetChange = (event) => setSelectedBudget(event.target.value);
  const handleHospitalTypeChange = (event) => setSelectedHospitalType(event.target.value);

  return (
    <div className="selected-area">
      <div className="dropdown-group-inline">
        {/* Treatment Dropdown */}
        <div className="dropdown-container">
          <h3>Treatment</h3>
          <select
            value={selectedTreatment}
            onChange={handleTreatmentChange}
            className="dropdown"
          >
            {treatments.map((treatment, index) => (
              <option key={index} value={treatment}>
                {treatment}
              </option>
            ))}
          </select>
        </div>

        {/* City Dropdown */}
        <div className="dropdown-container">
          <h3>City</h3>
          <select
            value={selectedCity}
            onChange={handleCityChange}
            className="dropdown"
          >
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Budget Dropdown */}
        <div className="dropdown-container">
          <h3>Budget</h3>
          <select
            value={selectedBudget}
            onChange={handleBudgetChange}
            className="dropdown"
          >
            {budgets.map((budget, index) => (
              <option key={index} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </div>

        {/* Hospital Type Dropdown */}
        <div className="dropdown-container">
          <h3>Hospital Type (Govt or Private)</h3>
          <select
            value={selectedHospitalType}
            onChange={handleHospitalTypeChange}
            className="dropdown"
          >
            {hospitalTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

     
    </div>
  );
};

export default Dropdown;
