import React from "react";
import "./Contact.css";
import Footer from "../components/Footer";
export default function Contact(){
  return (
    <section className="contact-page">
      <div className="container">
        <h2>Contact Us 📞 </h2>
        <div className="contact-grid">
          <div className="contact-card">
            <h3>Clinic Address</h3>
            <p>123 Smile Street, Near Pinnacle Hospital, Vizag</p>
            <p>Mon - Sat | 9:00 AM - 6:00 PM</p>
          </div>

          <div className="contact-card">
            <h3>Contact</h3>
            <p>Phone: +91 9490106987</p>
            <p>Email: smilehub@gmail.com</p>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
      
      
      <Footer />
    </section>
  );
}
