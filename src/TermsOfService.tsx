import React from "react";
import { useNavigate } from "react-router-dom";

const TermsOfService: React.FC = () => {
    const navigate = useNavigate();
    const handleBackToHome = () => {
        navigate("/");
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <section className="terms-of-service section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="sectioner-header text-center">
                            <h3>SafeQR Terms of Service</h3>
                            <span className="line"></span>
                            <p>Effective Date: 12 August 2024</p>
                            <button onClick={handleBackToHome} className="btn btn-primary mt-4">
                                Back to Home
                             </button>
                        </div>
                        
                    </div>
                    <div className="col-md-12">
                        <div className="section-content">
                            <h4>1. Acceptance of Terms</h4>
                            <p>
                                By accessing or using the SafeQR application ("the Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you must not access or use the Service.
                            </p>

                            <h4>2. Service Description</h4>
                            <p>
                                SafeQR provides users with the ability to scan QR codes, classify QR code types, integrate with Gmail for scanning QR codes within emails, and manage scanned data including bookmarks and history.
                            </p>

                            <h4>3. User Responsibilities</h4>
                            <p>
                                <strong>Account Security:</strong> You are responsible for maintaining the confidentiality of your account information, including your password.<br />
                                <strong>Prohibited Activities:</strong> You agree not to use the Service for any unlawful purposes, including but not limited to phishing, spreading malware, or engaging in any activity that could harm other users or third parties.
                            </p>

                            <h4>4. Gmail Integration</h4>
                            <p>
                                By using the Gmail integration feature, you authorize SafeQR to access and process your Gmail data solely for the purpose of scanning emails for QR codes and providing the relevant security analysis. SafeQR will not store your Gmail credentials or email content beyond what is necessary to perform the QR code scanning and analysis.
                            </p>

                            <h4>5. QR Code Scanning</h4>
                            <p>
                                The Service allows you to scan QR codes and classify them based on potential security risks. SafeQR does not guarantee the accuracy of the classification and is not liable for any harm resulting from the use of the scanned data.
                            </p>

                            <h4>6. Privacy and Data Security</h4>
                            <p>
                                Your use of the Service is also governed by our Privacy Policy, which explains how we collect, use, and protect your information. By using the Service, you agree to the collection and use of information in accordance with the Privacy Policy.
                            </p>

                            <h4>7. Termination</h4>
                            <p>
                                SafeQR reserves the right to suspend or terminate your access to the Service at any time, without notice, for conduct that violates these Terms or is otherwise harmful to other users, third parties, or the Service.
                            </p>

                            <h4>8. Limitation of Liability</h4>
                            <p>
                                To the maximum extent permitted by law, SafeQR shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of the Service, even if SafeQR has been advised of the possibility of such damages.
                            </p>

                            <h4>9. Changes to the Terms</h4>
                            <p>
                                SafeQR may modify these Terms at any time. We will notify you of any changes by posting the new Terms on the Service. Your continued use of the Service after such changes will constitute your acceptance of the new Terms.
                            </p>

                            <h4>10. Governing Law</h4>
                            <p>
                                These Terms shall be governed by and construed in accordance with the laws of Singapore, without regard to its conflict of law principles.
                            </p>

                            <h4>11. Contact Information</h4>
                            <p>
                                If you have any questions about these Terms, please contact us at <a href="mailto:safeqr.fyp.24.s2.43p@gmail.com">safeqr.fyp.24.s2.43p@gmail.com</a>.
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

export default TermsOfService;
