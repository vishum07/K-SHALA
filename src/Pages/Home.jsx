import React from "react";
import "./Home.css";
import herobg from "./images/Herobg.png";
import logo from "./images/logon.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import applink from "./images/applink.png";
import b1 from "./images/b1.png";
import b2 from "./images/b2.png";
import b3 from "./images/b3.png";
import b52 from "./images/b52.png";
import b6 from "./images/b6.png";
import b7 from "./images/b7.png";
import img1 from "./images/class1.png";
import img2 from "./images/class2.png";
import img3 from "./images/class3.png";
import img4 from "./images/class4.png";
import img5 from "./images/class5.png";

import {
  FaCheckCircle,
  FaBookOpen,
  FaCommentDots,
  FaPlayCircle,
  FaShieldAlt,
  FaChartBar,
  FaFileAlt,
  FaComments,
  FaUserGraduate,
  FaPlay,
  FaStar,
  FaBook,
  FaChartLine,
  FaQuestionCircle,
  FaRobot,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";

const Home = () => {
  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="logo">
          <div className="logo-box">
            <img src={logo} alt="logo" className="logo-img"/>
          </div>
          <div>
            <h2>K-Shala</h2>
            <p>Learn Today, Lead Tomorrow</p>
          </div>
        </div>

        <ul className="nav-links">
          <li className="active">Home</li>
          <li>Classes</li>
          <li>Subjects</li>
          <li>
               <Link to="/servicespage">Services</Link>
          </li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="nav-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </nav>

      <section className="hero-section">
        <div className="hero-left">
          <div className="tag">
            ⭐ India's Most Trusted Learning Platform
          </div>

          <h1>
            Learn Smarter. <br />
            Score Higher. <br />
            <span>Shape Your Future.</span>
          </h1>

          <p>
            Complete NCERT based syllabus, interactive video lessons,
            smart quizzes, live doubt solving & real-time progress
            tracking to help you excel in school and beyond.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Get Started Free →
            </button>

            <button className="secondary-btn">
              <FaPlay /> Explore Classes
            </button>
          </div>


     <div className="stats-container">
      <div className="stat-card">
        <div className="icon purple">
          <FaStar />
        </div>

        <div className="text">
          <h2>1M+</h2>
          <p>Students Learning</p>
        </div>
      </div>

      <div className="divider"></div>
      <div className="stat-card">
        <div className="icon pink">
          <FaPlay />
        </div>

        <div className="text">
          <h2>50K+</h2>
          <p>Video Lessons</p>
        </div>
      </div>

      <div className="divider"></div>

      <div className="stat-card">
        <div className="icon cyan">
          <FaQuestionCircle />
        </div>

        <div className="text">
          <h2>100K+</h2>
          <p>Practice Tests</p>
        </div>
      </div>

      <div className="divider"></div>

      <div className="stat-card">
        <div className="icon orange">
          <FaUserGraduate />
        </div>

        <div className="text">
          <h2>500+</h2>
          <p>Expert Teachers</p>
        </div>
      </div>

      <div className="divider"></div>

      <div className="stat-card">
        <div className="icon gold">
          <FaStar />
        </div>

        <div className="text">
          <h2>4.8/5</h2>
          <p>Parent Rating</p>
        </div>
      </div>
    </div>
    </div>

      
        <div className="hero-right">

          <img
            className="student-img"
            src={herobg}
            alt=""
          />

        </div>
      </section>

    <section className="features-section">

  <h2>Everything You Need to Learn & Succeed</h2>

  <div className="features-grid">

  
    <div className="feature-card">
      <div className="feature-icon">
        <img src={b1} alt="" />
      </div>

      <h3>NCERT Based <br /> Syllabus</h3>
      <p>Complete coverage <br /> for 1st to 12th</p>
    </div>

    <div className="feature-card">
      <div className="feature-icon">
        <img src={b2} alt="" />
      </div>

      <h3>Live & Recorded <br /> Classes</h3>
      <p>Learn from expert <br /> teachers</p>
    </div>

    
    <div className="feature-card">
      <div className="feature-icon">
       <img src={b3} alt="" />
      </div>

      <h3>Smart Quizzes & <br /> Tests</h3>
      <p>AI-powered tests <br /> to evaluate skills</p>
    </div>

  
    <div className="feature-card">
      <div className="feature-icon">
        <img src={b52} alt="" />
      </div>

      <h3>Notes & PDFs</h3>
      <p>Download important <br /> notes anytime</p>
    </div>

    <div className="feature-card">
      <div className="feature-icon">
        <img src={b6} alt="" />
      </div>

      <h3>Progress <br /> Tracking</h3>
      <p>Track performance <br /> and improve</p>
    </div>

    <div className="feature-card">
      <div className="feature-icon">
        <img src={b7} alt="" />
      </div>

      <h3>Doubt Solving <br /> 24x7</h3>
      <p>Get your doubts <br /> solved instantly</p>
    </div>

  </div>
</section>

      <section className="classes-section">

      <h2>
        Explore <span>Classes</span>
      </h2>

      <div className="classes-grid">

        <div className="class-card blue-card class1-img">
          <img src={img1} alt=""  className="img-card"/>

          <div className="class-content">
            <h3>1 - 2</h3>
            <p>Foundation</p>
          </div>

         <div className="arrow-btn green-arrow">
           <FaArrowRight />
        </div>
        </div>

        <div className="class-card dark-card class2-img">
          <img src={img2} alt="" className="img-card"/>

          <div className="class-content">
            <h3>3 - 5</h3>
            <p>Build Basics</p>
          </div>

          <div className="arrow-btn blue-arrow">
            <FaArrowRight />
          </div>
        </div>

        <div className="class-card purple-card class3-img">
          <img src={img3} alt="" className="img-card"/>

          <div className="class-content">
            <h3>6 - 8</h3>
            <p>Strengthen Concepts</p>
          </div>

          <div className="arrow-btn purple-arrow">
            <FaArrowRight />
          </div>
        </div>

        <div className="class-card violet-card class4-img">
          <img src={img4} alt="" className="img-card"/>

          <div className="class-content">
            <h3>9 - 10</h3>
            <p>Score Higher</p>
          </div>

          <div className="arrow-btn violet-arrow">
            <FaArrowRight />
          </div>
        </div>

        <div className="class-card red-card class5-img">
          <img src={img5} alt="" className="img-card"/>

          <div className="class-content">
            <h3>11 - 12</h3>
            <p>Prepare for Future</p>
          </div>

          <div className="arrow-btn red-arrow">
            <FaArrowRight />
          </div>
        </div>

      </div>

    </section>

      <section className="download-section">

      <div className="download-left">

        <h1>
          Take Learning Anywhere <br />
          Download <span>Our App</span>
        </h1>

        <div className="features-list">

          <div className="feature-item">
            <FaCheckCircle />
            <p>Learn Offline</p>
          </div>

          <div className="feature-item">
            <FaCheckCircle />
            <p>Personalized Learning</p>
          </div>

          <div className="feature-item">
            <FaCheckCircle />
            <p>Daily Goals & Reminders</p>
          </div>

          <div className="feature-item">
            <FaCheckCircle />
            <p>Safe & Ad-Free Experience</p>
          </div>

        </div>

      </div>

      <div className="phones-section">

        <img
          src={applink}
          alt="phone"
          className="phone-img"
        />

      </div>

      <div className="download-right">

        <h3>Scan to Download</h3>

        <img
          src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https://yourapp.com"
          alt="QR Code"
          className="qr-code"
        />

        <button className="store-btn">
                               
      <a href="https://play.google.com/store/apps/details?id=com.kshetrapatikshala" target="_blank">
             <img src="https://k-shala.com/assets/images/play-store-icon.png"/>
      </a>
      </button>

        <button className="store-btn">        
          <div>      
                <a href="https://apps.apple.com/in/app/k-shala/id6738890750" target="_blank">
                        <img src="https://k-shala.com/assets/images/app-store-icon.png"/>
                </a>          
          </div>
        </button>
      </div>
    </section>

     <footer className="footer-section">
      <div className="footer-overlay">
        <h3>
          COPYRIGHT © 2016 – 2026 KSHETRAPATI INDUSTRIES PVT LTD.
          ALL RIGHTS RESERVED.
        </h3>

        <div className="footer-links">
          <a href="/">Home</a>
           <Link to="/privacypolicy">Privacy Policy</Link>
           <Link to="/termc">Terms & Conditions</Link>
           <Link to="/support">Support</Link>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Home;