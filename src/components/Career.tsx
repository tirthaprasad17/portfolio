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
                <h4>Class Representative</h4>
                <h5>MIT World Peace University</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Acted as primary liaison between faculty and 60+ students, organized student feedback sessions, and collaborated with the student council for planning college events.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Associate Analyst</h4>
                <h5>Deloitte</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Developed programs for SAP Material Master and EWM modules. Optimized data load processes using BAPI and BDC, and supported data integration across systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Java Developer</h4>
                <h5>Twowaits technologies Pvt.Ltd</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Software development focused on Java applications during a one month internship period.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
