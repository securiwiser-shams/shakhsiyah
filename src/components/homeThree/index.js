import React from 'react';
import FooterTwo from '../footer/footerTwo';
import HeaderThree from '../header/headerThree';
import BlogSection from '../homeTwo/blogSection';
import AcademicCourse from './academicCourse';
import CampusSection from './campusSection';
import CounterSectionThree from './counterSectionThree';
import EventSection from './eventSection';
import GallaryInstaSection from './gallaryInstaSection';
import HeroSectionThree from './heroSectionThree';
import UniversityCardSection from './universityCardSection';
import UniversityMessage from './universityMessage';
import SeoComponent from "../seo"

const IndexPage = () => {
    return (
      <>
        <SeoComponent 
          title="Home Page"
          description="This is the homepage of my Gatsby site"
          // provide the correct image path here
          image="/images/homepage.png"
        />
        <HeaderThree />
        <main>
          <HeroSectionThree />
          <UniversityCardSection />
          <UniversityMessage />
          <AcademicCourse />
          <CounterSectionThree />
          <CampusSection />
          <EventSection />
          <BlogSection />
          <GallaryInstaSection />
        </main>
        <FooterTwo />
      </>
    );
  };
  