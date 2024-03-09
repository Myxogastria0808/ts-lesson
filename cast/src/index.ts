//*cast
//参照: https://qiita.com/querykuma/items/e7667adba1477eb7d3a5
//*アップキャスト
//extends元の基底クラスの方にキャストすること
class A {
    a = 1;
}
class B extends A {
    b = 2;
}

//インスタンス化
const bInstance = new B();
console.log(bInstance.a);

//*ダウンキャスト
//extends先の派生クラスの方にキャストすること
class C {
    c = 3;
}
class D extends C {
    d = 4;
}

//インスタンス化
const cInstance = new C();

console.log((cInstance as D).c);
console.log((cInstance as D).d);
console.log((<D>cInstance).c);
console.log((<D>cInstance).d);

const castedCInstance: D = cInstance as D;

console.log(castedCInstance.c);
console.log(castedCInstance.d);
console.log(castedCInstance.c);
console.log(castedCInstance.d);

//*型アサーション
//子の方だと負いう確信があるときに使うもの
//*型アサーション パターン 1
const helloWorld_1: unknown = 'Hello, World';
const strLength: number = (helloWorld_1 as string).length;
console.log(strLength);

//*型アサーション パターン 2
const helloWorld_2: any = 'Hello, World';
const strLength_2: number = (<string>helloWorld_2).length;

type StringToNumber<T, S> = (stringValue: T) => S;

const sampleFunc: StringToNumber<string, number> = (value) => {
    return Number(value);
};

const sampleFunc2 = (hello: Hello): void => {
    console.log(hello);
};

type Hello = {
    unko?: string;
};

const helloSmaple: Hello = { unko: 'Hello' };

sampleFunc2(helloSmaple);
