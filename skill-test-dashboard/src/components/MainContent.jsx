import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const MainContent = ({ rank, percentile, score, lineChartData, setShowModal }) => {
  return (
    <main className="main-content">
      {/* Skill Test Header */}
      <section className="skill-test-header section-card">
        <div className="test-info">
          <img src="/images/html-logo.png" alt="HTML Logo" className="test-logo" />
          <div>
            <h3>Hyper Text Markup Language</h3>
            <p>Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
          </div>
        </div>
        <button className="update-btn" onClick={() => setShowModal(true)}>
          Update
        </button>
      </section>

      {/* Quick Stats */}
      <section className="quick-stats-container section-card">
        <h3>Quick Stats</h3>
        <div className="quick-stats">
          <div className="stat-card">
            <span>🏆</span>
            <div>
              <p>{rank}</p>
              <small>Your Rank</small>
            </div>
          </div>
          <div className="stat-card">
            <span>📊</span>
            <div>
              <p>{percentile}%</p>
              <small>Percentile</small>
            </div>
          </div>
          <div className="stat-card">
            <span>✅</span>
            <div>
              <p>{score}/15</p>
              <small>Correct Answers</small>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Graph */}
      <section className="comparison-graph section-card">
        <div className="graph-header">
          <h3>Comparison Graph</h3>
          <i className="fas fa-chart-line"></i>
        </div>
        <p>
          You scored <b>{percentile}% percentile</b> which is{" "}
          <b>{percentile > 72 ? "higher" : percentile < 72 ? "lower" : "equal to"}</b> than{" "}
          <b>72%</b> of all engineers who took this assessment.
        </p>
        <LineChart width={600} height={300} data={lineChartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="percentile" stroke="#8884d8" />
        </LineChart>
      </section>
    </main>
  );
};

export default MainContent;