import arrayEqual from '../src/array/arrayEqual'
import unique from '../src/array/arrayUnique'

describe('array test', () => {
  test('arrayEqual', () => {
    expect(arrayEqual([1, 2, 3], [1, 2, 3])).toBeTruthy()
  })

  test('unique', () => {
    expect(unique([1, 2, 3, 3, 2, 1])).toContainEqual([1, 2, 3, 4])
  })
})
