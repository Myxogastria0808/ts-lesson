"use strict";
//*cast
//参照: https://qiita.com/querykuma/items/e7667adba1477eb7d3a5
//*アップキャスト
//extends元の基底クラスの方にキャストすること
class A {
    constructor() {
        this.a = 1;
    }
}
class B extends A {
    constructor() {
        super(...arguments);
        this.b = 2;
    }
}
//インスタンス化
const bInstance = new B();
console.log(bInstance.a);
//*ダウンキャスト
//extends先の派生クラスの方にキャストすること
class C {
    constructor() {
        this.c = 3;
    }
}
class D extends C {
    constructor() {
        super(...arguments);
        this.d = 4;
    }
}
//インスタンス化
const cInstance = new C();
console.log(cInstance.c);
console.log(cInstance.d);
console.log(cInstance.c);
console.log(cInstance.d);
const castedCInstance = cInstance;
console.log(castedCInstance.c);
console.log(castedCInstance.d);
console.log(castedCInstance.c);
console.log(castedCInstance.d);
//*型アサーション
//子の方だと負いう確信があるときに使うもの
//*型アサーション パターン 1
const helloWorld_1 = 'Hello, World';
const strLength = helloWorld_1.length;
console.log(strLength);
//*型アサーション パターン 2
const helloWorld_2 = 'Hello, World';
const strLength_2 = helloWorld_2.length;
