export interface Compare<T> {
  (a: T, b: T): number
}

export const defaultCompare: Compare<any> = (a, b) => {
  if (a === b) {
    return 0
  }

  return a > b ? 1 : -1
}
