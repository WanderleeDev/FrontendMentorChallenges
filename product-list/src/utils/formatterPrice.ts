export function formattingPrice(number: number): string {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
}
