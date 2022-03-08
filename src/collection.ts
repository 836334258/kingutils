export interface ICollection {
  mapArray(arr: any[], fn: Function): any[]
}

export function createCollection(): ICollection {
  return new Collection()
}

class Collection implements ICollection {
  mapArray(arr: any[], fn: Function): any[] {
    if (!Array.isArray(arr)) {
      return []
    }
    let index = -1
    const result = []
    while (++index < arr.length) {
      result[index] = fn(arr[index], index, arr)
    }

    return result
  }
}
