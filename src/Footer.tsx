import React from "react";

const Footer: React.FC = () => {
    return (
        <section className="download section-padding">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="sectioner-header text-center white">
          <h3>Download Our App</h3>
          <span className="line"></span>
          <p className="white">Inspired by the growing reliance on QR codes for various interactions and the increasing need for heightened 
          security in the digital landscape, our motivation is to empower users with a secure and seamless QR code experience. We are driven 
          by the desire to mitigate security risks associated with QR code usage and to provide users with peace of mind while engaging in
           digital transactions. Our motivation fuels our commitment to innovation and excellence in developing a solution that addresses 
           the evolving challenges of QR code security.
        </p>
        </div>
      </div>
      <div className="col-md-12">
        <div className="section-content text-center">
          <ul>
            <li><a href="#"><img src="../marketing/images/appstore.png" className="wow fadeInUp" data-wow-delay="0.4s"/></a></li>
            <li><a href="#"><img src="../marketing/images/playstore.png" className="wow fadeInUp" data-wow-delay="0.7s"/></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}

export default Footer;