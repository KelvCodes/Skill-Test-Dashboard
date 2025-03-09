import React from "react";

const Header = () => {
  return (
    <header className="page-header">
      <div className="company-logo">
        <img src="/images/company-logo.png" alt="Company Logo" className="logo" />
      </div>
      <h1>WhatBytes</h1>
      <div className="profile-card">
        <img src="/images/profile-pic.png" alt="Profile Picture" className="profile-pic" />
        <span className="profile-name">Kelvin Agyare</span>
      </div>
    </header>
  );
};

export default Header;