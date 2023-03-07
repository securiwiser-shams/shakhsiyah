import React from 'react';
import Breadcrumb from './breadcrumbVacancies';
import Footer from '../footer/footer';
import HeaderFour from '../header/header';
import EventMainSection from './eventMainSection';

const index = () => {
    return (
        <>
            <HeaderFour />
            <main>
                <Breadcrumb breadcrumbTitle="Vacancies" breadcrumbSubTitle="Vacancies" />
                <EventMainSection />
            </main>
            <Footer />
        </>
    );
};

export default index;