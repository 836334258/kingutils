export declare function createArray(): IArray {
  return new KArray()
}

export declare function createCollection(): ICollection {
  return new Collection()
}

declare interface IArray {
  unique(arr: any[]): any[]
  remove<T>(arr: T[], fn: (value: T, index: number, array: T[]) => unknown): T[]
  last(arr: any[]): any[] | undefined
  equal(arr1: Array<any>, arr2: Array<any>): boolean
  take(arr: any[], n: number): any[]
}

declare interface ICollection {
  mapArray(arr: any[], fn: Function): any[]
}

export {}
