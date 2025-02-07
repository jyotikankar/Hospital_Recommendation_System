import './recommend-me.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import hos from '../hos.jpg';

const Dropdown = () => {
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [selectedTreatment, setSelectedTreatment] = useState("All Treatments");
  const [selectedBudget, setSelectedBudget] = useState("All Budgets");
  const [selectedHospitalType, setSelectedType] = useState("All Types");
  const [isHovered, setIsHovered] = useState(false);
  
  const [loading, setLoading] = useState(false);
  const [hospitalData, setHospitalData] = useState([]);
  const [recommendations, setRecommendations] = useState("");

  const handleSelectChange = (event, setter) => {
    setter(event.target.value);
  };

  useEffect(() => {
    const fetchHospitalData = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);

        const fetchedData = [

          { 
            name: 'S A S Grewal Memorial Multispeciality Hospital', 
            city: 'GURUDEV NAGAR ', 
            type: 'Private', 
            budget: 'Within 40 Lakhs', 
            treatment: 'Cardiology ',
            image: hos,
          },
          
          { 
            name: 'Aastha Kidney And Super Speciality Hospital', 
            city: 'Civil Lines', 
            type: 'Government', 
            budget: 'Within 2 Lakhs', 
            treatment: 'Anesthesiology',
            image: hos,
            
          },
          { 
            name: 'Christian Medical College And Hospital', 
            city: 'Brown Road, DMC Road', 
            type: 'Private', 
            budget: 'Within 10 Lakhs', 
            treatment: 'Cancer',
            image: hos,
            
          },
          { 
            name: 'SPS Apollo Hospital', 
            city: 'Sherpur Chowk ', 
            type: 'Private', 
            budget: 'Within 6 Lakhs', 
            treatment: 'Cancer',
            image: hos,
            
          },
          { 
            name: 'Raman Hospital', 
            city: 'Hambran Road', 
            type: 'Private', 
            budget: 'Within 5 Lakh', 
            treatment: 'Cancer',
            image: hos,
            
          },
          
          { 
            name: 'AIMC Bassi Hospital', 
            city: 'Civil Lines', 
            type: 'Private', 
            budget: 'Within 5 Lakhs', 
            treatment: 'Anesthesiology',
            image: hos,
            
          },

          { 
            name: 'Rattan Multispecialty Hospital And Diagnostic Centre', 
            city: 'Samrala Road', 
            type: 'Private', 
            budget: 'Within 2 Lakhs', 
            treatment: 'Cardiology',
            image: hos,
            
          },

          { 
            name: 'SPS Hospitals (Satguru Partap Singh Hospitals)', 
            city: 'Sherpur Chowk', 
            type: 'Private', 
            budget: 'Within 15 Lakhs', 
            treatment: 'Dental',
            image: hos,
            
          },

          { 
            name: 'S A S Grewal Memorial Multispeciality Hospital', 
            city: 'Gurudev Nagar', 
            type: 'Private', 
            budget: 'Within 15 Lakhs', 
            treatment: 'Diabetes',
            image: hos,
            
          },

          { 
            name: 'Sidhu Hospital Pvt Ltd', 
            city: 'Doraha', 
            type: 'Private', 
            budget: 'Within 2 Lakhs', 
            treatment: 'Child Care',
            image: hos,
           
          },
          { 
            name: 'Suman Hospital', 
            city: 'Model Town', 
            type: 'Private', 
            budget: 'Within 4 Lakhs', 
            treatment: 'Child Care',
            image: hos,
           
          },
          { 
            name: 'Indo German Hospital', 
            city: 'Khanna', 
            type: 'Private', 
            budget: 'Within 14 Lakhs', 
            treatment: 'Cancer',
            image: hos,
           
          },
          { 
            name: 'Satyam Hospital', 
            city: 'Samrala Road', 
            type: 'Private', 
            budget: 'Within 15 Lakhs', 
            treatment: 'Cosmetic & Plastic Surgery',
            image: hos,
           
          },
          
          { 
            name: 'Sirish Hospital', 
            city: 'Civil Lines', 
            type: 'Private', 
            budget: 'Within 11 Lakhs', 
            treatment: 'Dermatology',
            image: hos,
           
          },
          
          { 
            name: 'Bawa Hospital Pvt Ltd', 
            city: 'Civil Lines', 
            type: 'Private', 
            budget: 'Within 17 Lakhs', 
            treatment: 'Emergency',
            image: hos,
           
          },
          { 
            name: 'Vasan Eye Care Hospital', 
            city: 'Ferozpur Road', 
            type: 'Private', 
            budget: 'Within 16 Lakhs', 
            treatment: 'Eyes',
            image: hos,
            
          },
          { 
            name: 'Batra Eye Hospital', 
            city: 'Model Town', 
            type: 'Private', 
            budget: 'Within 18 Lakhs', 
            treatment: 'Eyes',
            image: hos,
            description: 'Batra Eye Hospital is known for its cancer treatment and specialized oncologists.'
          },
          { 
            name: 'Preet Hospital', 
            city: 'Model Town', 
            type: 'Private', 
            budget: 'Within 20 Lakhs', 
            treatment: 'Nephrology',
            image: hos,
          },

        ];

        const filteredData = fetchedData.filter(hospital => 
          (selectedTreatment === 'All Treatments' || hospital.treatment === selectedTreatment) &&
          (selectedCity === 'All Cities' || hospital.city === selectedCity) &&
          (selectedBudget === 'All Budgets' || hospital.budget === selectedBudget) &&
          (selectedHospitalType === 'All Types' || hospital.type === selectedHospitalType)
        );

        setHospitalData(filteredData);
        setRecommendations(filteredData.length > 0 ? 'Here are some recommended hospitals based on your criteria.' : 'No recommendations found');
      }, 2000);
    };

    fetchHospitalData();
  }, [selectedTreatment, selectedCity, selectedBudget, selectedHospitalType]);

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Dropdown Filters */}
        <div className="col-12 mb-3">
          <div className="row">
            <div className="col-md-3">
              <label htmlFor="treatment">Treatment</label>
              <select id="treatment" className="form-control" value={selectedTreatment} onChange={(e) => handleSelectChange(e, setSelectedTreatment)}>
                <option value="All Treatments">All Treatments</option>
                <option value="Anesthesiology">Anesthesiology</option>
                <option value="Esis">Esis</option>
                <option value="Ayurvedic ">Ayurvedic </option>
                <option value="Cancer">Cancer</option>
                <option value="Cardiac">Cardiac</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Child Care">Child Care</option>
                <option value="Cosmetic & Plastic Surgery ">Cosmetic & Plastic Surgery </option>
                <option value="Dental">Dental </option>
                <option value="Dermatology">Dermatology</option>
                <option value="Diabetes">Diabetes</option>
                <option value="Emergency">Emergency</option>
                <option value="ENT">ENT</option>
                <option value="Eyes">Eyes</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
                <option value="Gynecology ">Gynecology </option>
                <option value="Immunology ">Immunology </option>
                <option value="Maternity">Maternity</option>
                <option value="Nephrology">Nephrology</option>
                <option value="Oncology">Oncology</option>
                <option value="Psychiatric ">Psychiatric </option>
                <option value="Radiology">Radiology</option>
                <option value="Rheumatology">Rheumatology</option>
                <option value="Urology ">Urology </option>

              </select>
            </div>
            <div className="col-md-3">
              <label htmlFor="city">Ludhiana</label>
              <select id="city" className="form-control" value={selectedCity} onChange={(e) => handleSelectChange(e, setSelectedCity)}>
                <option value="All Cities">Areas</option>
                <option value="Gurudev Nagar"> Gurudev Nagar</option>
                <option value="Samrala Road"> Samrala Road</option>
                <option value="Civil Lines"> Civil Lines </option>
                <option value="Tagore Nagar"> Tagore Nagar </option>
                <option value="Ferozpur Road"> Ferozpur Road </option>
                <option value="Model Town"> Model Town </option>
                <option value="Brown Road CMC Campus"> Brown Road CMC Campus </option>
                <option value="Krishna nagar"> Krishna nagar </option>
                <option value="Sherpur Chowk"> Sherpur Chowk </option>
                <option value="Doraha"> Doraha </option>
                <option value="KitchluNagar"> KitchluNagar </option>
                <option value="G.T. Road"> G.T. Road </option>
                <option value="BRS Nagar"> BRS Nagar </option>
                <option value="Kohara"> Kohara </option>
                <option value="Jamalpur Colony"> Jamalpur Colony </option>
                <option value="Cheema Chowk"> Cheema Chowk </option>
                <option value="Urban Estate Dugri"> Urban Estate Dugri </option>
                <option value="Pakhowal Road"> Pakhowal Road </option>
                <option value="Hambran Road"> Hambran Road </option>
                <option value="Khanna"> Khanna </option>
                <option value="Haibowal Kalan"> Haibowal Kalan</option>
                <option value="Shaheed Udham Singh Nagar"> Shaheed Udham Singh Nagar </option>
                <option value="Baba Than Singh Chowk"> Baba Than Singh Chowk</option>
                <option value="Sunder Nagar"> Sunder Nagar </option>
                <option value="Srabha Nagar"> Srabha Nagar</option>
                <option value="Madhopuri"> Madhopuri </option>
                <option value="Chandigarh Road"> Chandigarh Road </option>
                <option value="Focal Point"> Focal Point </option>
                <option value="Gill Road"> Gill Road </option>
                <option value="Basti jodhewal"> Basti jodhewal </option>
                <option value="Industrial Area"> Industrial Area </option>
                <option value="Fountain Plaza"> Fountain Plaza </option>
                <option value="Shingar Road"> Shingar Road </option>
                <option value="Kochar Market"> Kochar Market </option>
                <option value="Baddowal"> Baddowal </option>
                <option value="Jalandhar Bypass Road"> Jalandhar Bypass Road </option>
                <option value="Tajpur Road"> Tajpur Road </option>
                <option value="DMC Road"> DMC Road </option>
              </select>
            </div>
            <div className="col-md-3">
              <label htmlFor="budget">Budget</label>
              <select id="budget" className="form-control" value={selectedBudget} onChange={(e) => handleSelectChange(e, setSelectedBudget)}>
                <option value="All Budgets">All Budgets</option>
                <option value="Within 2 Lakhs">Within 2 Lakhs</option>
                <option value="Within 5 Lakhs">Within 5 Lakhs</option>
                <option value="Within 10 Lakhs">Within 10 Lakhs</option>
              </select>
            </div>
            <div className="col-md-3">
              <label htmlFor="type">Hospital Type</label>
              <select id="type" className="form-control" value={selectedHospitalType} onChange={(e) => handleSelectChange(e, setSelectedType)}>
                <option value="All Types">All Types</option>
                <option value="Government">Government</option>
                <option value="Private">Private</option>
              </select>
            </div>
          </div>
        </div>

        {/* Loader */}
        {loading && (
          <div className="col-12 text-center">
            <img src="https://dilseheal.com/images/Spinner.gif" alt="Loading..." />
          </div>
        )}

        {/* Recommendations Message */}
        {recommendations && !loading && (
          <div className="col-12 text-center mt-5">
            <h5>{recommendations}</h5>
          </div>
        )}

        {/* Hospital Cards */}
        <div className="row mt-5">
          {hospitalData.map((hospital, index) => (
            <div key={index} className="col-md-4 mb-4" 
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}>
              <div className="card shadow-sm  m-4 position-relative overflow-hidden">
                <img src={hospital.image} className="card-img-top" alt={hospital.name} />
                <div className="card-body">
                  <h5 className="card-title">{hospital.name}</h5>
                  <p className="card-text">
                    <strong>Area:</strong> {hospital.city} <br />
                    <strong>Type:</strong> {hospital.type} <br />
                    <strong>Budget:</strong> {hospital.budget} <br />
                    <strong>Treatment:</strong> {hospital.treatment} <br />
                    {/* {hospital.description} */}
                  </p> 
               </div>

                {/* Hover Part */}
                <div 
                  className="position-absolute bottom-0 start-0 w-100 h-50 bg-dark bg-opacity-100 text-white text-center p-2"
                  style={{
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered ? "translateY(0)" : "translateY(100%)",
                    transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out"
                  }}
                >
                  <h4> {hospital.name} </h4>
                  <div>
                    <button className="btn btn-sm me-2 " style={{ backgroundColor: '#c32148', color: 'white' }}>
                      Ambulance
                    </button>
                    <button className="btn btn-sm" style={{ backgroundColor: '#c32148', color: 'white' }}>
                      Location
                    </button>
                  </div>
                  <div className='mt-3'> 
                    <button className="btn btn-sm me-2 " style={{ backgroundColor: '#c32148', color: 'white' }}>
                      Plan a Visit
                    </button>
                    <button className="btn btn-sm" style={{ backgroundColor: '#c32148', color: 'white' }}>
                      Post a Review
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Dropdown;
