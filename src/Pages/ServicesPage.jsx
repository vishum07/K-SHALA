import { Clock3, BadgeCheck,  FolderKanban} from "lucide-react";
import React from "react";
import "./ServicesPage.css";
import bg2 from "./images/bg2.png";
import { Link, useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";

const ServicesPage = () => {
  const navigate = useNavigate();

  const handleExploreCourses = () => {
    const el = document.getElementById("our-training-services");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleTalkToAdvisor = () => {
    navigate("/contact");
  };

  return (
    <div className="services-page">
      <div className="services-back-wrap">
        <BackButton />
      </div>

      <section className="hero-section">
        <div className="hero-left">

          <span className="tag">
            IT TRAINING & DEVELOPMENT
          </span>

          <h1>
            Learn Today, <br />
            <span>Lead Tomorrow</span>
          </h1>

          <p>
            Join our industry-focused IT training programs and build
            in-demand skills for a successful career in technology.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-btn"
              type="button"
              onClick={handleExploreCourses}
            >
              Explore Courses →
            </button>

            <button
              className="secondary-btn"
              type="button"
              onClick={handleTalkToAdvisor}
            >
              Talk to Advisor
            </button>
          </div>

          <div className="features1">

            <div className="feature1-item">
              <h4>Expert Trainers</h4>
              <p>Industry Professionals</p>
            </div>

            <div className="feature1-item">
              <h4>Hands-on Learning</h4>
              <p>Real-time Projects</p>
            </div>

            <div className="feature1-item">
              <h4>Certification</h4>
              <p>Recognized Globally</p>
            </div>
          </div>
        </div>

        <div className="hero-right1">
          <img
            src={bg2}
            alt="developer" />
        </div>

      </section>

      <section id="our-training-services" className="courses-section">

        <span className="course-tag">
          OUR TRAINING SERVICES
        </span>

        <h2>
          Explore Our Top IT Training Programs
        </h2>

        <p className="course-desc">
          Choose from industry-leading courses and kickstart your tech career
        </p>

        <div className="course-cards">

          <div className="course-card">
            <h3>Java</h3>
            <h4>Full Stack Development</h4>

            <p>
              Learn core Java, OOPs, Collections, Spring Boot,
              Hibernate and build enterprise applications.
            </p>
            <div className="course-info">
              <span><div  style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "#f5f3ff",
                borderRadius: "30px",
                }}>  <Clock3 size={18} color="#7c3aed" />
                    6 Months
                    </div></span>
                   <span> <div
                style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "#f5f3ff",
                borderRadius: "30px",
                }}>
                <FolderKanban size={18} color="#7c3aed" />Live Projects</div></span>
                <span> <div
                style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "#f5f3ff",
                borderRadius: "30px",
                }}>
                <BadgeCheck size={18} color="#7c3aed" />Certification</div></span>
              </div>

            <div className="card-buttons">
               <Link to="/javafullstacksyllabus">
              <button className="outline-btn">
                View Details
              </button>
              </Link>

              <button className="filled-btn">
                Enroll Now →
              </button>
            </div>

          </div>

          <div className="course-card">
            <h3>.NET</h3>
            <h4>Full Stack Development</h4>
            <p>
              Master C#, ASP.NET Core, MVC, Web API,
              Entity Framework and modern web applications.
            </p>

            <div className="course-info">
                      <div className="course-info">
                    <span><div  style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "#f5f3ff",
                borderRadius: "30px",
                }}>  <Clock3 size={18} color="#7c3aed" />
                    6 Months
                    </div></span>

                    <span>  <div
                style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "#f5f3ff",
                borderRadius: "30px",
                }}>
                <FolderKanban size={18} color="#7c3aed" />Live Projects</div></span>
               <span> <div
                style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "#f5f3ff",
                borderRadius: "30px",
                }}>
                <BadgeCheck size={18} color="#7c3aed" />Certification</div></span>
                    </div>
            </div>

            <div className="card-buttons">
              <button className="outline-btn">
                View Details
              </button>

              <button className="filled-btn">
                Enroll Now →
              </button>
            </div>

          </div>

          <div className="course-card">
            <h3>Python</h3>
            <h4>Full Stack Development</h4>
            <p>
              Learn Python programming, Django, Flask,
              Data Science and ML with real-world projects.
            </p>

            <div className="course-info">
                <div className="course-info">
                    <span><div  style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "#f5f3ff",
                borderRadius: "30px",
                }}>  <Clock3 size={18} color="#7c3aed" />
                    6 Months
                    </div></span>
                    <span>  <div
                style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "#f5f3ff",
                borderRadius: "30px",
                }}>
                <FolderKanban size={18} color="#7c3aed" />Live Projects</div></span>
               <span> <div
                style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "#f5f3ff",
                borderRadius: "30px",
                }}>
                <BadgeCheck size={18} color="#7c3aed" />Certification</div></span>
                    </div>
            </div>

            <div className="card-buttons">
             <button className="outline-btn">View Details</button>
              <button className="filled-btn">
                Enroll Now →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;