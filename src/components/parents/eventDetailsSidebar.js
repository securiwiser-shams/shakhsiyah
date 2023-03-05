import { Link } from 'gatsby';
import React from 'react';

const EventDetailsSidebar = () => {
    return (
            <div className="event-sponsor-wrapper mb-30">
                <div className="sopnsor-tittle">
                    <h3>Our schools are regulated by:</h3><br/>
                </div>
                <div className="sponsor-thumb">
                    <a href="#"><img src="/assets/img/logo/dfe.png" alt="sponsor-logo" /></a>
                    <a href="#"><img src="/assets/img/logo/isi.png" alt="sponsor-logo" /></a>
                    <a href="#"><img src="/assets/img/logo/slough.png" alt="sponsor-logo" /></a>
                    <a href="#"><img src="/assets/img/logo/haringey.png" alt="sponsor-logo" /></a>
                </div>
                
            </div>
    );
};

export default EventDetailsSidebar;