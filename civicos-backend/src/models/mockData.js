export const cases = [
  { id: 'WST-2026-000184', type: 'Missed Bin', status: 'New', priority: 'High', date: '2026-09-02' },
  { id: 'CTX-2026-04921', type: 'Council Tax Support', status: 'In Progress', priority: 'Medium', date: '2026-08-30' },
  { id: 'HOU-2026-01102', type: 'Housing Repair', status: 'Resolved', priority: 'Low', date: '2026-08-15' }
];

export const appointments = [
  { id: 'APT-001', service: 'Housing Consultation', date: '2026-09-09', time: '14:00', type: 'Video Call' },
  { id: 'APT-002', service: 'Council Tax Review', date: '2026-09-12', time: '10:30', type: 'In Person' }
];

export const messages = [
  { id: 'MSG-001', from: 'System', subject: 'Case WST-2026-000184 Opened', date: '2026-09-02', unread: true },
  { id: 'MSG-002', from: 'Housing Team', subject: 'Appointment Confirmed', date: '2026-09-01', unread: false }
];

export const payments = [
  { id: 'PAY-1004', amount: 145.50, description: 'Council Tax Installment', status: 'Paid', date: '2026-08-28' },
  { id: 'PAY-1005', amount: 35.00, description: 'Bulky Waste Collection', status: 'Pending', date: '2026-09-01' }
];

export const knowledgeArticles = [
  { id: 'KB-01', title: 'How to report a missed bin collection', category: 'Waste', views: 1245 },
  { id: 'KB-02', title: 'Council Tax Reduction Eligibility', category: 'Benefits', views: 3402 },
  { id: 'KB-03', title: 'Applying for a Blue Badge', category: 'Transport', views: 892 }
];

export const designerWorkflows = [
  { id: 'WF-01', name: 'Standard Missed Bin', status: 'Active', version: '1.2' },
  { id: 'WF-02', name: 'Fly Tipping Report', status: 'Draft', version: '2.0' }
];

export const securityLogs = [
  { id: 'LOG-001', user: 'Officer Davis', action: 'Login', timestamp: '2026-09-02 08:30:00', ip: '192.168.1.5' },
  { id: 'LOG-002', user: 'System', action: 'AI Triage Completed', timestamp: '2026-09-02 08:44:12', ip: 'localhost' }
];
