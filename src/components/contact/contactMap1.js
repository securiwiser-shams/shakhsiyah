import React from 'react';

const ContactMap = () => {
    return (
        <div className="google-map-area contact-map pt-100 mb-30">
            <h3>North Branch - Map</h3> {/* Added h3 title */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.3146288234557!2d-0.08712088422732708!3d51.580796779647265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761c0daa1fac39%3A0x33777909b76851d5!2s1st%20Floor%2C%20277%20St%20Ann&#39;s%20Rd%2C%20London%20N15%205RG!5e0!3m2!1sen!2suk!4v1680006640111!5m2!1sen!2suk"></iframe>
        </div>
    ); 
};

export default ContactMap;