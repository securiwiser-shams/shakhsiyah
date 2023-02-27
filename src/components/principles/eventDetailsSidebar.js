import { Link } from 'gatsby';
import React from 'react';

const EventDetailsSidebar = () => {
    return (
            <div className="event-sponsor-wrapper mb-30">
                <div className="sopnsor-tittle">
                    <h4>Sponsor by</h4>
                </div>
                <div className="sponsor-thumb">
                    <a href="#"><img src="/assets/img/logo/sopnsor-logo-1.png" alt="sponsor-logo" /></a>
                    <a href="#"><img src="/assets/img/logo/sopnsor-logo-2.png" alt="sponsor-logo" /></a>
                </div>
            </div>
    );
};

export default EventDetailsSidebar;