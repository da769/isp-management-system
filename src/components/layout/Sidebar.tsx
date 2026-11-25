import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, Wifi, Router, CreditCard, ReceiptText, MessageSquare, Settings, Radio } from 'lucide-react';

const links = [
  { label: 'Dashboard', to: '/isp', icon: LayoutDashboard }, { label: 'Customers', to: '/isp/customers', icon: Users },
  { label: 'Plans', to: '/isp/plans', icon: Wifi }, { label: 'Subscriptions', to: '/isp/subscriptions', icon: ReceiptText },
  { label: 'Payments', to: '/isp/payments', icon: CreditCard }, { label: 'Routers', to: '/isp/routers', icon: Router },
  { label: 'SMS', to: '/isp/sms', icon: MessageSquare },
];
export default function Sidebar() {
  return <aside className="sidebar"><div className="brand"><span className="brand-mark"><Radio size={18} /></span><span>Net<span>Sphere</span></span></div><p className="workspace-label">ISP ADMINISTRATION</p><nav>{links.map(({ label, to, icon: Icon }) => <NavLink key={to} to={to} end={to === '/isp'} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}><Icon size={18} /><span>{label}</span></NavLink>)}</nav><div className="sidebar-bottom"><NavLink to="/isp/settings" className="nav-link"><Settings size={18} /><span>Settings</span></NavLink><div className="admin-mini"><span>AM</span><div><strong>Admin Manager</strong><small>ISP Administrator</small></div></div></div></aside>;
}
