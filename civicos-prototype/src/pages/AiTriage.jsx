import React from 'react';
import { Sparkles, FileText, AlertTriangle, Check, User, ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const AiTriage = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <Link to="/officer" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.875rem', marginBottom: '0.5rem', display: 'block' }}>&larr; Back to Dashboard</Link>
          <h1 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Sparkles color="var(--color-primary)" />
            AI Case Triage
          </h1>
          <p className="text-muted">CivicOS AI has pre-processed this incoming case for review.</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn btn-secondary">Reassign</button>
          <button className="btn btn-primary" style={{ backgroundColor: 'var(--color-success)' }}>
            <Check size={18} /> Approve AI Recommendations
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Left Column - Original Input */}
        <div style={{ gridColumn: 'span 1', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="card">
            <h2 style={{ fontSize: '1rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Original Submission</h2>
            <div style={{ padding: '1rem', backgroundColor: '#F8FAFC', borderRadius: 'var(--radius-md)', fontSize: '0.875rem', border: '1px solid var(--border-color)' }}>
              <strong>Channel:</strong> Citizen Portal Form<br/>
              <strong>Date:</strong> Today, 08:41<br/>
              <strong>Citizen:</strong> Sarah Williams
              <hr style={{ margin: '1rem 0', borderColor: 'var(--border-color)' }} />
              <p style={{ fontStyle: 'italic', color: 'var(--text-main)' }}>
                "My black bin wasn't collected yesterday. It's still sitting at the edge of the property on Example Street. I've been waiting three weeks for a proper collection and nobody has helped me. Please sort this out."
              </p>
            </div>
          </div>
          
          <div className="card">
            <h2 style={{ fontSize: '1rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Citizen Context</h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>
                SW
              </div>
              <div>
                <Link to="/officer/citizen-360" style={{ fontWeight: 500, color: 'var(--color-primary)', textDecoration: 'none' }}>Sarah Williams</Link>
                <div className="text-sm text-muted">24 Example Street, S1 2AB</div>
              </div>
            </div>
            <div className="text-sm" style={{ padding: '0.75rem', backgroundColor: '#FEF3C7', color: '#92400E', borderRadius: 'var(--radius-sm)' }}>
              <strong>Warning:</strong> Vulnerable resident flag (Council Tax support). Multiple recent contacts.
            </div>
          </div>
        </div>

        {/* Right Column - AI Processing */}
        <div style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div className="card glass-panel" style={{ borderLeft: '4px solid var(--color-primary)' }}>
            <h2 style={{ fontSize: '1.125rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={20} color="var(--color-primary)" />
              AI Extraction & Classification
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div style={{ padding: '1rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
                <div className="text-sm text-muted mb-1">Intent</div>
                <div className="font-medium flex items-center justify-between">
                  Missed Collection
                  <Check size={16} color="var(--color-success)" />
                </div>
              </div>
              <div style={{ padding: '1rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
                <div className="text-sm text-muted mb-1">Service Route</div>
                <div className="font-medium flex items-center justify-between">
                  Waste & Recycling Operations
                  <Check size={16} color="var(--color-success)" />
                </div>
              </div>
              <div style={{ padding: '1rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
                <div className="text-sm text-muted mb-1">Sentiment</div>
                <div className="font-medium flex items-center justify-between" style={{ color: 'var(--color-danger)' }}>
                  Frustrated / Escalated
                  <Check size={16} color="var(--color-success)" />
                </div>
              </div>
              <div style={{ padding: '1rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
                <div className="text-sm text-muted mb-1">Priority Override</div>
                <div className="font-medium flex items-center justify-between" style={{ color: 'var(--color-warning)' }}>
                  High (Repeat Issue)
                  <Check size={16} color="var(--color-success)" />
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>AI Action Recommendations</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Action 1 */}
              <div style={{ padding: '1rem', border: '1px solid var(--color-primary-light)', backgroundColor: '#EEF2FF', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div className="font-medium text-sm" style={{ color: 'var(--color-primary-dark)' }}>Recommended Action 1</div>
                  <div style={{ fontSize: '1rem' }}>Merge with Existing Case #WST-1234</div>
                  <div className="text-sm text-muted mt-1">AI detected a similar report for this property from 2 weeks ago.</div>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button className="btn" style={{ backgroundColor: 'white', border: '1px solid var(--border-color)' }}><X size={16} /></button>
                  <button className="btn btn-primary">Apply</button>
                </div>
              </div>

              {/* Action 2 */}
              <div style={{ padding: '1rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div className="font-medium text-sm text-muted">Recommended Action 2</div>
                  <div style={{ fontSize: '1rem' }}>Dispatch Rapid Response Team</div>
                  <div className="text-sm text-muted mt-1">Based on SLA breach rules for 3+ week delay and vulnerable resident status.</div>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button className="btn" style={{ backgroundColor: 'white', border: '1px solid var(--border-color)' }}><X size={16} /></button>
                  <button className="btn btn-secondary">Apply</button>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 style={{ fontSize: '1.125rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FileText size={20} color="var(--text-muted)" />
              AI Drafted Response
            </h2>
            <textarea 
              className="input-field" 
              rows="5" 
              defaultValue={"Dear Sarah,\n\nI apologise for the continued delay in collecting your black bin at 24 Example Street. I have merged this report with your previous case and escalated this to our Rapid Response Team due to the delay. They are scheduled to collect it by end of day tomorrow.\n\nThank you for your patience,\nCivicOS Waste Services"}
              style={{ fontSize: '0.875rem', lineHeight: '1.5' }}
            />
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
              <button className="btn btn-secondary">Edit Draft</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AiTriage;
