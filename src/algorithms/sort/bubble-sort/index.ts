import { Compare, compareAny } from 'src/utils'

export function bubbleSort<T>(
  origin: T[],
  compare: Compare<T> = compareAny,
): T[] {
  let len = origin.length
  let answer = origin

  if (len < 2) {
    return answer
  }

  // flag that holds info about whether the swap has occur or not
  let swapped = false

  for (let i = len - 1; i > 0; --i) {
    swapped = false

    for (let j = 0; j < i; ++j) {
      if (compare(answer[j], answer[j + 1]) <= 0) {
        continue
      }

      let temp = answer[j]
      answer[j] = answer[j + 1]
      answer[j + 1] = temp

      swapped = true
    }

    if (!swapped) {
      break
    }
  }

  return answer
}

export default bubbleSort
