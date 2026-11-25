export function formatCurrency(value: number) { return `KES ${value.toLocaleString()}`; }
export function formatDate(value: string) { return new Intl.DateTimeFormat('en-KE', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(`${value}T00:00:00`)); }
