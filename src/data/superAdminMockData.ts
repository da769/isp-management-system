import type { CommissionSettings, ISP, ISPPayout, PlatformActivity, PlatformRouter, PlatformTransaction } from '../types';

export const isps: ISP[] = [
  { id: 'isp-1', businessName: 'Sunrise Internet', phone: '+254 712 110 220', routers: 12, customers: 842, revenue: 486500, commission: 8, status: 'Active', registeredAt: '2026-01-14', site: 'Westlands', email: 'admin@sunrise.example' },
  { id: 'isp-2', businessName: 'MetroLink Networks', phone: '+254 723 220 330', routers: 8, customers: 506, revenue: 292100, commission: 7.5, status: 'Active', registeredAt: '2026-02-05', site: 'Kilimani', email: 'ops@metrolink.example' },
  { id: 'isp-3', businessName: 'BlueWave Connect', phone: '+254 734 330 440', routers: 5, customers: 238, revenue: 153800, commission: 10, status: 'Pending', registeredAt: '2026-11-21', site: 'Lavington', email: 'hello@bluewave.example' },
  { id: 'isp-4', businessName: 'Urban Mesh WiFi', phone: '+254 745 440 550', routers: 3, customers: 120, revenue: 81400, commission: 8, status: 'Suspended', registeredAt: '2026-03-12', site: 'Riverside', email: 'team@urbanmesh.example' },
  { id: 'isp-5', businessName: 'Pamoja Broadband', phone: '+254 756 550 660', routers: 6, customers: 317, revenue: 202700, commission: 9, status: 'Rejected', registeredAt: '2026-06-18', site: 'Parklands', email: 'info@pamoja.example' },
];
export const platformRouters: PlatformRouter[] = [
  { id: 'pr-1', name: 'Westlands Gateway', ispName: 'Sunrise Internet', site: 'Westlands', identifier: 'RTR-SUN-001', status: 'Online', connectedUsers: 148, heartbeat: '2 minutes ago' },
  { id: 'pr-2', name: 'Kilimani Core', ispName: 'MetroLink Networks', site: 'Kilimani', identifier: 'RTR-MET-002', status: 'Online', connectedUsers: 93, heartbeat: '4 minutes ago' },
  { id: 'pr-3', name: 'Lavington Access', ispName: 'BlueWave Connect', site: 'Lavington', identifier: 'RTR-BLU-003', status: 'Offline', connectedUsers: 0, heartbeat: '2 hours ago' },
  { id: 'pr-4', name: 'Riverside Hub', ispName: 'Urban Mesh WiFi', site: 'Riverside', identifier: 'RTR-URB-004', status: 'Pending configuration', connectedUsers: 0, heartbeat: 'Never' },
  { id: 'pr-5', name: 'Parklands Node', ispName: 'Pamoja Broadband', site: 'Parklands', identifier: 'RTR-PAM-005', status: 'Offline', connectedUsers: 0, heartbeat: '5 hours ago' },
];
export const platformTransactions: PlatformTransaction[] = [
  { id: 'pt-1', reference: 'PLAT-8F21A', isp: 'Sunrise Internet', customerReference: 'CUS-1202', grossAmount: 1500, commission: 120, netAmount: 1380, date: '2026-11-26', status: 'Paid' },
  { id: 'pt-2', reference: 'PLAT-1D92C', isp: 'MetroLink Networks', customerReference: 'CUS-4421', grossAmount: 100, commission: 7.5, netAmount: 92.5, date: '2026-11-26', status: 'Paid' },
  { id: 'pt-3', reference: 'PLAT-4B10E', isp: 'BlueWave Connect', customerReference: 'CUS-7781', grossAmount: 60, commission: 6, netAmount: 54, date: '2026-11-25', status: 'Pending' },
  { id: 'pt-4', reference: 'PLAT-7C44F', isp: 'Sunrise Internet', customerReference: 'CUS-8890', grossAmount: 30, commission: 2.4, netAmount: 27.6, date: '2026-11-25', status: 'Failed' },
];
export const ispPayouts: ISPPayout[] = [
  { id: 'po-1', reference: 'PAY-2026-1101', isp: 'Sunrise Internet', amount: 168420, requestedAt: '2026-11-20', processedAt: '2026-11-22', status: 'Paid' },
  { id: 'po-2', reference: 'PAY-2026-1102', isp: 'MetroLink Networks', amount: 104760, requestedAt: '2026-11-24', processedAt: null, status: 'Pending' },
  { id: 'po-3', reference: 'PAY-2026-1031', isp: 'Urban Mesh WiFi', amount: 43600, requestedAt: '2026-11-04', processedAt: '2026-11-07', status: 'Failed' },
];
export const platformActivities: PlatformActivity[] = [
  { id: 'a-1', title: 'New ISP registration', detail: 'BlueWave Connect submitted an application', date: '18 minutes ago', type: 'info' },
  { id: 'a-2', title: 'Payout completed', detail: 'Sunrise Internet payout was processed', date: '2 hours ago', type: 'success' },
  { id: 'a-3', title: 'Router offline', detail: 'Lavington Access has missed heartbeats', date: '3 hours ago', type: 'warning' },
];
export const commissionSettings: CommissionSettings = { transactionCommission: 8, monthlyRouterFee: 500 };
