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
import SeoComponent from "../components/seo"

const IndexPage = () => {
  return (
    <>
      <SeoComponent 
        title="Home Page"
        description="This is the homepage of my Gatsby site"
        // provide the correct image path here
        image="/images/homepage.png"
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
