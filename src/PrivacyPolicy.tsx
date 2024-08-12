import React from "react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy: React.FC = () => {
    const navigate = useNavigate();
    const handleBackToHome = () => {
        navigate("/");
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <section className="privacy-policy section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="sectioner-header text-center">
                            <h3>SafeQR Privacy Policy</h3>
                            <span className="line"></span>
                            <p>Effective Date: 12 August 2024</p>
                            <button onClick={handleBackToHome}  className="btn btn-primary mt-4">
                                Back to Home
                            </button>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="section-content">
                            <h4>1. Introduction</h4>
                            <p>
                                This Privacy Policy describes how SafeQR ("we", "our", "us") collects, uses, and shares information about you when you use our application ("the Service"). By using the Service, you agree to the collection and use of information in accordance with this Privacy Policy.
                            </p>

                            <h4>2. Information We Collect</h4>
                            <p>
                                <strong>Personal Information:</strong> When you create an account or use our Service, we may collect personal information such as your email address, username, and other identifying details.<br />
                                <strong>Gmail Data:</strong> With your consent, we access your Gmail account to scan emails for QR codes. We do not store your Gmail credentials or email content beyond what is necessary for scanning and analysis.<br />
                                <strong>QR Code Data:</strong> We collect and process data related to QR codes you scan, including URLs, QR code types, and any associated metadata.
                            </p>

                            <h4>3. How We Use Your Information</h4>
                            <p>
                                <strong>Service Provision:</strong> We use your information to provide, maintain, and improve the Service, including scanning QR codes and analyzing potential security threats.<br />
                                <strong>Gmail Integration:</strong> We access and analyze your Gmail data solely to scan QR codes within your emails and return the relevant analysis to you.<br />
                                <strong>Security Enhancements:</strong> We may use information collected to enhance the security features of our Service, including identifying and mitigating potential security threats.
                            </p>

                            <h4>4. Information Sharing and Disclosure</h4>
                            <p>
                                <strong>Service Providers:</strong> We may share your information with third-party service providers who assist us in operating the Service, such as cloud storage providers and security analysis tools. These providers are contractually obligated to protect your information.<br />
                                <strong>Legal Compliance:</strong> We may disclose your information if required by law or in response to valid requests by public authorities.
                            </p>

                            <h4>5. Data Security</h4>
                            <p>
                                We implement a variety of security measures to protect your personal information and Gmail data. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                            </p>

                            <h4>6. Data Retention</h4>
                            <p>
                                We retain your information only for as long as necessary to provide the Service and fulfill the purposes described in this Privacy Policy. Once your information is no longer needed, we will securely delete or anonymize it.
                            </p>

                            <h4>7. Your Rights</h4>
                            <p>
                                You have the right to access, update, or delete your personal information at any time by contacting us at <a href="mailto:safeqr.fyp.24.s2.43p@gmail.com">safeqr.fyp.24.s2.43p@gmail.com</a>. You can also revoke our access to your Gmail data through your Google account settings.
                            </p>

                            <h4>8. Changes to This Privacy Policy</h4>
                            <p>
                                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on the Service. Your continued use of the Service after such changes will constitute your acceptance of the new Privacy Policy.
                            </p>

                            <h4>9. Contact Information</h4>
                            <p>
                                If you have any questions about this Privacy Policy, please contact us at <a href="mailto:safeqr.fyp.24.s2.43p@gmail.com">safeqr.fyp.24.s2.43p@gmail.com</a>.
                            </p>
                            
                        </div>
                        
                    </div>
                    <div className="col-md-12">
                        <div className="sectioner-header text-center">
                            <button onClick={handleBackToHome} className="btn btn-primary mt-4">
                                Back to Home
                            </button>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </section>
    );
};

export default PrivacyPolicy;
