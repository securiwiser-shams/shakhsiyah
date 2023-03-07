import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import Footer from '../footer/footer';
import HeaderFour from '../header/header';
import InstructorSection from './instructorSection';

const index = () => {
    return (
        <>
        <HeaderFour />
            <main>
                <Breadcrumb breadcrumbTitle="Senior Leadership Team" breadcrumbSubTitle="Senior Leadership Team" />
                <InstructorSection />
            </main>
            <Footer />
        </>
    );
};

export default index;