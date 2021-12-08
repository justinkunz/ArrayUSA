declare module 'unitedstatesofamerica' {
  type JSTypes = 'string' | 'number' | 'boolean' | 'object' | 'function' | 'symbol' | 'undefined';
  type ArrayUSATypes = JSTypes & ('null' | 'array' | 'objectOnly');

  type CallbackFn<ReturnType> = (value: any, index: number, array: any[]) => ReturnType;
  type GenericObject = { [key: string]: any };
  type ToObjectShape = { key: any; value: any };

  interface ArrayUSAMethods extends Array<any> {
    ascending(): void;
    assert(comparedValue: any): boolean;
    batch(size: number): any[][];
    copy(): any[];
    countIf(condition: CallbackFn<boolean>): number;
    countOf(value: any): number;
    deepCopy(): any[];
    descending(): void;
    difference(): number;
    evenIndexes(): any[];
    filterType(type: ArrayUSATypes): any[];
    isEmpty(): boolean;
    last(): any;
    mean(): number;
    median(): number;
    mode(): number;
    oddIndexes(): any[];
    onlyDuplicates(): any[];
    partialMatch(matchObj: GenericObject): any;
    partialMatchIndex(matchObj: GenericObject): number;
    product(): number;
    quotient(): number;
    random(): any;
    randomIndex(): number;
    replace(oldVal: any, newVal: any): any[];
    shuffle(): any[];
    sum(): number;
    toNum(): number;
    toObject(callback: CallbackFn<ToObjectShape>): any[];
    toStr(): string[];
    types(): JSTypes;
    withoutDuplicates(): any[];
    withoutFalseyValues(): any[];
    withoutNullValues(): any[];
  }

  const arrayUSACaller: {
    (arr: any[]): ArrayUSAMethods;
    exposeProtos(): void;
    withLength: (length: number) => ArrayUSAMethods;
  };

  export = arrayUSACaller;
}
