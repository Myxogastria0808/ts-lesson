const tupleSample = () => {
    //タプルの使いかた(書き換えのみ可能)
    //他言語で言う配列
    //型はarrayと同じ
    //第一引数、第二引数をそれぞれnumber、strintgにしている固定長
    let response: [number, string] = [200, 'OK'];
    // response = [400, 'Apple', 'Hello']; <-これは、errorになる
    // response = ['Hello', 400]; <-これは、errorになる
    console.log(response);

    //レストパラメータを含むパラメータ
    //...型[] <-これがレストパラメータ(可変長引数)
    //第1引数　<-これは、stringで必ず持つ
    //第2引数 <-stringである必要があるが、個数は自由
    const girlfriends: [string, ...string[]] = ['Kana', 'Miku', 'Misa'];
    girlfriends.push('misa');
    console.log(girlfriends);

    //イミュータブルな配列(書き換えすら不可)
    //read only オプションを付ける
    //pattern1
    const immutable1: readonly string[] = ['A', 'B', 'C'];
    // commands.push('A'); <-追加不可
    // commands[2] = 'D' <-書き換え不可
    console.log('Commands:', immutable1);
    //pattern2
    const immutable2: ReadonlyArray<string> = ['a', 'b', 'c'];
    console.log('Commands:', immutable2);
    //pattern3
    const immutable3: Readonly<string[]> = ['abc', 'ABC'];
    console.log('Commands:', immutable3);
};

export default tupleSample;
