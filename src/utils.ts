export function log(...args: unknown[]): void {
  console.log(...args);
}

export function error(...args: unknown[]): never {
  console.error(...args);
  process.exit(1);
}
