import React from "react";

const ThirdColumn = ({ score }) => {
  return (
    <div className="third-column">
      {/* Syllabus Wise Analytics */}
      <section className="syllabus-container section-card">
        <h3>Syllabus Wise Analytics</h3>
        <div className="syllabus-analysis">
          {[
            { label: "HTML Tools, Forms, History", progress: 80, color: "blue" },
            { label: "Tags & References in HTML", progress: 60, color: "orange" },
            { label: "Tables & References in HTML", progress: 24, color: "red" },
            { label: "Tables & CSS Basics", progress: 96, color: "green" },
          ].map((item, index) => (
            <div className="progress-item" key={index}>
              <p>{item.label}</p>
              <div className="progress-bar-container">
                <div
                  className={`progress-bar ${item.color}`}
                  style={{ width: `${item.progress}%` }}
                ></div>
                <span className={`percentage ${item.color}-text`}>{item.progress}%</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Question Analysis */}
      <section className="question-analysis section-card">
        <h3>Question Analysis</h3>
        <p>
          You scored <b>{score} questions</b> correct out of <b>15</b>. However, it still needs some
          improvements.
        </p>
        <div className="curved-progress-bar">
          <div className="progress-track"></div>
          <div
            className="progress-indicator"
            style={{ transform: `rotate(${(score / 15) * 180}deg)` }}
          ></div>
          <span className="progress-text">{score}/15</span>
        </div>
      </section>
    </div>
  );
};

export default ThirdColumn;