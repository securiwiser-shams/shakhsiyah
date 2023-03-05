import React from 'react';
import Footer from '../footer/footer';
import HeaderFour from '../header/headerFour';
import BlogDetailsMain from './blogDetailsMain';
import Feature1Section from './feature1Section';
import Feature2Section from './feature2Section';
import Feature3Section from './feature3Section';
import Feature4Section from './feature4Section';

const index = () => {
    return (
        <>
            <HeaderFour />
            <main>
                <BlogDetailsMain />
                <Feature1Section />
                <Feature2Section />
                <Feature3Section />
                <Feature4Section />
                </main>
            <Footer />
        </>
    );
};

export default index;