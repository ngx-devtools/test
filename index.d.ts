
export interface IExpect<T> {
  toHaveBeenCalled(): boolean;
  toBeTruthy(): boolean;
  toBeFalsy(): boolean;  
  toBeDefined(): boolean;
  toBeUndefined(): boolean;
  toEqual(expected: any): boolean;
  toHaveBeenCalledTimes(expected: number): boolean;
}

export interface IReturn {
  returnValue<T>(value: T): T
}

export declare function expect<T>(actual: any): IExpect<T>;

export declare namespace Mock {
  function createFn(fn: any): IReturn;
}
