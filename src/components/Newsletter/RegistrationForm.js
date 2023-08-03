import React, { useState } from "react";
import "./RegistrationForm.css"; // Import your CSS file

const RegistrationForm = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [jobPosition, setJobPosition] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle form submission
    // ...
  };

  return (
    <div className="registration-form">
      <h3>Registration Form</h3>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {/* Job Position Field */}
        <div className="form-group">
          <label htmlFor="jobPosition">Job Position:</label>
          <input
            type="text"
            id="jobPosition"
            value={jobPosition}
            onChange={(e) => setJobPosition(e.target.value)}
            required
          />
        </div>
        {/* Contact Number Field */}
        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            type="tel"
            id="contactNumber"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
        </div>

        {/* Submit and Close Buttons */}
        <div className="button-container">
          <button type="submit">Submit</button>
          <button onClick={onClose}>Close</button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
