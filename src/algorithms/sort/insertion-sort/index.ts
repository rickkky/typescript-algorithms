import { Compare, compareAny } from 'src/shared/compare'

export function insertionSort<T>(
  origin: T[],
  compare: Compare<T> = compareAny,
): T[] {
  let target = origin
  let len = target.length

  if (len <= 1) {
    return target
  }

  for (let i = 1; i < len; ++i) {
    for (let j = i; j >= 1; --j) {
      if (compare(target[j], target[j - 1]) >= 0) {
        break
      }

      let temp = target[j - 1]
      target[j - 1] = target[j]
      target[j] = temp
    }
  }

  return target
}

export default insertionSort
