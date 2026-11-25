import { Activity, CreditCard, Router, Users, ArrowUpRight } from 'lucide-react';
import { customers, payments, routers, subscriptions } from '../../data/mockData';
import StatCard from '../../components/dashboard/StatCard';
import RecentPayments from '../../components/dashboard/RecentPayments';
import { StatusBadge } from '../../components/ui';
import { formatCurrency } from '../../components/ui/utils';

export default function Dashboard() {
  const revenue = payments.filter((payment) => payment.status === 'Paid').reduce((total, payment) => total + payment.amount, 0);
  return <div><div className="page-header"><div><p className="eyebrow">OVERVIEW</p><h1>Good morning, Admin</h1><p>Here’s what is happening across your ISP network today.</p></div><button className="button button-secondary"><Activity size={17} /> Live activity</button></div><div className="stats-grid"><StatCard label="Total customers" value={customers.length.toString()} helper="12% from last month" icon={<Users size={20} />} /><StatCard label="Active subscriptions" value={subscriptions.filter((item) => item.status === 'Active' || item.status === 'Expiring').length.toString()} helper="Across all packages" icon={<CreditCard size={20} />} tone="blue" /><StatCard label="Monthly revenue" value={formatCurrency(revenue)} helper="Paid transactions this period" icon={<ArrowUpRight size={20} />} tone="purple" /><StatCard label="Online routers" value={`${routers.filter((item) => item.status === 'Online').length}/${routers.length}`} helper="Network availability" icon={<Router size={20} />} tone="orange" /></div><div className="dashboard-grid"><RecentPayments /><div className="card"><div className="card-header"><div><h2>Network status</h2><p>Registered router health</p></div></div>{routers.map((router) => <div className="network-row" key={router.id}><span className="router-dot"><Router size={16} /></span><div><strong>{router.name}</strong><small>{router.location}</small></div><StatusBadge status={router.status} /></div>)}</div></div></div>;
}
