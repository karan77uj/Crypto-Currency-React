import React from 'react';
import '../styles/Footer.css'; // Ensure this path is correct
import logo from '../images/logo-white.png';
import facebookIcon from '../images/fabook-icon-white.svg';
import twitterIcon from '../images/twitter-icon-white.svg';
import linkedinIcon from '../images/inkedin-icon-white.svg';
import whatsappIcon from '../images/whatsapp-icon-white.svg';

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <div className="footerAboutus">
          <img src={logo} alt="Logo" />
          <p className="darkPara">
            With no commissions and a simple user interface, Prouple is the most reliable way to trade Cryptocurrency.
          </p>
          <div className="footersociallinkContainer">
            <img src={facebookIcon} className="sociallink" alt="Facebook" />
            <img src={twitterIcon} className="sociallink" alt="Twitter" />
            <img src={linkedinIcon} className="sociallink" alt="LinkedIn" />
            <img src={whatsappIcon} className="sociallink" alt="WhatsApp" />
          </div>
        </div>
        
        <div className="footerlink">
          <h1 className="linkTitle">Explore</h1>
          <a href="#" className="eachLink">About Us</a>
          <a href="#" className="eachLink">Blog</a>
          <a href="#" className="eachLink">Contact</a>
          <a href="#" className="eachLink">FAQ</a>
        </div>

        <div className="footerlink">
          <h1 className="linkTitle">Service</h1>
          <a href="#" className="eachLink">Mining</a>
          <a href="#" className="eachLink">Control Data</a>
          <a href="#" className="eachLink">Design</a>
          <a href="#" className="eachLink">Security</a>
        </div>
        
        <div className="footerlink">
          <h1 className="linkTitle">Resource</h1>
          <a href="#" className="eachLink">Style Guide</a>
          <a href="#" className="eachLink">Change Log</a>
          <a href="#" className="eachLink">License</a>
        </div>
      </div>
      
      <div className="footerCopyright">
        <p>&copy; 2024 design and developed by <a href="#" className="developedBy">Prouple</a></p>
      </div>
    </footer>
  );
};

export default Footer;
