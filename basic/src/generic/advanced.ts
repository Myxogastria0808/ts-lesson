const genericsAdvancedSample = () => {
    //map関数のシグネチャ
    type Map<T, U> = (array: T[], fn: (item: T) => U) => U[];

    //StringをNumberに変換する
    const mapStringsToNumbers: Map<string, number> = (array, func) => {
        const result: number[] = [];
        for (let i = 0; i < array.length; i++) {
            const item: string = array[i];
            result[i] = func(item);
        }
        return result;
    };
    const numbers = mapStringsToNumbers(['123', '456', '789'], (item) => Number(item));
    console.log('geneticsAdvancedSample mapNumbersToStrings is:', numbers);

    //NumberをStringに変換する
    const mapNumbersToStrings: Map<number, string> = (array, func) => {
        const result: string[] = [];
        for (let i = 0; i < array.length; i++) {
            const item: number = array[i];
            result[i] = func(item);
        }
        return result;
    };
    const strings = mapNumbersToStrings(numbers, (item) => String(item));
    console.log('geneticsAdvancedSample mapNumbersToStrings is:', strings);
};

export default genericsAdvancedSample;
