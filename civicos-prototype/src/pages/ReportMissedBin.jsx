import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Trash2, MapPin, Camera, CheckCircle2 } from 'lucide-react';

const ReportMissedBin = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(3);
    }, 1500);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ marginBottom: '2rem' }}>
        <Link to="/citizen" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '1rem' }}>
          <ArrowLeft size={16} /> Back to Dashboard
        </Link>
        <h1>Report a Missed Bin</h1>
        <p className="text-muted">Our AI assistant will help route this to the correct team quickly.</p>
      </div>

      <div className="card">
        {step === 1 && (
          <form onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
            <div className="input-group">
              <label className="input-label">Which property is this for?</label>
              <select className="input-field" defaultValue="24 Example Street, Sheffield, S1 2AB">
                <option>24 Example Street, Sheffield, S1 2AB</option>
                <option>Other...</option>
              </select>
            </div>

            <div className="input-group">
              <label className="input-label">Which bin was missed?</label>
              <div className="grid grid-cols-3 gap-4">
                {['Black (General)', 'Blue (Recycling)', 'Brown (Garden)'].map((bin) => (
                  <label key={bin} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '1rem',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-md)',
                    cursor: 'pointer'
                  }}>
                    <input type="radio" name="bin_type" required />
                    <Trash2 size={18} color="var(--text-muted)" />
                    <span className="text-sm">{bin}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="input-group">
              <label className="input-label">When was it due for collection?</label>
              <input type="date" className="input-field" required />
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem' }}>
              <button type="submit" className="btn btn-primary">Continue</button>
            </div>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit} className="animate-fade-in">
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.125rem' }}>Additional Details</h3>
            
            <div className="input-group">
              <label className="input-label">Where is the bin currently located?</label>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <input type="text" className="input-field" defaultValue="At the boundary edge, as usual." />
                <button type="button" className="btn btn-secondary" style={{ whiteSpace: 'nowrap' }}><MapPin size={16} /> Pin Location</button>
              </div>
            </div>

            <div className="input-group">
              <label className="input-label">Upload a photo (optional)</label>
              <div style={{
                border: '2px dashed var(--border-color)',
                borderRadius: 'var(--radius-md)',
                padding: '2rem',
                textAlign: 'center',
                backgroundColor: 'var(--bg-main)',
                cursor: 'pointer'
              }}>
                <Camera size={32} color="var(--text-muted)" style={{ margin: '0 auto 1rem' }} />
                <p className="text-sm text-muted">Click or drag photo here to upload</p>
              </div>
            </div>

            <div className="input-group">
              <label className="input-label">Any other information?</label>
              <textarea className="input-field" rows="3" placeholder="E.g., I've been waiting three weeks..."></textarea>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
              <button type="button" className="btn btn-secondary" onClick={() => setStep(1)}>Back</button>
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Submitting & Classifying...' : 'Submit Report'}
              </button>
            </div>
          </form>
        )}

        {step === 3 && (
          <div className="animate-fade-in" style={{ textAlign: 'center', padding: '3rem 1rem' }}>
            <CheckCircle2 size={64} color="var(--color-success)" style={{ margin: '0 auto 1.5rem' }} />
            <h2 style={{ marginBottom: '1rem' }}>Report Submitted Successfully</h2>
            <p className="text-muted" style={{ marginBottom: '2rem', maxWidth: '400px', margin: '0 auto 2rem' }}>
              Your case <strong style={{ color: 'var(--text-main)' }}>#WST-2026-000184</strong> has been created. CivicOS AI has automatically routed this to the Waste Operations Team.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button className="btn btn-secondary" onClick={() => navigate('/citizen')}>Return to Dashboard</button>
              <button className="btn btn-primary">Track Case Status</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportMissedBin;
