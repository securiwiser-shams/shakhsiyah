import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import Footer from '../footer/footer';
import HeaderFour from '../header/headerFour';
import InstructorProfile from './instructorProfile';

const index = () => {
    return (
        <>
            <HeaderFour />
            <main>
                <Breadcrumb breadcrumbTitle="Farah Ahmed" breadcrumbSubTitle="Farah Ahmed" />
                <InstructorProfile />
            </main>
            <Footer />
        </>
    );
};

export default index;