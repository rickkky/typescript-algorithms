import { Compare, compareAny } from 'src/utils'

export function mergeSort<T>(
  origin: T[],
  compare: Compare<T> = compareAny,
): T[] {
  let len = origin.length
  let target: T[] = []

  if (len <= 1) {
    return target
  }

  for (let seg = 1; seg < len; seg = seg * 2) {
    for (let start = 0; start < len; start += seg + seg) {}
  }

  return target
}

function mergeArray<T>(
  origin: T[],
  compare: Compare<T>,
  left: number,
  middle: number,
  right: number,
): T[] {
  let temp: T[] = []
  let start1 = left
  let end1 = middle
  let start2 = middle + 1
  let end2 = right
  let index = 0

  while (start1 <= end1 && start2 <= end2) {
    if (compare(origin[start1], origin[start2]) < 0) {
      temp[index] = origin[start1]
      start1 += 1
    } else {
      temp[index] = origin[start2]
      start2 += 1
    }

    index += 1
  }

  while (start1 <= end1) {
    temp[index] = origin[start1]
    start1 += 1
    index += 1
  }

  while (start2 <= end2) {
    temp[index] = origin[start2]
    start2 += 1
    index += 1
  }

  return temp
}

export default mergeSort
