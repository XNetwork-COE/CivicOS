import { cases, appointments, messages, payments } from '../models/mockData.js';

export const getCases = (req, res) => {
  res.json({ success: true, data: cases });
};

export const getAppointments = (req, res) => {
  res.json({ success: true, data: appointments });
};

export const getMessages = (req, res) => {
  res.json({ success: true, data: messages });
};

export const getPayments = (req, res) => {
  res.json({ success: true, data: payments });
};
