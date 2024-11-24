import React, { useState } from 'react';
import './App.css';

function App() {
  const [showPopup, setShowPopup] = useState(false); // State to handle pop-up visibility

  const handleAboutMeClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="App">
      {/* Main Background */}
      <div className="App-background">
        {/* Header Section */}
        <header className="App-header">
          <h1>Your Trusted Real Estate Consultant</h1>
          <p>Helping you make the best property decisions with expertise and dedication.</p>
          <button
            onClick={() => window.open('https://wa.me/923355375503', '_blank')}
            style={buttonStyle}
          >
            Contact Now
          </button>
          <button onClick={handleAboutMeClick} style={buttonStyle}>
            About Me
          </button>
        </header>

        {/* Fixed Business Card */}
        <img
          src={`${process.env.PUBLIC_URL}/assets/business_card.jpg`}
          alt="Business Card"
          className="fixed-section business-card"
        />

        {/* Fixed Office Image */}
        <img
          src={`${process.env.PUBLIC_URL}/assets/img1.jpg`}
          alt="Me at the Office"
          className="fixed-section office-image"
        />

        {/* Pop-up */}
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <button className="close-btn" onClick={handleClosePopup}>
                X
              </button>
              <h2>About Me</h2>
              <p>
                Hello there! I am <strong>Hamza Khalid</strong>, a freelance Real Estate Consultant
                with a field experience of over 2 years, having a track record of closing multiple
                deals for a variety of satisfied clients. Invest today and secure your tomorrow!
              </p>
              <img
                src={`${process.env.PUBLIC_URL}/assets/business_card.jpg`}
                alt="Business Card"
                className="popup-image"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Inline Button Style
const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  margin: '10px', // Adds spacing between buttons
};

export default App;
