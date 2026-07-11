export function formatRevenue(value: number): string {
  if (value >= 1_000_000) {
    const v = value / 1_000_000;
    return `R$${Number.isInteger(v) ? v.toFixed(0) : v.toFixed(2).replace(/0$/, "")}M`;
  }
  if (value >= 1_000) {
    const v = value / 1_000;
    return `R$${Number.isInteger(v) ? v.toFixed(0) : v.toFixed(1)}k`;
  }
  return `R$${value}`;
}
