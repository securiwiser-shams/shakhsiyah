import { Link } from 'gatsby';
import React from 'react';
import addToMailchimp from "gatsby-plugin-mailchimp"
import { Formik } from "formik"
import Swal from "sweetalert2/dist/sweetalert2.js"
import "sweetalert2/src/sweetalert2.scss"

const Footer = () => {
    return (
        <footer>
            <div className="footer-area pt-100">
                <div className="container">
                    <div className="footer-main mb-60">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                <div className="footer-widget f-w1 mb-40">
                                    <div className="footer-img">
                                        <Link to="/"><img src="/assets/img/logo/footer-logo.svg" alt="footer-logo" width="211" height="71" /></Link>
                                        <p>The principle of loving learning for the sake of Allah as growing towards Allah is the ultimate purpose of the human being.</p>
                                    </div>
                                    <div className="footer-icon">
                                        <a href="https://www.facebook.com/IslamicShakhsiyah/" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page"><i className="fab fa-facebook-f"></i></a>
                                        <a href="https://twitter.com/Shakhsiyah" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter"><i className="fab fa-twitter"></i></a>
                                        <a href="https://www.instagram.com/islamicshakhsiyah/" target="_blank" rel="noopener noreferrer" aria-label="Islamic Shakhsiyah on Instagram"><i className="fab fa-instagram"></i></a>
                                        <a href="https://www.linkedin.com/company/islamic-shakhsiyah-foundation/" target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn page"><i className="fab fa-linkedin-in"></i></a>
                                        <a href="https://www.youtube.com/c/IslamicShakhsiyahFoundation" target="_blank" rel="noopener noreferrer" aria-label="Visit our YouTube channel"><i className="fab fa-youtube"></i></a>

                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="footer-widget f-w2 mb-40">
                                    <h3>About</h3>
                                    <ul>
                                        <li><Link to="/principles">Principles</Link></li>
                                        <li><Link to="/mission-statement">Mission</Link></li>
                                        <li><Link to="/trustees">Team</Link></li>
                                        <li><Link to="/policies">Policies</Link></li>
                                        <li><Link to="/vacancies">Vacancies</Link></li>
                                        <li><Link to="/parents">Information for Parent</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col">
                                <div className="footer-widget f-w3 mb-40">
                                    <h3>Early Years</h3>
                                    <ul>
                                        <li><Link to="/early-curriculum/">Curriculum</Link></li>
                                        <li><Link to="/early-assessment/">Assessment</Link></li>
                                        <li><Link to="/school-life-early/">School Life</Link></li>
                                        <li><Link to="/early-curriculum">Term Dates</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col">
                                <div className="footer-widget f-w4 mb-40">
                                    <h3>Primary School</h3>
                                    <ul>
                                    <li><Link to="/primary-curriculum/">Curriculum</Link></li>
                                        <li><Link to="/primary-assessment/">Assessment</Link></li>
                                        <li><Link to="/school-life-primary/">School Life</Link></li>
                                        <li><Link to="/primary-curriculum/">Term Dates</Link></li>
                                        </ul>
                                </div>
                            </div>
                            <div className="col">
                                <div className="footer-widget f-w5 mb-40">
                                    <h3>Secondary School</h3>
                                    <ul>
                                    <li><Link to="/secondary-curriculum/">Curriculum</Link></li>
                                        <li><Link to="#">Assessment</Link></li>
                                        <li><Link to="/school-life-primary/">School Life</Link></li>
                                        <li><Link to="/secondary-curriculum">Term Dates</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright-area">
                        <div className="container">
                            <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                    <div className="copyright-text border-line">
                                        <p>© Copyrighted and Designed by <a href="https://www.justgetvisible.com/"><span>Just Get Visible Ltd</span></a></p>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-sm-6">
                                    <div className="copy-right-support border-line-2">
                                        <div className="copyright-svg-content">
                                            <p>North London Branch</p>
                                            <h6><a href="tel:0208 802 8651">0208 802 8651</a></h6>
                                            <p>Slough Branch</p>
                                            <h6><a href="tel:0175 351 8000">0175 351 8000</a></h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-5 col-md-12">
  <div className="copyright-subcribe">
    <Formik
      initialValues={{ email: "" }}
      validate={values => {
        const errors = {}
        if (!values.email) {
          errors.email = "Required"
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = "Invalid email address"
        }
        return errors
      }}
      onSubmit={(values, { setSubmitting }) => {
        addToMailchimp(values.email)
          .then(data => {
            setSubmitting(false)
            if (data.result === "error") {
              Swal.fire({
                icon: "error",
                title: "Message Failed",
                html: data.msg,
                confirmButtonColor: "#2D9AFF",
              })
            } else {
              Swal.fire({
                icon: "success",
                title: "Message Sent",
                html: data.msg,
                confirmButtonColor: "#2D9AFF",
              })
            }
          })
          .catch(() => {
            Swal.fire({
              icon: "error",
              title: "Message Failed",
              text: "Something went wrong",
              confirmButtonColor: "#2D9AFF",
            })
          })
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="field">
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {!isSubmitting ? (
            <button type="submit">Subscribe<i className="fas fa-paper-plane"></i></button>
          ) : (
            <button type="submit" disabled={true}>
              Subscribing ...
            </button>
          )}
          </div>
          <div className="error" style={{ color: "red" }}>
            {errors.email && touched.email && errors.email}
          </div>
        </form>
      )}
    </Formik>
  </div>
</div>

                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </footer>
    );
};

export default Footer;