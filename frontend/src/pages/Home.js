import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Footer from "../components/Footer";

export default function Home(){
  return (
    <main>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-left">
            <h1>Your smile, our passion ❤️</h1>
            <p className="sub">Where comfort meets care — visit SmileHub Dental Clinic today.</p>
            <div style={{marginTop:20}}>
              <Link to="/appointment" className="btn" style={{padding:"14px 34px", fontSize:16}}>Book Appointment</Link>
            </div>
          </div>

          <div className="hero-right">
            <img alt="clinic" src="https://img.freepik.com/premium-photo/dental-clinic-with-white-ceiling-large-mirror_81048-16368.jpg?w=2000" />
          </div>
        </div>
      </section>

      <section className="doctors container">
        <h2>Our Doctors</h2>
        <p className="muted">Professional and caring — meet our specialists</p>
        <div className="doctors-grid">
          <div className="doc">
            <div className="avatar" style={{backgroundImage:"url('https://thumbs.dreamstime.com/z/young-smiling-man-doctor-medical-specialist-medicine-concept-cute-d-icon-people-character-illustration-cartoon-minimal-style-274178658.jpg')"}} />
            <h4>Dr.P.S.S.Srinivas</h4>
            <p className="small">MDS - Public Health Dentistry</p>
          </div>
          <div className="doc">
            <div className="avatar" style={{backgroundImage:"url('https://tse1.mm.bing.net/th/id/OIP.ISVZfClck5S1YHCuka9p_wHaHa?pid=Api&P=0&h=180')"}} />
            <h4>Dr.Aseash Varma</h4>
            <p className="small">Dental Surgeon </p>
          </div>
          <div className="doc">
            <div className="avatar" style={{backgroundImage:"url('https://img.freepik.com/premium-photo/cute-cartoon-3d-girl-ware-doctor-cloth-friendly-female-doctor-illustration_862994-64667.jpg?w=2000')"}} />
            <h4>Dr.Poornima</h4>
            <p className="small">Pediatric Dentist</p>
          </div>
          <div className="doc">
            <div className="avatar" style={{backgroundImage:"url('https://tse4.mm.bing.net/th/id/OIP.Qid-gSXAer2oMuP3qepT3QHaHa?pid=Api&P=0&h=180')"}} />
            <h4>Dr.Z.Anisha</h4>
            <p className="small">MDS - Orthodontics</p>
          </div>
          <div className="doc">
            <div className="avatar" style={{backgroundImage:"url('https://png.pngtree.com/png-vector/20240827/ourmid/pngtree-animated-a-doctor-png-image_13382358.png')"}} />
            <h4>Dr.K.Sushmitha</h4>
            <p className="small">MDS - Prosthodontics</p>
          </div>
          <div className="doc">
            <div className="avatar" style={{backgroundImage:"url('https://static.vecteezy.com/system/resources/previews/024/585/358/original/3d-happy-cartoon-doctor-cartoon-doctor-on-transparent-background-generative-ai-png.png')"}} />
            <h4>Dr.Leela</h4>
            <p className="small">Endodontist</p>
          </div>
          <div className="doc">
            <div className="avatar" style={{backgroundImage:"url('https://static.vecteezy.com/system/resources/previews/024/585/403/non_2x/3d-happy-cartoon-doctor-cartoon-doctor-on-transparent-background-generative-ai-png.png')"}} />
            <h4>Dr.Rubina</h4>
            <p className="small">Dental Surgeon</p>
          </div>
          <div className="doc">
            <div className="avatar" style={{backgroundImage:"url('https://static.vecteezy.com/system/resources/previews/024/585/399/original/3d-happy-cartoon-doctor-cartoon-doctor-on-transparent-background-generative-ai-png.png')"}} />
            <h4>Dr.Dinesh</h4>
            <p className="small">orthodontist</p>
          </div>
          

        </div>
      
      </section>
      <Footer />
    </main>

  );
}
