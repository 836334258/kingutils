export interface IArray {
  unique(arr: any[]): any[]
  remove<T>(arr: T[], fn: (value: T, index: number, array: T[]) => unknown): T[]
  last(arr: any[]): any[] | undefined
  equal(arr1: Array<any>, arr2: Array<any>): boolean
}

export function createArray(): IArray {
  return new KArray()
}

class KArray implements IArray {
  /**
   *
   * 数组去重
   * @param arr -
   */
  unique(arr: any[]): any[] {
    return Array.from(new Set(arr))
  }

  /**
   *
   * 筛选数组
   * @param arr -
   * @param  fn -
   */
  remove<T>(
    arr: T[],
    fn: (value: T, index: number, array: T[]) => unknown
  ): T[] {
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

  /**
   * 获取数组租后一个元素
   * @param  arr -输入
   *
   */
  last(arr: any[]): any[] | undefined {
    const length = arr ? arr.length : 0

    return length ? arr[length - 1] : undefined
  }
  /**
   *
   * 判断两个数组是否相等
   * @param arr1 -
   * @param  arr2 -
   */
  equal(arr1: Array<any>, arr2: Array<any>): boolean {
    if (arr1 === arr2) return true

    if (arr1?.length !== arr2?.length) return false

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false
    }

    return true
  }
}
