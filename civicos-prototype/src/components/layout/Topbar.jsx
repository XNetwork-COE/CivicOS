import React from 'react';
import { Bell, Search, UserCircle, Menu } from 'lucide-react';

const Topbar = ({ role, userName }) => {
  return (
    <header style={{
      backgroundColor: 'white',
      borderBottom: '1px solid var(--border-color)',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 10
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
        <Menu size={20} color="var(--text-muted)" style={{ cursor: 'pointer' }} />
        <div style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'var(--bg-main)',
          padding: '0.5rem 1rem',
          borderRadius: 'var(--radius-lg)',
          width: '100%',
          maxWidth: '400px',
          gap: '0.5rem'
        }}>
          <Search size={18} color="var(--text-muted)" />
          <input 
            type="text" 
            placeholder={role === 'citizen' ? "Search services, forms, knowledge..." : "Search citizens, properties, cases..."}
            style={{
              border: 'none',
              background: 'transparent',
              outline: 'none',
              width: '100%',
              fontSize: '0.875rem'
            }}
          />
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <div style={{ position: 'relative', cursor: 'pointer' }}>
          <Bell size={20} color="var(--text-muted)" />
          <span style={{
            position: 'absolute',
            top: '-4px',
            right: '-4px',
            backgroundColor: 'var(--color-danger)',
            color: 'white',
            fontSize: '0.625rem',
            fontWeight: 'bold',
            borderRadius: '50%',
            width: '16px',
            height: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>3</span>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderLeft: '1px solid var(--border-color)', paddingLeft: '1.5rem' }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>{userName}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{role === 'citizen' ? 'Verified Resident' : 'Waste Services'}</div>
          </div>
          <UserCircle size={32} color={role === 'citizen' ? "var(--color-secondary)" : "var(--color-primary)"} />
        </div>
      </div>
    </header>
  );
};

export default Topbar;
