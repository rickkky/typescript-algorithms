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

      origin = [1, 0]
      target = [0, 1]
      expect(sort(origin)).toStrictEqual(target)

      origin = [1, 0, 2]
      target = [0, 1, 2]
      expect(sort(origin)).toStrictEqual(target)

      target = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      origin = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      expect(sort(origin)).toStrictEqual(target)

      origin = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
      expect(sort(origin)).toStrictEqual(target)

      origin = [5, 2, 4, 6, 1, 8, 7, 0, 9, 3]
      expect(sort(origin)).toStrictEqual(target)

      origin = [0, 9, 1, 8, 2, 3, 5, 4, 7, 6]
      expect(sort(origin)).toStrictEqual(target)

      origin = [9, 8, 7, 6, 5, 0, 1, 2, 3, 4]
      expect(sort(origin)).toStrictEqual(target)

      origin = [4, 3, 2, 1, 0, 5, 6, 7, 8, 9]
      expect(sort(origin)).toStrictEqual(target)

      origin = [5, 4, 6, 3, 7, 2, 8, 1, 9, 0]
      expect(sort(origin)).toStrictEqual(target)

      origin = [9, 0, 8, 1, 7, 2, 6, 3, 5, 4]
      expect(sort(origin)).toStrictEqual(target)
    })

    it('sort strings', () => {
      let origin: string[] = []
      let target: string[] = []
      expect(sort(origin)).toStrictEqual(target)

      origin = ['a']
      target = ['a']
      expect(sort(origin)).toStrictEqual(target)

      origin = ['b', 'a']
      target = ['a', 'b']
      expect(sort(origin)).toStrictEqual(target)

      origin = ['b', 'a', 'c']
      target = ['a', 'b', 'c']
      expect(sort(origin)).toStrictEqual(target)

      target = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

      origin = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
      expect(sort(origin)).toStrictEqual(target)

      origin = ['g', 'f', 'e', 'd', 'c', 'b', 'a']
      expect(sort(origin)).toStrictEqual(target)

      origin = ['f', 'a', 'e', 'g', 'b', 'd', 'c']
      expect(sort(origin)).toStrictEqual(target)

      origin = ['g', 'f', 'e', 'd', 'a', 'b', 'c']
      expect(sort(origin)).toStrictEqual(target)

      origin = ['c', 'b', 'a', 'd', 'f', 'e', 'g']
      expect(sort(origin)).toStrictEqual(target)

      origin = ['g', 'a', 'f', 'b', 'e', 'c', 'd']
      expect(sort(origin)).toStrictEqual(target)

      origin = ['d', 'e', 'c', 'f', 'b', 'g', 'a']
      expect(sort(origin)).toStrictEqual(target)
    })
  })
}

export default tester
