import React from "react";

const Features: React.FC = () => {
    return (
        <section className="feature section-padding" data-scroll-index='2'>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="sectioner-header text-center">
          <h3>Features</h3>
          <span className="line"></span>
          <p>Safe QR is a mobile app designed for scanning QR codes, offering a simple and effective QR code scanning service. The app is 
            easy to use and provides an interactive and intuitive experience for users. With Safe QR, you can quickly scan QR codes with 
            high-quality results.</p>
        </div>
        <div className="section-content text-center">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div className="media single-feature wow fadeInUp" data-wow-delay="0.2s">
                <div className="media-body text-right media-right-margin">
                  <h5>SSL Checking</h5>
                  <p>The security of the connection to the website associated with the QR code by verifying its SSL/TLS certificate.</p>
                </div>
                <div className="media-right icon-border"> <span className="fa fa-bolt" aria-hidden="true"></span> </div>
              </div>
              <div className="media single-feature wow fadeInUp" data-wow-delay="0.4s">
                <div className="media-body text-right media-right-margin">
                  <h5>Payload Inspection</h5>
                  <p> Preview the contents of a URL to assess its relevance and safety before deciding to proceed with opening it.</p>
                </div>
                <div className="media-right icon-border"> <span className="fa fa-battery-full" aria-hidden="true"></span> </div>
              </div>
              <div className="media single-feature wow fadeInUp" data-wow-delay="0.6s">
                <div className="media-body text-right media-right-margin">
                  <h5>Copy payload to Clipboard</h5>
                  <p>Copy the contents of the URL extracted from a QR code to the device’s clipboard.</p>
                </div>
                <div className="media-right icon-border"> <span className="fa fa-wifi" aria-hidden="true"></span> </div>
              </div>
            </div>
            <div className="col-md-4 d-none d-md-block d-lg-block">
              <div className="feature-mobile"> <img src="../marketing/images/iphone-screen-with-shadow.png" className="img-fluid wow fadeInUp"/> </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="media single-feature wow fadeInUp" data-wow-delay="0.2s">
                <div className="media-left icon-border media-right-margin"> <span className="fa fa-check-double" aria-hidden="true"></span> </div>
                <div className="media-body text-left">
                  <h5>History of scans</h5>
                  <p>View the list of saved QR codes in the application's history for reference.</p>
                </div>
              </div>
              <div className="media single-feature wow fadeInUp" data-wow-delay="0.4s">
                <div className="media-left icon-border media-right-margin"> <span className="fa fa-dollar-sign" aria-hidden="true"></span> </div>
                <div className="media-body text-left">
                  <h5>Open in selected browser</h5>
                  <p>Open the scanned QR code in your favourite browser</p>
                </div>
              </div>
              <div className="media single-feature wow fadeInUp" data-wow-delay="0.6s">
                <div className="media-left icon-border media-right-margin"> <span className="fa fa-hdd" aria-hidden="true"></span> </div>
                <div className="media-body text-left">
                  <h5>Bookmarking scans</h5>
                  <p>Automatically saved to the application's history for future reference or sharing. Bookmark a scanned QR code for 
                    easy access and reference during the payload inspection phase.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}

export default Features;