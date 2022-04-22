export function debug(...args: unknown[]): void {
  console.log(...args);
}

/**
 * Helper function to get the only the values of an enum. (By default, TypeScript will include the
 * keys inside of a number-based enum, so those have to be filtered out.)
 *
 * This function will work properly for both number and string enums.
 */
export function getEnumValues<T>(
  transpiledEnum: Record<string, string | T>,
): T[] {
  const values = Object.values(transpiledEnum);
  const numberValues = values.filter((value) => typeof value === "number");

  // If there are no number values, then this must be a string enum, and no filtration is required
  const valuesToReturn = numberValues.length > 0 ? numberValues : values;
  return valuesToReturn as T[];
}
