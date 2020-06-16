import { Compare, compareAny } from 'src/shared/compare'

export function selectionSort<T>(
  origin: T[],
  compare: Compare<T> = compareAny,
): T[] {
  let target = origin
  let len = target.length

  if (len <= 1) {
    return target
  }

  for (let i = 0; i < len - 1; ++i) {
    for (let j = i + 1; j < len; ++j) {
      if (compare(target[i], target[j]) <= 0) {
        continue
      }

      let temp = target[i]
      target[i] = target[j]
      target[j] = temp
    }
  }

  return target
}

export default selectionSort
