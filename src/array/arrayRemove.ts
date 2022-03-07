import { arrayRemoveType } from '../../typings/array'

const arrayRemove: arrayRemoveType = <T>(
  arr: T[],
  fn: (value: T, index: number, array: T[]) => unknown
) => {
  const result: T[] = []
  if (!Array.isArray(arr)) {
    return result
  }

  let index = -1
  const len = arr.length
  while (index++ < len) {
    if (fn(arr[index], index, arr)) {
      result.push(arr[index])
    }
  }

  return result
}

export default arrayRemove
