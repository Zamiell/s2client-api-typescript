export default class Queue {
  private items: Array<() => Promise<void>> = [];
  private waker: (() => void) | null = null;

  constructor() {
    this.processQueue().catch((err) => {
      throw new Error(`Failed to process a queue: ${err}`);
    });
  }

  private async processQueue(): Promise<void> {
    const functionExecutor = this.items.shift();
    if (functionExecutor === undefined) {
      await this.sleep();
    } else {
      await functionExecutor();
    }
  }

  private async sleep() {
    await new Promise<void>((resolve) => {
      this.waker = resolve;
    });
    this.waker = null;
  }

  async enqueueAndWait<T>(asyncFunc: () => Promise<T>): Promise<T> {
    const promise = new Promise<T>((resolve, reject) => {
      const functionExecutor = async () => {
        try {
          resolve(await asyncFunc());
        } catch (e) {
          reject(e);
        }
      };
      this.items.push(functionExecutor);
    });

    if (this.waker !== null) {
      this.waker();
    }

    return promise;
  }
}
