import { Bell, ChevronDown, Menu } from 'lucide-react';
export default function Header({ onMenu }: { onMenu?: () => void }) {
  return <header className="topbar"><button className="mobile-menu icon-button" onClick={onMenu} aria-label="Open menu"><Menu size={20} /></button><div><p className="eyebrow">ISP ADMINISTRATOR</p><h1>Management Console</h1></div><div className="topbar-actions"><button className="icon-button notification" aria-label="Notifications"><Bell size={19} /><i /></button><div className="profile"><span>AM</span><div><strong>Admin Manager</strong><small>Administrator</small></div><ChevronDown size={16} /></div></div></header>;
}
