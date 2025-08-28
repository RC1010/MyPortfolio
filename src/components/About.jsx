import React from "react";
import profilePic from "../assets/Rc 1x1 (1).jpg";

function About() {
  const skills = [
    { name: "HTML", value: 90, color: "bg-primary" },
    { name: "CSS", value: 85, color: "bg-success" },
    { name: "JavaScript", value: 70, color: "bg-warning" },
    { name: "React", value: 75, color: "bg-info" },
  ];

  return (
    <section id="about" className="py-5 bg-light text-dark min-vh-100">
      <div className="container">

        {/* Title */}
        <h2 className="text-center mb-5">About Me</h2>

        {/* About Me Section */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-10">
            <div className="row align-items-center bg-white p-4 rounded shadow-sm">
              {/* Image */}
              <div className="col-md-4 text-center order-0 order-md-1 mb-4 mb-md-0">
                <img
                  src={profilePic}
                  alt="My Profile"
                  className="rounded-circle border border-dark shadow-sm"
                  style={{ width: "180px", height: "180px", objectFit: "cover" }}
                />
              </div>

              {/* Text */}
              <div className="col-md-8">
                <p className="lead mb-4">
                  I am a fresh Computer Science graduate passionate about building full-stack web applications
                  and applying machine learning in real-world projects. I excel in problem-solving, designing
                  scalable solutions, and continuous learning.
                </p>

                <p className="mb-3">
                  <strong>Education:</strong> BS Computer Science, AMA Computer College &nbsp;
                  <strong>GPA: 1.11</strong>
                </p>

                <p className="mb-3">
                  <strong>Projects:</strong>
                  <ul className="mb-0 ps-3">
                    <li>To-Do List Web App using PHP, MySQL, and Bootstrap</li>
                    <li>Waterusers (Ongoing) using PHP, MySQL, and Bootstrap</li>
                    <li>Demand Forecasting System using Python, Streamlit, SMA, SARIMA, and XGBoost</li>
                  </ul>
                </p>

                <p className="mb-0">
                  <strong>Interests:</strong> Problem-solving challenges, open-source contributions, and exploring AI/ML innovations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="bg-white p-4 rounded shadow-sm">
              <h4 className="mb-4 text-center">Skills</h4>
              {skills.map((skill) => (
                <div key={skill.name} className="mb-3">
                  <p className="mb-1">{skill.name}</p>
                  <div className="progress" style={{ height: "20px" }}>
                    <div
                      className={`progress-bar ${skill.color}`}
                      role="progressbar"
                      style={{ width: `${skill.value}%` }}
                      aria-valuenow={skill.value}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {skill.value}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
