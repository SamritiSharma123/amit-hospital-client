import "./Contact.css";

function Contact() {
  return (
    <section className="contact-premium" id="contact">

      {/* moving glass reflection */}
      <div className="contact-reflection"></div>

      {/* LEFT SIDE */}

      <div className="contact-left">

        <p className="contact-mini">
          BOOK APPOINTMENT
        </p>

        <h2>
          Premium Healthcare <br />
          Begins With Trust
        </h2>

        <p className="contact-desc">
          Connect instantly with Amit Hospital, schedule appointments,
          speak with specialists and access modern healthcare services
          designed entirely around patient comfort and excellence.
        </p>


        {/* MAP */}

        <div className="map-card">

          <h3>Hospital Location</h3>

          <iframe
            src="https://www.google.com/maps?q=Amit%20Hospital%20Kaithal&output=embed"
            width="100%"
            height="300"
            style={{
              border: 0,
              borderRadius: "20px"
            }}
            loading="lazy"
            title="hospital-map"
          ></iframe>

        </div>

      </div>


      {/* RIGHT SIDE FORM */}

      <div className="contact-right">

        <form
          action="https://formsubmit.co/samritisharma270@gmail.com"
          method="POST"
          className="appointment-form"
        >

          {/* hidden settings */}

          <input
            type="hidden"
            name="_subject"
            value="New Appointment Request"
          />

          <input
            type="hidden"
            name="_captcha"
            value="false"
          />

          <input
            type="hidden"
            name="_template"
            value="table"
          />


          {/* form fields */}

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />

          <input
            type="date"
            name="date"
            required
          />

          <select
            name="department"
            required
          >

            <option value="">
              Select Department
            </option>

            <option>
              Chest Care
            </option>

            <option>
              Diabetes Care
            </option>

            <option>
              General Surgery
            </option>

            <option>
              Emergency Care
            </option>

            <option>
              Radiology
            </option>

          </select>

          <textarea
            name="message"
            rows="4"
            placeholder="Describe Health Concern"
          ></textarea>


          {/* submit */}

          <button type="submit">

            Book Appointment

          </button>

        </form>


        {/* CONTACT BUTTONS */}

        <div className="contact-actions">

          <a href="tel:8544923653">

            Call Now

          </a>


          <a
            href="https://wa.me/918544923653?text=Hello%20I%20want%20to%20book%20an%20appointment%20with%20Amit%20Hospital"
            target="_blank"
            rel="noreferrer"
          >

            WhatsApp

          </a>


          <a href="mailto:samritisharma270@gmail.com">

            Email Us

          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;