import { Compare, compareAny } from 'src/utils'

export function insertionSort<T>(
  origin: T[],
  compare: Compare<T> = compareAny,
): T[] {
  let len = origin.length
  let answer = origin

  if (len < 2) {
    return answer
  }

  for (let i = 1; i < len; ++i) {
    for (let j = i; j > 0; --j) {
      if (compare(answer[j], answer[j - 1]) >= 0) {
        break
      }

      let temp = answer[j - 1]
      answer[j - 1] = answer[j]
      answer[j] = temp
    }
  }

  return answer
}

export default insertionSort
