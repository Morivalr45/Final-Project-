// SelectedPlan.jsx - Component to display the selected plan
import React from 'react';

const SelectedPlan = ({ plan }) => {
  return (
    <div className="selected-plan">
      <h2>Selected Plan</h2>
      {plan && (
        <div className="plan-details">
          <h3>{plan.name}</h3>
          <p><strong>Coverage:</strong> {plan.coverage}</p>
          <p><strong>Income Threshold:</strong> ${plan.incomeThreshold}</p>
          <p><strong>Age Range:</strong> {plan.ageMin} - {plan.ageMax} years</p>
          <p><strong>Region:</strong> {plan.region}</p>
        </div>
      )}
    </div>
  );
};

export default SelectedPlan;


