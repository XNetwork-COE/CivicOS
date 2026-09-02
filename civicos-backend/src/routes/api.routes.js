import express from 'express';
import { getCases, getAppointments, getMessages, getPayments } from '../controllers/citizen.controller.js';
import { getKnowledge, getDesignerWorkflows, getSecurityLogs } from '../controllers/officer.controller.js';

const router = express.Router();

// Citizen Routes
router.get('/cases', getCases);
router.get('/appointments', getAppointments);
router.get('/messages', getMessages);
router.get('/payments', getPayments);

// Officer Routes
router.get('/knowledge', getKnowledge);
router.get('/designer', getDesignerWorkflows);
router.get('/security', getSecurityLogs);

export default router;
