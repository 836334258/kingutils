export type arrayLastType = <T>(arr: T[]) => T | undefined
export type arrayRemoveType = <T>(
  arr: T[],
  fn: (value: T, index: number, array: T[]) => unknown
) => T[]
export type arrayUniqueType = (arr: any[]) => any[]
