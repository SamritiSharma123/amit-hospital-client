import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      {/* Background Overlay */}
      <div className="hero-overlay"></div>

      {/* Main Content */}

      <div className="hero-content">

        <div className="left-content">

          <p className="hero-subtitle">
            CHEST & DIABETIC CENTER
          </p>

          <h1 className="hero-title">
            Breathe Better, <br />
            Live Healthier.
          </h1>

          <p className="hero-text">
            Specialized respiratory and diabetic care designed
            around precision treatment, trust and compassionate healing.
          </p>

          <div className="hero-buttons">

            <button className="book-btn">
              Book Appointment
            </button>

            <button className="explore-btn">
              Learn More
            </button>

          </div>

        </div>


        {/* Doctor Card */}

        <div className="doctor-card">

          <h2>Dr. Amit</h2>

          <p>
            MBBS • DTCD <br />
            Fellowship in Diabetes
          </p>

        </div>

      </div>

    </section>
  );
}

export default Hero;