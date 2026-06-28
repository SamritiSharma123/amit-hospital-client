import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="navbar">

        {/* Moving glass reflection */}
        <div className="nav-reflection"></div>

        {/* Logo */}

        <Link
          to="/amit-hospital-client/"
          className="logo"
        >
          Amit Hospital
        </Link>

        {/* Desktop Navigation */}

        <nav className="desktop-nav">

          <Link to="/amit-hospital-client/">
            Home
          </Link>

          <Link to="/amit-hospital-client/about">
            About
          </Link>

          {/* Homepage section */}

          <a href="/amit-hospital-client/#services">
            Services
          </a>

          <Link to="/amit-hospital-client/contact">
            Contact
          </Link>

        </nav>

        {/* Button */}

        <button className="appointment-btn">
          Book Appointment
        </button>

        {/* Mobile Hamburger */}

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </header>

      {/* Mobile Menu */}

      <div className={`mobile-nav ${menuOpen ? "show" : ""}`}>

        <Link
          to="/amit-hospital-client/"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>

        <Link
          to="/amit-hospital-client/about"
          onClick={() => setMenuOpen(false)}
        >
          About
        </Link>

        <a
          href="/amit-hospital-client/#services"
          onClick={() => setMenuOpen(false)}
        >
          Services
        </a>

        <a
          href="/amit-hospital-client/#contact"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </a>

        <button>
          Book Appointment
        </button>

      </div>
    </>
  );
}

export default Header;