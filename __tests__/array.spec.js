import arrayEqual from '../src/array/arrayEqual'

describe('array test', () => {
  test('arrayEqual', () => {
    expect(arrayEqual([1, 2, 3], [1, 2, 3])).toBeTruthy()
  })
})
