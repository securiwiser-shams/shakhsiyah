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
                <Breadcrumb breadcrumbTitle="Instructor" breadcrumbSubTitle="David Allberto" />
                <InstructorProfile />
            </main>
            <Footer />
        </>
    );
};

export default index;