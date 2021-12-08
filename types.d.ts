declare module 'unitedstatesofamerica' {
  type JSTypes = 'string' | 'number' | 'boolean' | 'object' | 'function' | 'symbol' | 'undefined';
  type ArrayUSATypes = JSTypes & ('null' | 'array' | 'objectOnly');

  type CallbackFn<ReturnType> = (value: any, index: number, array: ArrayUSA<any>) => ReturnType;
  type GenericObject = { [key: string]: any };
  type ToObjectShape = { key: string; value: any };

  interface ArrayUSA<ArrayItemsType> extends Array<ArrayItemsType> {
    ascending(): void;
    assert(comparedValue: any): boolean;
    batch(size: number): ArrayUSA<any[]>;
    copy(): ArrayUSA<any>;
    countIf(condition: CallbackFn<boolean>): number;
    countOf(value: any): number;
    deepCopy(): ArrayUSA<any>;
    descending(): void;
    difference(): number;
    evenIndexes(): ArrayUSA<any>;
    filterType(type: ArrayUSATypes): ArrayUSA<any>;
    isEmpty(): boolean;
    last(): any;
    mean(): number;
    median(): number;
    mode(): number;
    oddIndexes(): ArrayUSA<any>;
    onlyDuplicates(): ArrayUSA<any>;
    partialMatch(matchObj: GenericObject): any;
    partialMatchIndex(matchObj: GenericObject): number;
    product(): number;
    quotient(): number;
    random(): any;
    randomIndex(): number;
    replace(oldVal: any, newVal: any): ArrayUSA<any>;
    shuffle(): ArrayUSA<any>;
    sum(): number;
    toArray(): any[];
    toNum(): number;
    toObject(callback: CallbackFn<ToObjectShape>): GenericObject;
    toStr(): ArrayUSA<string>;
    types(): JSTypes;
    withoutDuplicates(): ArrayUSA<any>;
    withoutFalseyValues(): ArrayUSA<any>;
    withoutNullValues(): ArrayUSA<any>;
  }

  const arrayUSA: {
    (arr: any[]): ArrayUSA<any>;
    exposeProtos(): void;
    withLength: (length: number) => ArrayUSA<any>;
  };

  export = arrayUSA;
}
