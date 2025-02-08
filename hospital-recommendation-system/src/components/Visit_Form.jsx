import React from 'react';
import './Visit_Form.css';


const VisitForm = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        <div className='popup-overlay '>
            <div className='popup-form'>
                <span className='close-btn' onClick={onClose}>
                    &times;
                </span>
                <h2 className='text-center'>Plan a Visit</h2>
                <form>
                    <label> Name: </label>
                    <input type="text" placeholder="Full Name" required className="form-input" />
                    <label>Mobile Number: </label>
                    <input type="text" placeholder="Mobile Number" required className="form-input" />
                    <label> D.O.B. : </label>
                    <input type="date" required className="form-input" />
                    <label> Reason Or Disease:</label>
                    <input type="text" placeholder="Reason" required className="form-input" />
                    <button type="submit" className="btn btn-primary w-100">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};


export default VisitForm;