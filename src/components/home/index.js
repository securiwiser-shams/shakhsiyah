import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import HeroSection from './heroSection';
import UniversityCardSection from './universityCardSection';
import UniversityMessage from './universityMessage';
import AboutFeatureSection from './aboutFeatureSection'; 
import AboutFeatureVideo from './aboutFeatureVideo';
import GallaryInstaSection from './gallaryInstaSection';






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
                <GallaryInstaSection />
            </main>
            <Footer />
        </>
    );
};

export default index;