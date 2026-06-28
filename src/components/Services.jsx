import "./Services.css";

function Services() {

 const services = [
  {
    title: "Ambulance Service",
    desc: "Rapid emergency transportation support ensuring immediate medical assistance whenever urgent care is required."
  },

  {
    title: "Emergency Care",
    desc: "Immediate critical care response with continuous patient monitoring and fast medical intervention."
  },

  {
    title: "General Surgery",
    desc: "Safe and advanced surgical procedures performed with precision, expertise and modern medical protocols."
  },

  {
    title: "Laboratory Services",
    desc: "Accurate pathology testing supported by advanced diagnostic systems for dependable clinical evaluation."
  },

  {
    title: "Nursing Services",
    desc: "Dedicated patient-centered nursing care focused on comfort, recovery support and continuous supervision."
  },

  {
    title: "X-Ray & Radiology",
    desc: "Modern imaging and radiology solutions enabling faster diagnosis and highly accurate treatment planning."
  }
];

  return (

    <section className="services-home">

      <div className="services-heading">

        <p>OUR SPECIALIZED SERVICES</p>

        <h2>
          Excellence Across <br />
          Every Department
        </h2>

        <div className="service-line"></div>

      </div>


      <div className="services-grid">

        {services.map((service, index) => (

          <div className="service-card-premium" key={index}>

            <div className="service-reflection"></div>

            <div className="top-accent"></div>

            <div className="service-content">

              <h3>{service.title}</h3>

              <p>{service.desc}</p>

              <span>Premium Medical Care</span>

            </div>

          </div>

        ))}

      </div>


      <div className="service-bottom-strip">

  <span>Ambulance Support</span>

  <span>Emergency Care</span>

  <span>General Surgery</span>

  <span>Laboratory Testing</span>

  <span>Nursing Care</span>

  <span>Radiology</span>

</div>

    </section>
  );
}

export default Services;