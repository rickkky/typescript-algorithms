export interface Compare<T> {
  (a: T, b: T): number
}

export const compareAny: Compare<any> = (a, b) => {
  if (a === b) {
    return 0
  }

  return a > b ? 1 : -1
}

export const compareNumber: Compare<number> = (a, b) => {
  if (Number.isNaN(a)) {
    return -1
  }
  if (Number.isNaN(b)) {
    return 1
  }
  if (a === b) {
    return 0
  }

  return a > b ? 1 : -1
}

export const compareString: Compare<string> = (a, b) => {
  if (a === b) {
    return 0
  }

  return a > b ? 1 : -1
}

export default Compare
