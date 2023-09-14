import React from "react";
import "./workHistory.css";

const WorkHistory = () => {
  return (
    <>
      <div className="resume-details-container">
        <div className="resume-detail-main resume-detail-main2">
          <div className="resume-college-info resume-college-info2">
            <h5>
               Web Developer - <span>Esya.ai</span>
            </h5>
            <ul className="resume-exp-ul">
                <li>Gained an in-depth understanding of scrapy and
built various scrapers for the company.</li>
                <li> Experienced in creating APIs using Flask as well as
FastAPI and in the process also used Flask-
sqlalchemy to interact with the database.</li>
                <li> In the Internship ,I observed the website "esya.ai",
strategically planned and built the UI of the website
as well as dealt with the backend.</li>
                <li>Proved successful working within tight deadlines and
a fast-paced atmosphere.</li>
                <li>Participated in continuous improvement by
generating suggestions, and engaging in
problem-solving activities to support the team.
Performed the integration of front-end elements
created by me with the backend.</li>
                <li>Performed a pivotal role in research and testing to
enhance the performance of existing syste</li>
            </ul>
          </div>
          <div className="resume-clg-time resume-clg-time2">
            <div>September 2019 - May 2022</div>
          </div>
        </div>
        {/*  */}
      </div>
    </>
  );
};

export default WorkHistory;
