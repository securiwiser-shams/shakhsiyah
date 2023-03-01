import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import Footer from '../footer/footer';
import HeaderFour from '../header/headerFour';
import EventDetailsSection from './eventDetailsSection';

const index = () => {
    return (
        <>
            <HeaderFour />
            <main>
                <Breadcrumb breadcrumbTitle="Job Description: Operations Manager" breadcrumbSubTitle="Operations Manager" />
                <EventDetailsSection />
            </main>
            <Footer />
        </>
    );
};

export default index;