import React from "react";

const Faq: React.FC = () => {
    return (
        <section className="faq section-padding prelative" data-scroll-index='5'>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="sectioner-header text-center">
          <h3>Frequently Asked Questions</h3>
          <span className="line"></span>
          <p>Have more Questions ?</p>
        </div>
        <div className="section-content">
          <div className="row">
            <div className="col-md-6 faq-content wow fadeInUp" data-wow-delay="0.2s">
              <h4>What is a QR Code ?</h4>
              <p>Quick response, or QR, is a type of barcode that can store a multitude of information. The obvious difference between a QR Code and Barcode is its appearance. A QR Code is always in the shape of a square and contains smaller, even blocks similar to Tetris. A Barcode, on the other hand, has vertical bars in different thicknesses and often accompanied by a serial number.</p>
            </div>
            <div className="col-md-6 faq-content wow fadeInUp" data-wow-delay="0.2s">
              <h4>How do Secure QR codes work ?</h4>
              <p>Secure QR codes can be detected as faked or copied due to the loss of information that occurs when the QR code is scanned and re-printed on a counterfeit product or document.</p>
            </div>
            <div className="col-md-6 faq-content wow fadeInUp" data-wow-delay="0.4s">
            <h4>What can a QR Code do ?</h4>
              <p>Because of its versatility, a QR Code can be programmed to do a multitude of things. It can be split into two formats: Dynamic and Static. A Dynamic QR Code is useful for businesses or nonprofits in their marketing strategy because of its advantages. Though it needs a subscription to work, it is a small price to pay compared to the benefits it offers. Dynamic QR Code solutions are editable, which means if you made a mistake and only noticed it after the QR Codes are printed, you can easily log in to the dashboard and fix them without changing the appearance of the already printed Codes.</p>
            </div>
            <div className="col-md-6 faq-content wow fadeInUp" data-wow-delay="0.4s">
              <h4>How long are QR Code valid for ? Do they expire ?</h4>
              <p>Static QR Codes are valid for as long as you want and will never expire. The only instance where the Code might “expire” is when the link is changed or deleted, rendering it unscannable.</p>
            </div>
            <div className="col-md-6 faq-content wow fadeInUp" data-wow-delay="0.6s">
              <h4>What does Static and Dynamic QR Code mean ?</h4>
              <p>Once generated, a Static Code cannot be edited and its scans cannot be tracked. Dynamic Code, on the other hand, is very flexible and is virtually indestructible. You can update its content, change/add links, and fix typos; even after print. You can also track the number of scans, including where and when.</p>
            </div>
            <div className="col-md-6 faq-content wow fadeInUp" data-wow-delay="0.6s">
              <h4>Does QR Code have to be Black or White ?</h4>
              <p>Not at all. You can use your brand or company colors, or whatever color you like. There are 16,777,216 colors using #RRGGBB notation so feel free to play around with the color picker!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}

export default Faq;