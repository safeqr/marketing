import React from "react";

const Banner: React.FC = () => {
    return (
        <section className="banner" data-scroll-index="0">
            <div className="banner-overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-12">
                            <div className="banner-text">
                                <h2 className="white">
                                    Safe QR - Your Secure QR Code Scanner
                                </h2>
                                <h6 className="white">
                                    This awesome template designed by{" "}
                                    <a
                                        href="http://w3Template.com"
                                        target="_blank"
                                        rel="dofollow"
                                        className="weblink"
                                    >
                                        W3 Template
                                    </a>
                                    .
                                </h6>
                                <p className="banner-text white">
                                    Safe QR is a mobile app designed for
                                    scanning QR codes, offering a simple and
                                    effective QR code scanning service. The app
                                    is easy to use and provides an interactive
                                    and intuitive experience for users. With
                                    Safe QR, you can quickly scan QR codes with
                                    high-quality results.
                                </p>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <img
                                                src="../marketing/images/appstore.png"
                                                className="wow fadeInUp"
                                                data-wow-delay="0.4s"
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img
                                                src="../marketing/images/playstore.png"
                                                className="wow fadeInUp"
                                                data-wow-delay="0.7s"
                                            />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            {" "}
                            <img
                                src="../marketing/images/iphone-screen.png"
                                className="img-fluid wow fadeInUp"
                            />{" "}
                        </div>
                    </div>
                </div>
            </div>
            <span className="svg-wave">
                {" "}
                <img
                    className="svg-hero"
                    src="../marketing/images/applight-wave.svg"
                />{" "}
            </span>
        </section>
    );
};

export default Banner;
