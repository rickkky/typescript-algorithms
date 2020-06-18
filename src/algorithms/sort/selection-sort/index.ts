import { Compare, compareAny } from 'src/utils'

export function selectionSort<T>(
  origin: T[],
  compare: Compare<T> = compareAny,
): T[] {
  let len = origin.length
  let answer = origin

  if (len < 2) {
    return answer
  }

  for (let i = 0; i < len - 1; ++i) {
    let minIndex = i

    for (let j = i + 1; j < len; ++j) {
      if (compare(answer[minIndex], answer[j]) <= 0) {
        continue
      }

      minIndex = j
    }

    let temp = answer[i]
    answer[i] = answer[minIndex]
    answer[minIndex] = temp
  }

  return answer
}

export default selectionSort
