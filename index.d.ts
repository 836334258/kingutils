declare namespace kingutils {
  /**
   * 判断两个数组是否相等
   *
   * @param {Array} arr1
   * @param {Array} arr2
   * @return {Boolean}
   */
  export function arrayEqual(arr1: Array<any>, arr2: Array<any>): boolean
}

declare module 'kingutils' {
  export = kingutils
}
