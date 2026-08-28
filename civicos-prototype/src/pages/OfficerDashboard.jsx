import React from 'react';
import { Link } from 'react-router-dom';
import { Users, AlertTriangle, CheckCircle, Clock, Search, Sparkles, MapPin } from 'lucide-react';

const OfficerDashboard = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1>Waste Services Overview</h1>
          <p className="text-muted">Today's workload and active cases.</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn btn-secondary" style={{ gap: '0.5rem' }}>
            <Sparkles size={18} color="var(--color-primary)" />
            AI Demand Forecast
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-6" style={{ marginBottom: '2rem' }}>
        <div className="card" style={{ borderTop: '4px solid var(--color-primary)' }}>
          <div className="text-muted text-sm font-medium">Open Cases</div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', margin: '0.5rem 0' }}>1,240</div>
          <div className="text-sm" style={{ color: 'var(--color-danger)' }}>&uarr; 12% from last week</div>
        </div>
        <div className="card" style={{ borderTop: '4px solid var(--color-warning)' }}>
          <div className="text-muted text-sm font-medium">SLA Risk</div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', margin: '0.5rem 0' }}>42</div>
          <div className="text-sm text-muted">Cases nearing breach</div>
        </div>
        <div className="card" style={{ borderTop: '4px solid var(--color-success)' }}>
          <div className="text-muted text-sm font-medium">Resolved Today</div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', margin: '0.5rem 0' }}>156</div>
          <div className="text-sm" style={{ color: 'var(--color-success)' }}>&uarr; 5% from average</div>
        </div>
        <div className="card" style={{ borderTop: '4px solid var(--color-secondary)' }}>
          <div className="text-muted text-sm font-medium">AI Resolution Rate</div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', margin: '0.5rem 0' }}>34%</div>
          <div className="text-sm text-muted">Handled without officer</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div style={{ gridColumn: 'span 2' }}>
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.125rem', margin: 0 }}>Active Cases Pipeline</h2>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <span className="badge badge-info">Waste</span>
                <span className="badge badge-secondary" style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-muted)' }}>Housing</span>
                <span className="badge badge-secondary" style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-muted)' }}>Council Tax</span>
              </div>
            </div>

            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-color)', textAlign: 'left', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '0.75rem 0', fontWeight: 500 }}>Case ID</th>
                  <th style={{ padding: '0.75rem 0', fontWeight: 500 }}>Citizen</th>
                  <th style={{ padding: '0.75rem 0', fontWeight: 500 }}>Type</th>
                  <th style={{ padding: '0.75rem 0', fontWeight: 500 }}>Status</th>
                  <th style={{ padding: '0.75rem 0', fontWeight: 500 }}>SLA</th>
                  <th style={{ padding: '0.75rem 0', fontWeight: 500 }}>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '1rem 0', fontWeight: 500 }}>WST-2026-000184</td>
                  <td style={{ padding: '1rem 0' }}>
                    <Link to="/officer/citizen-360" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 500 }}>Sarah Williams</Link>
                  </td>
                  <td style={{ padding: '1rem 0' }}>Missed Bin</td>
                  <td style={{ padding: '1rem 0' }}><span className="badge badge-warning">New / Unassigned</span></td>
                  <td style={{ padding: '1rem 0', color: 'var(--color-danger)', fontWeight: 500 }}>12h 42m</td>
                  <td style={{ padding: '1rem 0' }}>
                    <Link to="/officer/ai-triage" className="btn btn-primary" style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem' }}>Triage</Link>
                  </td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '1rem 0', fontWeight: 500 }}>WST-2026-000183</td>
                  <td style={{ padding: '1rem 0' }}>John Doe</td>
                  <td style={{ padding: '1rem 0' }}>Fly Tipping</td>
                  <td style={{ padding: '1rem 0' }}><span className="badge badge-info">In Progress</span></td>
                  <td style={{ padding: '1rem 0' }}>3d 14h</td>
                  <td style={{ padding: '1rem 0' }}>
                    <button className="btn btn-secondary" style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem' }}>View</button>
                  </td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '1rem 0', fontWeight: 500 }}>WST-2026-000182</td>
                  <td style={{ padding: '1rem 0' }}>ABC Cafe Ltd</td>
                  <td style={{ padding: '1rem 0' }}>Commercial Waste</td>
                  <td style={{ padding: '1rem 0' }}><span className="badge badge-info">In Progress</span></td>
                  <td style={{ padding: '1rem 0' }}>1d 02h</td>
                  <td style={{ padding: '1rem 0' }}>
                    <button className="btn btn-secondary" style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem' }}>View</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div className="card glass-panel" style={{ background: 'linear-gradient(145deg, #111827 0%, #374151 100%)', color: 'white', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.125rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white' }}>
              <Sparkles size={18} color="var(--color-primary-light)" />
              AI Demand Insights
            </h2>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
              <p style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                <strong>Alert:</strong> Missed collection reports increased by 14% in the S1 postcode area over the last 4 hours.
              </p>
              <div className="text-sm" style={{ color: 'var(--color-primary-light)', marginTop: '0.5rem', cursor: 'pointer' }}>
                View clustered cases &rarr;
              </div>
            </div>
          </div>

          <div className="card">
            <h2 style={{ fontSize: '1.125rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={18} color="var(--text-muted)" />
              Property Hotspots
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ padding: '0.75rem 0', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between' }}>
                <span className="text-sm font-medium">S1 2AB (City Centre)</span>
                <span className="badge badge-danger">12 Cases</span>
              </li>
              <li style={{ padding: '0.75rem 0', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between' }}>
                <span className="text-sm font-medium">S10 4FD (Crookes)</span>
                <span className="badge badge-warning">8 Cases</span>
              </li>
              <li style={{ padding: '0.75rem 0', display: 'flex', justifyContent: 'space-between' }}>
                <span className="text-sm font-medium">S11 8PR (Ecclesall)</span>
                <span className="badge badge-warning">5 Cases</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficerDashboard;
