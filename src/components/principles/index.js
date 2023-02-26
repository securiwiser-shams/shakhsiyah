import React from 'react';
import Footer from '../footer/footer';
import HeaderFour from '../header/headerFour';
import BlogDetailsMain from './blogDetailsMain';

const index = () => {
    return (
        <>
            <HeaderFour />
            <main>
                <BlogDetailsMain />
            </main>
            <Footer />
        </>
    );
};

export default index;