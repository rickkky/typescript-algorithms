import { Compare } from 'src/shared'

export function tester(
  description: string,
  sort: <T>(origin: T[], compare?: Compare<T>) => T[],
) {
  describe(description, () => {
    it('sort numbers', () => {
      let origin: number[] = []
      let target: number[] = []
      expect(sort(origin)).toStrictEqual(target)

      origin = [0]
      target = [0]
      expect(sort(origin)).toStrictEqual(target)

      target = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      origin = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
      expect(sort(origin)).toStrictEqual(target)

      origin = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      expect(sort(origin)).toStrictEqual(target)

      origin = [5, 2, 4, 6, 1, 8, 7, 0, 9, 3]
      expect(sort(origin)).toStrictEqual(target)

      origin = [0, 9, 1, 8, 2, 3, 5, 4, 7, 6]
      expect(sort(origin)).toStrictEqual(target)
    })
  })
}

export default tester
