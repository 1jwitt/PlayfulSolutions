import React, { useState, useEffect } from "react";

function App() {
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
      <h1>Playful Solutions</h1>

      {/* Services Section */}
      <h2>Our Services</h2>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            <strong>{service.name}</strong>: {service.description}
          </li>
        ))}
      </ul>

      {/* Projects Section */}
      <h2>Our Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <strong>{project.title}</strong>: {project.description}
          </li>
        ))}
      </ul>

      {/* Contact Form */}
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      {status && <p>{status}</p>}
    </div>
  );
}

export default App;
