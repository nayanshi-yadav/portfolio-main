import React from "react";
import "./programming.css";

const ProgrammingSkill = () => {
  return (
    <>
      <div className="resume-details-container">
        <div className="resume-detail-main resume-detail-main3">
          <div className="resume-college-info">
            <h5>Programming Languages </h5>
            <p>Python,C, Javascript</p>
          </div>
        </div>
        <div className="resume-detail-main resume-detail-main3">
          <div className="resume-college-info">
            <h5>Web Technologies</h5>
            <p>
              {" "}
              React js, Vue.js ,javaScript, HTML, Css, Bootstrap, Bulma
             {" "}
            </p>
          </div>
        </div>
        {/* <div className="resume-detail-main resume-detail-main3">
          <div className="resume-college-info">
            <h5>App Technologies</h5>
            <p>React-native</p>
          </div>
        </div> */}
        <div className="resume-detail-main resume-detail-main3">
          <div className="resume-college-info">
            <h5>Database</h5>
            <p>MySQL </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgrammingSkill;
