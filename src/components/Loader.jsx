import "./Loader.css";

function Loader() {
  return (
    <div className="loader-page">

      <div className="floating-light one"></div>
      <div className="floating-light two"></div>

      <div className="content">

        <div className="accent-line"></div>

        <h1 className="brand-text">
          AMIT HOSPITAL
        </h1>

        <div className="shine"></div>

        <p className="tagline">
          Excellence • Precision • Care
        </p>

        <div className="progress-track">
          <div className="progress-bar"></div>
        </div>

      </div>

    </div>
  );
}

export default Loader;