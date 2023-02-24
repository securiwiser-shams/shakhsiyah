import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import Footer from '../footer/footer';
import HeaderFour from '../header/headerFour';
import ContactFormSection from './contactFormSection';
import ContactMap from './contactMap';
import ContactSidebar from './contactSidebar';

const index = () => {
    return (
        <>
            <HeaderFour />
            <main>
                <Breadcrumb breadcrumbTitle="Contact" breadcrumbSubTitle="Contact" />
                <div className="contact-area pt-120 pb-90">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7 col-md-12">
                                <div className="contact-area-wrapper">
                                    <div className="section-title mb-50">
                                        <h2>Get in Touch</h2>
                                    </div>
                                    <ContactFormSection />
                                    <ContactMap />
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-5 col-md-8">
                                <ContactSidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default index;