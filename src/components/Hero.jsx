import { useState, useEffect } from "react";
import "./Hero.css";

function Hero() {
  const images = [
    "./Fac.png",
    "./Reception.png",
    "./Ward.png",
    "./Medicine.png",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">

      {/* actual image */}
      <img
        src={images[current]}
        alt="hospital"
        className="hero-image"
      />

      <div className="overlay"></div>

      <div className="hero-content">
        <div className="left">

          <span className="tag">
            CHEST • DIABETES SPECIALIST
          </span>

          <h1>
            Premium Care <br />
            For Better Health
          </h1>

          <p>
            Trusted diagnosis, advanced treatment and specialist consultation
            for respiratory and diabetic care.
          </p>

          <div className="buttons">
            <button>Schedule Consultation</button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;