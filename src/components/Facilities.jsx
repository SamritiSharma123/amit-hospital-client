import "./Facilities.css";

function Facilities() {
  const facilities = [
    {
      title: "Advanced Diagnostic Lab",
      desc: "State-of-the-art diagnostic equipment for accurate and reliable test results.",
      image: "./Advfac.png",
    },
    {
      title: "Specialist Consultation",
      desc: "Experienced specialists providing personalized consultation and evidence-based treatment.",
      image: "./doctor.jpg",
    },
    {
      title: "In-House Pharmacy",
      desc: "Fully stocked pharmacy ensuring genuine medicines and immediate availability.",
      image: "./Medicine.png",
    },
    {
      title: "Comfortable Patient Care",
      desc: "Well-equipped rooms and attentive care for faster recovery.",
      image: "./Ward.png",
    },
  ];

  return (
    <section className="facilities">

      <div className="section-heading">

        <span>OUR FACILITIES</span>

        <h2>Designed Around Better Patient Care</h2>

        <div className="heading-line"></div>

        <p>
          Amit Hospital combines advanced technology, modern infrastructure
          and specialized care to deliver the best possible experience.
        </p>

      </div>

      <div className="facilities-grid">

        {facilities.map((item, index) => (
          <div className="facility-card" key={index}>

            <div className="facility-image">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="facility-content">

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

             

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Facilities;