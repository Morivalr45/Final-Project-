// Form.jsx - User Input Component
import React, { useState } from 'react';
import './Form.css';

const Form = ({ onSubmit }) => {
  const [name, setName] = useState(''); // State for storing user's name
  const [income, setIncome] = useState('');
  const [age, setAge] = useState('');
  const [region, setRegion] = useState('');
  const [userId, setUserId] = useState('');
  const [idChoice, setIdChoice] = useState('random'); // State for choosing ID type
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !income || !age || !region || !userId) {
      setError('Please fill out all fields.');
      return;
    }

    // Additional validation logic
    const userIncome = parseInt(income);
    const userAge = parseInt(age);

    // Check if income is above a certain threshold
    if (userIncome < 0) {
      setError('Income cannot be negative.');
      return;
    }

    // Check if age is within a certain range
    if (userAge < 18 || userAge > 100) {
      setError('Age must be between 18 and 100.');
      return;
    }

    // Call onSubmit callback with user data
    onSubmit({ name, income: userIncome, age: userAge, region, userId });
  };

  // Clear error message when user starts typing
  const handleInputChange = () => {
    setError('');
  };

  return (
    <form id="user-form" className="form" onSubmit={handleSubmit}>
      <h2>Check Your Eligibility</h2>
      {error && <p className="error">{error}</p>}
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => { setName(e.target.value); handleInputChange(); }} />
      </div>
      <div className="form-group">
        <label htmlFor="income">Income:</label>
        <input type="number" id="income" value={income} onChange={(e) => { setIncome(e.target.value); handleInputChange(); }} />
      </div>
      <div className="form-group">
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" value={age} onChange={(e) => { setAge(e.target.value); handleInputChange(); }} />
      </div>
      <div className="form-group">
        <label htmlFor="region">Region:</label>
        <input type="text" id="region" value={region} onChange={(e) => { setRegion(e.target.value); handleInputChange(); }} />
      </div>
      <div className="form-group">
        <label htmlFor="userId">User ID:</label>
        <input type="text" id="userId" value={userId} onChange={(e) => { setUserId(e.target.value); handleInputChange(); }} />
      </div>
      <div className="form-group">
        <label htmlFor="idChoice">Choose ID Type:</label>
        <select id="idChoice" value={idChoice} onChange={(e) => setIdChoice(e.target.value)}>
          <option value="random">Random</option>
          <option value="manual">Manual</option>
        </select>
      </div>
      <button type="submit">Check Eligibility</button>
    </form>
  );
};

export default Form;
