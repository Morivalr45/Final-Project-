// Assuming you have a file called generateHealthPlans.js
const generateHealthPlans = () => {
    const plans = [];
    const regions = ['A', 'B', 'C', 'D']; // Example regions
  
    for (let i = 1; i <= 10; i++) { // Generate 10 random plans
      const plan = {
        id: i,
        name: `Plan ${i}`,
        coverage: `Coverage for Plan ${i}`,
        incomeThreshold: Math.floor(Math.random() * 50000) + 10000, // Random income threshold between $10,000 and $50,000
        ageMin: Math.floor(Math.random() * 50) + 18, // Random age minimum between 18 and 67
        ageMax: Math.floor(Math.random() * 50) + 18, // Random age maximum between 18 and 67
        region: regions[Math.floor(Math.random() * regions.length)] // Randomly select a region
      };
      plans.push(plan);
    }
  
    return plans;
  };
  
  export default generateHealthPlans;
  