import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import EMAIL_CONFIG from '../config';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(EMAIL_CONFIG.serviceId, EMAIL_CONFIG.templateId, e.target, EMAIL_CONFIG.userId)
      .then((response) => {
        console.log('Email sent successfully:', response);
      })
      .catch((error) => {
        console.error('Email error:', error);
      });
  };

  return (
    <section id="contact">
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
              placeholder="Jouw naam"
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
              placeholder="jouwemail@email.com"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="subject">Onderwerp</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Onderwerp"
              value={formData.subject}
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
              placeholder="Jouw Boodschap"
              onChange={handleInputChange}
              required
              rows="6"
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
