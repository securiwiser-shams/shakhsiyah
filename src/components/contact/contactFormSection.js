import React, { useState } from 'react';
import mail from '@sendgrid/mail';
const path = require('path');

mail.setApiKey(process.env.SENDGRID_API_KEY);

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Course',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = {
      from: process.env.SENDGRID_AUTHORIZED_EMAIL,
      to: 'shams@securiwiser.com',
      subject: formData.subject,
      html: `
        <div>
          <p><strong>Name: </strong>${formData.name}</p>
          <p><strong>Email: </strong>${formData.email}</p>
          <p><strong>Subject: </strong>${formData.subject}</p>
          <p><strong>Message: </strong><br/>${formData.message}</p>
        </div>
      `,
    };

    try {
      await mail.send(message);
      alert('Email sent successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to send email!');
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-xl-6">
            <div className="contact-from-input mb-20">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="contact-from-input mb-20">
              <input
                type="text"
                placeholder="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="contact-from-input mb-20">
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="contact-select">
              <select
                className="mb-20"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
              >
                <option value="Course">Course</option>
                <option value="Financial Aid">Financial Aid</option>
                <option value="Payment">Payment</option>
                <option value="Information">Information</option>
              </select>
            </div>
          </div>
          <div className="col-xl-12">
            <div className="contact-from-input mb-20">
              <textarea
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>
          </div>
          <div className="col-xl-2 ">
            <div className="cont-btn mb-20">
              <button type="submit" className="cont-btn">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactFormSection;
