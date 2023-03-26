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

  const { name, phone, email, subject, message } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/.netlify/functions/sendEmail', formData);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
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
                <option value='Course'>Course</option>
                <option value='Financial Aid'>Financial Aid</option>
                <option value='Payment'>Payment</option>
                <option value='Information'>Information</option>
              </select>
            </div>
          </div>
          <div className='col-xl-12'>
            <div className='contact-from-input mb-20'>
              <textarea
                placeholder='Message'
                name='message'
                value={message}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div className='colxl-2 '>
            <div className='cont-btn mb-20'>
              <button type='submit' className='cont-btn'>
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
