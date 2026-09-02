import React from 'react';
import { User, Home, Phone, MessageSquare, Mail, Sparkles, MapPin, CheckCircle } from 'lucide-react';

const Citizen360 = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--color-primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
            <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>SW</span>
          </div>
          <div>
            <h1 style={{ marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Sarah Williams
              <CheckCircle size={20} color="var(--color-success)" />
            </h1>
            <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Phone size={14} /> +44 7700 900123</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Mail size={14} /> sarah.w@example.com</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><MapPin size={14} /> 24 Example Street, S1 2AB</span>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button className="btn btn-secondary">Message</button>
          <button className="btn btn-primary">Create Case</button>
        </div>
      </div>

      {/* AI Summary Banner */}
      <div className="card glass-panel" style={{ background: 'linear-gradient(90deg, #EEF2FF 0%, #F0FDF4 100%)', border: '1px solid #C7D2FE', marginBottom: '2rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
        <div style={{ padding: '0.5rem', backgroundColor: 'var(--color-primary)', borderRadius: 'var(--radius-md)', color: 'white' }}>
          <Sparkles size={20} />
        </div>
        <div>
          <h3 style={{ fontSize: '1rem', color: 'var(--color-primary-dark)', margin: '0 0 0.25rem 0' }}>AI Summary</h3>
          <p style={{ margin: 0, color: 'var(--text-main)', fontSize: '0.875rem', lineHeight: '1.5' }}>
            Citizen has 3 open cases across 2 services (Waste & Council Tax). Two cases relate to the same property. One appointment is scheduled for next week regarding a housing inquiry. High engagement via digital channels (Portal/App).
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Identity & Household */}
          <div className="card">
            <h2 style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem', marginBottom: '1rem' }}>
              <Home size={18} color="var(--text-muted)" />
              Household & Property
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <div className="text-muted text-sm">Primary Residence</div>
                <div className="font-medium">24 Example Street, Sheffield, S1 2AB</div>
                <div className="text-sm" style={{ color: 'var(--color-primary)', cursor: 'pointer' }}>View Property 360 &rarr;</div>
              </div>
              <div>
                <div className="text-muted text-sm">Household Members</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.25rem' }}>
                  <User size={16} color="var(--text-muted)" />
                  <span className="font-medium text-sm">Mark Williams (Partner)</span>
                </div>
              </div>
              <div>
                <div className="text-muted text-sm">Tenancy/Ownership</div>
                <span className="badge badge-info mt-1">Owner Occupier</span>
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className="card">
            <h2 style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem', marginBottom: '1rem' }}>
              <Sparkles size={18} color="var(--text-muted)" />
              Preferences
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.875rem' }}>
              <li style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0' }}>
                <span className="text-muted">Communication</span>
                <span className="font-medium">Email / SMS</span>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0' }}>
                <span className="text-muted">Language</span>
                <span className="font-medium">English</span>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0' }}>
                <span className="text-muted">Accessibility</span>
                <span className="font-medium">None required</span>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Active Services & Cases */}
          <div className="card">
            <h2 style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>Active Cases</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ padding: '1rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <span className="font-medium">Missed Bin Collection</span>
                    <span className="badge badge-warning">New</span>
                  </div>
                  <div className="text-sm text-muted">#WST-2026-000184 &bull; Service: Waste &bull; Opened Today</div>
                </div>
                <button className="btn btn-secondary text-sm">View Case</button>
              </div>

              <div style={{ padding: '1rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <span className="font-medium">Council Tax Support</span>
                    <span className="badge badge-info">In Progress</span>
                  </div>
                  <div className="text-sm text-muted">#CTX-2026-04921 &bull; Service: Council Tax &bull; Opened 2 days ago</div>
                </div>
                <button className="btn btn-secondary text-sm">View Case</button>
              </div>
            </div>
          </div>

          {/* Omnichannel Interaction Timeline */}
          <div className="card" style={{ flex: 1 }}>
            <h2 style={{ fontSize: '1.125rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MessageSquare size={20} color="var(--text-muted)" />
              Omnichannel Timeline
            </h2>
            
            <div style={{ position: 'relative', paddingLeft: '2rem' }}>
              {/* Timeline line */}
              <div style={{ position: 'absolute', top: 0, bottom: 0, left: '15px', width: '2px', backgroundColor: 'var(--border-color)' }}></div>

              <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
                <div style={{ position: 'absolute', left: '-2rem', width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--bg-surface)', border: '2px solid var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Sparkles size={16} color="var(--color-primary)" />
                </div>
                <div className="text-sm text-muted" style={{ marginBottom: '0.25rem' }}>Today, 08:44 &bull; AI Assistant</div>
                <div className="card" style={{ padding: '1rem', backgroundColor: '#F8FAFC', border: 'none' }}>
                  <strong>AI identified intent:</strong> Waste collection issue. Automatically generated Case #WST-2026-000184.
                </div>
              </div>

              <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
                <div style={{ position: 'absolute', left: '-2rem', width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--bg-surface)', border: '2px solid var(--color-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MessageSquare size={16} color="var(--color-secondary)" />
                </div>
                <div className="text-sm text-muted" style={{ marginBottom: '0.25rem' }}>Today, 08:41 &bull; Citizen Portal Webchat</div>
                <div className="card" style={{ padding: '1rem', backgroundColor: '#F8FAFC', border: 'none' }}>
                  "My bin hasn't been collected. It was due yesterday."
                </div>
              </div>

              <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
                <div style={{ position: 'absolute', left: '-2rem', width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--bg-surface)', border: '2px solid var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Phone size={16} color="var(--text-muted)" />
                </div>
                <div className="text-sm text-muted" style={{ marginBottom: '0.25rem' }}>2 days ago, 14:15 &bull; Phone Call</div>
                <div className="card" style={{ padding: '1rem', backgroundColor: '#F8FAFC', border: 'none' }}>
                  Call with Council Tax team. Discussed application for support. Call duration: 12m 45s.
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Citizen360;
