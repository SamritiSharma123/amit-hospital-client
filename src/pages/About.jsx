import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./About.css";

function About() {

  const images = [
    "./Reception.png",
    "./Ward.png",
    "./Fac.png",
    "./Medicine.png"
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(slider);
  }, []);

  const facilities = [
    {
      title: "Advanced Lab",
      image: "./Advfac.png"
    },
    {
      title: "Chest Care",
      image: "./doctor.jpg"
    },
    {
      title: "Pharmacy",
      image: "./Medicine.png"
    },
    {
      title: "Patient Ward",
      image: "./Ward.png"
    }
  ];

  return (
    <>
      <Header />

      <div className="about-page">

        {/* ================= HERO ================= */}

        <section className="premium-hero">

          {images.map((img, index) => (
            <div
              key={index}
              className={`hero-slide ${index === current ? "active" : ""}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}

          <div className="hero-dark"></div>

          <div className="hero-content">

  

            <h1>
              Redefining <br />
              Modern Healthcare <br />
              Excellence.
            </h1>

          </div>

        </section>


        {/* ================= LEGACY ================= */}

        <section className="legacy-section">

          <div className="legacy-left">

            <h2>
              25+ <br />
              Years Of <br />
              Trusted Care
            </h2>

          </div>

          <div className="legacy-right">

            <p>
              Amit Hospital has established itself as one of the most trusted
              healthcare destinations for advanced chest, respiratory and diabetic
              treatment. Built upon precision diagnosis, ethical practice and
              compassionate consultation, the institution continues to redefine
              modern healthcare excellence for every patient who walks through
              its doors.
            </p>

            <p>
              Combining world-class infrastructure, advanced diagnostics,
              experienced medical expertise and a patient-first philosophy,
              Amit Hospital continues to deliver exceptional treatment outcomes
              while maintaining the highest standards of care.
            </p>

          </div>

        </section>


        {/* ================= DOCTOR ================= */}

        <section className="doctor-showcase">

          <div className="doctor-photo">

            <img src="./Amit.png" alt="Doctor" />

          </div>


          <div className="doctor-details">

            <p className="mini">
              CHIEF SPECIALIST
            </p>

            <h2>
              Dr Amit Sharma
            </h2>

            <div className="doctor-tags">

              <div>MBBS</div>

              <div>DTCD</div>

              <div>Fellowship In Diabetes</div>

            </div>

            <div className="doctor-stats">

              <div>
                <h3>7500+</h3>
                <span>Patients</span>
              </div>

              <div>
                <h3>4.9 ★</h3>
                <span>Rating</span>
              </div>

              <div>
                <h3>25+</h3>
                <span>Years</span>
              </div>

            </div>

            <p className="doctor-desc">

              Dr Amit leads Amit Hospital with exceptional expertise in
              respiratory care, diabetic management and advanced patient-centered
              consultation. His philosophy combines evidence-based medicine,
              compassion and long-term healthcare excellence, earning the trust
              of countless families.

            </p>

          </div>

        </section>


        {/* ================= FACILITIES ================= */}

        <section className="facility-strip">

          <div className="facility-heading">

           

            <h2>
              Designed Around <br />
              Better Patient Care
            </h2>

          </div>

          <div className="facility-row">

            {facilities.map((item, index) => (

              <div className="facility-panel" key={index}>

                <img src={item.image} alt={item.title} />

                <div className="facility-overlay">

                  <h3>{item.title}</h3>

                </div>

              </div>

            ))}

          </div>

        </section>


        {/* ================= TRUST ================= */}

        <section className="trust-premium">

          <div className="trust-glass">

            <h2>4.9 ★★★★★</h2>

            <p>75+ Verified Google Reviews</p>

            <div className="trust-list">

              <span>✓ Emergency Care</span>

              <span>✓ Ambulance Service</span>

              <span>✓ Diabetes Management</span>

              <span>✓ Radiology & X-Ray</span>

              <span>✓ Diagnostic Laboratory</span>

              <span>✓ Specialist Consultation</span>

            </div>

          </div>

        </section>


        {/* ================= CTA ================= */}

        

      </div>
       <Footer />
    </>
   
  );
}

export default About;