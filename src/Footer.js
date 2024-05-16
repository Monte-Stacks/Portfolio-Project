import React from 'react';
import './Footer.css'; // Import CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <a href="https://www.instagram.com/montestacks/" target="_blank" rel="noopener noreferrer" className="footer__link">@MonteStacks</a>
      <span className="footer__copyright">Copyright 2024</span>
    </footer>
  );
};

export default Footer;