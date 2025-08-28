import React from "react";

function Hero() {
    return (
        <section id="home" role="main" className="hero text-center d-flex align-items-center min-vh-100">
            <div className="bg-white p-4 p-md-5 rounded shadow hero-box">
                <h1 className="display-1">Hello, I'm Rogelio</h1>
                <p className="lead mb-4">Web Developer | Machine Learning Enthusiast</p>
                <div className="d-flex justify-content-center gap-3 mt-4">
                    <a href="#projects" className="btn btn-primary">View My Work</a>
                </div>
            </div>
        </section>
    );
}

export default Hero;
