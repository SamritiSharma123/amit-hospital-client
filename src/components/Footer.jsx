import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-reflection"></div>

      <div className="footer-top">

        {/* left */}

        <div className="footer-brand">

          <h2>Amit Hospital</h2>

          <p>
            Delivering compassionate healthcare with advanced medical
            excellence, modern infrastructure and patient-first treatment
            designed around trust, comfort and long term wellness.
          </p>

        </div>


        {/* links */}

        <div className="footer-links">

          <h3>Quick Links</h3>

          <a href="/">Home</a>

          <a href="/about">About</a>

          <a href="#services">Services</a>

          <a href="#contact">Contact</a>

        </div>


        {/* contact */}

        <div className="footer-contact">

          <h3>Contact Information</h3>

          <p>Phone: 083968 41452</p>

          <p>Email: amithospitalkaithal@gmail.com</p>

          <p>
            Kaithal – Pundri Road, Near Defence Colony,
            Haryana 136027
          </p>

        </div>

      </div>


      {/* bottom */}

      <div className="footer-bottom">

        <p>
          © 2026 Amit Hospital. All Rights Reserved.
        </p>

        <span>
          Trusted Healthcare • 4.9 Rating • 75+ Verified Reviews
        </span>

      </div>

    </footer>
  );
}

export default Footer;