import React, { useState } from "react";
import axios from "axios";
import "./Appointment.css";
import Footer from "../components/Footer";

const SERVICES = [
  "Teeth Cleaning","Tooth Filling","Braces & Aligners","Root Canal",
  "Teeth Whitening","Dental Implants","Pediatric Dentistry","Gum Treatment",
  "Oral Surgery"
];

export default function Appointment(){
  const [form, setForm] = useState({ name:"", email:"", phone:"", date:"", service:"" });
  const [msg, setMsg] = useState("");

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value});

  const handleSubmit = async e => {
    e.preventDefault();
    if(!form.service){ setMsg("Please select a service."); return; }
    try {
        await axios.post("https://smilehubdentalcare.onrender.com/appointments", form);
      setMsg("🎉 Appointment booked — we will contact you soon.");
      setForm({ name:"", email:"", phone:"", date:"", service:"" });
    } catch(err) {
      setMsg("❌ Error — please try again later.");
    }
    setTimeout(()=>setMsg(""),5000);
  };

  return (
    <section className="appointment-page">
      <div className="container">
        <h2>Book Your Appointment</h2>
        <p className="muted">Choose a service and preferred date — we'll handle the rest.</p>

        <form className="appt-form" onSubmit={handleSubmit}>
          <div className="row">
            <input name="name" placeholder="Full name" value={form.name} onChange={handleChange} required/>
            <input name="email" placeholder="Email" type="email" value={form.email} onChange={handleChange} required/>
          </div>

          <div className="row">
            <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
            <input name="date" type="date" value={form.date} onChange={handleChange} required/>
          </div>

          <select name="service" value={form.service} onChange={handleChange} required>
            <option value="">Select a Service</option>
            {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>

          <div style={{marginTop:14}}>
            <button className="btn" type="submit" style={{padding:"14px 40px", fontSize:16}}>Book Appointment</button>
          </div>

          {msg && <p className="form-msg">{msg}</p>}
        </form>
      </div>
      <br/>
      <br/>
      <br/>
       <Footer />
    </section>

  );
}
