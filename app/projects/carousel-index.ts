/** Wrap manual navigation, including empty and single-item collections. */
export function carouselIndex(current: number, direction: number, count: number): number {
  if (count <= 1) return 0;
  return ((current + direction) % count + count) % count;
}
