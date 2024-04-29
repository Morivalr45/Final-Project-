import React from 'react';
import './InsurancePlans.css';

const InsurancePlans = ({ insurancePlans, userIncome, onPlanSelect }) => {
  const isEligible = (plan) => {
    const { incomeThreshold } = plan;
    return userIncome <= incomeThreshold; // Check if user income is below the plan's income threshold
  };

  const handlePlanSelect = (plan) => {
    onPlanSelect(plan); // Set the selected plan
  };

  return (
    <div className="insurance-plans">
      <h2>Available Insurance Plans</h2>
      <ul>
        {insurancePlans.map(plan => (
          <li key={plan.id} className={isEligible(plan) ? 'eligible' : 'not-eligible'}>
            <h3>{plan.name}</h3>
            <p><strong>Coverage:</strong> {plan.coverage}</p>
            <p><strong>Income Threshold:</strong> ${plan.incomeThreshold}</p>
            <p><strong>Age Range:</strong> {plan.ageMin} - {plan.ageMax} years</p>
            <p><strong>Region:</strong> {plan.region}</p>
            {isEligible(plan) ? (
              <p className="eligible-message">You are <strong>eligible</strong> for this plan based on your income.</p>
            ) : (
              <p className="not-eligible-message">You are <strong>not eligible</strong> for this plan based on your income.</p>
            )}
            <button onClick={() => handlePlanSelect(plan)}>Select Plan</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InsurancePlans;
