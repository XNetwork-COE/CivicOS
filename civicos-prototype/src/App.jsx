import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Building2, User, LayoutDashboard, ShieldAlert, Sparkles, LogOut, CheckCircle2 } from 'lucide-react';
import './index.css';

// Placeholder Pages
import CitizenDashboard from './pages/CitizenDashboard';
import ReportMissedBin from './pages/ReportMissedBin';
import OfficerDashboard from './pages/OfficerDashboard';
import Citizen360 from './pages/Citizen360';
import AiTriage from './pages/AiTriage';
import Sidebar from './components/layout/Sidebar';
import Topbar from './components/layout/Topbar';

const Landing = () => {
  return (
    <div className="app-container" style={{ alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-secondary) 100%)' }}>
      <div className="card glass-panel animate-fade-in" style={{ width: '100%', maxWidth: '800px', textAlign: 'center', padding: '4rem 2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <div style={{ background: 'white', padding: '1rem', borderRadius: '50%', boxShadow: 'var(--shadow-md)' }}>
            <Building2 size={64} color="var(--color-primary)" />
          </div>
        </div>
        <h1 style={{ color: 'white', fontSize: '3rem', marginBottom: '1rem' }}>XNetwork CivicOS</h1>
        <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.25rem', marginBottom: '3rem' }}>
          AI-native Customer & Service Management Platform for Local Government
        </p>
        
        <div className="grid grid-cols-2 gap-6" style={{ marginTop: '2rem' }}>
          <Link to="/citizen" style={{ textDecoration: 'none' }}>
            <div className="card" style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', padding: '2rem' }}>
              <User size={48} color="var(--color-secondary)" />
              <h2 style={{ margin: 0, color: 'var(--text-main)' }}>Citizen Portal</h2>
              <p className="text-muted text-sm">Experience the "My Sheffield" self-service journey</p>
            </div>
          </Link>
          
          <Link to="/officer" style={{ textDecoration: 'none' }}>
            <div className="card" style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', padding: '2rem' }}>
              <ShieldAlert size={48} color="var(--color-primary)" />
              <h2 style={{ margin: 0, color: 'var(--text-main)' }}>Officer Workspace</h2>
              <p className="text-muted text-sm">Access Citizen 360, AI Triage, and Case Management</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

// Layout Wrappers
const CitizenLayout = ({ children }) => (
  <div className="app-container">
    <Sidebar role="citizen" />
    <div className="main-content">
      <Topbar role="citizen" userName="Sarah Williams" />
      <div className="page-container animate-fade-in">
        {children}
      </div>
    </div>
  </div>
);

const OfficerLayout = ({ children }) => (
  <div className="app-container">
    <Sidebar role="officer" />
    <div className="main-content">
      <Topbar role="officer" userName="Officer Davis" />
      <div className="page-container animate-fade-in">
        {children}
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        
        {/* Citizen Routes */}
        <Route path="/citizen" element={<CitizenLayout><CitizenDashboard /></CitizenLayout>} />
        <Route path="/citizen/report-bin" element={<CitizenLayout><ReportMissedBin /></CitizenLayout>} />
        
        {/* Officer Routes */}
        <Route path="/officer" element={<OfficerLayout><OfficerDashboard /></OfficerLayout>} />
        <Route path="/officer/citizen-360" element={<OfficerLayout><Citizen360 /></OfficerLayout>} />
        <Route path="/officer/ai-triage" element={<OfficerLayout><AiTriage /></OfficerLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
