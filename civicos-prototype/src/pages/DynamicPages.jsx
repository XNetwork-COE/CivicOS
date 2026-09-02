import React from 'react';
import { DataTable } from '../components/DataTable';
import { FileText, Calendar, MessageSquare, CreditCard, Search, Settings, Shield } from 'lucide-react';

export const CitizenCases = () => (
  <DataTable 
    title="My Cases" endpoint="/api/cases" icon={FileText}
    columns={[
      { key: 'id', label: 'Case ID', render: (val) => <span style={{ fontWeight: 600, color: 'var(--color-primary)' }}>{val}</span> },
      { key: 'type', label: 'Type' },
      { key: 'date', label: 'Date Opened' },
      { key: 'status', label: 'Status', render: (val) => <span className={`badge ${val === 'New' ? 'badge-warning' : val === 'Resolved' ? 'badge-success' : 'badge-info'}`}>{val}</span> }
    ]}
  />
);

export const CitizenAppointments = () => (
  <DataTable 
    title="Appointments" endpoint="/api/appointments" icon={Calendar}
    columns={[
      { key: 'id', label: 'ID' },
      { key: 'service', label: 'Service' },
      { key: 'date', label: 'Date' },
      { key: 'time', label: 'Time' },
      { key: 'type', label: 'Type' }
    ]}
  />
);

export const CitizenMessages = () => (
  <DataTable 
    title="Messages" endpoint="/api/messages" icon={MessageSquare}
    columns={[
      { key: 'from', label: 'From' },
      { key: 'subject', label: 'Subject', render: (val, row) => <span style={{ fontWeight: row.unread ? 600 : 400 }}>{val}</span> },
      { key: 'date', label: 'Date' },
      { key: 'unread', label: 'Status', render: (val) => val ? <span className="badge badge-warning">Unread</span> : <span className="text-muted">Read</span> }
    ]}
  />
);

export const CitizenPayments = () => (
  <DataTable 
    title="Payments" endpoint="/api/payments" icon={CreditCard}
    columns={[
      { key: 'id', label: 'Transaction ID' },
      { key: 'description', label: 'Description' },
      { key: 'date', label: 'Date' },
      { key: 'amount', label: 'Amount', render: (val) => `£${val.toFixed(2)}` },
      { key: 'status', label: 'Status', render: (val) => <span className={`badge ${val === 'Paid' ? 'badge-success' : 'badge-warning'}`}>{val}</span> }
    ]}
  />
);

export const OfficerKnowledge = () => (
  <DataTable 
    title="Knowledge Base" endpoint="/api/knowledge" icon={Search}
    columns={[
      { key: 'title', label: 'Article Title' },
      { key: 'category', label: 'Category' },
      { key: 'views', label: 'Views', render: (val) => <span className="text-muted">{val.toLocaleString()}</span> }
    ]}
  />
);

export const OfficerDesigner = () => (
  <DataTable 
    title="Service Designer Workflows" endpoint="/api/designer" icon={Settings}
    columns={[
      { key: 'name', label: 'Workflow Name' },
      { key: 'version', label: 'Version' },
      { key: 'status', label: 'Status', render: (val) => <span className={`badge ${val === 'Active' ? 'badge-success' : 'badge-secondary'}`}>{val}</span> }
    ]}
  />
);

export const OfficerSecurity = () => (
  <DataTable 
    title="Security & Access Logs" endpoint="/api/security" icon={Shield}
    columns={[
      { key: 'timestamp', label: 'Timestamp' },
      { key: 'user', label: 'User' },
      { key: 'action', label: 'Action' },
      { key: 'ip', label: 'IP Address', render: (val) => <span style={{ fontFamily: 'monospace' }}>{val}</span> }
    ]}
  />
);
