import React, { useState, useEffect } from "react";

const PlayfulSolutionsLanding = () => {
  const [status, setStatus] = useState("");
  const [services, setServices] = useState([]);
  const [projects, setProjects] = useState([]);

  // Fetch API data when the component loads
  useEffect(() => {
    fetch("https://playfulsolutions-api.onrender.com/api/services")
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.error("Error fetching services:", error));

    fetch("https://playfulsolutions-api.onrender.com/api/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const response = await fetch("https://formspree.io/f/xanenezj", {
      method: "POST",
      body: new FormData(form),
      headers: { "Accept": "application/json" }
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      form.reset();
    } else {
      setStatus("Error sending message. Please try again.");
    }
  };

  return (
    <div className="container">
      {/* Floating Background Elements */}
      <div className="background-shape shape1"></div>
      <div className="background-shape shape2"></div>
      <div className="background-shape shape3"></div>
      <div className="background-shape shape4"></div>

      {/* Hero Section */}
      <header className="hero">
        <h1>Serious Solutions, Playfully Designed</h1>
        <p>
          We help nonprofits and communities create engaging, scalable solutions 
          for real-world challenges—through technology, psychology, and human connection.
        </p>
        <div className="cta-buttons">
          <button className="primary-btn">Let’s Collaborate</button>
          <button className="secondary-btn">Explore Our Work</button>
        </div>
      </header>

      {/* What We Do Section */}
      <section className="what-we-do">
        <h2>What We Do</h2>
        <p>We create play-inspired solutions that drive engagement, healing, and systemic change.</p>
        <ul>
          <li>✔ Nonprofit & Community Consulting</li>
          <li>✔ Tech & Platform Development</li>
          <li>✔ Play-Based Innovation</li>
          <li>✔ Lifestyle & Brand Development</li>
        </ul>
        <button className="link-btn">Discover Our Process</button>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <ul>
          {services.map((service) => (
            <li key={service.id}>
              <strong>{service.name}</strong>: {service.description}
            </li>
          ))}
        </ul>
      </section>

      {/* Featured Work Section */}
      <section className="featured-work">
        <h2>Our Featured Work</h2>
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
        <button className="link-btn">See More Projects</button>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Let’s Work Together</h2>
        <p>Looking to create something meaningful? Let’s collaborate!</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
        {status && <p>{status}</p>}
      </section>
    </div>
  );
};

export default PlayfulSolutionsLanding;
