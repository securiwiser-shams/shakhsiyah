import React, { useState } from 'react';
import axios from 'axios';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const [showModal, setShowModal] = useState(false);

  const { name, phone, email, subject, message } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    const errors = {};
    if (!name) errors.name = 'Name is required';
    if (!phone) errors.phone = 'Phone number is required';
    if (!email) errors.email = 'Email is required';
    if (!subject) errors.subject = 'Subject is required';
    if (!message) errors.message = 'Message is required';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      const res = await axios.post('/.netlify/functions/sendEmail', {
        name,
        phone,
        email,
        subject,
        message,
      });
      console.log(res.data);
      setFormErrors({});
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
      });
      setShowModal(true);
    } catch (err) {
      console.error(err);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='contact-form'>
      <form onSubmit={handleSubmit}>
        <div className='row'>
          <div className='col-xl-6'>
            <div className='contact-from-input mb-20'>
              <input
                type='text'
                placeholder='Name'
                name='name'
                value={name}
                onChange={handleChange}
              />
              {formErrors.name && (
                <span className='error'>{formErrors.name}</span>
              )}
            </div>
          </div>
          <div className='col-xl-6'>
            <div className='contact-from-input mb-20'>
              <input
                type='text'
                placeholder='Phone'
                name='phone'
                value={phone}
                onChange={handleChange}
              />
              {formErrors.phone && (
                <span className='error'>{formErrors.phone}</span>
              )}
            </div>
          </div>
          <div className='col-xl-6'>
            <div className='contact-from-input mb-20'>
              <input
                type='text'
                placeholder='Email'
                name='email'
                value={email}
                onChange={handleChange}
              />
              {formErrors.email && (
                <span className='error'>{formErrors.email}</span>
              )}
            </div>
          </div>
          <div className='col-xl-6'>
            <div className='contact-select'>
              <select
                className='mb-20'
                name='subject'
                value={subject}
                onChange={handleChange}
              >
                <option value=''>Select Department</option>
                <option defaultValue='Subject'>Course</option>
                <option defaultValue='Subject'>Financial Aid</option>
                <option defaultValue='Subject'>Payment</option>
                <option defaultValue='Subject'>Information</option>
              </select>
              {formErrors.subject && (
                <span className='error'>{formErrors.subject}</span>
              )}
            </div>
          </div>
        <div className='col-xl-12'>
          <button className='edu-btn' type='submit'>
            Submit
          </button>
        </div>
        </div>
      </form>
    </div>
  );
};

export default ContactFormSection;
