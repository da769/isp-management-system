import type { ReactNode } from 'react';
export default function StatCard({ label, value, helper, icon, tone = 'teal' }: { label: string; value: string; helper: string; icon: ReactNode; tone?: string }) { return <div className="stat-card"><div className={`stat-icon ${tone}`}>{icon}</div><div><p>{label}</p><h3>{value}</h3><small>{helper}</small></div></div>; }
