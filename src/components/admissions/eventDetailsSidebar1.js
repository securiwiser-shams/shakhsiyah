import { Link } from 'gatsby';
import React from 'react';

const EventDetailsSidebar1 = () => {
    return (
            <div className="event-sponsor-wrapper mb-30">
                <div className="sopnsor-tittle">
                    <h3>We are members of/work with:</h3><br/>
               </div>
                <div className="sponsor-thumb">
                    <a href="#"><img src="/assets/img/logo/isa.png" alt="sponsor-logo" /></a>
                    <a href="#"><img src="/assets/img/logo/ams.png" alt="sponsor-logo" /></a>
                    <a href="#"><img src="/assets/img/logo/nida.png" alt="sponsor-logo" /></a>
                    <a href="#"><img src="/assets/img/logo/cpd.png" alt="sponsor-logo" /></a>
                    <a href="#"><img src="/assets/img/logo/securiwiser.png" alt="sponsor-logo" /></a>

                </div>
                
            </div>
    );
};

export default EventDetailsSidebar1;