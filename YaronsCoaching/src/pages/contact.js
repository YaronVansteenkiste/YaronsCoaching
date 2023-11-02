import React, { useState } from 'react';

function Contact() {
  // Define state for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, e.g., sending data to a server
    console.log(formData);
  };

  return (
    <section id='contact'>
      <div>
        <h1>Stuur mij een berichtje.</h1>
        <h2>Jouw eerste stap naar verandering</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Naam:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Bericht:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows="20"
            />
          </div>
          <div>
            <button type="submit">Verstuur</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
