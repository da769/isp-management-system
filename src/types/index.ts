export type Status = 'Active' | 'Inactive' | 'Pending' | 'Paid' | 'Failed' | 'Under review' | 'Expiring' | 'Expired' | 'Online' | 'Offline' | 'Pending configuration' | 'Delivered' | 'Queued';

export interface Customer {
  id: string; name: string; phone: string; registeredAt: string; packageName: string; expiryDate: string; status: 'Active' | 'Inactive';
}
export interface InternetPlan {
  id: string; name: string; description: string; type: 'WiFi' | 'Ethernet'; duration: string; durationDays: number; price: number; status: 'Active' | 'Inactive';
}
export interface Router {
  id: string; name: string; identifier: string; location: string; status: 'Online' | 'Offline' | 'Pending configuration'; connectedUsers: number; heartbeat: string; registeredAt: string;
}
export interface Subscription {
  id: string; customerId: string; customer: string; packageName: string; startDate: string; expiryDate: string; paymentReference: string; status: 'Pending' | 'Active' | 'Expiring' | 'Expired';
}
export interface Payment {
  id: string; customer: string; phone: string; transactionReference: string; packageName: string; amount: number; date: string; method: string; status: 'Pending' | 'Paid' | 'Failed' | 'Under review';
}
export interface SMSNotification {
  id: string; recipient: string; type: 'Successful subscription' | 'Subscription expiry reminder' | 'Expired subscription' | 'Failed payment'; preview: string; date: string; status: 'Delivered' | 'Queued' | 'Failed';
}
export interface CustomerPackage { id: string; name: string; duration: string; price: number; description: string; status: 'Active' | 'Inactive'; }
export interface PaymentRequest { packageId: string; phone: string; amount: number; }
export interface PaymentResponse { id: string; status: 'Pending' | 'Successful' | 'Failed' | 'Under review'; message: string; reference: string; }
export interface CustomerSubscription { id: string; packageId: string; packageName: string; startDate: string; expiryDate: string; status: 'Pending' | 'Active' | 'Expiring' | 'Expired'; }
export interface Voucher { code: string; packageId: string; status: 'Valid' | 'Already used' | 'Expired'; }
export interface ISP { id: string; businessName: string; phone: string; routers: number; customers: number; revenue: number; commission: number; status: 'Pending' | 'Active' | 'Rejected' | 'Suspended'; registeredAt: string; site: string; email: string; }
export interface PlatformRouter { id: string; name: string; ispName: string; site: string; identifier: string; status: 'Online' | 'Offline' | 'Pending configuration'; connectedUsers: number; heartbeat: string; }
export interface CommissionSettings { transactionCommission: number; monthlyRouterFee: number; }
export interface PlatformTransaction { id: string; reference: string; isp: string; customerReference: string; grossAmount: number; commission: number; netAmount: number; date: string; status: 'Paid' | 'Pending' | 'Failed'; }
export interface ISPPayout { id: string; reference: string; isp: string; amount: number; requestedAt: string; processedAt: string | null; status: 'Pending' | 'Paid' | 'Failed'; }
export interface PlatformActivity { id: string; title: string; detail: string; date: string; type: 'success' | 'warning' | 'info'; }
