import "./Header.css";

function Header() {
  return (
    <header className="navbar">

      {/* Moving reflection */}
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

    </header>
  );
}

export default Header;