import { useState, useEffect } from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";

import "./Hero.css";

function Hero() {

  const images = [
    "./Fac.png",
    "./Reception.png",
    "./Ward.png",
    "./Medicine.png"
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrent((prev) =>
        (prev + 1) % images.length
      );

    }, 4000);

    return () => clearInterval(interval);

  }, []);

  return (

    <section className="hero">

      {/* background image */}

      <img
        src={images[current]}
        alt="Hospital"
        className="hero-image"
      />

      {/* dark overlay */}

      <div className="overlay"></div>


      {/* content */}

      <div className="hero-content">

        <div className="left">

         

          <h1>

            Premium Care <br />
            For Better Health

          </h1>

          <p className="hero-text">

            Advanced diagnosis, specialist consultation,
            diabetic management and premium healthcare
            solutions designed around complete patient care.

          </p>


          <div className="hero-icons">

            <a href="tel:8544923653">

              <FaPhoneAlt />

            </a>


            <a
              href="https://wa.me/918544923653"
              target="_blank"
              rel="noreferrer"
            >

              <FaWhatsapp />

            </a>


            <a href="mailto:samritisharma270@gmail.com">

              <FaEnvelope />

            </a>


            <a
              href="https://maps.app.goo.gl/PRa1hdDSPJT1yaxdA"
              target="_blank"
              rel="noreferrer"
            >

              <FaMapMarkerAlt />

            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;