import React from 'react';
import BreadcrumbTwo from '../common/breadcrumbTwo';
import Footer from '../footer/footer';
import HeaderFour from '../header/header';
import FaqContentSection from './faqContentSection';

const index = () => {
    return (
        <>
            <HeaderFour />
            <main>
                <BreadcrumbTwo breadcrumbTitleTwo={<>Welcome to help and support center! <br/>How may we help you?</>} breadcrumbSubTitleTwo="Help FAQ" />
                <FaqContentSection />
            </main>
            <Footer />
        </>
    );
};

export default index;