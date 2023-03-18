import React from 'react';
import ScrollAnimation from "react-animate-on-scroll"
import { StaticImage } from 'gatsby-plugin-image';
import "../../animate.min.css";


const PartnerSection = () => {
    return (
        <div className="patner-area pt-110 pb-80"> 
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-4">
                        <div className="partner-box mb-30">
                            <div className="partner-thumb d-none d-sm-block">
                                <StaticImage src="./partner.png" alt="partner-png" width={757} height={474} />
                            </div>
                            <div className="section-title mb-30">
                            <ScrollAnimation animateIn="animate__fadeIn" animateOut="animate__fadeOut">
                                <h3 class="font-partner"> Our Schools are <span className="down-mark-line-2"> Regulated </span> by</h3><br/><br/>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="animate__fadeIn" animateOut="animate__fadeOut">
                            <h3 class="font-partner"> We are <span className="down-mark-line-2"> Members </span> of/Work with</h3>
                            </ScrollAnimation>
                            </div>
                            <div className="Partner-content">
                                <div className="partner-text">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-8 col-md-8"> 
                        <div className="partner-wrapper">
                            <div className="singel-partner">
                            <ScrollAnimation
                             animateIn="animate__fadeIn"
                             animateOut="animate__fadeOut"
                              >
                                <StaticImage src="./dfe.png" alt="not found" width={105} height={62} />
                                </ScrollAnimation> 
                            </div>
                            <div className="singel-partner">
                            <ScrollAnimation
                             animateIn="animate__fadeIn"
                             animateOut="animate__fadeOut"
                              >
                                <StaticImage src="./isi.png" alt="not found" width={240} height={43} />
                                </ScrollAnimation> 
                            </div>
                            <div className="singel-partner">
                            <ScrollAnimation
                             animateIn="animate__fadeIn"
                             animateOut="animate__fadeOut"
                              >
                                <StaticImage src="./slough.png" alt="not found" width={125} height={53} />
                                </ScrollAnimation> 
                            </div>
                            <div className="singel-partner">
                            <ScrollAnimation
                             animateIn="animate__fadeIn"
                             animateOut="animate__fadeOut"
                              >
                                <StaticImage src="./haringey.png" alt="not found" width={120} height={51} />
                                </ScrollAnimation> 
                            </div>
                            <div className="singel-partner">
                            <ScrollAnimation
                             animateIn="animate__fadeIn"
                             animateOut="animate__fadeOut"
                              >
                                <StaticImage src="./ams.png" alt="not found" width={152} height={67} />
                                </ScrollAnimation> 
                            </div>
                            <div className="singel-partner">
                            <ScrollAnimation
                             animateIn="animate__fadeIn"
                             animateOut="animate__fadeOut"
                              >
                                <StaticImage src="./isa.png" alt="not found" width={61} height={62} />
                                </ScrollAnimation> 
                            </div>

                            <div className="singel-partner">
                            <ScrollAnimation
                             animateIn="animate__fadeIn"
                             animateOut="animate__fadeOut"
                              >
                                <StaticImage src="./nida.png" alt="not found" width={61} height={62} />
                                </ScrollAnimation> 
                            </div>
                            <div className="singel-partner">
                            <ScrollAnimation
                             animateIn="animate__fadeIn"
                             animateOut="animate__fadeOut"
                              >
                                <StaticImage src="./ti.png" alt="not found" width={61} height={62} />
                                </ScrollAnimation> 
                            </div>
                            <div className="singel-partner">
                            <ScrollAnimation
                             animateIn="animate__fadeIn"
                             animateOut="animate__fadeOut"
                              >
                                <StaticImage src="./securiwiser.png" alt="not found" width={61} height={62} />
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnerSection;