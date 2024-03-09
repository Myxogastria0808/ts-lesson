const genericsBasicSample = () => {
    //ジェネリック型を使わない
    const stringReduce = (array: string[], initialValue: string): string => {
        let result: string = initialValue;
        for (let i: number = 0; i < array.length; i++) {
            result += array[i];
        }
        return result;
    };
    const strResult = stringReduce(['Hello ', 'my ', 'birth ', 'day', '!'], '');
    console.log('stringReduce strResult is:', strResult);

    const numberReduce = (array: number[], initialValue: number): number => {
        let result: number = initialValue;
        for (let i: number = 0; i < array.length; i++) {
            result += array[i];
        }
        return result;
    };
    const NumberResult = numberReduce([1, 2, 4, 5, 6, 7, 6, 3, 2, 3], 0);
    console.log('numberReduce NumberResult is:', NumberResult);

    //2回も同じようなことを書かなくてはいけない
    //それはだるい
    //↓
    //generic型の出番 <-ポリモーフィズムの考え方
    //完全な呼び出しシグネチャ
    type GenericReduce<T> = {
        (array: T[], initialValue: T): T;
    };
    //呼び出し
    const geneticsStringReduce: GenericReduce<string> = (array, initialValue) => {
        let result: string = initialValue;
        for (let i: number = 0; i < array.length; i++) {
            result += array[i];
        }
        return result;
    };
    const geneticsStringResult = geneticsStringReduce(['Hello, ', 'world', '!'], '');
    console.log('geneticsStringResult is:', geneticsStringResult);

    const geneticsNumberReduce: GenericReduce<number> = (array, initialValue) => {
        let result: number = initialValue;
        for (let i: number = 0; i < array.length; i++) {
            result += array[i];
        }
        return result;
    };
    const geneticsNumberResult = geneticsNumberReduce([45, 12, 12, 7878, 217, -45, 6 - 4, 445645, -56, 456], 0);
    console.log('geneticsNumberResult is:', geneticsNumberResult);

    //各々で呼び出すシグネチャ
    type GenericReduce2 = {
        <T>(array: T[], initialValue: T): T;
        <U>(array: U[], initialValue: U): U;
    };
    //呼び出しシグネチャの省略記法
    type GenericReduce3<T> = (array: T[], initialValue: T) => T; //完全な呼び出し
    type GenericReduce4 = <T>(array: T[], initialValue: T) => T; //ここで変える方法
};

export default genericsBasicSample;
