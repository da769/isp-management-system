import { Check, Clock3, Wifi } from 'lucide-react';
import type { CustomerPackage } from '../../types';
import { formatCurrency } from '../ui/utils';
export default function PackageCard({ plan, selected, onSelect }: { plan: CustomerPackage; selected: boolean; onSelect: () => void }) { return <button type="button" className={selected ? 'portal-package selected' : 'portal-package'} onClick={onSelect} aria-pressed={selected}><div className="package-top"><span className="package-icon"><Wifi size={18} /></span>{selected && <span className="selected-check"><Check size={14} /></span>}</div><strong>{plan.name}</strong><p>{plan.description}</p><div className="package-meta"><span><Clock3 size={15} /> {plan.duration}</span><b>{formatCurrency(plan.price)}</b></div></button>; }
