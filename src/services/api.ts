import axios from 'axios';

export const api = axios.create({ baseURL: '/api', headers: { 'Content-Type': 'application/json' } });
export const customerService = { list: () => api.get('/customers'), get: (id: string) => api.get(`/customers/${id}`) };
export const planService = { list: () => api.get('/plans'), create: (data: unknown) => api.post('/plans', data), update: (id: string, data: unknown) => api.put(`/plans/${id}`, data) };
export const routerService = { list: () => api.get('/routers'), create: (data: unknown) => api.post('/routers', data), update: (id: string, data: unknown) => api.put(`/routers/${id}`, data) };
export const subscriptionService = { list: () => api.get('/subscriptions') };
export const paymentService = { list: () => api.get('/payments') };
export const smsService = { list: () => api.get('/sms') };
export const customerPortalService = {
  listPackages: () => api.get('/portal/packages'),
  requestPayment: (data: unknown) => api.post('/portal/payments', data),
  getPayment: (id: string) => api.get(`/portal/payments/${id}`),
  redeemVoucher: (code: string) => api.post('/portal/vouchers/redeem', { code }),
  getSubscription: () => api.get('/portal/subscription'),
};
