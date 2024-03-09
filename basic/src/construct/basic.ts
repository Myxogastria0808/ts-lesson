const objectSample = () => {
    //意味がないobject型
    // const a: object = {
    //     name: 'A',
    //     age: 20,
    // };
    //a.name <-これは呼び出せない

    //オブジェクトリテラル記法
    //良くない書き方
    //型エイリアスを用いて書くのがよい！
    let country: {
        language: string;
        name: string;
    } = {
        language: 'Japanese',
        name: 'Japan',
    };
    console.log('object sample1:', country.language);
    console.log('object sample1:', country.name);

    country = {
        language: 'English',
        name: 'U.S.',
    };
    console.log('object sample2:', country.language);
    console.log('object sample2:', country.name);

    //特別なプロパティを扱う
    //オプショナルプロパティ(?)とreadonly
    //オプショナルプロパティ(?) <-初期値の設定をしなくてもよいものにつける
    //readonly <-初期値から変更することができない
    const yukiosada: {
        age: number;
        lastName: string;
        readonly firstName: string;
        gender?: string;
    } = {
        age: 19,
        lastName: 'Osada',
        firstName: 'Yuki',
    };
    console.log('Yuki Osada`s propaty:', yukiosada);
    yukiosada.gender = 'male'; //<-後から定義できる
    yukiosada.lastName = 'Yamada';
    // yukiosada.firstName = 'Yusei'; <-readonlyは、これを許さない
    console.log('Yuki Yamada`s propaty:', yukiosada);

    //インデックスシグネチャ
    //柔軟な型定義
    //[keyの名前: キーの型(string or number)]: valueの型; <-これがインデックスシグネチャ
    const capital: {
        [countryNmae: string]: string;
    } = {
        Japan: 'Tokyo',
        Korea: 'Seoul',
    };
    //インデックスシグネチャは、型に従って要素を追加できる
    capital.China = 'Beijing';
    capital.Canada = 'Ottawa';
    console.log('Capital objects:', capital);
};

export default objectSample;
