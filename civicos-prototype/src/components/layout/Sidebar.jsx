import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Building2, 
  Home, 
  FileText, 
  Calendar, 
  MessageSquare, 
  CreditCard,
  LayoutDashboard,
  Users,
  Search,
  Settings,
  Shield,
  Sparkles
} from 'lucide-react';

const Sidebar = ({ role }) => {
  const location = useLocation();

  const citizenLinks = [
    { name: 'Dashboard', path: '/citizen', icon: <Home size={20} /> },
    { name: 'My Cases', path: '/citizen/cases', icon: <FileText size={20} /> },
    { name: 'Appointments', path: '/citizen/appointments', icon: <Calendar size={20} /> },
    { name: 'Messages', path: '/citizen/messages', icon: <MessageSquare size={20} /> },
    { name: 'Payments', path: '/citizen/payments', icon: <CreditCard size={20} /> },
    { name: 'Report Issue', path: '/citizen/report-bin', icon: <Sparkles size={20} color="var(--color-accent)" /> },
  ];

  const officerLinks = [
    { name: 'Dashboard', path: '/officer', icon: <LayoutDashboard size={20} /> },
    { name: 'Citizen Search', path: '/officer/citizen-360', icon: <Users size={20} /> },
    { name: 'AI Case Triage', path: '/officer/ai-triage', icon: <Sparkles size={20} color="var(--color-primary-light)" /> },
    { name: 'Knowledge Base', path: '/officer/knowledge', icon: <Search size={20} /> },
    { name: 'Service Designer', path: '/officer/designer', icon: <Settings size={20} /> },
    { name: 'Security', path: '/officer/security', icon: <Shield size={20} /> },
  ];

  const links = role === 'citizen' ? citizenLinks : officerLinks;

  return (
    <div style={{
      width: '260px',
      backgroundColor: 'var(--bg-sidebar)',
      color: 'var(--text-light)',
      display: 'flex',
      flexDirection: 'column',
      borderRight: '1px solid rgba(255,255,255,0.1)'
    }}>
      <div style={{
        padding: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <Building2 size={28} color={role === 'citizen' ? "var(--color-secondary)" : "var(--color-primary-light)"} />
        <div>
          <h2 style={{ fontSize: '1.125rem', margin: 0 }}>CivicOS</h2>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            {role === 'citizen' ? 'My Sheffield Portal' : 'Officer Workspace'}
          </span>
        </div>
      </div>

      <nav style={{ flex: 1, padding: '1rem 0', overflowY: 'auto' }}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.name} style={{ padding: '0.25rem 1rem' }}>
                <Link 
                  to={link.path}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    color: isActive ? 'white' : 'var(--text-muted)',
                    textDecoration: 'none',
                    backgroundColor: isActive ? 'var(--bg-sidebar-hover)' : 'transparent',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  {link.icon}
                  <span style={{ fontWeight: isActive ? 600 : 400 }}>{link.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div style={{ padding: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <Link to="/" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
          Switch Mode
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
