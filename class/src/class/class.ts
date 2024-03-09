//アクセス修飾子
//public <-全体からアクセスできる
//private <-クラス内部からのみアクセスできる
//protected <-クラスを継承した小クラスからでもアクセスできる
//readonly <-コンストラクタ内で宣言し、読むことのみ許されている

class Person {
    //プロパティ
    public name: string;
    private age: number;
    protected nationality: string;
    public readonly readOnlyString: string = 'read only';

    //constructorで初期化することで利用可能になる
    //this.変数名 <-thisを使ってプロパティの変数を持ってくる
    constructor(name: string, age: number, nationality: string) {
        this.name = name;
        this.age = age;
        this.nationality = nationality;
    }

    //メソッド
    //privateを含むために、呼び出してもエラーとなる
    // profile(): string {
    //     return `name: ${this.name} age: ${this.age} nationality: ${this.nationality}`;
    // }
    //logを出したい場合は、中に埋め込めばいい
    logProfile(): void {
        console.log(
            `name: ${this.name} age: ${this.age} nationality: ${this.nationality} read only string: ${this.readOnlyString}`
        );
    }
}

//Personの継承クラス
class Android extends Person {
    constructor(name: string, age: number, nationality: string) {
        // 親クラスのconstructorメソッドを継承
        //親クラスから継承 super() で継承する
        super(name, age, nationality);
    }
    profile(): string {
        // ageはprivateなのでアクセスできないのでエラーになる
        // nationalityはprotectedなのでアクセスできる
        return `name: ${this.name}, nationality: ${this.nationality} `;
    }
}

//gettter setterについて
class Animal {
    //プロパティ
    private _petName: string;
    private _petAge: number;

    //constructorで初期化することで利用可能になる
    //インスタンス化で値を代入するときのキーの名付けの役割をはたしている
    constructor(petName: string, petAge: number) {
        this._petName = petName;
        this._petAge = petAge;
    }

    //Accessorについて
    //getter <-getterは、private protectedであっても値を確認することができる
    get getPetName(): string {
        return this._petName;
    }
    //setter <-setterは、private
    set setPetAge(changeAge: number) {
        this._petAge = changeAge;
    }

    //メソッド
    animalLog(): void {
        console.log(`pet name: ${this._petName} pet age: ${this._petAge}`);
    }
}

//便利なconstruvtorの書き方
class writeConstructor {
    //まとめて宣言可能
    //publicは、省略不可
    constructor(public name: string, protected age: number) {
        this.name = name;
        this.age = age;
    }

    //メソッド
    constructorLog(): void {
        console.log(`name: ${this.name} age: ${this.age}`);
    }
}

//static <-メンバ変数
//参考URL
//https://qiita.com/suema0331/items/d28b0e0fdfa1ba8572bb
//staticプロパティには、this.(プロパティ) のようにアクセスできない
//-> thisはクラスを元に作られたインスタンスを指すからです
class useStatic {
    //staticプロパティ
    static firstYear = 2021;
    protected employees: string[] = [];
    //初期化(thisは初期化がいらない)
    constructor(employees: string[]) {
        this.employees = employees;
    }

    //staticメソッド
    static createEmployee(name: string) {
        return { name: name };
    }
}

export { Person, Android, Animal, writeConstructor, useStatic };
