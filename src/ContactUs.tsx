import React from "react";

const ContactUs: React.FC = () => {
    return (
        <section className="contact section-padding" data-scroll-index='6'>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="sectioner-header text-center">
                  <h3>Contact us</h3>
                  <span className="line"></span>
                  <p>We'd love to hear from you! Whether you are curious about the features, a free Trial, We're ready to serve you!</p>
                </div>
                <div className="section-content">
                  <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                    <div className="contact-info white">
                        <div className="contact-item media"> <i className="fa fa-envelope media-left media-right-margin"></i>
                          <div className="media-body">
                            <p className="text-uppercase">E-mail</p>
                            <p className="text-uppercase"><a className="text-white" href="mailto:safeqr.fyp.24.s2.43p@gmail.com">safeqr.fyp.24.s2.43p@gmail.com</a> </p>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                      <div className="contact-info white">
                        <div className="contact-item media"> <i className="fa fa-clock media-left media-right-margin"></i>
                          <div className="media-body">
                            <p className="text-uppercase">Working Hours</p>
                            <p className="text-uppercase">Mon-Fri 9.00 AM to 5.00PM.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
};

export default ContactUs;