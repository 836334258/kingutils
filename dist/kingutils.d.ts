export declare function createArray(): IArray {
  return new KArray()
}

export declare function createCollection(): ICollection {
  return new Collection()
}

export declare function createUtil(): Util {
  return new Util()
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

declare interface IUtil {
  isArguments(val: any): boolean
  isArray(val: any): boolean
  isArrayBuffer(val: any): boolean
  isArrayLike?(val: any): boolean
  isArrayLikeObject?(val: any): boolean
  isBoolean(val: any): boolean
  isBuffer(val: any): boolean
  isDate(val: any): boolean
  isElement(val: any): boolean
  isEmpty?(val: any): boolean
  isEqual?(val: any): boolean
  isEqualWith?(val: any): boolean
  isError(val: any): boolean
  isFinite(val: any): boolean
  isFunction(val: any): boolean
  isInteger(val: any): boolean
  isLength(val: any): boolean
  isMap(val: any): boolean
  isMatch?(val: any): boolean
  isMatchWith?(val: any): boolean
  isNaN(val: any): boolean
  isNative?(val: any): boolean
  isNil(val: any): boolean
  isNull(val: any): boolean
  isNubmer(val: any): boolean
  isObject(val: any): boolean
  isObjectLike(val: any): boolean
  isPlainObject(val: any): boolean
  isRegExp(val: any): boolean
  isSafeInteger(val: any): boolean
  isSet(val: any): boolean
  isString(val: any): boolean
  isSymbol(val: any): boolean
  isTypedArray?(val: any): boolean
  isUndefined(val: any): boolean
  isWeakMap(val: any): boolean
  isWeakSet(val: any): boolean
  getTag(val: any): string
}

declare class Util implements IUtil {
  isWeakSet(val: any): boolean {
    return this.isObjectLike(val) && this.getTag(val) === '[object WeakSet]'
  }

  isWeakMap(val: any): boolean {
    return this.isObjectLike(val) && this.getTag(val) === '[object WeakMap]'
  }

  isUndefined(val: any): boolean {
    return typeof val === 'undefined'
  }

  isSymbol(val: any): boolean {
    const type = typeof val
    return (
      type === 'symbol' ||
      (type === 'object' &&
        val !== null &&
        this.getTag(val) === '[object Symbol]')
    )
  }

  isString(val: any): boolean {
    const type = typeof val
    return (
      type === 'string' ||
      (type === 'object' &&
        val !== null &&
        this.getTag(val) === '[object String]')
    )
  }

  isSet(val: any): boolean {
    return this.isObjectLike(val) && this.getTag(val) === '[object Set]'
  }

  isSafeInteger(val: any): boolean {
    return Number.isSafeInteger(val)
  }

  isRegExp(val: any): boolean {
    return this.isObjectLike(val) && this.getTag(val) === '[object RegExp]'
  }

  isNubmer(val: any): boolean {
    return (
      typeof val === 'number' ||
      (this.isObjectLike(val) && this.getTag(val) === '[object Number]')
    )
  }
  isNull(val: any): boolean {
    return val === null
  }

  isNil(val: any): boolean {
    return val == null
  }

  isNaN(val: any): boolean {
    return Number.isNaN(val)
  }

  isMap(val: any): boolean {
    return nodeTypes && nodeTypes.isMap
      ? nodeTypes.isMap(val)
      : this.isObjectLike(val) && this.getTag(val) === '[object Map]'
  }
  isLength(val: any): boolean {
    return (
      typeof val === 'number' &&
      val > -1 &&
      val % 1 === 0 &&
      val < Number.MAX_SAFE_INTEGER
    )
  }

  isInteger(val: any): boolean {
    return Number.isInteger(val)
  }

  isFunction(val: any): boolean {
    return typeof val === 'function'
  }

  isFinite(val: any): boolean {
    return Number.isFinite(val)
  }

  isError(val: any): boolean {
    if (!this.isObjectLike(val)) {
      return false
    }

    const tag = this.getTag(val)
    return (
      tag === '[object Error]' ||
      tag === '[object DOMException]' ||
      (typeof val.message === 'string' &&
        typeof val.name === 'string' &&
        !this.isPlainObject(val))
    )
  }
  isElement(val: any): boolean {
    return (
      this.isObjectLike(val) && val.nodeType === 1 && !this.isPlainObject(val)
    )
  }

  /**
   *
   * 检查 value 是否是普通对象。 也就是说该对象由 Object 构造函数创建，或者 [[Prototype]] 为 null 。
   * @param val
   * @returns
   */
  isPlainObject(val: any): boolean {
    if (!this.isObjectLike(val) || this.getTag(val) !== '[object Object]') {
      return false
    }

    let proto = val
    while (Reflect.getPrototypeOf(proto) !== null) {
      proto = Reflect.getPrototypeOf(proto)
    }

    return proto === val
  }

  isDate(val: any): boolean {
    return (
      this.isObjectLike(val) &&
      Object.prototype.toString.call(val) === '[object Date]'
    )
  }

  isBuffer(val: any): boolean {
    return Buffer.isBuffer(val)
  }

  isBoolean(val: any): boolean {
    return (
      val === true ||
      val === false ||
      (this.isObjectLike(val) &&
        Object.prototype.toString.call(val) === '[object Boolean]')
    )
  }

  isArrayBuffer(val: any): boolean {
    return this.isObjectLike(val) && this.getTag(val) === '[object ArrayBuffer]'
  }

  isArray(val: any): boolean {
    return Array.isArray(val)
  }

  getTag(val: any): string {
    return Object.prototype.toString.call(val)
  }

  isArguments(val: any): boolean {
    return this.isObjectLike(val) && this.getTag(val) === '[object Arguments]'
  }

  isObjectLike(val: any): boolean {
    return typeof val === 'object' && val !== null
  }

  isObject(val: any): boolean {
    return (
      val !== null && (typeof val === 'object' || typeof val === 'function')
    )
  }
}

export {}
