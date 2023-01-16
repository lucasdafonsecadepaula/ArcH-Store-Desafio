export function priceFormater(price: number) {
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
}
