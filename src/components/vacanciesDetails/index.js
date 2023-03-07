import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import Footer from '../footer/footer';
import HeaderFour from '../header/header';
import EventDetailsSection from './eventDetailsSection';

const index = () => {
    return (
        <>
            <HeaderFour />
            <main>
                <Breadcrumb breadcrumbTitle="Operations Manager" breadcrumbSubTitle="Operations Manager" />
                <EventDetailsSection />
            </main>
            <Footer />
        </>
    );
};

export default index;