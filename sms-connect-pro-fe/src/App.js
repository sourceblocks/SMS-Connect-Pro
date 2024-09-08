import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Contacts from './components/Contacts';
import SendMessage from './components/SendMessage';
import Settings from './components/Settings';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <div>
        <Sidebar />
        <div id="page-content-wrapper">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/sendmessage" element={<SendMessage />} />
            <Route path="/settings" element={<Settings />} />
            {/* 404 fallback route */}
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
