import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section">

      {/* Left Content */}
      <div className="hero-left">

        <p className="hero-subtitle">
          ADVANCED CHEST & RESPIRATORY INSTITUTE
        </p>

        <h1 className="hero-title">
          Redefining <br />
          Respiratory <br />
          Excellence
        </h1>

        <p className="hero-description">
          Specialized pulmonary care powered by precision diagnostics,
          advanced respiratory medicine, and world-class healthcare expertise.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Book Appointment
          </button>

          <button className="secondary-btn">
            Explore Services
          </button>
        </div>

      </div>

      {/* Right Visual */}
      <div className="hero-right">

        <div className="glass-circle">

          <div className="pulse-ring"></div>

          <img
            src="https://cdn-icons-png.flaticon.com/512/2966/2966489.png"
            alt="lungs"
          />

        </div>

        {/* floating cards */}

        <div className="stat-card card1">
          <h3>15+</h3>
          <p>Specialists</p>
        </div>

        <div className="stat-card card2">
          <h3>24/7</h3>
          <p>Critical Care</p>
        </div>

      </div>

    </section>
  );
}

export default Hero;