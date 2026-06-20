import { useState } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="navbar">

        <div className="nav-shine"></div>

        <div className="logo">
          AMIT HOSPITAL
        </div>

        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>

        <button className="book-btn">
          Book Appointment
        </button>

        {/* Mobile menu button */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </header>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <button>Book Appointment</button>
      </div>
    </>
  );
}

export default Header;