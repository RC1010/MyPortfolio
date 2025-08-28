import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><h1>MyPortfolio</h1></a>

        {/* Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''} justify-content-end`}>
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link" href="#home"><h4>Home</h4></a></li>
            <li className="nav-item"><a className="nav-link" href="#about"><h4>About</h4></a></li>
            <li className="nav-item"><a className="nav-link" href="#projects"><h4>Projects</h4></a></li>
            <li className="nav-item"><a className="nav-link" href="#contact"><h4>Contact</h4></a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
