import React from "react";

const Team: React.FC = () => {
    return (
        <section className="team section-padding" data-scroll-index='3'>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="sectioner-header text-center">
          <h3>Our Team</h3>
          <span className="line"></span>
          <p>Our mission is to pioneer the development of a robust QR code security solution that not only safeguards users from malicious
            activities but also fosters trust and confidence in QR code technology. We aim to achieve this by continuously innovating and 
            adapting our solution to evolving threats while promoting collaboration and integration with other QR scanning applications.</p>
        </div>
        <div className="section-content text-center">
          <div className="row">
            <div className="col-md-3">
              <div className="team-detail wow bounce" data-wow-delay="0.2s"> <img src="../marketing/images/user1.jpg" className="img-fluid"/>
                <h4>Jerin Tan</h4>
                <p>Frontend Developer</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="team-detail wow bounce" data-wow-delay="0.6s"> <img src="../marketing/images/user3.jpg" className="img-fluid"/>
                <h4>Alex Lim</h4>
                <p>System Architect</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="team-detail wow bounce" data-wow-delay="0.2s"> <img src="../marketing/images/user4.jpg" className="img-fluid"/>
                <h4>Seng Jin Hui</h4>
                <p>Marketing Specialist, Backend Developer</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="team-detail wow bounce" data-wow-delay="0.4s"> <img src="../marketing/images/user2.jpg" className="img-fluid"/>
                <h4>Muhammed Iskander Shah</h4>
                <p>Team Leader, Full Stack Developer</p>
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

export default Team;