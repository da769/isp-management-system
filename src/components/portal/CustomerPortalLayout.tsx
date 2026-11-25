import { Link, NavLink, Outlet } from 'react-router-dom';
import { Wifi, HelpCircle, Ticket } from 'lucide-react';

export default function CustomerPortalLayout() {
  return <div className="portal-shell"><header className="portal-header"><Link to="/portal" className="portal-brand"><span><Wifi size={20} /></span><strong>Connect<span>Hub</span></strong></Link><nav><NavLink to="/portal" end>Buy WiFi</NavLink><NavLink to="/portal/subscription">My connection</NavLink><NavLink to="/portal/voucher"><Ticket size={15} /> Voucher</NavLink></nav><button className="portal-help" aria-label="Help"><HelpCircle size={19} /></button></header><main className="portal-main"><Outlet /></main><footer className="portal-footer">Need help? Contact your site support team.</footer></div>;
}
