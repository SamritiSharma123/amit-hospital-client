import { useState } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="navbar">

        {/* Premium moving reflection */}
        <div className="nav-reflection"></div>

        {/* Logo */}
        <div className="logo">
          Amit Hospital
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Appointment Button */}
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

        <a href="#home" onClick={() => setMenuOpen(false)}>
          Home
        </a>

        <a href="#about" onClick={() => setMenuOpen(false)}>
          About
        </a>

        <a href="#services" onClick={() => setMenuOpen(false)}>
          Services
        </a>

        <a href="#contact" onClick={() => setMenuOpen(false)}>
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