export function calculateIncome(t, type) {
  return t
    .filter((t) => t.type === type)
    .map((t) => t.amount)
    .reduce((a, b) => a + b, 0);
}
