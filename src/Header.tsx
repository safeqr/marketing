import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
    const [fix, setFix] = useState(false);

    useEffect(() => {
        function setFixed() {
            if (window.scrollY > 50) {
                setFix(true);
                return;
            } 
            setFix(false);
        }
        window.addEventListener("scroll", setFixed);
        // Cleanup function
        return () => {
            window.removeEventListener("scroll", setFixed);
        };
    }, []);

    return (
        <nav className={fix ? "navbar navbar-expand-lg nav-scroll": "navbar navbar-expand-lg banner"}>
            <div className="container">
                <img src={fix ? "../marketing/images/logo-black.png" : "../marketing/images/logo.png"} alt="logo" width="160" height="80" />
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    {" "}
                    <span className="fas fa-bars"></span>{" "}
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            {" "}
                            <a className="nav-link" data-scroll-nav="0">
                                Home
                            </a>{" "}
                        </li>
                        <li className="nav-item">
                            {" "}
                            <a
                                className="nav-link"
                                href="#"
                                data-scroll-nav="1"
                            >
                                About
                            </a>{" "}
                        </li>
                        <li className="nav-item">
                            {" "}
                            <a
                                className="nav-link"
                                href="#"
                                data-scroll-nav="2"
                            >
                                Features
                            </a>{" "}
                        </li>
                        <li className="nav-item">
                            {" "}
                            <a
                                className="nav-link"
                                href="#"
                                data-scroll-nav="3"
                            >
                                Team
                            </a>{" "}
                        </li>
                        <li className="nav-item">
                            {" "}
                            <a
                                className="nav-link"
                                href="#"
                                data-scroll-nav="5"
                            >
                                Faq
                            </a>{" "}
                        </li>
                        <li className="nav-item">
                            {" "}
                            <a
                                className="nav-link"
                                href="#"
                                data-scroll-nav="6"
                            >
                                Contact
                            </a>{" "}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
