const arraySample = () => {
    //配列の作り方
    //他言語で言うスライスと同じ感じ
    //可変長の配列である
    //pattern1
    const pattern1: string[] = ['red', 'blue'];
    pattern1.push('yellow');
    console.log('Pattern1 array is:', pattern1);

    //pattern2
    const pattern2: Array<number> = [2, 3, 4];
    pattern2.push(8);
    console.log('Pattern2 array is:', pattern2);

    //合併型(複数の型を含むことができる)も可能
    //使わない方がいい <-tsの意味がない
    const unitArray: (string | number)[] = ['ABC', 123];
    unitArray.push('DEF');
    unitArray.push(456);
    console.log('unitArray is:', unitArray);

    //配列は、型推論しない
    //配列の型推論例
    //これは、良くない書き方
    /*==================================================*/
    const generateSomeArray = () => {
        const _someArray: any = []; //any[]
        _someArray.push[123]; //number[]
        _someArray.push['ABC']; // (number | string)[]
        return _someArray;
    };
    const someArray = generateSomeArray();
    someArray.push(456);
    someArray.push(true);
    console.log('someArray is:', someArray);
    /*==================================================*/
};

export default arraySample;
