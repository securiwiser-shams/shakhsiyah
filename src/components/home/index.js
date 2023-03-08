import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import HeroSection from './heroSection';
import UniversityCardSection from './universityCardSection';
import UniversityMessage from './universityMessage';
import AboutFeatureSection from './aboutFeatureSection'; 
import AboutFeatureVideo from './aboutFeatureVideo';
import GallaryInstaSection from './gallaryInstaSection';
import BrowserCourseSection from './browserCourseSection';

const index = () => {
    return (
        <>
        <Header />
            <main>
                <HeroSection />
                <UniversityCardSection />
                <UniversityMessage />
                <AboutFeatureSection />
                <AboutFeatureVideo />
                <BrowserCourseSection />
                <GallaryInstaSection />
            </main>
            <Footer />
        </>
    );
};

export default index;