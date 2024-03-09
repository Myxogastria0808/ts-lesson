//未定義及び非推奨の型
//any型 <-どんな型でも許容する
//unknown型 <-代入した値によって方が変化する
//anyを使わずにunknown型を使う

const anySample = () => {
    //any型
    let name: any = 'Hello, World'; //<-string型になる
    console.log('any type:', typeof name, name);
    name = 28; //<-number型になる
    console.log('any type:', typeof name, name);
    //any型は、以下のように型が何にでも慣れてしまう上に、規制ができない問題がある
    const sum: number = name + 12; //<-any型は、これができてしまう
    console.log('any type:', typeof sum, sum);
    const str: string = name + 'Unko!'; //<-any型は、これができてしまう
    console.log('any type:', typeof str, str);

    //unknown型
    let maybeNumber: unknown = 10;
    console.log('unknown type:', typeof maybeNumber, maybeNumber);
    //unknown型は、型が判明していることを明示しない限り使えない
    //const sum: number = maybeNumber + 10; <-これはできない
    if (typeof maybeNumber == 'number') {
        const sum2: number = maybeNumber + 10;
        console.log('unknown type:', typeof sum2, sum2);
    }
    //別の型の再代入は、可能
    maybeNumber = 'Hello';
    console.log('unknown type:', typeof maybeNumber, maybeNumber);
    if (typeof maybeNumber == 'string') {
        const hello: string = maybeNumber + ', World!';
        console.log('unknown type:', typeof hello, hello);
    }
};

export default anySample;
