import { arrayLastType } from './src/array/arrayLast'
declare namespace kingutils {
  /**
   * 判断两个数组是否相等
   *
   * @param {Array} arr1
   * @param {Array} arr2
   * @return {Boolean}
   */
  export declare function arrayEqual(
    arr1: Array<any>,
    arr2: Array<any>
  ): boolean
  export declare function arrayLast<T>(arr: T[]): T | undefined
  export declare function arrayRemove<T>(
    arr: T[],
    fn: (value: T, index: number, array: T[]) => unknown
  ): T[]
  export declare function arrayUnique(arr: any[]): any[]
}

declare module 'kingutils' {
  export = kingutils
}
