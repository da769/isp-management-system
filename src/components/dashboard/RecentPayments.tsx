import { ArrowUpRight } from 'lucide-react';
import { payments } from '../../data/mockData';
import { StatusBadge } from '../ui';
import { formatCurrency } from '../ui/utils';
export default function RecentPayments() { return <div className="card"><div className="card-header"><div><h2>Recent payments</h2><p>Latest customer transactions</p></div><a className="text-link" href="/isp/payments">View all <ArrowUpRight size={15} /></a></div><div className="table-wrap"><table><thead><tr><th>Customer</th><th>Reference</th><th>Amount</th><th>Status</th></tr></thead><tbody>{payments.slice(0, 4).map((payment) => <tr key={payment.id}><td><strong>{payment.customer}</strong><small>{payment.phone}</small></td><td>{payment.transactionReference}</td><td>{formatCurrency(payment.amount)}</td><td><StatusBadge status={payment.status} /></td></tr>)}</tbody></table></div></div>; }
