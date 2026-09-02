import React from 'react';
import { Hammer } from 'lucide-react';

const ComingSoon = ({ title }) => {
  return (
    <div className="card glass-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem', textAlign: 'center', minHeight: '60vh', marginTop: '2rem' }}>
      <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--bg-main)', border: '2px dashed var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
        <Hammer size={40} />
      </div>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{title || 'Coming Soon'}</h2>
      <p className="text-muted" style={{ maxWidth: '500px', fontSize: '1.125rem', lineHeight: '1.6' }}>
        This module is part of the broader CivicOS vision but is not fully interactive in this prototype iteration. 
        It demonstrates where this capability will integrate within the final platform.
      </p>
    </div>
  );
};

export default ComingSoon;
