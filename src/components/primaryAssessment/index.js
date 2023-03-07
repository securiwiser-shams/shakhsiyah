import React from 'react';
import Footer from '../footer/footer';
import HeaderFour from '../header/header';
import BlogDetailsMain from './blogDetailsMain';
import Feature1Section from './feature1Section';
import Feature2Section from './feature2Section';

const index = () => {
    return (
        <>
            <HeaderFour />
            <main>
                <BlogDetailsMain />
                <Feature1Section />
                <Feature2Section />
                </main>
            <Footer />
        </>
    );
};

export default index;