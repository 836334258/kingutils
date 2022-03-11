import { Buffer } from 'buffer'

export interface IUtil {
  isArguments(val: any): boolean
  isArray(val: any): boolean
  isArrayBuffer(val: any): boolean
  isArrayLike(val: any): boolean
  isArrayLikeObject(val: any): boolean
  isBoolean(val: any): boolean
  isBuffer(val: any): boolean
  isDate(val: any): boolean
  isElement(val: any): boolean
  isEmpty(val: any): boolean
  isEqual(val: any): boolean
  isEqualWith(val: any): boolean
  isError(val: any): boolean
  isFinite(val: any): boolean
  isFunction(val: any): boolean
  isInteger(val: any): boolean
  isLength(val: any): boolean
  isMap(val: any): boolean
  isMatch(val: any): boolean
  isMatchWith(val: any): boolean
  isNaN(val: any): boolean
  isNative(val: any): boolean
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
  isTypedArray(val: any): boolean
  isUndefined(val: any): boolean
  isWeakMap(val: any): boolean
  isWeakSet(val: any): boolean
  getTag(val: any): string
}

class Util implements IUtil {
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

export function createUtil(): Util {
  return new Util()
}
