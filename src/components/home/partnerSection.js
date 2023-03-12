import React from 'react';

const PartnerSection = () => {
    return (
        <div className="patner-area pt-110 pb-80">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-4 col-md-4">
                        <div className="partner-box mb-30">
                            <div className="partner-thumb d-none d-sm-block">
                                <img src="/assets/img/bg/partner.png" alt="partner-png" />
                            </div>
                            <div className="section-title mb-30">
                                <h2>Our Schools are <span className="down-mark-line-2"> Regulated </span> by</h2><br/>
                                <h2>We are <span className="down-mark-line-2"> Members </span> of/Work with</h2>
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
                                <img src="/assets/img/brand/dfe.png" alt="not found" class="responsive" width="105" height="62" ></img>
                            </div>
                            <div className="singel-partner">
                                <img src="/assets/img/brand/isi.png" alt="not found" class="responsive" width="240" height="43" ></img>
                            </div>
                            <div className="singel-partner">
                                <img src="/assets/img/brand/slough.png" alt="not found" class="responsive" width="125" height="53" ></img>
                            </div>
                            <div className="singel-partner">
                                <img src="/assets/img/brand/haringey.png" alt="not found" class="responsive" width="120" height="51" ></img>
                            </div>
                            <div className="singel-partner">
                                <img src="/assets/img/brand/isa.png" alt="not found" class="responsive" width="152" height="67" ></img>
                            </div>
                            <div className="singel-partner">
                                <img src="/assets/img/brand/ams.png" alt="not found" class="responsive" width="61" height="62" ></img>
                            </div>
                            <div className="singel-partner">
                                <img src="/assets/img/brand/nida.png" alt="not found" class="responsive" width="72" height="72" ></img>
                            </div>
                            <div className="singel-partner">
                                <img src="/assets/img/brand/ti.png" alt="not found" class="responsive" width="83" height="79" ></img>
                            </div>
                            <div className="singel-partner">
                                <img src="/assets/img/brand/securiwiser.png" alt="not found" class="responsive" width="73" height="76" ></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnerSection;