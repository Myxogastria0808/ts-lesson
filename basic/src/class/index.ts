const myClass = () => {
    //参考サイト: https://typescript-jp.gitbook.io/deep-dive/future-javascript/classes
    //参考サイト: https://qiita.com/saba_can00/items/4e670235cf63763e63bd
    //参考サイト: https://qiita.com/yukiji/items/3db06601ece7f080b0d0

    class Person {
        //どこでもアクセス可能
        public born: string;
        //readonly修飾子
        //代入不可
        public readonly name: string;
        //子クラスでのアクセス可能
        protected weight: number;
        protected height: number;
        //このクラスだけでアクセスできる
        private _age: number;
        //静的メンバも設定可能
        static species: string = 'Homo sapiens';
        //constructor
        //インスタンス化するときに実行される関数
        constructor(born: string, name: string, weight: number, height: number, age: number) {
            this.born = born;
            this.name = name;
            this.weight = weight;
            this.height = height;
            this._age = age;
        }
        //getter
        get getAge() {
            return this._age;
        }
        //setter
        set setAge(age: number) {
            this._age = age;
        }
    }

    //extends
    //単一継承 (extendsは、多重継承をサポートしない)
    class Parent {
        protected readonly parentName: string;
        constructor(parentName: string) {
            this.parentName = parentName;
        }
        sayParentname(): string {
            return `Parent name: ${this.parentName}`;
        }
    }

    class Child extends Parent {
        private childName: string;
        constructor(parentName: string, childName: string) {
            super(parentName);
            this.childName = childName;
        }
        sayName(): string {
            return `${this.sayParentname}、Child name: ${this.childName}`;
        }
    }

    //結果
    const myPerson = new Person('Japan', 'Yuki Osada', 50, 150, 19);
    console.log(myPerson.born);
    myPerson.born = 'USA';
    console.log(myPerson.born);
    //readonly
    console.log(myPerson.name);
    //静的メンバの呼び出し
    console.log(Person.species);
    //getter
    console.log(myPerson.getAge);
    //setter
    myPerson.setAge = 0;
    console.log(myPerson.getAge);
};

export { myClass };
