import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import Footer from '../footer/footer';
import HeaderFour from '../header/headerFour';
import InstructorSection from './instructorSection';

const index = () => {
    return (
        <>
        <HeaderFour />
            <main>
                <Breadcrumb breadcrumbTitle="Instructor" breadcrumbSubTitle="Instructor" />
                <InstructorSection />
            </main>
            <Footer />
        </>
    );
};

export default index;