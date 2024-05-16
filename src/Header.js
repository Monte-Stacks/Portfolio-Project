import React from 'react';
import './Header.css'; // Import CSS file for styling

const Header = ({ navigateTo }) => {
  // Function to navigate to the Projects page
  const goToProjectsPage = () => {
    console.log('Navigating to Project page');
    navigateTo('projects');
  };


  // Function to navigate to the About page
  const goToAboutPage = () => {
    console.log('Navigating to About page');
    navigateTo('about');
  };

  // Function to navigate to the Contact page
  const goToContactPage = () => {
    console.log('Navigating to Contact page');
    navigateTo('contact');
  };

  return (
    <header className="header">
      <div className="header__logo">
        {/* Add your logo or site title here */}
        <h1>Ryan Monte's Portfolio</h1>
      </div>
      <nav className="header__nav">
        {/* Add navigation links here */}
        <ul>
          {/* Call navigateTo function on button click */}
          <li><a href="/" onClick={(e) => { e.preventDefault(); goToProjectsPage(); }}>Projects</a></li>
          {/* Call goToAboutPage function on anchor click */}
          <li><a href="/" onClick={(e) => { e.preventDefault(); goToAboutPage(); }}>About</a></li>
          {/* Call goToContactPage function on anchor click */}
          <li><a href="/" onClick={(e) => { e.preventDefault(); goToContactPage(); }}>Contact</a></li>
        </ul>
      </nav>
      <div className="header__subtitle">
        {/* Add your secondary header here */}
        <h2>Press Start on the Best Software Developer in the Game!</h2>
      </div>
    </header>
  );
};

export default Header;