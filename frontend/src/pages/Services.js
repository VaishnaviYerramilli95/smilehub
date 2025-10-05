import React, { useState } from "react";
import "./Services.css";
import Footer from "../components/Footer";

const servicesData = [
  {
    title: "Dental Implants",
    img: "https://tse3.mm.bing.net/th/id/OIP.D251PfeLD2vw5ihbEu8QhgAAAA?pid=Api&P=0&h=180",
    desc: "Strong, permanent replacements for lost teeth.",
    more: "Dental implants provide a durable, natural-looking solution for missing teeth. They help restore your smile, improve chewing efficiency, and maintain jawbone health."
  },
  {
    title: "Teeth Whitening",
    img: "https://tse4.mm.bing.net/th/id/OIP.3FvNkgHbwEXafYtRr9jJ0wHaHa?pid=Api&P=0&h=180",
    desc: "Brighten your smile safely and effectively.",
    more: "Our advanced whitening treatments remove deep stains and discoloration, giving you a radiant smile within a single session."
  },
  {
    title: "Root Canal Treatment",
    img: "https://platinumdentalgroup.com/wp-content/uploads/2024/01/Root-Canal.jpg",
    desc: "Save infected teeth with painless precision.",
    more: "We use modern rotary technology for painless, quick, and effective root canal procedures that preserve your natural tooth."
  },
  {
    title: "Braces & Aligners",
    img: "https://perth-orthodontist.com.au/wp-content/uploads/Clear-Aligners-vs.jpg",
    desc: "Straighten teeth comfortably and invisibly.",
    more: "From metal braces to invisible aligners, we offer customized orthodontic treatments to help you achieve your perfect smile."
  },
  {
    title: "Smile Designing",
    img: "https://www.flossdental.net/blog_imgs/smile-designing-in-noida-delhi-ncr.jpg",
    desc: "Redefine your smile aesthetics beautifully.",
    more: "Our smile design experts use digital imaging to craft a personalized, harmonious, and stunning smile that suits your facial features."
  },
  {
    title: "Scaling & Polishing",
    img: "https://www.oceandental.sg/wp-content/uploads/2020/09/Scaling.jpg",
    desc: "Keep gums healthy and remove tartar buildup.",
    more: "Regular cleaning helps prevent gum disease and keeps your breath fresh. We use gentle ultrasonic technology for deep cleaning."
  },
  {
    title: "Pediatric Dentistry",
    img: "https://www.canyonridgepediatricdentistry.com/wp-content/uploads/pediatric-dentist-2010.jpg",
    desc: "Gentle dental care for children.",
    more: "Our child-friendly dentists ensure a fun, stress-free experience for your little ones, making dental visits easy and comfortable."
  },
  {
    title: "Wisdom Tooth Removal",
    img: "https://www.verywellhealth.com/thmb/rPXieahPeRo-NHBMbDEQlKtI_do=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1160716963-dc7958a3b7d443bbafba3aca7d5c7c68.jpg",
    desc: "Safe and painless extraction of wisdom teeth.",
    more: "We specialize in minor oral surgeries and ensure minimal discomfort and quick recovery after extraction."
  },
  
  {
    title: "Laser Dentistry",
    img: "https://www.ismile.com/hs-fs/hubfs/Laser%20Dentistry.jpg?quality=high&width=645&name=Laser%20Dentistry.jpg",
    desc: "Advanced treatments with minimal pain.",
    more: "Laser technology offers faster healing, reduced bleeding, and more precise dental procedures."
  }
];

const Services = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleReadMore = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="services-page">
      <h2>Our Dental Services 🦷</h2>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.img} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            {expanded === index && <p className="more-text">{service.more}</p>}
            <button
              className="read-more-btn"
              onClick={() => toggleReadMore(index)}
            >
              {expanded === index ? "Read Less" : "Read More"}
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Services;
