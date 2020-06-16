import { Compare, compareAny } from 'src/utils'

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
    let minIndex = i

    for (let j = i + 1; j < len; ++j) {
      if (compare(target[minIndex], target[j]) <= 0) {
        continue
      }

      minIndex = j
    }

    let temp = target[i]
    target[i] = target[minIndex]
    target[minIndex] = temp
  }

  return target
}

export default selectionSort
