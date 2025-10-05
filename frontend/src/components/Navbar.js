import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="nav-header">
        <div className="container nav-inner">
          <div className="logo">SmileHub Dental care<span className="logo-text">😁🦷 </span></div>

          <button
            className={`hamburger ${open ? "active" : ""}`}
            aria-label="menu"
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <nav className={`side-drawer ${open ? "open" : ""}`}>
        <div className="drawer-top">
          <div className="drawer-logo">SmileHub 😁🦷 </div>
          <button className="drawer-close" onClick={() => setOpen(false)} aria-label="close">
            <span></span><span></span>
          </button>
        </div>
        <ul className="drawer-links">
          <li><Link to="/" onClick={()=>setOpen(false)}>Home</Link></li>
          <li><Link to="/services" onClick={()=>setOpen(false)}>Services</Link></li>
          <li><Link to="/appointment" onClick={()=>setOpen(false)}>Appointment</Link></li>
          <li><Link to="/contact" onClick={()=>setOpen(false)}>Contact</Link></li>
        </ul>
      </nav>

      {open && <div className="backdrop" onClick={() => setOpen(false)} />}
    </>
  );
}
