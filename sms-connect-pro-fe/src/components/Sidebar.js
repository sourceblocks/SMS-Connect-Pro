import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUsers, FaPaperPlane, FaCog, FaBars } from 'react-icons/fa';
import { Navbar, Nav } from 'react-bootstrap';
import '../sidebar.css';


const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`d-flex ${isCollapsed ? 'toggled' : ''}`} id="wrapper">
      {/* Sidebar */}
      <div className={`bg-dark text-white sidebar ${isCollapsed ? 'collapsed' : ''}`}>
        <Navbar.Brand className="text-center mt-3">
          <FaBars onClick={toggleSidebar} style={{ cursor: 'pointer' }} />
          {!isCollapsed && <span className="ml-2">SMS Connect Pro</span>}
        </Navbar.Brand>

        <Nav className="flex-column mt-4">
          <Nav.Item className="nav-item">
            <Link to="/home" className="nav-link text-white">
              <FaHome /> {!isCollapsed && <span className="ml-2">Home</span>}
            </Link>
          </Nav.Item>

          <Nav.Item className="nav-item">
            <Link to="/contacts" className="nav-link text-white">
              <FaUsers /> {!isCollapsed && <span className="ml-2">Contacts</span>}
            </Link>
          </Nav.Item>

          <Nav.Item className="nav-item">
            <Link to="/sendmessage" className="nav-link text-white">
              <FaPaperPlane /> {!isCollapsed && <span className="ml-2">Send Message</span>}
            </Link>
          </Nav.Item>

          <Nav.Item className="nav-item">
            <Link to="/settings" className="nav-link text-white">
              <FaCog /> {!isCollapsed && <span className="ml-2">Settings</span>}
            </Link>
          </Nav.Item>
        </Nav>
      </div>

      {/* Page Content */}
      <div id="page-content-wrapper">
        <div className="container-fluid">
          {/* You can add your page content here */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
