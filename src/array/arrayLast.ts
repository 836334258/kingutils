import { arrayLastType } from '../../typings/array'

const arrayLast: arrayLastType = <T>(arr: T[]) => {
  const length = arr ? arr.length : 0

  return length ? arr[length - 1] : undefined
}

export default arrayLast
