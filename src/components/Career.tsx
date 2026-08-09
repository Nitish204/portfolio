import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Python Programming</h4>
                <h5>Infosys Springboard</h5>
              </div>
              <h3>Cert</h3>
            </div>
            <p>
              Completed a certification covering Python fundamentals through
              applied programming practices.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Java Programming</h4>
                <h5>Infosys Springboard</h5>
              </div>
              <h3>Cert</h3>
            </div>
            <p>
              Completed a certification covering core Java and
              object-oriented programming concepts.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech, Computer Science & Engineering</h4>
                <h5>Aurora's Technological and Research Institute</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Pursuing a B.Tech in Computer Science & Engineering (2022–2026)
              with a CGPA of 7.5, while building full-stack and AI/ML
              projects alongside coursework.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
