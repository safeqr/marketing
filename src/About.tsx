import React from "react";

const About: React.FC = () => {
    return (
        <section
            className="about section-padding prelative"
            data-scroll-index="1"
        >
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="sectioner-header text-center">
                            <h3>About</h3>
                            <span className="line"></span>
                            <p>
                            Currently, in the QR code security landscape, there is a gap in comprehensive protection against potential 
                            threats posed by malicious QR codes. Existing solutions often provide basic functionality, such as scanning QR 
                            codes to extract website URLs. However, these applications lack robust security measures to defend users against 
                            various types of malicious content embedded within QR codes.
                            </p>
                            <p>
                            Our intention with the SafeQR project is to bridge this gap by developing a comprehensive mobile application 
                            that offers advanced security features for scanning and interacting with QR codes. Unlike existing solutions 
                            that primarily focus on verifying website URLs, our app aims to take a more proactive and broad approach to QR 
                            code security.
                            </p>
                        </div>
                        <div className="section-content text-center">
                            <div className="row">
                                <div className="col-md-4">
                                    <div
                                        className="icon-box wow fadeInUp"
                                        data-wow-delay="0.2s"
                                    >
                                        {" "}
                                        <i
                                            className="fa fa-life-ring"
                                            aria-hidden="true"
                                        ></i>
                                        <h5>QR Code Scanning</h5>
                                        <p>
                                        The application will have the capability to scan QR codes directly using a camera or from saved images.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div
                                        className="icon-box wow fadeInUp"
                                        data-wow-delay="0.4s"
                                    >
                                        {" "}
                                        <i
                                            className="fa fa-mobile"
                                            aria-hidden="true"
                                        ></i>
                                        <h5>Cross Platform</h5>
                                        <p>
                                        Designed to function seamlessly on both iOS and Android platforms, ensuring a broad user base can 
                                        benefit from the application's protective features.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div
                                        className="icon-box wow fadeInUp"
                                        data-wow-delay="0.6s"
                                    >
                                        {" "}
                                        <i
                                            className="fa fa-bolt"
                                            aria-hidden="true"
                                        ></i>
                                        <h5>Sandboxing for Safe Browsing</h5>
                                        <p>
                                        To enhance security, the application will open links in a sandboxed environment. This protected mode 
                                        helps isolate and contain potential threats away from the user's device.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <a href="#" data-scroll-nav="2" className="about-btn">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
