import React, { useState } from 'react';
import sgMail from '@sendgrid/mail';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Course',
    message: '',
    school: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const message = {
      to: 'shams@securiwiser.com', // Replace with your own email address
      from: 'shams@securiwiser.com',
      subject: 'hello world',
      html: `
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>School:</strong> ${formData.school}</p>
        <p><strong>Message:</strong> ${formData.message}</p>
      `,
    };
  
    try {
      const response = await fetch('https://shakhsiyah.netlify.app/https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      });
  
      if (response.ok) {
        alert('Email sent successfully!');
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error(error);
      alert(`Failed to send email: ${error.message}`);
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
          <div className="col-xl-6">
            <div className="contact-from-input mb-20">
              <input
                type="text"
                placeholder="School (optional)"
                name="school"
                value={formData.school}
                onChange={handleInputChange}
              />
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
