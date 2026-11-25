import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Dashboard from './pages/isp/Dashboard';
import { CustomersPage, PlansPage, RoutersPage, SubscriptionsPage, PaymentsPage, SMSPage, SettingsPage } from './pages/isp/ManagementPages';
import CustomerPortalLayout from './components/portal/CustomerPortalLayout';
import { PortalHome, PortalPayment, PortalSubscription, PortalVoucher } from './pages/portal/PortalPages';
import SuperAdminLayout from './components/superAdmin/SuperAdminLayout';
import { IspsPage, MonetizationPage, RevenuePage, RoutersPage as SuperRoutersPage, SuperAdminSettingsPage, SuperDashboard } from './pages/superAdmin/SuperAdminPages';

function IspLayout() {
  const [mobileNav, setMobileNav] = useState(false);
  return <div className="app-shell"><div className={mobileNav ? 'sidebar-holder open' : 'sidebar-holder'}><Sidebar /></div>{mobileNav && <button className="sidebar-overlay" onClick={() => setMobileNav(false)} aria-label="Close menu" />}<main className="main-content"><Header onMenu={() => setMobileNav(true)} /><div className="content-wrap"><Routes><Route path="/isp" element={<Dashboard />} /><Route path="/isp/customers" element={<CustomersPage />} /><Route path="/isp/plans" element={<PlansPage />} /><Route path="/isp/routers" element={<RoutersPage />} /><Route path="/isp/subscriptions" element={<SubscriptionsPage />} /><Route path="/isp/payments" element={<PaymentsPage />} /><Route path="/isp/sms" element={<SMSPage />} /><Route path="/isp/settings" element={<SettingsPage />} /><Route path="*" element={<Navigate to="/isp" replace />} /></Routes></div></main></div>;
}
function App() { return <BrowserRouter><Routes><Route path="/portal" element={<CustomerPortalLayout />}><Route index element={<PortalHome />} /><Route path="payment" element={<PortalPayment />} /><Route path="subscription" element={<PortalSubscription />} /><Route path="voucher" element={<PortalVoucher />} /></Route><Route path="/super-admin" element={<SuperAdminLayout />}><Route index element={<Navigate to="dashboard" replace />} /><Route path="dashboard" element={<SuperDashboard />} /><Route path="isps" element={<IspsPage />} /><Route path="routers" element={<SuperRoutersPage />} /><Route path="monetization" element={<MonetizationPage />} /><Route path="revenue" element={<RevenuePage />} /><Route path="settings" element={<SuperAdminSettingsPage />} /></Route><Route path="*" element={<IspLayout />} /></Routes></BrowserRouter>; }
export default App;
