export function cartCountFormater(count: number) {
  if (count > 99) {
    return '99+';
  }
  return count;
}
