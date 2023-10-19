
import React, { useState } from 'react';
import './AgeCalculator.css'; 

const AgeCalculator = () => {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthDate = new Date(dob);
    const currentDate = new Date();
    const ageDifference = currentDate.getFullYear() - birthDate.getFullYear();

    // Check if the birthday has occurred this year
    if (
      currentDate.getMonth() < birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() &&
        currentDate.getDate() < birthDate.getDate())
    ) {
      setAge(ageDifference - 1);
    } else {
      setAge(ageDifference);
    }
  };

  return (
    <div className="AgeCalculator">
      <label>
        Enter your Date of Birth:
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
      </label>
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== null && <p>Your age is: {age} years</p>}
    </div>
  );
};

export default AgeCalculator;
