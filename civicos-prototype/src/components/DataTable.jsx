import React, { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

export const DataTable = ({ title, endpoint, icon: Icon, columns }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          setData(res.data);
        } else {
          setError('Failed to fetch data');
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('Error connecting to backend API');
        setLoading(false);
      });
  }, [endpoint]);

  return (
    <div className="card glass-panel" style={{ marginTop: '2rem' }}>
      <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
        {Icon && <Icon size={24} color="var(--color-primary)" />}
        {title}
      </h2>
      
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '3rem' }}>
          <Loader2 size={32} color="var(--color-primary)" style={{ animation: 'spin 1s linear infinite' }} />
        </div>
      ) : error ? (
        <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--color-danger)', backgroundColor: 'var(--bg-main)', borderRadius: 'var(--radius-md)' }}>
          {error} - Make sure the backend is running on port 3000.
        </div>
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--border-color)', backgroundColor: 'var(--bg-main)' }}>
                {columns.map(c => <th key={c.key} style={{ padding: '1rem', color: 'var(--text-muted)', fontWeight: 600 }}>{c.label}</th>)}
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => (
                <tr key={i} style={{ borderBottom: '1px solid var(--border-color)', transition: 'background-color var(--transition-fast)' }} className="hover-bg">
                  {columns.map(c => (
                    <td key={c.key} style={{ padding: '1rem' }}>
                      {c.render ? c.render(item[c.key], item) : item[c.key]}
                    </td>
                  ))}
                </tr>
              ))}
              {data.length === 0 && (
                <tr><td colSpan={columns.length} style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>No records found.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      )}
      <style>{`
        .hover-bg:hover { background-color: rgba(0,0,0,0.02); }
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};
