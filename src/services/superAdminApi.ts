import { api } from './api';
export const superAdminService = {
  listIsps: () => api.get('/super-admin/isps'),
  updateIspStatus: (id: string, status: string, reason?: string) => api.patch(`/super-admin/isps/${id}/status`, { status, reason }),
  listRouters: () => api.get('/super-admin/routers'),
  getSettings: () => api.get('/super-admin/monetization'),
  updateSettings: (data: unknown) => api.put('/super-admin/monetization', data),
  listTransactions: () => api.get('/super-admin/revenue/transactions'),
  listPayouts: () => api.get('/super-admin/revenue/payouts'),
};
