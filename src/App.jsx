import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import InsurancePlans from './components/InsurancePlans';
import Form from './components/Form';
import LoadingSpinner from './components/LoadingSpinner';
import SelectedPlan from './components/SelectedPlan';
import HomeFeed from './components/HomeFeed';
import PostForm from './components/PostForm';
import PostDetailPage from './components/PostDetailPage';
import RandomPostPage from './components/RandomPostPage'; // Import RandomPostPage component
import './App.css';
import generateHealthPlans from './components/generateHealthPlans';

const App = () => {
  const [insurancePlans, setInsurancePlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [chosenPlan, setChosenPlan] = useState(null);
  const [userIncome, setUserIncome] = useState(null);
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null); // State to hold selected post

  useEffect(() => {
    fetchInsurancePlans({ region: '' });
  }, []);

  const fetchInsurancePlans = async (userData) => {
    try {
      const plans = generateHealthPlans();
      setInsurancePlans(plans);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching insurance plans:', error.message);
      setError('Error fetching insurance plans. Please try again later.');
      setLoading(false);
    }
  };

  const handleFormSubmit = async (userData) => {
    try {
      setUserIncome(userData.income);
      fetchInsurancePlans(userData);
    } catch (error) {
      console.error('Error storing user data:', error.message);
      setError('Error storing user data. Please try again.');
    }
  };

  const handlePlanSelect = (plan) => {
    setChosenPlan(plan);
    setConfirmationVisible(true);
  };

  const handleConfirm = async () => {
    try {
      const formElement = document.getElementById('user-form');

      if (!formElement) {
        console.error('Form element not found.');
        return;
      }

      const formData = new FormData(formElement);
      const name = formData.get('name');
      const income = formData.get('income');
      const age = formData.get('age');
      const region = formData.get('region');
      const userId = formData.get('userId');

      const userData = {
        name: name,
        income: income,
        age: age,
        region: region,
        userId: userId,
        selectedPlan: chosenPlan.name
      };

      const response = await fetch('/api/storeUserData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (response.ok) {
        console.log('User data stored successfully.');
      } else {
        console.error('Failed to store user data.');
      }

      setConfirmationVisible(false);
    } catch (error) {
      console.error('Error storing user data:', error.message);
    }
  };

  const handlePostSubmit = async (postData) => {
    try {
      // Here you can handle the post submission logic
    } catch (error) {
      console.error('Error submitting post:', error.message);
    }
  };

  const handlePostSelect = (post) => {
    setSelectedPost(post);
  };

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <SelectedPlan plan={chosenPlan} />
        {confirmationVisible && (
          <div className="confirmation">
            <p>Are you sure you want to select this plan?</p>
            <button onClick={handleConfirm}>Confirm</button>
          </div>
        )}
        <Form onSubmit={handleFormSubmit} />
        {loading && <LoadingSpinner />}
        {error && <p className="error">{error}</p>}
        {!loading && !error && (
          <InsurancePlans
            insurancePlans={insurancePlans}
            userIncome={userIncome}
            onPlanSelect={handlePlanSelect}
          />
        )}
        <HomeFeed posts={posts} onPostSelect={handlePostSelect} />
        <PostForm onSubmit={handlePostSubmit} />
        {selectedPost && <PostDetailPage post={selectedPost} />}
        {/* Render RandomPostPage component at the bottom of the page */}
        <RandomPostPage />
      </main>
      <Footer />
    </div>
  );
};

export default App;
