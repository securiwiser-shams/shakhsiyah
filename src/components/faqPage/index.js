import React from 'react';
import BreadcrumbTwo from '../common/breadcrumbTwo';
import Footer from '../footer/footer';
import HeaderFour from '../header/header';
import FaqTopic from './faqTopic';

const index = () => {
    return (
        <>
            <HeaderFour />
            <main>
                <BreadcrumbTwo breadcrumbTitleTwo={<>Welcome to help and support center! <br />How may we help you?</>} breadcrumbSubTitleTwo="Help FAQ" />
                <FaqTopic />
            </main>
            <Footer />
        </>
    );
};

export default index;