import React from 'react';
import './Footer.css';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section contact-us">
          <h4>Contact Us</h4>
          <p><PhoneIcon /> 0333 577 2027</p>
          <p><EmailIcon /> <a href="mailto:office@ecobeeenergy.com">office@ecobeeenergy.com</a></p>
          <p><AccessTimeIcon /> Business Hours: Monday to Friday 09:00 - 17:00</p>
          <p><a href="/privacy-policy">Privacy Policy</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;