import { arrayUniqueType } from '../../typings/array'

const arrayUnique: arrayUniqueType = (arr) => {
  return Array.from(new Set(arr))
}

export default arrayUnique
