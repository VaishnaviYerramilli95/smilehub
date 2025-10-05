import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>SmileHub Dental Care 🦷😁</h3>
        <p>Your smile, our priority! Visit us for the best dental care experience.</p>

        

        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            𝐟 
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            🅾 
            
          </a>
          <a href="mailto:smilehub@gmail.com">
            ✉︎ 
          </a>
        </div>

        <div className="footer-bottom">
           SmileHub Dental Care. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
