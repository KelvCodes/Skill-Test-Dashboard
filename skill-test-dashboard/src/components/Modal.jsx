import React from "react";

const Modal = ({ rank, percentile, score, updateStats, setShowModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-logo">
          <img src="/images/html-logo.png" alt="HTML Logo" className="logo" />
        </div>
        <h3>Update scores</h3>
        <div className="input-group">
          <label>
            <strong>1️⃣ Update your Rank</strong>
          </label>
          <input type="number" id="rankInput" defaultValue={rank} required />
        </div>
        <div className="input-group">
          <label>
            <strong>2️⃣ Update your Percentile</strong>
          </label>
          <input type="number" id="percentileInput" defaultValue={percentile} required />
        </div>
        <div className="input-group">
          <label>
            <strong>3️⃣ Update your Current Score (out of 15)</strong>
          </label>
          <input type="number" id="scoreInput" defaultValue={score} required />
        </div>
        <div className="modal-actions">
          <button className="cancel-btn" onClick={() => setShowModal(false)}>
            Cancel
          </button>
          <button className="save-btn" onClick={updateStats}>
            Save <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;