import React from "react";

function Contact() {
  return (
    <section id="contact" className="p-5 bg-light min-vh-100">
      <div className="container">
        <h2 className="text-center mb-5">Contact Me</h2>

        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="bg-white p-4 rounded shadow-sm d-flex flex-column flex-md-row">

              {/* Left Column: Social Buttons */}
              <div className="col-md-4 text-center text-md-start mb-4 mb-md-0">
                <h5 className="mb-3">Connect with me</h5>
                <div className="d-flex flex-column gap-2">
                  <a
                    href="https://linkedin.com/in/rogelio-cuya-iii"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary d-flex align-items-center justify-content-center"
                  >
                    <i className="bi bi-linkedin me-2"></i> LinkedIn
                  </a>
                  <a
                    href="https://github.com/RC1010"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-dark d-flex align-items-center justify-content-center"
                  >
                    <i className="bi bi-github me-2"></i> GitHub
                  </a>
                </div>
              </div>

              {/* Divider */}
              <div className="d-none d-md-block border-start mx-4"></div>

              {/* Right Column: Recruiter Message */}
              <div className="col-md-7 d-flex flex-column justify-content-center text-center text-md-start">
                <h5>Recruiters</h5>
                <p className="mb-3">
                  If you’d like to get in touch regarding opportunities, please connect with me on LinkedIn.
                </p>
                <p>
                  I’m happy to discuss job openings, collaborations, or answer any questions about my projects.
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
