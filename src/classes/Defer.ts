/** A small wrapper around a `Promise` to await the completion of an asynchronous event. */
export class Defer {
  private resolver: (() => void) | null = null;
  private promise = new Promise<void>((resolve) => {
    this.resolver = resolve;
  });

  finish(): void {
    if (this.resolver !== null) {
      this.resolver();
    }
  }

  async finished(): Promise<void> {
    await this.promise;
  }
}
