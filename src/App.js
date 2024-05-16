import React, { useState } from 'react';
import Header from './Header';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Footer from './Footer'; // Import the Footer component
import './App.css'; // Import CSS file for global styles
import backgroundImage from './limbo.gif'; // Import the background image

const App = () => {
  // State to track the current page
  const [currentPage, setCurrentPage] = useState('home');

  // Function to handle navigation to different pages
  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="app" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Header navigateTo={navigateTo} />
      {/* Render different components based on the current page */}
      <div className="content">
        {currentPage === 'home' && (
          <div>
            {/* Content for home page */}
          </div>
        )}
        {currentPage === 'projects' && (
          <Projects />
        )}
        {currentPage === 'about' && (
          <About />
        )}
        {currentPage === 'contact' && (
          <Contact />
        )}
      </div>
      <Footer /> {/* Add the Footer component */}
    </div>
  );
};

export default App;