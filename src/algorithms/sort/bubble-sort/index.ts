import { Compare, compareAny } from 'src/shared/compare'

export const bubbleSort = <T>(
  origin: T[],
  compare: Compare<T> = compareAny,
): T[] => {
  let target = origin
  let len = target.length

  if (len <= 1) {
    return target
  }

  // flag that holds info about whether the swap has occur or not
  let swapped = false

  for (let i = len - 1; i > 0; --i) {
    swapped = false

    for (let j = 0; j < i; ++j) {
      if (compare(target[j], target[j + 1]) <= 0) {
        continue
      }

      let temp = target[j]
      target[j] = target[j + 1]
      target[j + 1] = temp

      swapped = true
    }

    if (!swapped) {
      break
    }
  }

  return target
}

export default bubbleSort
