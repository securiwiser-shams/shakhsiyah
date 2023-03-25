import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import HeroSection from './heroSection';
import UniversityCardSection from './universityCardSection';
import UniversityMessage from './universityMessage';
import AboutFeatureSection from './aboutFeatureSection'; 
import AboutFeatureVideo from './aboutFeatureVideo';
import PartnerSection from './partnerSection';
import GallaryInstaSection from './gallaryInstaSection';
import BrowserCourseSection from './browserCourseSection';
import JounerSection from './jouner';

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
                <PartnerSection />
                <JounerSection/>
                <GallaryInstaSection />
            </main>
            <Footer />
        </>
    );
};

export default index;