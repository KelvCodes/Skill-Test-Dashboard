import React from "react";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <i className="fas fa-home"></i>
          <span>Dashboard</span>
        </li>
        <li className="active">
          <i className="fas fa-clipboard-list"></i>
          <span>Skill Test</span>
        </li>
        <li>
          <i className="fas fa-briefcase"></i>
          <span>Internship</span>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;