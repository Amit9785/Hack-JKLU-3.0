// LabourRegistration.jsx
import "./css_file/labour.css"; // Updated CSS file name
import React from 'react';

function Labourform() {
    const addService = () => {
        const servicesDiv = document.getElementById('services');
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'additional-service';
        input.name = 'service';
        input.placeholder = 'Enter another Service';
        servicesDiv.appendChild(input);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement your form submission logic here
        console.log('Form submitted');
    };

    return (
        <div className="main">
            <h1>Company name</h1>
            <h3>Enter your login credentials</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username" className="required">Username:</label>
                <input type="text" id="username" name="username" placeholder="Enter your Username" required />

                <label htmlFor="email" className="required">Email:</label>
                <input type="email" id="email" name="email" placeholder="Enter your Email" required />

                <label htmlFor="phone" className="required">Phone Number:</label>
                <input type="tel" id="phone" name="phone" placeholder="Enter your Phone Number" required />

                <label htmlFor="service" className="required">Service available:</label>
                <div id="services">
                    <input type="text" className="additional-service" name="service" placeholder="Enter the Service to perform" required />
                </div>
                <button type="button" className="bt" onClick={addService}>
                    Add Service
                </button>

                <label htmlFor="gender" className="required">Gender:</label>
                <select id="gender" name="gender" required>
                    <option value="" disabled selected>Select your gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>

                <label htmlFor="location" className="required">Location Address (Google Maps):</label>
                <input type="text" id="location" name="location" placeholder="Enter the Location Address" required />

                <div className="wrap">
                    <button className="bt" type="submit"><a href="/">Submit</a></button>
                </div>
            </form>
            <p>
                Not registered? <a href="#" style={{ textDecoration: 'none' }}>Create an account</a>
            </p>
        </div>
    );
}

export default Labourform;
