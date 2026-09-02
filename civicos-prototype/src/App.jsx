import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Building2, User, ShieldAlert, ArrowRight, CheckCircle2 } from 'lucide-react';
import './index.css';

// Pages
import CitizenDashboard from './pages/CitizenDashboard';
import ReportMissedBin from './pages/ReportMissedBin';
import OfficerDashboard from './pages/OfficerDashboard';
import Citizen360 from './pages/Citizen360';
import AiTriage from './pages/AiTriage';
import Sidebar from './components/layout/Sidebar';
import Topbar from './components/layout/Topbar';
import { CitizenCases, CitizenAppointments, CitizenMessages, CitizenPayments, OfficerKnowledge, OfficerDesigner, OfficerSecurity } from './pages/DynamicPages';

const Landing = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-main)' }}>
      {/* Navbar */}
      <nav style={{ padding: '1.5rem 4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', borderBottom: '1px solid var(--border-color)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Building2 size={32} color="var(--color-primary)" />
          <span style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.025em' }}>CivicOS</span>
        </div>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="#features" style={{ textDecoration: 'none', color: 'var(--text-muted)', fontWeight: 500 }}>Platform</a>
          <a href="#solutions" style={{ textDecoration: 'none', color: 'var(--text-muted)', fontWeight: 500 }}>Solutions</a>
          <a href="#pricing" style={{ textDecoration: 'none', color: 'var(--text-muted)', fontWeight: 500 }}>Pricing</a>
          <Link to="/officer" className="btn btn-primary" style={{ padding: '0.75rem 1.5rem' }}>Officer Login</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6rem 4rem', background: 'linear-gradient(135deg, #F8FAFC 0%, #EEF2FF 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '650px', zIndex: 2 }}>
          <div style={{ display: 'inline-block', padding: '0.5rem 1rem', backgroundColor: '#E0E7FF', color: 'var(--color-primary-dark)', borderRadius: '999px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1.5rem' }}>
            🚀 CivicOS 2.0 Prototype is Live
          </div>
          <h1 style={{ fontSize: '4.5rem', lineHeight: 1.1, margin: '0 0 1.5rem 0', color: 'var(--text-main)' }}>
            The AI-native OS for <span style={{ color: 'var(--color-primary)' }}>Local Government</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.6 }}>
            Unify your Citizen Portal and Officer Workspace with intelligent case triage, omnichannel support, and automated service delivery. Build trust with every interaction.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/officer" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
              Enter Officer Workspace <ArrowRight size={20} />
            </Link>
            <Link to="/citizen" className="btn btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.125rem', border: '2px solid var(--border-color)', backgroundColor: 'white' }}>
              View Citizen Portal
            </Link>
          </div>
          <div style={{ display: 'flex', gap: '2rem', marginTop: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}><CheckCircle2 size={20} color="var(--color-success)"/> Full MVC Backend</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}><CheckCircle2 size={20} color="var(--color-success)"/> AI Triage Engine</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}><CheckCircle2 size={20} color="var(--color-success)"/> Citizen 360 View</div>
          </div>
        </div>
        
        {/* Decorative Abstract UI Elements */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', zIndex: 2, position: 'relative' }}>
           <div className="card glass-panel" style={{ width: '450px', padding: '2rem', background: 'rgba(255,255,255,0.9)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)', transform: 'rotate(2deg)' }}>
              <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                 <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--color-danger)'}}></div>
                 <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--color-warning)'}}></div>
                 <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--color-success)'}}></div>
                 <span style={{ marginLeft: '1rem', fontWeight: 600, color: 'var(--text-muted)', fontSize: '0.875rem' }}>Officer Dashboard</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                 <div style={{ height: '8px', width: '40%', backgroundColor: 'var(--color-primary-light)', borderRadius: '4px' }}></div>
                 <div style={{ height: '60px', backgroundColor: '#F1F5F9', borderRadius: 'var(--radius-md)' }}></div>
                 <div style={{ height: '60px', backgroundColor: '#F1F5F9', borderRadius: 'var(--radius-md)' }}></div>
                 <div style={{ height: '60px', backgroundColor: '#F1F5F9', borderRadius: 'var(--radius-md)' }}></div>
                 <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                    <div style={{ flex: 1, height: '100px', backgroundColor: 'rgba(79, 70, 229, 0.1)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-primary-light)' }}></div>
                    <div style={{ flex: 1, height: '100px', backgroundColor: '#F1F5F9', borderRadius: 'var(--radius-md)' }}></div>
                 </div>
              </div>
           </div>
        </div>
        
        {/* Background Gradients */}
        <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(79,70,229,0.08) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', zIndex: 1 }}></div>
        <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(13,148,136,0.05) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', zIndex: 1 }}></div>
      </header>
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
        <Route path="/citizen/cases" element={<CitizenLayout><CitizenCases /></CitizenLayout>} />
        <Route path="/citizen/appointments" element={<CitizenLayout><CitizenAppointments /></CitizenLayout>} />
        <Route path="/citizen/messages" element={<CitizenLayout><CitizenMessages /></CitizenLayout>} />
        <Route path="/citizen/payments" element={<CitizenLayout><CitizenPayments /></CitizenLayout>} />
        
        {/* Officer Routes */}
        <Route path="/officer" element={<OfficerLayout><OfficerDashboard /></OfficerLayout>} />
        <Route path="/officer/citizen-360" element={<OfficerLayout><Citizen360 /></OfficerLayout>} />
        <Route path="/officer/ai-triage" element={<OfficerLayout><AiTriage /></OfficerLayout>} />
        <Route path="/officer/knowledge" element={<OfficerLayout><OfficerKnowledge /></OfficerLayout>} />
        <Route path="/officer/designer" element={<OfficerLayout><OfficerDesigner /></OfficerLayout>} />
        <Route path="/officer/security" element={<OfficerLayout><OfficerSecurity /></OfficerLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
