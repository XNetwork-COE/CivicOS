import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, FileText, AlertTriangle, ArrowRight, Home, Trash2, Shield, Calendar, Sparkles } from 'lucide-react';

const CitizenDashboard = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1>Welcome back, Sarah</h1>
          <p className="text-muted">Here's what's happening with your services today.</p>
        </div>
        <Link to="/citizen/report-bin" className="btn btn-primary" style={{ gap: '0.5rem' }}>
          <AlertTriangle size={18} />
          Report an Issue
        </Link>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-4 gap-6" style={{ marginBottom: '2rem' }}>
        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ padding: '1rem', backgroundColor: 'var(--color-primary-light)', borderRadius: '50%', color: 'white', opacity: 0.9 }}>
            <FileText size={24} />
          </div>
          <div>
            <div className="text-muted text-sm">Open Cases</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>3</div>
          </div>
        </div>
        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ padding: '1rem', backgroundColor: 'var(--color-secondary)', borderRadius: '50%', color: 'white', opacity: 0.9 }}>
            <Calendar size={24} />
          </div>
          <div>
            <div className="text-muted text-sm">Appointments</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>1</div>
          </div>
        </div>
        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ padding: '1rem', backgroundColor: 'var(--color-warning)', borderRadius: '50%', color: 'white', opacity: 0.9 }}>
            <AlertTriangle size={24} />
          </div>
          <div>
            <div className="text-muted text-sm">Actions Required</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>1</div>
          </div>
        </div>
        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ padding: '1rem', backgroundColor: 'var(--color-success)', borderRadius: '50%', color: 'white', opacity: 0.9 }}>
            <Home size={24} />
          </div>
          <div>
            <div className="text-muted text-sm">Linked Properties</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>1</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div style={{ gridColumn: 'span 2' }}>
          <div className="card">
            <h2 style={{ fontSize: '1.125rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Clock size={20} color="var(--color-primary)" />
              Recent Activity
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Case Item */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ padding: '0.75rem', backgroundColor: '#FEE2E2', borderRadius: 'var(--radius-md)', color: 'var(--color-danger)' }}>
                    <Trash2 size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1rem', margin: 0 }}>Missed Bin Collection</h3>
                    <div className="text-muted text-sm">Case #WST-2026-000184 &bull; Created today</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span className="badge badge-warning">In Progress</span>
                  <ArrowRight size={18} color="var(--text-muted)" style={{ cursor: 'pointer' }} />
                </div>
              </div>

              {/* Case Item */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ padding: '0.75rem', backgroundColor: '#DBEAFE', borderRadius: 'var(--radius-md)', color: 'var(--color-primary)' }}>
                    <Shield size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1rem', margin: 0 }}>Council Tax Support Application</h3>
                    <div className="text-muted text-sm">Case #CTX-2026-04921 &bull; Created 2 days ago</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span className="badge badge-info">Action Required</span>
                  <ArrowRight size={18} color="var(--text-muted)" style={{ cursor: 'pointer' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="card glass-panel" style={{ background: 'linear-gradient(145deg, #4F46E5 0%, #0D9488 100%)', color: 'white' }}>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white' }}>
              <Sparkles size={20} />
              AI Service Assistant
            </h2>
            <p style={{ fontSize: '0.875rem', marginBottom: '1.5rem', opacity: 0.9 }}>
              How can I help you today, Sarah? I can assist with council tax, reporting issues, or finding information.
            </p>
            <div style={{ position: 'relative' }}>
              <input 
                type="text" 
                placeholder="Ask me anything..." 
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  paddingRight: '3rem',
                  borderRadius: 'var(--radius-md)',
                  border: 'none',
                  outline: 'none',
                  boxShadow: 'var(--shadow-sm)'
                }}
              />
              <button style={{
                position: 'absolute',
                right: '0.5rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'var(--color-primary)',
                border: 'none',
                borderRadius: 'var(--radius-sm)',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                cursor: 'pointer'
              }}>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="card" style={{ marginTop: '1.5rem' }}>
            <h2 style={{ fontSize: '1rem', marginBottom: '1rem' }}>My Services</h2>
            <div className="grid grid-cols-2 gap-4">
              <div style={{ padding: '1rem', textAlign: 'center', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', cursor: 'pointer' }}>
                <Trash2 size={24} color="var(--color-secondary)" style={{ margin: '0 auto 0.5rem' }} />
                <div className="text-sm font-medium">Waste</div>
              </div>
              <div style={{ padding: '1rem', textAlign: 'center', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', cursor: 'pointer' }}>
                <Shield size={24} color="var(--color-primary)" style={{ margin: '0 auto 0.5rem' }} />
                <div className="text-sm font-medium">Council Tax</div>
              </div>
              <div style={{ padding: '1rem', textAlign: 'center', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', cursor: 'pointer' }}>
                <Home size={24} color="var(--color-accent)" style={{ margin: '0 auto 0.5rem' }} />
                <div className="text-sm font-medium">Housing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitizenDashboard;
