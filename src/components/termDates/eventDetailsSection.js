import { Link } from 'gatsby';
import React from 'react';
import EventDetailsSidebar from './eventDetailsSidebar';
import EventDetailsSidebar1 from './eventDetailsSidebar1';

const EventDetailsSection = () => {
  return (
    <div className="event-detalis-area pt-120 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-12">
            <div className="event-main-wrapper mb-30">
              <div className="course-detelis-meta mb-30">
                <div className="course-meta-wrapper">
                  <div className="course-meta-img"></div>
                </div>
              </div>
              <div className="event-details-thumb w-img mb-20"></div>
              <div className="event-contact-info">
              <h1 className="mb-20">Term <span className="down-mark-line"> Dates</span></h1>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-8 col-md-8">
            <EventDetailsSidebar />
            <EventDetailsSidebar1 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsSection;
