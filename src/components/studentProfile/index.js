import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import Footer from '../footer/footer';
import HeaderFour from '../header/headerFour';
import StudentProfileSection from './studentProfileSection';

const index = () => {
    return (
        <>
            <HeaderFour />
            <main>
                <Breadcrumb breadcrumbTitle="User Profile" breadcrumbSubTitle="David Allberto" />
                <StudentProfileSection />
            </main>
            <Footer />
        </>
    );
};

export default index;