import React from "react";

function Projects() {
  const projectList = [
    {
      title: "To-Do List App",
      description: "Task manager with categories, priorities, and AJAX pagination.",
      link: "https://github.com/RC1010/To-do-Lists",
    },
    {
      title: "Water Users System (Ongoing)",
      description: "Customer order tracking + forecasting insights.",
      link: "https://github.com/RC1010/waterusers",
    },
    {
      title: "Demand Forecasting System",
      description: "SMA, SARIMA, and XGBoost models on Streamlit.",
      link: "https://github.com/RC1010/Demand-Forecasting-Algorithm",
    },
  ];

  return (
    <section id="projects" className="projects p-5 bg-light min-vh-100">
      <h2>Projects</h2>
      <div className="project-cards mt-5">
        {projectList.map((project, index) => (
          <div className="card mb-3 shadow-sm rounded" key={index}>
            <div className="card-body">
              <h3 className="card-title">{project.title}</h3>
              <p className="card-text">{project.description}</p>
              <a
                href={project.link}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
