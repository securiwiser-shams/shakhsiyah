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
import Seo from "../components/Seo"

const IndexPage = () => {
    return (
        <>
            <Seo 
                title="Home Page"
                description="This is the homepage of my Gatsby site"
                image="/static/gatsby-icon.jpg"
            />
            <Header />
            <main>
                <HeroSection />
                <UniversityCardSection />
                <UniversityMessage />
                <AboutFeatureSection />
                <AboutFeatureVideo />
                <BrowserCourseSection />
                <PartnerSection />
                <GallaryInstaSection />
            </main>
            <Footer />
        </>
    );
};

export default IndexPage;
