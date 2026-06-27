import { useState } from "react";
import "./Facilities.css";

function Facilities() {
  const [activeImage, setActiveImage] = useState("/lab.jpg");

  const facilities = [
    {
      title: "Advanced Diagnostic Lab",
      desc: "Precision testing and advanced health diagnostics.",
      image: "/Advfac.jpg",
    },
    {
      title: "In-House Pharmacy",
      desc: "Immediate medicine access under one roof.",
      image: "/Medicine.jpg",
    },
    
  ];

  return (
    <section className="facilities-section">

      <div className="facilities-left">

        <p className="facilities-tag">
          SPECIALIZED CARE
        </p>

        <h2>
          Advanced Facilities <br />
          & Treatment Expertise
        </h2>

        <p className="facilities-text">
          Amit Hospital combines specialized chest and diabetic care
          with advanced diagnostics, modern treatment protocols and
          patient-focused healthcare infrastructure built around trust.
        </p>

      </div>

      <div className="facilities-right">

        <div className="facility-grid">

          {facilities.map((item, index) => (
            <div
              key={index}
              className="facility-card"
              onMouseEnter={() => setActiveImage(item.image)}
            >
              <span>0{index + 1}</span>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

            </div>
          ))}

        </div>

        <div className="facility-preview">

          <img src={activeImage} alt="facility" />

        </div>

      </div>

    </section>
  );
}

export default Facilities;