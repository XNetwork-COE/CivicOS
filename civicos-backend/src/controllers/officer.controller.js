import { knowledgeArticles, designerWorkflows, securityLogs } from '../models/mockData.js';

export const getKnowledge = (req, res) => {
  res.json({ success: true, data: knowledgeArticles });
};

export const getDesignerWorkflows = (req, res) => {
  res.json({ success: true, data: designerWorkflows });
};

export const getSecurityLogs = (req, res) => {
  res.json({ success: true, data: securityLogs });
};
