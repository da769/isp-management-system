import type { Customer, CustomerPackage, CustomerSubscription, InternetPlan, Payment, Router, SMSNotification, Subscription, Voucher } from '../types';

export const plans: InternetPlan[] = [
  { id: 'plan-1', name: '1 Hour WiFi', description: 'Quick access for short visits', type: 'WiFi', duration: '1 hour', durationDays: 0.04, price: 20, status: 'Active' },
  { id: 'plan-2', name: '2 Hours WiFi', description: 'Flexible short-session access', type: 'WiFi', duration: '2 hours', durationDays: 0.08, price: 30, status: 'Active' },
  { id: 'plan-3', name: '12 Hours WiFi', description: 'Half-day connectivity', type: 'WiFi', duration: '12 hours', durationDays: 0.5, price: 60, status: 'Active' },
  { id: 'plan-4', name: '24 Hours WiFi', description: 'Full-day WiFi access', type: 'WiFi', duration: '24 hours', durationDays: 1, price: 100, status: 'Active' },
  { id: 'plan-5', name: 'Monthly Ethernet', description: 'Reliable wired connectivity', type: 'Ethernet', duration: '30 days', durationDays: 30, price: 1500, status: 'Active' },
];
export const customers: Customer[] = [
  { id: 'cus-1', name: 'Amina Wanjiku', phone: '+254 712 345 678', registeredAt: '2026-01-08', packageName: 'Monthly Ethernet', expiryDate: '2026-12-08', status: 'Active' },
  { id: 'cus-2', name: 'Brian Otieno', phone: '+254 723 456 789', registeredAt: '2026-02-14', packageName: '24 Hours WiFi', expiryDate: '2026-11-28', status: 'Active' },
  { id: 'cus-3', name: 'Cynthia Njeri', phone: '+254 734 567 890', registeredAt: '2026-03-22', packageName: '12 Hours WiFi', expiryDate: '2026-11-25', status: 'Inactive' },
  { id: 'cus-4', name: 'David Mwangi', phone: '+254 745 678 901', registeredAt: '2026-04-03', packageName: '2 Hours WiFi', expiryDate: '2026-11-27', status: 'Active' },
  { id: 'cus-5', name: 'Esther Achieng', phone: '+254 756 789 012', registeredAt: '2026-04-19', packageName: 'Monthly Ethernet', expiryDate: '2026-12-19', status: 'Active' },
];
export const routers: Router[] = [
  { id: 'r-1', name: 'Westlands Gateway', identifier: 'RTR-WL-001', location: 'Westlands Site', status: 'Online', connectedUsers: 48, heartbeat: '2 minutes ago', registeredAt: '2026-01-10' },
  { id: 'r-2', name: 'Kilimani Core', identifier: 'RTR-KL-002', location: 'Kilimani Site', status: 'Online', connectedUsers: 31, heartbeat: '5 minutes ago', registeredAt: '2026-02-04' },
  { id: 'r-3', name: 'Lavington Access', identifier: 'RTR-LV-003', location: 'Lavington Site', status: 'Offline', connectedUsers: 0, heartbeat: '3 hours ago', registeredAt: '2026-03-18' },
  { id: 'r-4', name: 'Riverside Router', identifier: 'RTR-RV-004', location: 'Riverside Site', status: 'Pending configuration', connectedUsers: 0, heartbeat: 'Never', registeredAt: '2026-05-11' },
];
export const subscriptions: Subscription[] = [
  { id: 'sub-1', customerId: 'cus-1', customer: 'Amina Wanjiku', packageName: 'Monthly Ethernet', startDate: '2026-11-08', expiryDate: '2026-12-08', paymentReference: 'MPESA-8F21A', status: 'Active' },
  { id: 'sub-2', customerId: 'cus-2', customer: 'Brian Otieno', packageName: '24 Hours WiFi', startDate: '2026-11-27', expiryDate: '2026-11-28', paymentReference: 'MPESA-1D92C', status: 'Expiring' },
  { id: 'sub-3', customerId: 'cus-3', customer: 'Cynthia Njeri', packageName: '12 Hours WiFi', startDate: '2026-11-24', expiryDate: '2026-11-25', paymentReference: 'MPESA-4B10E', status: 'Expired' },
  { id: 'sub-4', customerId: 'cus-4', customer: 'David Mwangi', packageName: '2 Hours WiFi', startDate: '2026-11-27', expiryDate: '2026-11-27', paymentReference: 'Pending', status: 'Pending' },
];
export const payments: Payment[] = [
  { id: 'pay-1', customer: 'Amina Wanjiku', phone: '+254 712 345 678', transactionReference: 'MPESA-8F21A', packageName: 'Monthly Ethernet', amount: 1500, date: '2026-11-08', method: 'M-Pesa', status: 'Paid' },
  { id: 'pay-2', customer: 'Brian Otieno', phone: '+254 723 456 789', transactionReference: 'MPESA-1D92C', packageName: '24 Hours WiFi', amount: 100, date: '2026-11-27', method: 'M-Pesa', status: 'Paid' },
  { id: 'pay-3', customer: 'Cynthia Njeri', phone: '+254 734 567 890', transactionReference: 'MPESA-4B10E', packageName: '12 Hours WiFi', amount: 60, date: '2026-11-24', method: 'M-Pesa', status: 'Under review' },
  { id: 'pay-4', customer: 'David Mwangi', phone: '+254 745 678 901', transactionReference: 'MPESA-7C44F', packageName: '2 Hours WiFi', amount: 30, date: '2026-11-27', method: 'M-Pesa', status: 'Pending' },
  { id: 'pay-5', customer: 'Esther Achieng', phone: '+254 756 789 012', transactionReference: 'MPESA-2A88B', packageName: 'Monthly Ethernet', amount: 1500, date: '2026-11-20', method: 'M-Pesa', status: 'Failed' },
];
export const smsNotifications: SMSNotification[] = [
  { id: 'sms-1', recipient: '+254 712 345 678', type: 'Successful subscription', preview: 'Your Monthly Ethernet subscription is active.', date: '2026-11-08', status: 'Delivered' },
  { id: 'sms-2', recipient: '+254 723 456 789', type: 'Subscription expiry reminder', preview: 'Your 24 Hours WiFi package expires soon.', date: '2026-11-27', status: 'Queued' },
  { id: 'sms-3', recipient: '+254 734 567 890', type: 'Expired subscription', preview: 'Your subscription has expired. Renew to reconnect.', date: '2026-11-25', status: 'Delivered' },
  { id: 'sms-4', recipient: '+254 756 789 012', type: 'Failed payment', preview: 'We could not process your latest payment.', date: '2026-11-20', status: 'Failed' },
];
export const customerPackages: CustomerPackage[] = plans.map((plan) => ({ id: plan.id, name: plan.name, duration: plan.duration, price: plan.price, description: plan.description, status: plan.status }));
export const customerSubscription: CustomerSubscription = { id: 'customer-sub-1', packageId: 'plan-4', packageName: '24 Hours WiFi', startDate: '2026-11-26', expiryDate: '2026-11-27', status: 'Expiring' };
export const vouchers: Voucher[] = [
  { code: 'WIFI100VALID', packageId: 'plan-4', status: 'Valid' },
  { code: 'WIFIUSED2026', packageId: 'plan-2', status: 'Already used' },
  { code: 'WIFIEXPIRED', packageId: 'plan-1', status: 'Expired' },
];
