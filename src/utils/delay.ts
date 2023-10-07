/**
 * Delays the execution of a function by a given number of ms.
 * @param ms How many ms to delay.
 * @returns Promise that resolves after the delay.
 */
export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Decorator that delays the execution of a function by a given number of
 * milliseconds.
 * @param ms Milliseconds to delay the execution of the function.
 * @returns Decorator function.
 */
export function Delay(ms: number) {
  return function (
    _target: any,
    _propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      await delay(ms);
      return originalMethod.apply(this, args);
    };

    return descriptor;
  };
}
