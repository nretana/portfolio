export function randomId(prefix = 'app-'): string {
  return `${prefix}${Math.random().toString(36).slice(2, 11)}`;
}