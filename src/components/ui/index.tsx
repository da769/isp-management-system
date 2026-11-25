import { type ReactNode } from 'react';
import { Search, X, AlertTriangle, Info } from 'lucide-react';

export function StatusBadge({ status }: { status: string }) {
  return <span className={`status-badge status-${status.toLowerCase().replaceAll(' ', '-').replaceAll('_', '-')}`}>{status}</span>;
}
export function SearchInput({ value, onChange, placeholder = 'Search...' }: { value: string; onChange: (value: string) => void; placeholder?: string }) {
  return <label className="search-input"><Search size={17} /><input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} aria-label={placeholder} /></label>;
}
export function SelectInput({ label, value, onChange, options }: { label: string; value: string; onChange: (value: string) => void; options: string[] }) {
  return <label className="field"><span>{label}</span><select value={value} onChange={(e) => onChange(e.target.value)}>{options.map((option) => <option key={option} value={option}>{option}</option>)}</select></label>;
}
export function FormInput({ label, value, onChange, type = 'text', required = false, placeholder }: { label: string; value: string | number; onChange: (value: string) => void; type?: string; required?: boolean; placeholder?: string }) {
  return <label className="field"><span>{label}{required && <b> *</b>}</span><input required={required} type={type} value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} /></label>;
}
export function Modal({ title, children, onClose, footer }: { title: string; children: ReactNode; onClose: () => void; footer?: ReactNode }) {
  return <div className="modal-backdrop" role="presentation" onMouseDown={(e) => e.target === e.currentTarget && onClose()}><div className="modal" role="dialog" aria-modal="true"><div className="modal-header"><h2>{title}</h2><button className="icon-button" onClick={onClose} aria-label="Close"><X size={19} /></button></div><div className="modal-body">{children}</div>{footer && <div className="modal-footer">{footer}</div>}</div></div>;
}
export function ConfirmationDialog({ title, message, onConfirm, onClose }: { title: string; message: string; onConfirm: () => void; onClose: () => void }) {
  return <Modal title={title} onClose={onClose} footer={<><button className="button button-secondary" onClick={onClose}>Cancel</button><button className="button button-danger" onClick={onConfirm}>Confirm</button></>}><div className="confirm-copy"><AlertTriangle size={28} /><p>{message}</p></div></Modal>;
}
export function EmptyState({ message = 'No records found.' }: { message?: string }) { return <div className="empty-state"><Info size={28} /><p>{message}</p></div>; }
export function LoadingState() { return <div className="empty-state"><div className="spinner" /><p>Loading records...</p></div>; }
export function ErrorState({ message = 'Unable to load records.' }: { message?: string }) { return <div className="empty-state error-state"><AlertTriangle size={28} /><p>{message}</p></div>; }
export function DetailRow({ label, value }: { label: string; value: ReactNode }) { return <div className="detail-row"><span>{label}</span><strong>{value}</strong></div>; }
