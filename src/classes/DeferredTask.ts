/** A small wrapper around a `Promise` to await the completion of an asynchronous event. */
export class DeferredTask {
  private resolver: (() => void) | undefined;
  // eslint-disable-next-line unicorn/consistent-function-scoping
  private readonly promise = new Promise<void>((resolve) => {
    this.resolver = resolve;
  });

  finish(): void {
    if (this.resolver === undefined) {
      throw new Error(
        "Failed to finish a deferred task since it was already finished.",
      );
    }

    this.resolver();
    this.resolver = undefined;
  }

  async finished(): Promise<void> {
    await this.promise;
  }
}
